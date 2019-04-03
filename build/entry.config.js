
const pageArr = require('./base/pageArr');
const {resolve} = require('path');
const dir = require('./base/dir');

const configEntry = {};

pageArr.forEach((page) => {
  configEntry[page] = resolve(dir.pageDir, page + '/index');
});

module.exports = configEntry;
