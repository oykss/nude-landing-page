import { motion } from 'motion/react';
import css from './Logo.module.css';

export default function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      whileTap={{ opacity: 0.9, scale: 0.95 }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
    >
      <a href="/" className={css.logo}>
        Nude<span className={css.accent}>&#174;</span>
      </a>
    </motion.div>
  );
}
