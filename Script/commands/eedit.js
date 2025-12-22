const axios = require("axios");
const fs = require("fs");
const path = require("path");

const api1 = "https://edit-and-gen.onrender.com/gen";
const api2 = "https://tawsifs-gemini.onrender.com/nano";

module.exports.config = {
  name: "eedit",
  version: "1.0.0",
  permission: 0,
  credits: "shahadat",
  description: "Edit image using AI",
  usages: "eedit <prompt> (reply image)",
  cooldowns: 10
};

module.exports.run = async function ({ api, event, args }) {
  if (!event.messageReply || !event.messageReply.attachments) {
    return api.sendMessage(
      "❌ একটি ছবিতে reply দিতে হবে",
      event.threadID,
      event.messageID
    );
  }

  const img = event.messageReply.attachments[0];
  if (!img || !img.url) {
    return api.sendMessage(
      "❌ ছবি পাওয়া যায়নি",
      event.threadID,
      event.messageID
    );
  }

  const prompt = args.join(" ") || "Enhance this image";
  api.setMessageReaction("⏳", event.messageID, () => {}, true);

  try {
    let buffer = null;

    // API 1
    const url1 =
      api1 +
      "?prompt=" + encodeURIComponent(prompt) +
      "&image=" + encodeURIComponent(img.url);

    try {
      const r1 = await axios.get(url1, {
        responseType: "arraybuffer",
        validateStatus: () => true
      });
      if (r1.headers["content-type"]?.startsWith("image/")) {
        buffer = r1.data;
      }
    } catch (_) {}

    // API 2 fallback
    if (!buffer) {
      const url2 =
        api2 +
        "?prompt=" + encodeURIComponent(prompt) +
        "&url=" + encodeURIComponent(img.url);

      const r2 = await axios.get(url2, {
        responseType: "arraybuffer",
        validateStatus: () => true
      });
      if (r2.headers["content-type"]?.startsWith("image/")) {
        buffer = r2.data;
      }
    }

    if (!buffer) {
      return api.sendMessage(
        "❌ ইমেজ তৈরি করা যায়নি",
        event.threadID,
        event.messageID
      );
    }

    const cacheDir = path.join(__dirname, "cache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const filePath = path.join(cacheDir, Date.now() + ".png");
    fs.writeFileSync(filePath, Buffer.from(buffer));

    api.sendMessage(
      {
        body: "✅ ইমেজ এডিট সম্পন্ন",
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => {
        try { fs.unlinkSync(filePath); } catch (_) {}
      },
      event.messageID
    );
  } catch (e) {
    console.log("EEDIT ERROR:", e.message);
    api.sendMessage(
      "❌ Error হয়েছে",
      event.threadID,
      event.messageID
    );
  }
};
