const { TwitterApi } = require('twitter-api-v2');
// OAuth 1.0a (User context)
const userClient = new TwitterApi({
    appKey: 'sB2IpshjE0QPFZ7nWw1a3dasd',
    appSecret: 'vg004D1foEFpnLKqPNCLdhIwVxrJY910SyIbSdtce5or4xbBXh',
    // Following access tokens are not required if you are
    // at part 1 of user-auth process (ask for a request token)
    // or if you want a app-only client (see below)
  });
  
  // OAuth2 (app-only or user context)
  // Create a client with an already known bearer token
  const appOnlyClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAACOCbgEAAAAAJO%2BqfZ8HOj0A45HngboHHFMnhrc%3DWOVxcKjOaoIhn2POV9CSjyVUke1cwXwA9GcoSDlTUWV7p6LCGD');
  // OR - you can also create a app-only client from your consumer keys -



class Tweets {
    async index(req, res){
        res.render("index", {title: "Globe"});
    }
    async getTrends(req, res){
        const appOnlyClientFromConsumer = await userClient.appLogin();
        const currentTrends = await userClient.v1.trendsAvailable();
        for(const { country, parentid } of currentTrends){
            if(req.body.name === country){
                // const trendsOfCountry = await userClient.v1.trendsByPlace(1);
                console.log(country);
            }
            // console.log('Trend', name, 'is *trendy* in', country);
        }
        // Trends of New York

        // console.log(trendsOfNy);
        // for (const { trends, created_at } of trendsOfNy) {
        //     for (const trend of trends) {
        //         console.log('Tren    ', trend.name, 'created at', created_at);
        //     }
        // }


    }
}

module.exports = new Tweets;