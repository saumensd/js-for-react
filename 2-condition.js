// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||
var danishPrice = 1000;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 7;
var packedWell = true;

if (danishPrice === myBudget || danishPrice === 1000 ) {
    console.log('Danish kyeye danish jabo');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon diye cha khamu');
}
else if (toastBiscuitPrice < myBudget) {
    console.log('toast biscuit khamu');
}
else {
    console.log('Batasha diye cha khumu');
}