module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Islamick post rendom by caption",
  commandCategory: "poster",
  usages: "/",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 �𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 �𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 �𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 �𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 �𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 �𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 �𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 �𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒",
    "🌼 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗗𝗲𝗮𝗿 𝗠𝗲𝗺𝗯𝗲𝗿𝘀! 🌼\n💖 𝗚𝗿𝗮𝘁𝗲𝗳𝘂𝗹 𝘁𝗼 𝗵𝗮𝘃𝗲 𝗺𝘆 𝗯𝗼𝘁 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗴𝗿𝗼𝘂𝗽!\n\n🤩 𝗛𝗼𝗽𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗵𝗲𝗿𝗲 𝗲𝗻𝗷𝗼𝘆𝘀 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗳𝘂𝗹𝗹𝗲𝘀𝘁!\n👇 𝗨𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗲𝘅𝗽𝗹𝗼𝗿𝗲 𝗳𝗲𝗮𝘁𝘂𝗿𝗲𝘀:\n\n🔎 ☞help – 𝗚𝗲𝘁 𝗳𝘂𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗹𝗶𝘀𝘁\n💡 ☞bot – 𝗟𝗲𝗮𝗿𝗻 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗯𝗼𝘁\nℹ️ ☞info – 𝗠𝗼𝗿𝗲 𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝗹𝗮𝘁𝗲𝗱 𝗶𝗻𝗳𝗼\n\n👤 𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: 𝐌𝐃 𝐏𝐀𝐑𝐕𝐄𝐒"
  ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/qTTmhRn.jpegqTTmhRn.jpeg",
"https://i.imgur.com",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
"https://i.imgur.com/qTTmhRn.jpeg",
];
	 var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cyber.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cyber.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cyber.jpg")).on("close",() => callback());
   };