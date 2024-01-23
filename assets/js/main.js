
const calculateBtnEl=document.getElementById('calculateBtn');
const distanceKmEl=document.getElementById('trip-distance');
const fuelEfficiencyEl=document.getElementById('fuel-efficiency');
const fuelCostEl=document.getElementById('fuel-cost');

const resultEl=document.getElementById('result');

calculateBtnEl.addEventListener('click',(event)=>{
    event.preventDefault();
    const distanceKm=distanceKmEl.value;
    const fuelEfficiency=fuelEfficiencyEl.value;
    const fuelCost=fuelCostEl.value;
    const result=Math.round((distanceKm/fuelEfficiency)*fuelCost);
    const msg=`Your fuel cost will be around : ₹${result}`
    resultEl.innerText=msg;
    resultEl.style.padding='4px';
    console.log(msg);
    distanceKmEl.value='';
})