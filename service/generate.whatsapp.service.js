const path = require("path");
const { Client, RemoteAuth, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
require("dotenv").config();

const generateWhatsappSession = async (whatsappSession = null) => {
  const prevSession = whatsappSession;

  if (prevSession) {
    try {
      await prevSession.destroy();
      whatsappSession = null;
      console.log("prev connection close");
    } catch (err) {
      console.log(err.message);
    }
  }

  const client = new Client({
    puppeteer: {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
    // authStrategy: new RemoteAuth({
    //   store: whatsappStore,
    //   clientId: clientId,
    //   backupSyncIntervalMs: 300000,
    // }),
    authStrategy: new LocalAuth({
      dataPath: path.resolve(__dirname, "../whatsapp-auth"),
    }),
  });

  whatsappSession = client;

  client.on("loading_screen", (percent, msg) => {
    console.log(percent, msg);
  });

  client.on("auth_failure", (msg) => {
    console.log(msg);
  });

  client.on("qr", (qr) => {
    console.log("QR RECEIVED", qr);
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", async () => {
    console.log("Client is ready!");
    whatsappSession = client;
  });

  // client.on("remote_session_saved", async () => {
  //   console.log("remote session saved");
  //   whatsappSession = client;
  // });

  // client.on("message", (message) => {
  //   console.log(message);
  // });

  // client
  //   .initialize()
  //   .then((res) => {
  //     console.log("done");
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // client
  //   .initialize()
  //   .then((res) => {
  //     return { success: true };
  //   })
  //   .catch((err) => {
  //     return { success: false };
  //   });
  return client;
};

module.exports = generateWhatsappSession;
