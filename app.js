const kgRef = document.querySelector("#kg");
const lbRef = document.querySelector("#lb");
const ozRef = document.querySelector("#oz");



const  convertFromkg =() => {
    const kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
};
const convertFromLb = () => {
    const lb = lbRef.value;
   kgRef.value=(lb / 2.205).toFixed(2);
   ozRef.value = (lb * 16).toFixed(2);
}


  const  convertFromoz = () => {
    const oz = ozRef.value
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16 ).toFixed(2);
}
kgRef.addEventListener("input",convertFromkg);
lbRef.addEventListener("input",convertFromLb);
ozRef.addEventListener("input",convertFromoz);
window.addEventListener("load",convertFromkg);
alert("successfully")
