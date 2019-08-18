/**
 * Button 5
 */

/*
function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }
  
 createButtons();

 */

 // Solution 1
 function createButtons() {
    for (let i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }
  
//createButtons();

 // Solution 2 IIFE 
 function createButtons2() {
    for (let i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;

      (function(num) {
        button.onclick = function() {
            alert('This is button ' + num);
       }
      })(i)

      body.appendChild(button);
    }
 }
  
 //createButtons2();


  // Solution 3
  function createButtons3() {
    for (let i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;

      addClickFunctionality(button, i)

      body.appendChild(button);
    }
 }
  
 createButtons3();

 function addClickFunctionality(button, num) {
     button.onclick = function() {
         alert('This is buttion ' + num);
     }
 }