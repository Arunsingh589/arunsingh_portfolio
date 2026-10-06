import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string, type: 'error' | 'success' } | null>(null);

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message: string, type: 'error' | 'success') => {
    setToast({ message, type });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();

    // Empty field validation
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill all the fields.", "error");
      return;
    }

    setLoading(true);

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.accessToken) {
      setLoading(false);
      showToast('Contact form is not configured yet.', "error");
      return;
    }

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          showToast('Thank you. I will get back to you as soon as possible.', "success");
          setForm(INITIAL_STATE);
        },
        error => {
          setLoading(false);
          console.error(error);
          showToast(`Something went wrong. Please email me at ${config.html.email}.`, "error");
        }
      );
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row relative`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />
        <p className="text-secondary mt-4 text-[16px]">
          Open to full-time roles and freelance projects. Email me directly at{' '}
          <a href={`mailto:${config.html.email}`} className="text-white underline-offset-4 hover:underline">
            {config.html.email}
          </a>{' '}
          or use the form below.
        </p>
        <div className="mt-4 flex gap-5 text-[15px] font-medium">
          <a href={config.html.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF]">
            LinkedIn ↗
          </a>
          <a href={config.html.github} target="_blank" rel="noreferrer" className="text-white hover:text-[#915EFF]">
            GitHub ↗
          </a>
        </div>

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map(input => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === 'message' ? 'textarea' : 'input';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === 'email' ? 'email' : 'text'}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === 'message' && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-[700px] xl:flex-1 xl:self-center"
      >
        <EarthCanvas />
      </motion.div>

      {/* Premium Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-4 left-4 z-[100] sm:left-auto sm:right-10 sm:bottom-10 sm:min-w-[300px]"
          >
            <div className={`green-pink-gradient p-[1px] rounded-[10px] w-full shadow-card`}>
              <div className="bg-tertiary px-6 py-4 rounded-[10px] flex items-center justify-between border border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-[20px]">
                    {toast.type === 'error' ? '⚠️' : '✨'}
                  </span>
                  <p className="text-white text-[14px] font-medium m-0">
                    {toast.message}
                  </p>
                </div>
                <button
                  onClick={() => setToast(null)}
                  aria-label="Dismiss notification"
                  className="text-secondary hover:text-white transition-colors text-xl font-bold ml-4"
                >
                  &times;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
