const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let arr = members.filter(name => typeof name === "string" );
  return arr.map(name => name.toUpperCase().trim().substring(0,1)).sort().join("");
};
