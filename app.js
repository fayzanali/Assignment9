// CHAPTER 38-42
// Task1:
// function power(base,power)
// {
//     return Math.pow(base,power)
// }
// var a = +prompt("Enter base")
// var b = +prompt("Enter power")
// var result = power(a,b)
// alert(a + " raised to power " + b + " is: " + result)

// Task2:
// var year = +prompt("Enter any year")
// if (year%4 == 0){
//     alert(year + " is a leap year")
// }
// else
// {
//     alert(year + " is not a leap year")
// }

// Task3:
// var a = +prompt("Enter the first side");
// var b = +prompt("Enter the second side");
// var c = +prompt("Enter the third side");
// var area;
// var S = ((a + b + c) / 2);
// function TriangleArea(a,b,c){
//     return area = (S*(S-a)*(S-b)*(S-c))
// }
// TriangleArea(a,b,c)
// document.write("Area of Triangle is: " + area + "<br>")

// Task4:
// var sub1 = +prompt("Enter first subject marks");
// var sub2 = +prompt("Enter second suject marks");
// var sub3 = +prompt("Enter third subject marks");
// var avg;
// var TotalPercentage;

// function main(){
//     average(sub1,sub2,sub3)
//     document.write("Average: " + avg + "<br>")

//     percentage(total)
//     document.write("Percentage of All Subjects: " + TotalPercentage + "%" + "<br>")
// }
// function average(sub1, sub2, sub3){
//     return avg = ((sub1 + sub2 + sub3) / 3)
// }
// function percentage(total){
//     return TotalPercentage = ((total/300) * 100);
// }
// main();

// Task5:
// var str = prompt("Enter String")
// var word = prompt("Enter Word")
// indexOf(str, word)

// function indexOf(sentence,word){
//     var sent = sentence.split("");
//     var wd = word.split("");
//     for (var i = 0; i < sent.length; i++){
//         var j = 0
//         while(j < wd.length && wd[j] == sent[i]){
//             i++
//             j++
//         }
//         if (j == wd.length){
//             alert(i - j)
//             break;
//         }
//     }
// }

// Task6:
// var sentence = prompt("Enter sentence");
// function delvowels(sentence){
//     return sentence.replace(/[aeiou]/gi, "");
// }
// var result = delvowels(sentence);
// document.write("Sentence: " + sentence + "<br>");
// document.write("Removal of Vowels: " + result);

// Task7:
// var str = prompt("Enter String");
// fun(str)

// function fun(str){
//     var string = str.split("")
//     var count = 0;
//     for (var i = 0; i < string.length; i++){
//         switch(string[i]){
//             case 'a':
//                 count++;
//                 break;
//             case 'e':
//                 count++;
//                 break;
//             case 'i':
//                 count++;
//                 break;
//             case 'o':
//                 count++;
//                 break;
//             case 'u':
//                 count++;
//                 break;
//         }
//     }
//     if(count==2){
//         console.log("OK")
//     }
//     else{
//         console.log("NO")
//     }
// }

// Task8:
// var d = +prompt("Enter distance in km");
// function feets(d){
//     var feets = d*32804.84
//     alert("Distance in Feets: " + feets) 
// }
// feets(d)

// function meters(d){
//     var meters = d*1000
//     alert("Distance in Meters: " + meters)
// }
// meters(d)

// function inches(d){
//     var inches = d*39370.1
//     alert("Distance in Inches: " + inches)
// }
// inches(d)

// function centimeters(d){
//     var centimeters = d*100000
//     alert("Distance in Centimeters: " + centimeters)
// }
// centimeters(d)

// Task9:
// var hour = +prompt("Enter overtime hours: ");
// function overtime(hour){
//     return (30 * hour * 12.00)
// }
// var result = overtime(hour)
// document.write("Overtime Salary : " + result)

// Task10:
// var note1 = 10;
// var note2 = 50;
// var note3 = 100;
// var withdraw = +prompt("Enter Amount to be Withdrawn! ")
// function currency(withdraw){
//     document.write("You will have " + Math.floor((withdraw/100)) + " hundred notes ")
//     document.write(Math.floor((withdraw % 100) / 50) + " fifty notes ")
//     document.write(Math.floor(((withdraw % 100) % 50) / 10) + " ten notes")
// }
// currency(withdraw)

// CHAPTER 43-48
// Task1:
// function clicked(){
//     alert("Clicked")
// }

// Task2:
// function purchased(){
//     alert("Thanks for purchasing a phone from us")
// }

// Task3:
// function Delete(id){
//     var i = id.parentNode.parentNode.rowIndex;
//     document.getElementById('tab1').deleteRow(i)
// }

// Task4:
// function changePic(id,image){
//     document.getElementById(id).src=image
// }

// Task5:
// var count = 0
// function add(){
//     count++
//     document.getElementById('counter').innerHTML=count
// }
// function subtract(){
//     count--
//     document.getElementById("counter").innerHTML=count
// }
// function reset(){
//     count = 0
//     document.getElementById('counter').innerHTML=count
// }

// CHAPTER 49-52
// Task1:
// function add(){
//     var table = document.getElementById('tables');
//     var firstName = document.getElementById('firstname');
//     var lastName = document.getElementById('lastname');
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value
//     var row = table.insertRow();
//     var cell1 = row.insertCell();
//     var cell2 = row.insertCell();
//     var cell3 = row.insertCell();
//     var cell4 = row.insertCell();
//     cell1.innerHTML = firstName
//     cell2.innerHTML = lastName
//     cell3.innerHTML = email
//     cell4.innerHTML = password
// }

// Task2:
// function readMore(){
//     var message = "Samsung Galaxy S6 edge+ Better in every way. From the dual-edge display to faster charging to improved camera and better audio."
//     var para = document.getElementById('para')
//     para.innerHTML = message
// }

// Task3:
// var count = 0
// function reset(){
//     document.getElementById('name').value = ""
//     document.getElementById('classes').value = ""
// }
// function add(tab1){
//     count++
//     var button = document.createElement("button")
//     var table = document.getElementById("tab1")
//     var row = table.insertRow()
//     var cell1 = row.insertCell()
//     var cell2 = row.insertCell()
//     var cell3 = row.insertCell()
//     var cell4 = row.insertCell()
//     button.innerHTML = "Delete"

//     button.setAttribute("class","btn btn-primary")
//     cell1.setAttribute("scoped", "row")
//     cell1.innerHTML = count;
//     cell2.innerHTML = document.getElementById('name').value
//     cell3.innerHTML = document.getElementById('classes').value
//     cell4.appendChild(button)

//     reset()
// }

// CHAPTER 52-57
// Task1:
// function showimage(a){
//     var modalimg = document.getElementById('modalimg')
//     modalimg.src = a.src
// }

// CHAPTER 58-67
// Task1:
// Part1
// var main = document.getElementsByTagName("div")
// console.log(main[2])

// Part2
// var div = document.getElementById('main-content')
// var element = div.getElementsByTagName('p')
// console.log(element)

// Part3
// var a = document.getElementsByTagName('p');
// for (var index = 0; index < a.length; index++){
//     document.write(a[index].innerHTML + "<br>")
// }

// Part4
// var a = document.getElementById('first-name')
// a.value = "Fayzan"

// Part5
// var a = document.getElementById('first-name');
// a.value = "Fayzan"
// var a = document.getElementById('last-name');
// a.value = "Ali"
// var b = document.getElementById('email')
// b.value = "syedfayzanali31@gmail.com"

// Task2:
// Part1
// var a = document.getElementById('form-content')
// console.log(a.nodeType)

// Part2
// var b = document.getElementById('lastName')
// console.log(b.nodeType)
// console.log(b.childNodes[0])

// Part3
// var b = document.getElementById('lastName')
// b.childNodes[0].nodeValue = "Ali"

// Part4
// var b = document.getElementById('main-content')
// console.log(b.firstChild)
// console.log(b.lastChild)

// Part5
// var b = document.getElementById('lastName')
// console.log(b.nextSibling)
// console.log(b.previousSibling)

// Part6
// var b = document.getElementById('email')
// console.log(b.parentNode)
// console.log(b.parentNode.nodeType)