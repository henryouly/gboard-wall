'use strict';

const secret = require('../secret');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  var Twitter = require('twitter');
  var client = new Twitter({
    consumer_key: secret.consumer_key,
    consumer_secret: secret.consumer_secret,
    access_token_key: secret.access_token_key,
    access_token_secret: secret.access_token_secret
  });
  var params = {
    q: 'gboard',
    count: 100,
    result_type: 'recent',
    lang: 'en'
  };
  client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      res.render('index', {
        title: 'Tweets - Gboard',
        tweets: tweets
      });
    } else {
      res.status(403).send(error).end();
    }
  });
});

module.exports = router;
