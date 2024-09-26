import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 items-center w-full flex h-20 bg-background pl-96 border-b">
      <div className="ml-auto px-5">
        <ThemeToggle />
      </div>
    </nav>
  );
}
