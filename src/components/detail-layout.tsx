import { motion } from "framer-motion";
import { FreeForm } from "./free-form";

interface DetailLayoutProps {
  title: string;
}

export function DetailLayout({ title }: DetailLayoutProps) {
  return (
    <motion.div 
        key={title}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        >
      <div className="px-4 py-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <FreeForm />
      </div>
    </motion.div>
  );
}
