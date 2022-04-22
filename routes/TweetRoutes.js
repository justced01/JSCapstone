const Express = require("express");
const Router = Express.Router();
const Tweets = require("../app/controllers/Tweets");

Router.get("/", Tweets.index);
Router.post("/getTrends", Tweets.getTrends);

module.exports = Router;