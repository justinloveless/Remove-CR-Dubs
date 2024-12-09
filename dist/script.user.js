// ==UserScript==
// @name Remove Dubs
// @description Removes dubs from crunchyroll calendar
// @version 1.0.3
// @author Justin Loveless
// @match https://www.crunchyroll.com/simulcastcalendar*
// @grant GM_getValue
// @grant GM_setValue
// @icon https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @namespace http://tampermonkey.net/
// @updateURL https://raw.githubusercontent.com/justinloveless/Remove-CR-Dubs/dist/script.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/Remove Dubs.js
var toggleDubs = function toggleDubs() {
  var checkbox = document.createElement("input");
  var textNode = document.createTextNode("Show Dubs");
  checkbox.id = "dubs";
  checkbox.type = "checkbox";
  checkbox.checked = GM_getValue("show_dubs");
  checkbox.addEventListener('change', function (event) {
    GM_setValue("show_dubs", event.currentTarget.checked);
    location.reload();
  });
  var label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(textNode);
  var form = document.getElementById("filter_toggle_form");
  form.appendChild(label);
  if (!checkbox.checked) {
    var days = document.getElementsByClassName("releases");
    for (var i = 0; i < days.length; i++) {
      var items = days[i].children;
      for (var j = 0; j < items.length; j++) {
        if (days[i].children[j].innerHTML.includes("Dub)")) {
          days[i].children[j].innerHTML = "";
        }
      }
    }
  }
};

;// ./src/main.js

console.log('Tampermonkey Script Started (using webpack)');
toggleDubs();
/******/ })()
;