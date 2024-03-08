import express from 'express';

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});
