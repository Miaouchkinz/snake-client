const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  //Message to tell you once you've connected
  conn.on('connect', function() {
    console.log('Successfully connected to game server.');
  });
  // Send name to server
  conn.on('connect', function() {
    conn.write('Name: GAB');
  });
  // prints "you ded cuz you idle" when the server kicks you
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };