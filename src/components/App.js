import React from 'react';

export default function App() {

  /* api.js */
  
  const apiUrl = "https://amazingpi.com/api/";

  function getAndDisplay(url) {
    return "content loaded from from " + url;
  }

  /* greet.js */
  
  function greet(name) {
    return "Hello, " + name;
  }

  /* circles.js */

  const pi = 3.14159;

  function calcArea(radius) {
    return pi * (radius * radius);
  }
  function calcCirc(radius) {
    return pi * (radius * 2);
  }

  /* constants.js */

  const websiteName = "Noroff";
  const domainName = "www.noroff.no";
  const myConstant = "MY_CONSTANT";
  const usefulNumber = 128;
  const allowComments = true;

  /* output - don't move this code into another file */

  return (
    <div className="App">
      <h1>Import/Export</h1>

      <h2>api.js</h2>
      <ul>
        <li>
          {getAndDisplay(apiUrl)}
        </li>
      </ul>

      <h2>greet.js</h2>
      <ul>
        <li>
          {greet(websiteName)}
        </li>
      </ul>

      <h2>circle.js</h2>
      <ul>
        <li>
          PI is {pi}
        </li>
        <li>
          Area of a 3cm radius circle is: {calcArea(3)}
        </li>
        <li>
          Circumference of a 3cm radius circle is: {calcCirc(3)}
        </li>
      </ul>


      <h2>constants.js</h2>
      <ul>
        <li>
          websiteName: {websiteName}
        </li>
        <li>
          domainName: {domainName}
        </li>
        <li>
          myConstant: {myConstant}
        </li>
        <li>
          usefulNumber: {usefulNumber}
        </li>
        <li>
          allowComments: {allowComments ? "yes" : "no"}
        </li>
      </ul>
    </div>
  );
}
