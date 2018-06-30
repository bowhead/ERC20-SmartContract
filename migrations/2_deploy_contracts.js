
var AHTToken = artifacts.require("./AHTToken.sol");
//var multiSend = artifacts.require("./MultiTransfer.sol");
module.exports = function(deployer) {
   deployer.deploy(AHTToken);
  //deployer.deploy(multiSend,"0x9475d96d175f13dcc5d9d9ecf183071a1999386d");
};