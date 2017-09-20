# Twitterbot
A simple node js bot to tweet texts from a given file, picking 1 each time.

#Features
1. tweet one tweet on each execution
2. keep memory of the tweet texted in last run.
3. ensure the size of tweeted text is less than 140 or log and pick next tweet.
4. stop on EOF.
5. adding more tweets to the file automatically causes it to run next on next execution.

## Set up:
1. create a file called 'tweets.txt' in root of the project.
2. add your tweet text one on each new line.
3. ensure tweet text does not have newlines!
4. create a twitter app here: https://apps.twitter.com/app/new
5. update config file twitterConf.js with the values.
6. schedule to run.
