import { ModeToggle } from "./theme-mode-toggle";
import { Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <span className="ml-2 text-xl font-semibold flex gap-4 items-center"><Settings className="animate-spin duration-2000"/>Life Settings</span>
      <ModeToggle />
    </header>
  );
}
