import { motion } from 'motion/react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { FADE_ANIMATION } from '../../shared';

type PropsBtnResetFieldProps = {
  handleResetField: (field: string) => void;
  className?: string;
};

export default function BtnResetField({
  handleResetField,
  className,
}: PropsBtnResetFieldProps) {
  return (
    <motion.button
      type='button'
      className={className}
      onClick={() => handleResetField('')}
      {...FADE_ANIMATION}
    >
      <RiCloseLargeFill size={16} color='#374f4c' />
    </motion.button>
  );
}
