const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();
require("./config/mongoose.config");
// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());

// Routes
require("./routes/user.routes")(app);

require("./routes/Players.route")(app);
require("./routes/Teams.route")(app);
require("./routes/Sponsors.route")(app);
require("./routes/Packages.route")(app);
require("./routes/ContactInfo.route")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
