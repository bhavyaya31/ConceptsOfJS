//datatype number
var numb1 = 35;
var numb2 = 40;
//console.log(numb1+numb2);

//datatype string
var str1 = "helloworld";
var str2 = 'hello world is also valid';

//datatype object
var marks = {
    bhavya: 98,
    bhav: 65,
    harry: 99.89
}
//console.log(marks);

//boolean 
var a = true;
var b = false;
//console.log(a,b);

//undefined
var und = undefined;
//console.log(und);
//onsole.log(undefined);

//null
var n = null;
//console.log(n);

//array(collection of elements)
arr1 = [1, 2, 3, 4, 5]
//console.log(arr1[0])

arr2 = [1, 2, "three", 4]
//console.log(arr2)


//operators in js
var a = 2;
var b = 1;
/*console.log("sum is",a+b);
console.log("sub is",a-b);
console.log("mul is",a*b);
console.log("div is",a/b);
*/
//assignment operators
var c = b;     //above b=1 therefore ans = 1
c += 1; //2
c -= 1; //0
c *= 1;//1
c /= 1;//1
//console.log(c); 

//comaparision 
var x = 34;
var y = 56;
//console.log(x==y); //false
//console.log(x>=y);//false
//console.log(x<=y);//true


//logical operators
//console.log(true && true) //true
//console.log(true && false) //false
//console.log(false && true) //false
//console.log(false && false) //false


/* 
console.log(false || false) //false
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
*/

//function
/*
function avg(a,b){
    return(a+b)/2
}
c1= avg(4,6);
c2= avg(14,16);
//console.log(c1,c2);


//if-else statement
var age=4;
if(age<18){
    console.log("you are a kid");

}    else{
    console.log("you are not a kid");

}

//if else ladder
if(age>22){
    console.log("you are not kid")
}
else if(age>18){
    console.log("adulting")
}
else if(age>15){
    console.log("mid age")
}
else{
    console.log("kid")
}
*/


//for loop
/* 
var arr = [1, 2, 3, 4, 5, 6, 7]

for(i=0;i<arr.length;i++){

console.log(arr[i]);
}


//for-each loop
arr.forEach(function (elements) {
    console.log(elements)
})

*/
//while loop
/*
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}


//do while loop
do{
    console.log(arr[j]);      //ek var run thay j than check thay condition
    j++;
}while(j<arr.length);
*/


//break & continue
/*
var arr = [1,2,3,4,5,6,7];
for( var i=0;i<arr.length;i++){
    if(i==2){
       // break;  //i==any number toh tya thi stop thay jase
        continue; //index number 2 is 3 here so 3 ne print nai kre krine agal continue iteration krse
    }
    console.log(arr[i]);
}
*/

//array method

myarr = ["abc", "pqr", 32, true, null]
//console.log(myarr.length)
//console.log(myarr.pop()) //null or you ca just write myarr.pop()
//console.log(myarr) //[abc,pqr,31,true]

//myarr.push("bhavya");

// x= myarr.join('*'); //abc*pqr*32*true*
// y=myarr.toString(); //converted into string (separated with commas)
// console.log(y)


//myarr.shift(); //it removes first element of array
//myarr.unshift("xyz");  //it print new length of array

//myarr.sort();//[32,'abc',null,'pqr',true]

 myarr2 = ["bhavya", 43, "fruit"];
// myarr3 = myarr.concat(myarr2); // ['abc', 'pqr', 32, true, null, 'bhavya', 43, 'fruit']
// console.log(myarr3)

myarr4 = [["bhavya", 43], ["fruit"]];
myarr5=myarr4.flat(); //['bhavya', 43, 'fruit'] creates new array with subarray elements concatenate
//console.log(myarr5)


//STRING METHODS
let str = "hello beautiful world,hello";
// console.log(str.length);
// console.log(str.indexOf("beautiful"));
// console.log(str.lastIndexOf("hello"))

// console.log(str.slice(0,3)); //hel  
// c=str.replace("beautiful","wonderful") 
// c=str.replace("hello","hi") // it will not replace 2nd hello
// console.log(c)


//DATE

// var mydate = new Date();
// console.log(mydate)
// console.log(mydate.getTime())   //get time in seconds
// console.log(mydate.getFullYear()) //2023
// console.log(mydate.getDay()) // 3 because its wednesday
// console.log(mydate.getHours()) //10 because its 10:09



//DOM Manipulation
elem=document.getElementById('id'); //id 1 j hoy thats why element
// console.log(elem)  

elemclass =document.getElementsByClassName('container'); //class bov badha hiy sake thats why elements
// console.log(elemclass)  
//elemclass[0].style.background = "yellow"; //first para background changed

// now add class in css as bg-primary or anything than write this below code to add class 
// elemclass[0].classList.add("bg-primary")
// elemclass[0].classList.add("text-primary")
// elemclass[0].classList.remove("text-primary")
// p=elemclass[0].innerHTML //print class which is at 0 index
// console.log(p)

// console.log(elem.innerHTML);
// console.log(elem.innerText);
 
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
 
// tn=document.getElementsByTagName('div')
// console.log(tn)

// //append child to the website
// createElement = document.createElement('p') //paragraph in document
// createElement.innerText="hello this is child para which is created by using javascript"
// tn[0].appendChild(createElement);
// //createElement.innerHTML="<h1>hello world</h1>"
// //console.log(createElement)

// createElement2 = document.createElement('b');
// createElement2.innerText="this is bold";
// tn[0].replaceChild(createElement2, createElement);
// console.log(createElement2)

// tn[0].removeChild(createElement2);

// selecting using query
// sel=document.querySelector('.container')
// console.log(sel)

// sel=document.querySelectorAll('.container')
// console.log(sel)




//SetTimeout & setInterval
/*
log = ()=>{
       // console.log("hellow")
}
*/
//setTimeout(log,5000); //1 j var iterate thse console ma 5 sec pchi
//setInterval(log,2000);//dar 2 sec pachi thase console ma


//local storage(run in console)
// localStorage.setItem('name','bhavya')
// undefined
// localStorage
// Storage {name: 'bhavya', length: 1}name: "bhavya"length: 1[[Prototype]]: Storage
// localStorage.getItem('name')
// 'bhavya'
// localStorage.removeItem('name')
// localStorage.clear()



//JSON (json requires double quotes only)
// obj = {name:"bhavya",length:1, a:{"this": 'tha"t'}}
// jso = JSON.stringify(obj); // convert json string to object & visa versa
// console.log(typeof jso)
// console.log(jso)

// parsed = JSON.parse(`{"name":"bhavya","length":1}`)
//    console.log(parsed);