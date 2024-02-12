const express = require("express");
const cors = require("cors");
const { DBConnection } = require("./config/DB.config");
const { ApiResponse } = require("./utils/apiResponse");
const routes = require("./routes/v1");
const { errorConverter, errorHandler } = require("./utils/error");
const { GenerateWhatsappSessionService } = require("./service");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let whatsappSession = null;

DBConnection.then(async () => {
  console.log("DB CONNECTED");
  const wpClient = await GenerateWhatsappSessionService(whatsappSession);
  wpClient.on("disconnected", (reason) => {
    console.log(reason);
    process.abort();
  });
  wpClient
    .initialize()
    .then(() => {
      console.log("WHATSAPP IS CONNECTED");
      whatsappSession = wpClient;
      app.listen(PORT, () => {
        console.log(`Server is running `);
      });
    })
    .catch((err) => {
      console.log("WHATSAPP CONNECTION ERROR", err.message);
    });
  // app.listen(PORT, () => {
  //   console.log(`Server is running `);
  // });
}).catch((err) => {
  console.log("DB ERROR", err.message);
});

// save whatsapp session
app.use((req, res, next) => {
  req.whatsappSession = whatsappSession;
  next();
});
app.use(ApiResponse);

app.use("/api/v1", routes);

// convert error to ApiError, if needed
app.use(errorConverter);
// handle error
app.use(errorHandler);
