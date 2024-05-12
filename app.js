// function getSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
        
//     }
//     return sum;
// }
// let str=["hi","hello","bye","!"];
// function concat(str){
//     let result="";
//     for(let i=0; i<str.length;i++){
//         result=result+str[i];
//     }
//     return result;
// }
//arrow function:-
// const num =(n)=> {
//   return  (n*n);
// }
// //setInterval and setTimeout
// let id=setInterval(()=>{
//   console.log("good morning");
// },2000);
// setTimeout(()=>{
//     clearTimeout(id);
//     console.log("clear ");
// },10000);

//array method;
//let intial=[2,3,4,6,8,0];
// let final=intial.reduce((res,el)=>{
//     console.log(res);
//    return res+el;
// });
// console.log(final);
//let isEven =intial.filter((el)=>{
   // return el%2==0});
// let double=intial.map((el)=>{
//     return el*2;
// });
// let checkmuloftwo=intial.every((el)=>{
//    return  el%10==0;

// });
// console.log(checkmuloftwo);
// let min=intial.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });
// console.log(min);
/////////this keyword///////////
// const student = {
//    name:"seema",
//    eng:34,
//    maths:34,
//    phy:23,
//    getAvg(){
//       let avg=this.eng+this.maths+this.phy/3;
//       console.log(avg);
//    }

// }
////////////////////try and catch////////////
// console.log("hello");
// console.log("hello");
// //let a=3;
// try{
//    console.log(a);  
// }catch{
//    console.log("this is an erroe,...");
//    console.log("a");
// }
// console.log("hello1");
////////////arrow function///////////////
// const sum =(a,b)=>{
//    return a+b;
// };
// const cube=(n)=>(n*n*n);
// const power=(a,b)=>a**b;
// setTimeout(()=>{console.log("i love you")},4000);
// console.log("you aree my bhess");
// let id1=setInterval(() => {
//    console.log("hello world");
// }, 2000);
// console.log(id1);
// console.log("clear");
// const student={
//    name:"seema",
//    age:23,
//    rollno:57,
//    getname1:function(){
//     console.log(this);
//     return this.age;
//    },
//    getname2:() => {
//       console.log(this);
//       return this.age;

//    },
//    get:function(){
//       setTimeout(()=>{
//          console.log(this);
//       },2000);
//    },
//    get2:function(){
//       setTimeout(function(){
//          console.log(this);
//       },1000);
//    }
// }
// let  arr=[1,2,3,4,5];
// let print=function(el){
//    console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el){
//    console.log(el);
// });
// let  nums =[1,2,3,4,5,34,34,56,78];
// let double =nums.map((el)=>{
//    return el*2;
// }
// );
// let even = nums.filter(
//    (el)=>{
//       return el%2==0;
//    }
// );
// let greaternum =nums.filter(
//    (student)=>{
//       return student>=34;
//    }
// );

// let bool =[2,3,4,6,8].every((el)=>{
//    return el%2==0;
// })
// let arr =[1,2,3,4,5,6];
// let finalValue = arr.reduce((acc,el)=>{
//    console.log(acc);
//    return acc+el;
// });
// console.log(finalValue);
// function sum(b,a=2){
// return a+b;
// }
// sum(3);
// let arr =[1,2,3,45,6,7,8];
// Math.min(...arr);
// Math.max(...arr);
// console.log("seeema");
// console.log(..."seema");
// console.log(...arr);
// console.log(1,2,3,4);
///////////////////spread//////////////
// const person={
// mail:"seemakashyap@gmail.com",
// password:"abcd"
// };
// const datacopy ={...person,id:1,country:"india"};
// let even=[2,4,6,8];
// let odd=[1,3,5,7,9];
// let nums=[...even,...odd];
/////10-05-2024/////
// let h1 =document.querySelector("h1");
// console.dir(h1.innerText);
// h1.innerText = h1.innerText + "  from apna college";

// let divs =document.querySelectorAll(".box");
// let ind =1;
// for (div of divs) {
//    div.innerText =`unique number is ${ind}`;
//    ind++;
// }
// divs[0].innerText="first unique numb 1";
// divs[1].innerText="first unique numb 2";
// divs[2].innerText="first unique numb 3";
// let div =document.querySelector("div");
// console.dir(div);
// let id =div.getAttribute("id");
// console.dir(id);
// let naam = document.querySelector("div");
// console.log(naam.getAttribute("name"));
//  let para= document.querySelector("p");
//   console.log(para.setAttribute("class","newclass"));
// let divs =document.querySelector("div");
// // // div.style.backgroundColor = "green";
// // // div.style.fontSize ="100px";
// // divs.style.visibility ="hidden";
//  divs.innerText ="hello ";
// let newbtn = document.createElement("button");
// newbtn.innerText ="click me!";
//  newbtn.style.fontSize="100px";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.before(newbtn);
// let para =document.querySelector("p");
// para.after(newbtn);
// let para = document.querySelector("p");
// let btn =document.querySelector("#btn");
// btn.onclick =()=>{
// console.log("this is a button");
// let ind =24;
// ind++;
// console.log(ind);
// };
// let divs =document.querySelector("div");

// divs.onmouseover=(evt)=>{
//    // console.log(e);
// console.log(evt.type);
// console.log(evt.clientX,evt.clientY);
// };
//////////////////////////////////toggle light/dark mode//////////////////////////////////////////
// let btn=document.querySelector("#btn");
// let body =document.querySelector("body");
// let currmode= "light";
// btn.addEventListener("click",()=>{
// if(currmode==="light"){
//    currmode="dark";
//    body.classList.add("dark");
//    body.classList.remove("light"); 
// }
// else{
//    currmode="light";
//    body.classList.add("light");
//    body.classList.remove("dark"); 
// }
// console.log(currmode);
// });
//////////////////////////////////tic tac toe game ////////////////////////////////////////////////////
// let boxes =document.querySelectorAll(".box");
// let reset =document.querySelector("#btn");
// let newgame =document.querySelector("#newbtn");
// let msgcontainer =document.querySelector(".msg-container");
// let msg =document.querySelector("#msg");

// let turnO= true;//playerx,player0
// const winPatterns = [
//    [0,1,2],
//    [0,3,6],
//    [0,4,8],
//    [1,4,7],
//    [2,5,8],
//    [2,4,6],
//    [3,4,6],
//    [6,7,8],
// ];
// const resetgame =()=>{
// turnO =true;
// enabledboxes();
// msgcontainer.classList.add("hide");
// };
//  boxes.forEach((box) => {
//    box.addEventListener("click",() => {
      
//       if(turnO){
//          box.innerText="O";
//          turnO=false;
//       }
//       else{
//          box.innerText="X";
//          turnO=true;
//       }
//        box.disabled=true;
//        checkWinner();
//    });
// });
// const enabledboxes =()=>{
//    for(let box of boxes){
//   box.disabled =false;
//   box.innerText="";
//    }
// };
// const disabledboxes =()=>{
//    for(let box of boxes){
//   box.disabled =true;
//    }
// };
// const showWinner =(winner)=>{
//   msg.innerText = `Congratulation ,Winner is  ${winner}`;
//   msgcontainer.classList.remove("hide");
//   disabledboxes();
// };
// const checkWinner =()=>{
//    for( let pattern of winPatterns){
//      let pos1Val= boxes[pattern[0]].innerText;
//      let pos2Val = boxes[pattern[1]].innerText;
//      let pos3Val = boxes[pattern[2]].innerText;
//      if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
//       if(pos1Val=== pos2Val && pos2Val=== pos3Val){
        
//          showWinner(pos1Val);
//       }
//      }
//    }
  
// };
// newbtn.addEventListener("click",resetgame);
// btn.addEventListener("click",resetgame);
//////////////////////////////////////////class/object/prototype/inheritance/error handling//////////////////////
// let data = "secret data";                                           
// class user{
//    constructor(name,email){
//       this.name=name;
//       this.email=email;
//    }
//    viewData(){
//       console.log("this data is ", data);
//    }
// }

//    class Admin extends user{                                             doubt///////////@##$
//       constructor(name,email){
//          super(name,email);
//       }
//     editData(){
//       data ="not shown";
//    }
//    }

//  class academic extends user{
//    constructor(name,email){
//       super(name,email);
//    }
//    change(){
//       console.log("print");
//    }
// }
// let student1= new user("seema","abs@email.com");
// let student2 = new user("piyush","jsd@email.com");
// let admin1 = new Admin("admin","sjjd@email.com");
// let acad =new academic("seema","abs@email.com");
////////////////////////////////////callbacks,promises,async await///////////////////////////////////////
// function  sum(a,b){
//    console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//    sumcallback(a,b)
// }
// calculator(1,12,sum);
// const hello =()=>{
//    console.log("hello");
// }
// setTimeout(hello,3000);
// setTimeout(()=>{console.log("hello to everyone")},1000);
// callhell function////

// let promises =new Promise((resolve,reject)=>{
// console.log("this is a promise");
// resolve("succes");
// }
// );
// function getdata(id,getdatanext){
//    return new Promise((resolve,reject)=>{                                              doubt////
 
//       setTimeout(()=>{
//          reject("something is wrong");

//       if(getdatanext){                                            
//          getdatanext();
//       }
//    },2000);

//    });

// }
// getdata(1,()=>{
//    getdata(2,()=>{
//       getdata(3)});
// });
// const getpromises =()=>{
//    return new Promise((resolve,reject)=>{
//       console.log("this is promise");
//       // reject("error");
//       resolve("success");
//    })

// }
// let promise =getpromises();
// promise.then((res)=>{
// console.log("promise fulfilled",res);
// });
// promise.catch((err)=>{
//    console.log("promise rejected",err);
// });
////////////////////////////////////////api///
// const URL = "https://cat-fact.herokuapp.com/facts";
// let para =document.querySelector(".fact");

// ///for result//
// const getdata = async ()=>{
//    console.log("getting data");
//    let response = await fetch(URL);
//    console.log(response);
//     let data = await response.json();
//     para.innerText=data[3].text; ///useable data in form of array//
// }

//  const BASE_URL ="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gr6Dk9eIfLyaTtQOo1Y7iqI2q5dpdukpcEekoxzH&currencies=EUR%2CUSD%2CCAD";
// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromcurr = document.querySelector(".from select");
// const tocurr = document.querySelector(".to select");
// const  msg = document.querySelector(".msg");
 
// for(let selects of dropdowns){
//    for(currcode in countryList){
//      let  newOption =document.createElement("option");
//      newOption.innerText=currcode;
//      newOption.value=currcode;
//      if(selects.name==="from"&& currcode==="USD"){
//       newOption.selected="selected";
//      }else if(selects.name==="to"&& currcode==="INR"){
//       newOption.selected="selected";
//      }
//     selects.append(newOption);
//    }
//    selects.addEventListener("change",(evt)=>{
//   updateFlag(evt.target);
//    });
// }
// const updateExchangerate = async ()=>{
// let amount =document.querySelector(".amount input");
// let amtVal = amount.value;
// if(amtVal===""||amtVal<1){
//    amtVal=1;
//   amount.value ="1";

// }

//  const URL =`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
//  let response = await fetch(URL);
 
//  let  data =await response.json();
//  let rate = data[tocurr.value.toLowerCase()];
//  console.log(rate);
//  let Finalamount = amtVal*rate;
//  msg.innerText =`${amtVal}${fromcurr.value}=${Finalamount}${tocurr.value}`;
// };
// const updateFlag =(element)=>{
//  let currcode =element.value;
//  let countrycode = countryList[currcode];
//  let newsrc =`https://flagsapi.com/${countrycode}/flat/64.png`;
//  let img =element.parentElement.querySelector("img");
//  img.src= newsrc;
// };
// btn.addEventListener("click",(evt)=>{
//  evt.preventDefault();
//  updateExchangerate();

// });
// window.addEventListener("load",()=>{
//    updateExchangerate();

//  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});