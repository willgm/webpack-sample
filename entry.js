var _ = require("lodash");
var msg = require("./message.js");
var amd = require("./message-amd.js");
var jsx = require("./message.jsx");

require("./style.css");

console.log(_.capitalize(msg));
console.log(_.capitalize(amd));
console.log(_.capitalize(jsx));
