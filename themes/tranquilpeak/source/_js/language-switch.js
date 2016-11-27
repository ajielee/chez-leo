/**
 * Created by Xiaojie LI <ajie.lee@gmail.com>.
 * Date: 2016/11/27
 * Time: 01:17
 */
(function($) {
  'use strict';

  /**
   * LanguageSwitch
   * @constructor
   */
  var LanguageSwitch = function () {
    // Main dom
    this.$switch = $('ul#languageSwitch');
    // Icons for each language
    this.languageImages = {
      cn: 'http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_cn.png',
      en: 'http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_en.png',
      fr: 'http://res.cloudinary.com/dvlfojetn/image/upload/v1479601274/xiaojieli.com/lang_fr.png'
    };
    // Titles for each language
    this.languageTitles = {
      cn: '中文',
      en: 'English',
      fr: 'Français'
    };
  };

  LanguageSwitch.prototype = {

    /**
     * Run LanguageSwitch feature
     * @return {void}
     */
    run: function () {
      if (1 === this.$switch.length) {
        this.init();
        if (0 < this.languages.length) {
          this.appendOptions();
        }
      }
    },

    /**
     * Initialize language options
     * @return {void}
     */
    init: function () {
      this.languages = this.$switch.data('languages').split(',');
      this.languageSelected = this.$switch.data('selected');
    },

    /**
     * Append the language options to the main dom
     * @return {void}
     */
    appendOptions: function () {
      this.languageSelected = this.languageSelected ? this.languageSelected : this.languages[0];
      var self = this;
      $.each(this.languages, function (index, lang) {
        var url = self.$switch.data('url_' + lang) ? self.$switch.data('url_' + lang) : '#';
        var title = self.languageTitles[lang];
        var image = self.languageImages[lang];
        var selected = (self.languageSelected === lang);
        var html = '<li class="' + (selected ? 'language-selected' : '' ) + '">'
          + '<a href="' + url + '" title="' + title + '">'
          + '<img src="' + image + '" alt="' + title + '"></a></li>';
        self.$switch.append(html);
      });
    }

  };

  $(document).ready(function() {
    var languageSwitch = new LanguageSwitch();
    languageSwitch.run();
  });

})(jQuery);