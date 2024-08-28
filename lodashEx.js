var _ = require('lodash');

var arr = [12,23,12,'harsh','ram','harsh',43,54,23]

var filter = _.uniq(arr);
console.log(filter);