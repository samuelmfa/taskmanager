import { getCurrentFormattedDate } from "../utils/date";

export function TopBar() {
  const formattedDate = getCurrentFormattedDate();

  return (
    <header className="topbar d-flex justify-content-between align-items-center">
      <div className="d-lg-none brand-mark">
        <span className="brand-icon"><i className="bi bi-check2" aria-hidden="true" /></span> tarefa.
      </div>

      <div className="ms-auto d-flex align-items-center gap-3">
        <span className="today-label">{formattedDate}</span>
      </div>
    </header>
  );
}
