import $ from "jquery";
import './body.css';
const _ = require('lodash');

$("body").append("<button>Click here to get started</button>");
$("body").append("<p id='count'></p>");

$("button").click(_.debounce(updateCounter, 500));

let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

