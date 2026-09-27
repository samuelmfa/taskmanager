import { logger } from "../logger/Logger";

export type BffQuery = Record<string, string | number | boolean | undefined>;

export interface BffRequestOptions extends RequestInit {
  query?: BffQuery;
}

export interface BffConnection {
  get<TResponse>(endpoint: string, options?: BffRequestOptions): Promise<TResponse>;
  post<TResponse, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options?: BffRequestOptions,
  ): Promise<TResponse>;
  put<TResponse, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options?: BffRequestOptions,
  ): Promise<TResponse>;
  delete<TResponse>(endpoint: string, options?: BffRequestOptions): Promise<TResponse>;
}

export class BffConnectionError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "BffConnectionError";
  }
}

class FetchBffConnection implements BffConnection {
  constructor(private readonly baseUrl: string) {}

  get<TResponse>(endpoint: string, options?: BffRequestOptions) {
    return this.request<TResponse>(endpoint, options);
  }

  post<TResponse, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options?: BffRequestOptions,
  ) {
    return this.request<TResponse>(endpoint, {
      ...options,
      method: "POST",
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  }

  put<TResponse, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options?: BffRequestOptions,
  ) {
    return this.request<TResponse>(endpoint, {
      ...options,
      method: "PUT",
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  }

  delete<TResponse>(endpoint: string, options?: BffRequestOptions) {
    return this.request<TResponse>(endpoint, { ...options, method: "DELETE" });
  }

  private async request<TResponse>(
    endpoint: string,
    options: BffRequestOptions = {},
  ): Promise<TResponse> {
    const { query, headers, ...requestInit } = options;
    const origin =
      typeof window === "undefined" ? "http://localhost" : window.location.origin;
    const baseUrl = new URL(
      this.baseUrl.endsWith("/") ? this.baseUrl : `${this.baseUrl}/`,
      origin,
    );
    const url = new URL(endpoint.replace(/^\/+/, ""), baseUrl);

    Object.entries(query ?? {}).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.set(key, String(value));
    });

    const response = await fetch(url, {
      ...requestInit,
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
    });

    const responseData =
      response.status === 204 ? undefined : await response.json();

    if (!response.ok) {
      logger.error("BFF request failed.", {
        method: requestInit.method ?? "GET",
        endpoint: url.toString(),
        status: response.status,
        data: responseData,
      });
      throw new BffConnectionError(
        `BFF request failed with status ${response.status}.`,
        response.status,
      );
    }

    logger.info("BFF response received.", {
      method: requestInit.method ?? "GET",
      endpoint: url.toString(),
      status: response.status,
      data: responseData,
    });

    return responseData as TResponse;
  }
}

export const BffConnectionFactory = {
  create(baseUrl = process.env.NEXT_PUBLIC_BFF_URL ?? "/api"):
    BffConnection {
    return new FetchBffConnection(baseUrl);
  },
};