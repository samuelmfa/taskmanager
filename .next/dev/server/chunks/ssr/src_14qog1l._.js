module.exports = [
"[project]/src/app/public/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PublicTasksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$infrastructure$2f$bff$2f$BffConnectionFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/infrastructure/bff/BffConnectionFactory.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const bff = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$infrastructure$2f$bff$2f$BffConnectionFactory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BffConnectionFactory"].create();
function PublicTasksPage() {
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bff.get("/tasks/public").then((response)=>setTasks(response.tasks)).catch(()=>setHasError(true)).finally(()=>setIsLoading(false));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "public-tasks-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "landing-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "landing-brand",
                        href: "/",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-symbol",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "bi bi-check2",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/public/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 81
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 25,
                                columnNumber: 50
                            }, this),
                            "tarefa",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 25,
                                columnNumber: 143
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "landing-nav-cta",
                        href: "/signup",
                        children: [
                            "Criar meu espaço ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-arrow-up-right",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 26,
                                columnNumber: 75
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/public/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "public-tasks-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "landing-kicker",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 29,
                                columnNumber: 39
                            }, this),
                            " FEITO PARA CONSTRUIR JUNTO"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Ideias compartilhadas, progresso coletivo."
                    }, void 0, false, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "As tarefas que as pessoas escolheram tornar públicas aparecem aqui."
                    }, void 0, false, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "public-feed-state",
                        children: "Carregando tarefas compartilhadas..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 32,
                        columnNumber: 22
                    }, this) : null,
                    hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "public-feed-state",
                        role: "alert",
                        children: "Não foi possível carregar o mural. Confira se o backmock está rodando."
                    }, void 0, false, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this) : null,
                    !isLoading && !hasError && tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "public-empty",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-globe2",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 34,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "O mural está começando."
                            }, void 0, false, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 34,
                                columnNumber: 137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Volte em breve para descobrir novos projetos."
                            }, void 0, false, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 34,
                                columnNumber: 177
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 34,
                        columnNumber: 58
                    }, this) : null,
                    tasks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "public-task-items",
                        children: tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `bi ${task.completed ? "bi-check-circle-fill" : "bi-circle"}`,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/public/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 102
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: task.completed ? "done" : "",
                                        children: task.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/public/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 200
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "COMPARTILHADA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/public/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 266
                                    }, this)
                                ]
                            }, task.id, true, {
                                fileName: "[project]/src/app/public/page.tsx",
                                lineNumber: 35,
                                columnNumber: 84
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/public/page.tsx",
                        lineNumber: 35,
                        columnNumber: 29
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/public/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/public/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/shared/infrastructure/bff/BffConnectionFactory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BffConnectionError",
    ()=>BffConnectionError,
    "BffConnectionFactory",
    ()=>BffConnectionFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$infrastructure$2f$logger$2f$Logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/infrastructure/logger/Logger.ts [app-ssr] (ecmascript)");
;
class BffConnectionError extends Error {
    status;
    constructor(message, status){
        super(message), this.status = status;
        this.name = "BffConnectionError";
    }
}
class FetchBffConnection {
    baseUrl;
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    get(endpoint, options) {
        return this.request(endpoint, options);
    }
    post(endpoint, body, options) {
        return this.request(endpoint, {
            ...options,
            method: "POST",
            body: body === undefined ? undefined : JSON.stringify(body)
        });
    }
    put(endpoint, body, options) {
        return this.request(endpoint, {
            ...options,
            method: "PUT",
            body: body === undefined ? undefined : JSON.stringify(body)
        });
    }
    delete(endpoint, options) {
        return this.request(endpoint, {
            ...options,
            method: "DELETE"
        });
    }
    async request(endpoint, options = {}) {
        const { query, headers, ...requestInit } = options;
        const origin = ("TURBOPACK compile-time truthy", 1) ? "http://localhost" : "TURBOPACK unreachable";
        const baseUrl = new URL(this.baseUrl.endsWith("/") ? this.baseUrl : `${this.baseUrl}/`, origin);
        const url = new URL(endpoint.replace(/^\/+/, ""), baseUrl);
        Object.entries(query ?? {}).forEach(([key, value])=>{
            if (value !== undefined) url.searchParams.set(key, String(value));
        });
        const response = await fetch(url, {
            ...requestInit,
            headers: {
                ...options.body ? {
                    "Content-Type": "application/json"
                } : {},
                ...headers
            }
        });
        const responseData = response.status === 204 ? undefined : await response.json();
        if (!response.ok) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$infrastructure$2f$logger$2f$Logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].error("BFF request failed.", {
                method: requestInit.method ?? "GET",
                endpoint: url.toString(),
                status: response.status,
                data: responseData
            });
            throw new BffConnectionError(`BFF request failed with status ${response.status}.`, response.status);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$infrastructure$2f$logger$2f$Logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logger"].info("BFF response received.", {
            method: requestInit.method ?? "GET",
            endpoint: url.toString(),
            status: response.status,
            data: responseData
        });
        return responseData;
    }
}
const BffConnectionFactory = {
    create (baseUrl = process.env.NEXT_PUBLIC_BFF_URL ?? "/api") {
        return new FetchBffConnection(baseUrl);
    }
};
}),
"[project]/src/shared/infrastructure/logger/Logger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logger",
    ()=>logger
]);
class Logger {
    info(message, context) {
        console.info(`[INFO] ${message}`, context ?? "");
    }
    error(message, context) {
        console.error(`[ERROR] ${message}`, context ?? "");
    }
}
const logger = new Logger();
}),
];

//# sourceMappingURL=src_14qog1l._.js.map