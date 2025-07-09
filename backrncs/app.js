const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const logger = require('morgan');

require("dotenv").config();  // .env
const cors = require('cors');

const indexRouter = require('./routes/index');

const app = express();

app.use("/", indexRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})