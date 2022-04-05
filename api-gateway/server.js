const express = require('express')
const {setupLogging} = require("./logging");
const {ROUTES} = require("./routes");
const {setupProxies} = require("./proxy");
const {setupAuth} = require("./auth");
const {setupRateLimit} = require("./ratelimit");
const {setupCreditCheck} = require("./creditcheck");

const app = express()
const port = 3000;

setupLogging(app);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})