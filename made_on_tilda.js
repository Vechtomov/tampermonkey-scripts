// ==UserScript==
// @name         Made on Tilda
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Delete "Made on Tilda" footer
// @author       Vechtomov
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        try{
            var el = document.getElementById("tildacopy");
            el.style.display = "none";
        } catch{}
    }, 1000);
})();
