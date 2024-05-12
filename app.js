const BASE_URL ="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gr6Dk9eIfLyaTtQOo1Y7iqI2q5dpdukpcEekoxzH&currencies=EUR%2CUSD%2CCAD";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const  msg = document.querySelector(".msg");
 
for(let selects of dropdowns){
   for(currcode in countryList){
     let  newOption =document.createElement("option");
     newOption.innerText=currcode;
     newOption.value=currcode;
     if(selects.name==="from"&& currcode==="USD"){
      newOption.selected="selected";
     }else if(selects.name==="to"&& currcode==="INR"){
      newOption.selected="selected";
     }
    selects.append(newOption);
   }
   selects.addEventListener("change",(evt)=>{
  updateFlag(evt.target);
   });
}
const updateExchangerate = async ()=>{
let amount =document.querySelector(".amount input");
let amtVal = amount.value;
if(amtVal===""||amtVal<1){
   amtVal=1;
  amount.value ="1";

}

 const URL =`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
 let response = await fetch(URL);
 
 let  data =await response.json();
 let rate = data[tocurr.value.toLowerCase()];
 console.log(rate);
 let Finalamount = amtVal*rate;
 msg.innerText =`${amtVal}${fromcurr.value}=${Finalamount}${tocurr.value}`;
};
const updateFlag =(element)=>{
 let currcode =element.value;
 let countrycode = countryList[currcode];
 let newsrc =`https://flagsapi.com/${countrycode}/flat/64.png`;
 let img =element.parentElement.querySelector("img");
 img.src= newsrc;
};
btn.addEventListener("click",(evt)=>{
 evt.preventDefault();
 updateExchangerate();

});
window.addEventListener("load",()=>{
   updateExchangerate();

 });
