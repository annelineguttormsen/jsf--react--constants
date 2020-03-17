import React from 'react';
import { calcArea, calcCirc } from "./circles.js";
import { getAndDisplay } from "./api.js";
import greet from "./greet.js";
import { WEBSITE_NAME, DOMAIN_NAME, MY_CONSTANT, USEFUL_NUMBER, ALLOW_COMMENTS, API_URL, PI } from "./constants.js";

export default function App() {
  /* output - don't move this code into another file */

  return (
    <div className="App">
      <h1>Import/Export</h1>

      <h2>api.js</h2>
      <ul>
        <li>
          {getAndDisplay(API_URL)}
        </li>
      </ul>

      <h2>greet.js</h2>
      <ul>
        <li>
          {greet(WEBSITE_NAME)}
        </li>
      </ul>

      <h2>circle.js</h2>
      <ul>
        <li>
          PI is {PI}
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
          WEBSITE_NAME: {WEBSITE_NAME}
        </li>
        <li>
          DOMAIN_NAME: {DOMAIN_NAME}
        </li>
        <li>
          MY_CONSTANT: {MY_CONSTANT}
        </li>
        <li>
          USEFUL_NUMBER: {USEFUL_NUMBER}
        </li>
        <li>
          ALLOW_COMMENTS: {ALLOW_COMMENTS ? "yes" : "no"}
        </li>
      </ul>
    </div>
  );
}
