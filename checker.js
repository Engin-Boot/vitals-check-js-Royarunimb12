const expect = require('chai').expect;
var BPMinRange=require("./Conditions.js").BPMinRange;
var SPO2inRange=require("./Conditions.js").SPO2inRange;
var respRateinRange=require("./Conditions.js").respRateinRange;

function vitalsAreOk(bpm, spo2, respRate) {
  
    if(BPMinRange(bpm))
    {return false;
    }
    else if(SPO2inRange(spo2))
    {return false;
    }
    else if(respRateinRange(respRate))
    {return false;
    }
    return true;
}
        


expect(vitalsAreOk(100, 95, 70)).to.be.false;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
