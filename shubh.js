// Question 1: Write the code to access element which is having id as "text"
let para = document.getElementById("text");
console.log(para.innerText);

// Question 2: Write the code to access element which is having tag as "h1"

let head = document.getElementsByTagName("h1")[0];
console.log(head.innerText);

// Question 3: Write the code to access element which is having class as "box"

let box = document.getElementsByClassName("box")[0]
console.log(box.innerText);

// Question 4: "<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

// let hello = document.getElementsByTagName("h1")[1];
// console.log(hello.innerText);
// hello.innerText = "hello World";
// console.log(hello.innerText);

// Question 5: Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
function execute(){
let flexContainer = document.getElementsByClassName("flex-container")[0];
let button = document.getElementsByTagName("button")[0]
     if(button.innerText == "Do Column Wise"){
        flexContainer.style.flexFlow = "column Wrap";
        button.innerText = "Do row wise"
     }
     else{
        flexContainer.style.flexFlow = "row wrap";
        button.innerText = "Do Column Wise"
     }
}

// Question 6: What’s the difference between window vs document?
//  Window : window is the main javascript object root. The window object is the topmost oject of the DOM hierarchy. It represent a browser window or frame that displays the contents of the webpage. whenever a window appears on the screen to display the contents of the document, the window object is created.

// Document Object: The document object represent a web page that is loaded in the browser. By accessing the document object , we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our webpage.The document object can be accessed with a window.document or just document.


// Question 7:"<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let hello = document.getElementsByTagName("h1")[1];
hello.style.color = "red";
console.log(hello.innerText);
hello.id = "heading";

// Question 8: Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changeText(){
   let hello = document.getElementById("hello")
   let changeText = document.getElementById("changeText")
   hello.innerText = "Welcome to Elevation Academy"
}

// Question 9: Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

function displayTime(){
   let dateTime = new Date();
   let hrs = dateTime.getHours();
   let min = dateTime.getMinutes();
   let sec = dateTime.getSeconds();
   let session = document.getElementById("session");
   document.getElementById("hour").innerHTML = hrs;
   document.getElementById("minutes").innerHTML = min;
   document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime,10)

// function getTime(){
//    let date = new Date();
//    let HH = date.getHours();
//    let MM = date.getMinutes();
//    let SS = date.getSeconds();
//    document.getElementById("HH").innerText = HH;
//    document.getElementById("MM").innerText = MM;
//    document.getElementById("SS").innerText = SS;
//    setTimeout(getTime, 1000);
// }getTime();

// Question 10: Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
function valueSelect(){
let select = document.getElementById("select")
let value = document.getElementById("value")
value.innerText = select.value
let x = select.value
console.log(x);
}

// Question 11: "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"

function check(){
   let msg1 = document.getElementById("message1");
   let regex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   let email = document.getElementById("email").value;
   let lastVal = email.slice(-14);
   let result1 = regex1.test(email);
   if(result1 && lastVal==="@prepbytes.com"){
      msg1.innerText = " Email is Valid"
   }else{
      msg1.innerText = " Email is InValid"
   }
   let msg2 = document.getElementById("message2");
   let regex2 = /^[9]+[1]+[0-9]{8}$/;
   let phone = document.getElementById("phone").value;
   let result2 = regex2.test(phone);
   if(result2){
      msg2.innerText = " Phone Number is Valid"
   }else{
      msg2.innerText = " Phone Number is Invalid"
   }
   let msg3 = document.getElementById("message3");
   let year = document.getElementById("birthYear").value;
   let year1 = parseInt(year.slice(0,4));
   if(year1 > 1995){
      msg3.innerText = " Birth Year is valid"
   }else{
      msg3.innerText = " Birth Year is Invalid"
   }
}