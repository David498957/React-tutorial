import React from "react";

const Header = ({ logoName }: { logoName: string }) => {
  return (
    <header className="w-full border-b-2 border-dashed bg-white border-gray-200 py-4 px-6 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
          A
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          {logoName}
        </span>
      </div>
      <nav className="flex items-center gap-4 text-sm font-medium">
        <a
          href="#help"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          Help
        </a>
        <a
          href="#privacy"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          Privacy
        </a>
      </nav>
    </header>
  );
};

export default Header;
