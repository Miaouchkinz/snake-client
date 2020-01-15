const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // prints "you ded cuz you idle" when the server kicks you
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log('Connecting ...');
connect();