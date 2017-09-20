var Twit = require('twit')
var fs = require("fs");
var twitterConf = require("./twitterConf");

var T = new Twit(twitterConf)

var counter = parseInt(fs.readFileSync("./counter", "utf8"), 10);
var tweetsfile = fs.readFileSync("./tweets.txt", "utf8").split(/\n/gi);
var tweet = tweetsfile[counter];

if (!tweet) {
    console.log("EOF Reached..")
    return;
}

while (tweet.length > 140) {
    console.log("skipping tweetId: " + counter + ", tweet text: " + tweet)
    counter++;
    tweet = tweetsfile[counter];
}

T.post('statuses/update', { status: tweet }, function(err, data, response) {
    if (err) {
        console.log("failed: ", err);
    }

    console.log("tweeted: ", tweet);
    fs.writeFileSync("./counter", ++counter, "utf8");
})