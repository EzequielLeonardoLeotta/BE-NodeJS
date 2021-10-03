require('dotenv').config();
const server = require('./server/index');

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
