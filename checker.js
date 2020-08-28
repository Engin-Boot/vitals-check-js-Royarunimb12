const expect = require('chai').expect;
var checkall=require("./Conditions.js").checkall;

function vitalsAreOk(bpm, spo2, respRate) {
  return checkall(bpm,spo2,respRate);
    
}

let Bp_limits = [70, 150];
let spo2_limits = [30 , 100];
let respRate_limits = [30 , 95]

function isBpOk(bpm)
{
    return isVital_LimitsOk(bpm, Bp_limits[0], Bp_limits[1]);
}
function isSpo2Ok(spo2)
{
    return isVital_LimitsOk(spo2, spo2_limits[0], spo2_limits[1])
}
function isRespRateOk(respRate)
{
    return isVital_LimitsOk(respRate, respRate_limits[0], respRate_limits[1])
}
function isVital_LimitsOk(val , low, high){
   return (val >= low && val <= high)
}
       
expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
