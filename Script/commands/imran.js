module.exports.config = {
 'name': "imran",
 'version': "1.0.0",
 'hasPermssion': 2,
 'credits': "Shaon modify Sahu",
 'description': "imran murgi",
 'commandCategory': "admin",
 'usages': "imran video",
 'cooldowns': 2,
 'dependencies': {
 'request': '',
 'fs-extra': '',
 'axios': ''
 }
};

module.exports.run = async function({
 api,
 event,
 args,
 client,
 Users,
 Threads,
 __GLOBAL,
 Currencies
}) {
 const request = global.nodemodule.request;
 const fs = global.nodemodule["fs-extra"];
 
 var videoLinks = [
 "https://i.imgur.com/EBsU8gg.mp4",
"https://i.imgur.com/aopfSKO.mp4",
"https://i.imgur.com/pHwNmNG.mp4",
"https://i.imgur.com/TDfk8j0.mp4",
  "https://i.imgur.com/OaLshnA.mp4"
 ];

 var sendVideo = () => api.sendMessage({
 'body': "𝐤𝐢𝐫𝐞 𝐞𝐭𝐢𝐦 𝐢𝐦𝐫𝐚𝐧 𝐞𝐢 𝐧𝐞 𝐭𝐨𝐫 𝐯𝐢𝐝𝐞𝐨",
 'attachment': fs.createReadStream(__dirname + "/cache/15.mp4")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));

 return request(encodeURI(videoLinks[Math.floor(Math.random() * videoLinks.length)]))
 .pipe(fs.createWriteStream(__dirname + "/cache/15.mp4"))
 .on("close", () => sendVideo());
};
