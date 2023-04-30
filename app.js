const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs')

app.use(cors());
app.use(express.json());

app.post('/webhook', (req, res) => {
    const body = JSON.stringify(req.body)
    const tulis = fs.createWriteStream('log.txt');
    tulis.write(body);
    tulis.end()
})

app.listen(3000, () => {
    console.log('server running on port 3000')
})