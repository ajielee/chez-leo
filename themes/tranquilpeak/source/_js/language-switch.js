(function ($) {
  'use strict';

  /**
   * LanguageSwitch
   * @constructor
   */
  var LanguageSwitch = function () {
    this.$LanguageSwitch = $('#languageSwitch');
  };

  LanguageSwitch.prototype = {

    /**
     * Run Language switcher feature
     * @return {void}
     */
    run: function () {
      if (this.$LanguageSwitch.length > 0) {
        var self = this;
        self.$LanguageSwitch.find('li')
          .hover(function () {
            var $thisLi = $(this);

            setTimeout(function () {
              $thisLi.parent().find('li').not(this).each(function (index, element) {
                $(element).find('a > img').css('opacity', '0.4');
              });
              $thisLi.find('a > img').css('opacity', '1');
            }, 50);

          })
          .mouseout(function () {
            var $thisLi = $(this);
            setTimeout(function () {
              if ($thisLi.parent().find('li:hover').length === 0) {
                self.focusOnLanguageSelected();
              }
            }, 100);
          })
        ;
      }
    },
    focusOnLanguageSelected: function () {
      this.blurAllLanguage();
      this.$LanguageSwitch.find('li.language-selected > a > img').css('opacity', '1');
    },
    blurAllLanguage: function () {
      this.$LanguageSwitch.find('li > a > img').css('opacity', '0.4');
    }

  };

  $(document).ready(function () {
    var languageSwitch = new LanguageSwitch();
    languageSwitch.run();
    languageSwitch.focusOnLanguageSelected();
  });

})(jQuery);
