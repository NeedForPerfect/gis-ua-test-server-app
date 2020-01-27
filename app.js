const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('We are on home');
});

console.log('app listen 3000 port');
app.listen(3000);