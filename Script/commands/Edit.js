const axios = require('axios');

const api1 = "https://edit-and-gen.onrender.com/gen";
const api2 = "https://tawsifs-gemini.onrender.com/nano";

module.exports.config = {
  name: "edit",
  version: "8.0",
  credits: "dipto + modified by shahadat",
  countDown: 5,
  hasPermssion: 0,
  category: "AI",
  commandCategory: "AI",
  description: "Edit images using multiple AI APIs (6 results)",
  guide: { en: "Reply to an image with {pn} [prompt]" }
};

async function fetchFromApi(apiUrl, responseType = 'stream') {
  try {
    const response = await axios.get(apiUrl, { responseType, validateStatus: () => true });
    if (response.headers['content-type']?.startsWith('image/')) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.error("API fetch error:", err.message);
    return null;
  }
}

async function handleEdit(api, event, args, commandName) {
  const url = event.messageReply?.attachments?.[0]?.url;
  const prompt = args.join(" ").trim() || "Enhance this image";

  if (!url) {
    return api.sendMessage("❌ Please reply to an image to edit it.", event.threadID, event.messageID);
  }

  try {
    let attachments = [];

    // === API 1 থেকে ৩টা ইমেজ ===
    for (let i = 1; i <= 3; i++) {
      const fullURL = `${api1}?prompt=${encodeURIComponent(prompt)}&image=${encodeURIComponent(url)}&n=${i}`;
      const img = await fetchFromApi(fullURL);
      if (img) attachments.push(img);
    }

    // === API 2 থেকে ৩টা ইমেজ ===
    for (let i = 1; i <= 3; i++) {
      const fullURL = `${api2}?prompt=${encodeURIComponent(prompt)}&url=${encodeURIComponent(url)}&n=${i}`;
      const img = await fetchFromApi(fullURL);
      if (img) attachments.push(img);
    }

    if (attachments.length > 0) {
      return api.sendMessage(
        { body: `✨ ${attachments.length} এডিটেড ইমেজ রেডি হয়েছে (prompt: "${prompt}")`, attachment: attachments },
        event.threadID,
        event.messageID
      );
    }

    return api.sendMessage("❌ No valid images returned from API.", event.threadID, event.messageID);

  } catch (error) {
    console.error("Edit command error:", error);
    return api.sendMessage("❌ Failed to process your request. Please try again later.", event.threadID, event.messageID);
  }
}

module.exports.run = async ({ api, event, args }) => {
  if (!event.messageReply) {
    return api.sendMessage("❌ Please reply to an image to edit it.", event.threadID, event.messageID);
  }
  await handleEdit(api, event, args, this.config.name);
};

module.exports.handleReply = async function ({ api, event, args }) {
  if (event.type === "message_reply") {
    await handleEdit(api, event, args, this.config.name);
  }
};