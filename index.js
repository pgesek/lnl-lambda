'use strict';

const { Client } = require('pg');

const conn = process.env.CONNECTION_STRING;
let client = undefined;

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  console.log("Processing request");

  if (!client) {
    console.log("Initiating db connection");

    client = new Client(conn);
    client.connect();
  }

  if (event.headers) {
    console.log(event.headers);
  }

  client.query('SELECT name FROM person', (err, res) => {
    if (err) {
      callback(err);
    } else {
      let data = JSON.stringify(res.rows);

      let response = {
        statusCode: 200,
        body: data
      };

      callback(null, response);
    }
  });

};
