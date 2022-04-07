// ==UserScript==
// @name         Twitter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allow use Twitter when not authorized
// @author       Vechtomov
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getNthParentElement(elem, n){
        let parentElem = elem.parentElement;
        for (let i = 0; i < n - 1; i++){
            parentElem = parentElem.parentElement;
        }
        return parentElem;
    }

    function removeElementWithParents(xpath, parentsCount){
        const el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (!el) return;
        const parent = getNthParentElement(el, parentsCount);
        parent.remove();
    }

    setInterval(() => {
        try {
            removeElementWithParents("//span[text()='Don’t miss what’s happening']", 5);

            removeElementWithParents("//span[contains(text(),'See more Tweets from')]", 12);

            removeElementWithParents("//span[contains(text(),'See what’s happening')]", 10);

            const html = document.querySelector('html');
            html.style.overflow = 'initial';
        }
        catch(err){}
    }, 1000);
})();
