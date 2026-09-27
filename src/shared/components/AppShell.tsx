"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";

type AppShellProps = { children: ReactNode };

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="app-shell">
      <aside className="sidebar d-none d-lg-flex flex-column">
        <div className="brand-mark mb-5">
          <Link
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            href="/"
          >
            <span className="brand-icon"><i className="bi bi-check2" aria-hidden="true" /></span>
            <span>tarefa<span className="text-primary">.</span></span>
          </Link>
        </div>
        <nav className="nav flex-column gap-2" aria-label="Navegação principal">
          <Link
            className={`nav-link ${isActive("/tasks") ? "active" : ""}`}
            href="/tasks"
          >
            <i className="bi bi-list-check" aria-hidden="true" /> Tarefas
          </Link>
          <Link
            className={`nav-link ${isActive("/public") ? "active" : ""}`}
            href="/public"
          >
            <i className="bi bi-globe2" aria-hidden="true" /> Explorar públicas
          </Link>
        </nav>
        <div className="sidebar-footer mt-auto">
          <div className="user-chip mt-4">
            <div className="avatar">TD</div>
            <div>
              <strong>Meu espaço</strong>
              <small>Conta Google</small>
            </div>
          </div>
          <form action="/api/auth/logout" method="post" className="logout-form">
            <button className="nav-link" type="submit"><i className="bi bi-box-arrow-right" aria-hidden="true" /> Sair da conta</button>
          </form>
        </div>
      </aside>
      <main className="main-content">
        <TopBar />
        {children}
      </main>
    </div>
  );
}
