import { motion } from 'motion/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  BUTTON_PRIMARY_ANIMATION,
  DOWN_ANIMATION,
  useStore,
} from '../../../shared';
import BtnResetField from '../BtnResetField';
import css from './ContactForm.module.css';

interface InterfaceFormContact {
  fullName: string;
  phone: string;
  email: string;
  message?: string;
}

export default function ContactForm() {
  const { closeModal } = useStore();

  const storedData = localStorage.getItem('contactFormData');
  const defaultValues = storedData ? JSON.parse(storedData) : {};

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InterfaceFormContact>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<InterfaceFormContact> = data => {
    console.table(data);
    localStorage.removeItem('contactFormData');
    closeModal();
    toast.success('Your form has been successfully submitted!');
  };

  const handleResetField = (field: keyof InterfaceFormContact) => {
    setValue(field, '');
    const storedData = JSON.parse(
      localStorage.getItem('contactFormData') || '{}'
    );
    delete storedData[field];
    localStorage.setItem('contactFormData', JSON.stringify(storedData));
  };

  watch(values => {
    localStorage.setItem('contactFormData', JSON.stringify(values));
  });

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className={css.form}
      {...DOWN_ANIMATION}
    >
      <label>
        <span>Full Name</span>
        <input
          type='text'
          {...register('fullName', {
            required: 'Full Name is required',
          })}
          placeholder='John Doe'
        />
        {errors.fullName && (
          <p className={css.error}>{errors.fullName.message}</p>
        )}
        {watch().fullName && (
          <BtnResetField
            handleResetField={() => handleResetField('fullName')}
            className={css.btnReset}
          />
        )}
      </label>
      <label>
        <span>Email</span>
        <input
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          })}
          placeholder='john.doe@example.com'
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
        {watch().email && (
          <BtnResetField
            handleResetField={() => handleResetField('email')}
            className={css.btnReset}
          />
        )}
      </label>
      <label>
        <span>Message</span>
        <textarea
          {...register('message')}
          placeholder='Hello, I would like to know more about your services.'
        />
        {errors.message && (
          <p className={css.error}>{errors.message.message}</p>
        )}
        {watch().message && (
          <BtnResetField
            handleResetField={() => handleResetField('message')}
            className={css.btnReset}
          />
        )}
      </label>
      <motion.button
        type='submit'
        className={css.button}
        {...BUTTON_PRIMARY_ANIMATION}
      >
        Send
      </motion.button>
    </motion.form>
  );
}
