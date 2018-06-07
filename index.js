'use strict';

const { Client } = require('pg');

const conn = process.env.CONNECTION_STRING;


module.exports.handler = (event, context, callback) => {
  console.log("Initiating client");

  const client = new Client(conn);
  client.connect();

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

    client.end();
  });

};
