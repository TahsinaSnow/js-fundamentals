var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;

var packedWell = true;

if(danishPrice < myBudget){
    console.log("danish kheye danish jabo");

}
else if(butterBreadPrice < myBudget){
    console.log('Buttter bon diye chaa khamu');
}
else if(toastBiscuitPrice < myBudget){
    console.log('toast biscuit khamu');
}

else{
console.log('batasha diye chaa khabo');
}


if(danishPrice < myBudget){
    if(packedWell == true){
        console.log('danish khabo')
    }
    else{
        console.log('danish khabo na')
    }
}