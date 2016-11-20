---
title: "About Me"
date: 2016-11-06 17:46:34
keywords:
- about me
comments: false
---

<ul style="list-style-type:none;padding:0;margin:0;display:flex;"> <li style="margin-left:5px" onmouseover="focusIcon(this)" onmouseout="blurIcon(this)"> <a href="/about-cn" title="中文"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_cn.png" alt="中文" style="width:32px;height:32px;opacity:0.4;"></a> </li><li style="margin-left:5px" class="language-selected" onmouseover="focusIcon(this)" onmouseout="blurIcon(this)"> <a href="/about-en" title="English"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_en.png" alt="English" style="width:32px;height:32px;opacity:0.4;"></a> </li><li style="margin-left:5px" onmouseover="focusIcon(this)" onmouseout="blurIcon(this)"> <a href="/about-fr" title="Français"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_fr.png" alt="Français" style="width:32px;height:32px;opacity:0.4;"></a> </li></ul>

Here you are ~~~~

<script>
    (function() {
        document.querySelector(".language-selected > a > img").style.opacity = "1"
    })();

    function focusIcon(element) {
        element.querySelector("a > img").style.opacity = "1"
    }

    function blurIcon(element) {
        if ((" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf("language-selected") > -1) {
            element.querySelector("a > img").style.opacity = "1"
        } else {
            element.querySelector("a > img").style.opacity = "0.4"
        }
    }
</script>

