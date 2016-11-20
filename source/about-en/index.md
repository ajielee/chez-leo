---
title: "About Me"
date: 2016-11-06 17:46:34
keywords:
- about me
comments: false
---

<ul id="languageSwitchBar" onmouseout="focusOnSelectedLanguage()" style="display: flex;list-style-type: none;padding: 0;margin: 0;"> <li class="" onmouseover="focusOnMouseOverIcon(this)" style="padding-left: 5px;margin-left: 0;"> <a href="/about-cn" title="中文"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_cn.png" alt="中文" style="width: 32px;height: 32px;opacity: 0.4;"></a> </li><li class="language-selected" onmouseover="focusOnMouseOverIcon(this)" style="padding-left: 5px;"> <a href="/about-en" title="English"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_en.png" alt="English" style="width: 32px;height: 32px;opacity: 0.4;"></a> </li><li class="" onmouseover="focusOnMouseOverIcon(this)" style="padding-left: 5px;"> <a href="/about-fr" title="Français"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_fr.png" alt="Français" style="width: 32px;height: 32px;opacity: 0.4;"></a> </li></ul>

Here you are ~~~~

<script>
focusOnSelectedLanguage()
function blurIcons() {
  var languages = document.querySelectorAll("#languageSwitchBar > li")
  languages.forEach(function(element) {
    element.querySelector("a > img").style.opacity = "0.4"
  })
}
function focusOnMouseOverIcon(element) {
  blurIcons();
  element.querySelector("a > img").style.opacity = "1"
}
function focusOnSelectedLanguage() {
  blurIcons()
  var languageSelected = document.querySelector("#languageSwitchBar > .language-selected")
 languageSelected.querySelector("a > img").style.opacity = "1"
}
</script>

