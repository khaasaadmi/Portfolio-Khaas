export const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
export const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const sendToTelegram = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const text = `
🔔 New Contact Form Submission

👤 Name: ${data.name}
📧 Email: ${data.email}
💬 Message: ${data.message}
  `.trim();

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message to Telegram');
  }

  return response.json();
};