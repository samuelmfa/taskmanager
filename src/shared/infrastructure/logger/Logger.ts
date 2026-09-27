export type LoggerContext = Record<string, unknown>;

class Logger {
  info(message: string, context?: LoggerContext) {
    console.info(`[INFO] ${message}`, context ?? "");
  }

  error(message: string, context?: LoggerContext) {
    console.error(`[ERROR] ${message}`, context ?? "");
  }
}

export const logger = new Logger();