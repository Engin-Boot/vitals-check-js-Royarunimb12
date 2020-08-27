const expect = require('chai').expect;
var checkall=require("./Conditions.js").checkall;

function vitalsAreOk(bpm, spo2, respRate) {
  if(checkall(bpm,spo2,respRate))
    return true;
  return false;
    
}
       
expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
