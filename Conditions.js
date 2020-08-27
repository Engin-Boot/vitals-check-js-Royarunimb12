function checkall(bpm, spo2, respRate){
        if(BPMinRange(bpm)  || SPO2inRange(spo2) || respRateinRange(respRate)){
                return true;
         return false;
        }
        
function BPMinRange(bpm){
        if(bpm<70 || bpm>150)
        {return false;}
        return true;
    }
    
function SPO2inRange(spo2){
    if(spo2<90)
    {return false;}
    return true;
}

function respRateinRange(respRate){
    if(respRate<30 || respRate > 95)
    {return false;}
    return true;
}

module.exports={
checkall:checkall
};

