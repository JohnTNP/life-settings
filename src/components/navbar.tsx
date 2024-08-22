import { useAppState } from "@/providers/app-state-provider";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { ModeToggle } from "./theme-mode-toggle";

export default function Navbar() {
  const { state } = useAppState();

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <span className="ml-2 text-xl font-semibold flex gap-4 items-center">
        <motion.div
          key={state.selectedSetting.name}
          transition={{
            duration: 0.5,
          }}
          animate={state.updateDirection === 'up' ? { rotate: -180 } : { rotate: 180 }}
        >
          <Settings />
        </motion.div>
        Life Settings
      </span>
      <ModeToggle />
    </header>
  );
}
