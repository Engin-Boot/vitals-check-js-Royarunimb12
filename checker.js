const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
  
    if(BPMinRange(bpm))
    {return false;
    }
    else if(SPO2inRange(spo2))
    {return false;
    }
    else if(resprateinRange(respRate))
    {return false;
    }
    return true;
}
        
function BPMinRange(bpm){
        if(!(70 <= bpm <= 150))
            return false;
        return true;
    }
function SPO2inRange(spo2){
    if(spo2<90)
        return false;
    return true;
}
function respRateinRange(respRate){
    if(!(30 <= respRate <=95))
        return false;
    return true;
}
    
    
        

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
