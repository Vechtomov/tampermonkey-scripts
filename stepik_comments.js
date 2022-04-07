// ==UserScript==
// @name         Stepik Hide Comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide comments on stepik.org
// @author       Vechtomov
// @match        https://stepik.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        try {
            const commentsBlock = document.querySelector(".discussions__list")
            if(commentsBlock) commentsBlock.style.display = "none";
        }
        catch(err){}
    }, 1000);
})();
