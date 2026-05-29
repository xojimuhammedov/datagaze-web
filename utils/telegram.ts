export const sendTelegramMessage = async (text: string) => {
  const BOT_TOKEN = "7631398922:AAGKOlveMCNStM3PJHaZ1i3CeHd0zbw47VQ";
  const CHAT_ID = "-1002701060935";
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return false;
  }
};
