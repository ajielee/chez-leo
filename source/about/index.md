---
title: "About Me"
date: 2016-11-06 17:46:34
keywords:
- about me
comments: false
---

<script>
    var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.substr(0, 2).toLowerCase();
    if ('zh' !== userLang && 'fr' !== userLang) {
        userLang = 'en';
    } else if('zh' === userLang) {
        userLang = 'cn';
    }
    
    var baseUrl = location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
    window.location.href = baseUrl + 'about-' + userLang
</script>

