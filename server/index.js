const approot =  require('app-root-path');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const configfile = require('../config/config.json');
const runmode = configfile.runmode;
const config = configfile[runmode];

const port = config.EXPRESS_PORT;

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.sendFile(approot + '/build/index.html');
});

// app.use(basicAuth({
//   users: { 'admin': 'admin123!' },
//   challenge: true
// }))
app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log(`listening on port ${port}!`);
});
