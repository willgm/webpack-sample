var _ = require("lodash");
var msg = require("./message.js");
var amd = require("./message-amd.js");

var Backbone = require("backbone");

require("./style.css");

console.log(_.capitalize(msg));
console.log(_.capitalize(amd));
