// ==UserScript==
// @name         Vk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  vk.com hide advertisement
// @author       Vechtomov
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        try {
            const banners = document.querySelectorAll('.trg-b-banner-block');
            banners.forEach(banner => banner.remove());
            const ads = document.querySelectorAll('._ads_block_data_w');
            ads.forEach(item => item.remove());
            document.getElementById('ads_left').remove();
        }
        catch(err){}
    }, 1000);
})();
