---
title: "De moi"
date: 2016-11-06 17:46:34
keywords:
- about me
comments: false
---

<ul id="languageSwitchBar" onmouseout="focusOnSelectedLanguage()" style="display: flex;list-style-type: none;padding: 0;margin: 0;"> <li class="" onmouseover="focusOnMouseOverIcon(this)" style="padding-left: 5px;margin-left: 0;"> <a href="/about-cn" title="中文"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_cn.png" alt="中文" style="width: 32px;height: 32px;opacity: 0.4;"></a> </li><li class="" onmouseover="focusOnMouseOverIcon(this)" style="padding-left: 5px;"> <a href="/about-en" title="English"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_en.png" alt="English" style="width: 32px;height: 32px;opacity: 0.4;"></a> </li><li class="language-selected" onmouseover="focusOnMouseOverIcon(this)" style="padding-left: 5px;"> <a href="/about-fr" title="Français"><img src="http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_fr.png" alt="Français" style="width: 32px;height: 32px;opacity: 0.4;"></a> </li></ul>

Bonjour, bienvenue chez moi. 

Je m'appelle LI Xiaojie, « LI » est mon nom. Vous pouvez m'appeler « Léo ». Je suis chinois, j'habite à Paris. Trois ans avant, je suis venu en France pour faire mes études à Rouen, dans une école d'ingénieur qui s'appelle « ESIGELEC ». Actuellement, je suis en train de faire mon stage de fin d'étude chez Orange.

## Information importante !

Je suis à la recherche de mon premier travail en France. Je voudrais travailler dans le domaine du développement Web, sois que je peux programmer en **PHP** avec le Framework comme **Zend Framework 2**, **Symfony 2** ou **Laravel 5**, sois que je peux programmer en **JavaScript** avec **AngularJS** ou **Node.js**, sois que je peux tout faire en tant que **développeur Full Stack**. Puis, je suis capable de travailler en autonomie, mais j'aime bien travailler en équipe.

Si mon profil vous intéresse, n'hisitez pas m'envoyer un mail: **[Mon adresse mail](mailto:ajie.lee@gmail.com)**. 

Merci d'avance !


## Informatique
Étant un geek, j'aime bien programmer. 

Quand j'étais en Chine, j'ai travaillé en tant que développement Java en réalisant les logiciels en Linux. À partie de l'année dernière, j'ai commencé programmer en PHP. Aujourd'hui, après réaliser plusieurs projets, j'ai obtenu beaucoup d'expérience en développement web. Puis, j'aime bien programmer avec PHP/JavaScript par rapport à Java. Passionné par le domaine du développement web, je voudrais toujours apprendre les nouvelles technologies. Je me suis formé récemment sur Sass,  AngularJS et Symfony2 de manière autodidacte sur internet, avec quelles j'ai réalisé ce blog.

Actuellement, mes compétences informatiques sont suivant : 

**Languages :**

* **PHP** : Le language principal de Back-end pour moi.
* **JavaScript** : Le language principal de Front-end pour moi.
* Java
* Python : J'ai obtenu le [« Certificat de Coursera »](https://www.coursera.org/signature/certificate/XYDHNEKGEE) en réalisant plusieurs [petit projet](https://github.com/ajielee/mini-projects-while-learning-python).
* C++
* C#
* Bash Shell Script

**Front-end :**

* **jQuery** : La librairie principale.
* **Bootstrap**
* **AngularJS** : J'ai obtenu le [« Certificat d'Udemy »](https://www.udemy.com/certificate/UC-0T9BTHAF/), puis je l'utilise pour réaliser ce blog.
* HTML5/CSS3	
* Sass
* bower 

**Back-end :**

* Zend Framework 1 : Je l'ai utilisé beaucoup pendant le stage chez Orange.
* Symfony 2 : Je suis en train de apprendre un cours sur internet.
* MySQL : Le SQL principal pour moi.
* Node.JS : Je comprends la notion.

**Outils :**

* Git : Ce blog est synchronisé par [Github](https://github.com/ajielee/AJBlogDesign).
* SVN

## Photographie

Pour bien profiter la vie en France, et aussi pour enregistrer les bons moments, j'aime prendre des photos, surtout le paysage.

* Vous pouvez trouver mes photos quotidiens ici : [![Instagram](http://www.umbrelify.com/images/icons/lg/instagram.png)](https://instagram.com/leo_li/)

* Vous pouvez trouver mes meilleurs collections ici : [![500px](http://i.imgur.com/FsLr11p.png)](https://500px.com/XiaojieLI)

## Autres goûts

* Voyage : J'aime toujours découvrir les choses inconnues pour moi. Pendant le voyage, on peut voir les paysages magnifiques, puis on peut rencontrer les gens sympathiques. Après avoir été en plusieurs pays, la ville que j'adore c'est Paris, la village que j'aime c'est Annecy, la ville que j'ai envie d'aller encore c'est Prague, la pays que je désire aller le plus tôt possible c'est Japon.
* Cuisine : Je suis fort en cuisiner les plats chinois, surtout en cantonais, comme du riz cantonais. Grâce au guide de ma femme, je suis capable de faire un grand repas.

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

