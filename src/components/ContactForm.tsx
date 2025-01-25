import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sendToTelegram } from '../utils/telegram';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await sendToTelegram(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('contact.form.name')}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 transition-all"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('contact.form.email')}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 transition-all"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder={t('contact.form.message')}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 transition-all"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-all ${
          status === 'loading' 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
        }`}
      >
        {status === 'loading' ? (
          t('contact.form.sending')
        ) : status === 'success' ? (
          t('contact.form.sent')
        ) : status === 'error' ? (
          t('contact.form.error')
        ) : (
          <>
            {t('contact.form.submit')}
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}