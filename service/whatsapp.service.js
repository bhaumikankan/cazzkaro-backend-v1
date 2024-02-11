module.exports = class WhatsappService {
  static async sendMessage(
    whatsappSession,
    payload = { phoneNumber: "", message: "" }
  ) {
    const client = whatsappSession;
    if (client) {
      const phoneNumber = payload?.phoneNumber.substring(1);
      const phoneNumber_details = await client.getNumberId(phoneNumber);

      if (phoneNumber_details) {
        const sendMessageData = await client.sendMessage(
          phoneNumber_details._serialized,
          payload?.message
        );
        return sendMessageData;
      } else {
        throw new Error(
          `${phoneNumber} Mobile number is not registered in whatsapp`
        );
      }
    } else {
      throw new Error("Something went wrong");
    }
  }
};
