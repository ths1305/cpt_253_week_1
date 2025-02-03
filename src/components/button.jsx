import React from 'react';

export const MyButton = () =>{

  <button type="button" onclick="myButton()">Click me!</button>

//The html button element has an onclick attribute that can perform a certain task upon being pressed if there is a script for such task
//I placed a function so I can execute it in the script which you will see below
//I created and labeled an id to assign the myButton function
  
  <p id="test"></p>
  
  <script>
  function myButton() {
    document.getElementById("test").innerHTML = "Hello World!";
  }
  </script>
}
