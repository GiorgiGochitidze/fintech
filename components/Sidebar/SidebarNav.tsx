const SidebarNav = () => {
  const baseClass =
    "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 w-full justify-start gap-3 outline-none";

  const activeClass = `${baseClass} bg-[#262626] text-white hover:bg-[#181818]`;
  const inactiveClass = `${baseClass} text-[#A1A1A1] hover:cursor-pointer hover:bg-[#181818] hover:text-white`;

  return (
    <nav className="w-full px-4 py-6">
      <ul className="space-y-2">
        <li>
          <button className={activeClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
            </svg>
            <span className="max-[600px]:hidden">Dashboard</span>
          </button>
        </li>
        <li>
          <button className={inactiveClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
              <path d="M12 17.5v-11"></path>
            </svg>
            <span className="max-[600px]:hidden">Transactions</span>
          </button>
        </li>
        <li>
          <button className={inactiveClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <span className="max-[600px]:hidden">Budgets</span>
          </button>
        </li>
        <li>
          <button className={inactiveClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            <span className="max-[600px]:hidden">Reports</span>
          </button>
        </li>
        <li>
          <button className={inactiveClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="max-[600px]:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
