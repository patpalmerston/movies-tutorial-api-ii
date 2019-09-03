const server = require('./server.js')
// import { server } from './server.js'
// const { server } = require('./server.js')

const port = 6000;
server.listen(port, () => console.log(`\n API on port ${port} \n`));
