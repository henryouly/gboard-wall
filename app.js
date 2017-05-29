/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
const express = require('express');
const secret = require('./secret.js');

const app = express();

app.get('/', (req, res) => {
  var Twitter = require('twitter');
  var client = new Twitter({
    consumer_key: secret.consumer_key,
    consumer_secret: secret.consumer_secret,
    access_token_key: secret.access_token_key,
    access_token_secret: secret.access_token_secret
  });
  var params = {q: 'gboard'};
  client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      res.status(200).send(showTweets(tweets)).end();
    } else {
      res.status(403).send(error).end();
    }
  });
});

app.use(express.static('static'));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

var showTweets = function(tweets) {
  var output = "";
  tweets.statuses.forEach(function(status) {
    console.log(status);
    output = output + '<img src="' + status.user.profile_image_url + '"/>'
      + status.user.screen_name + ": "
      + status.text + '<br>\n';
  });
  return output;
}
// [END app]
