// config.js

const approot = require('app-root-path');
const configfile = require('./config.json');
const runmode = configfile.runmode;
const config = configfile[runmode];

console.info('*************** config *****************');
console.info(`* runmode [dev/prod] : ${runmode}`);
console.info(`* debug_level : ${config.DEBUG_LEVEL}`);
console.info(`* express_port : ${config.EXPRESS_PORT}`);
console.info('****************************************');



module.exports = config;
