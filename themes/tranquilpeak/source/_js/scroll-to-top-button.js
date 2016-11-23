/**
 * Created by Xiaojie LI <ajie.lee@gmail.com>.
 * Date: 2016/11/23
 * Time: 22:13
 */
(function($) {
  'use strict';

  $(document).ready(function() {

    var $scrollToTop = $('#scrollToTop');
    var $blogDiv = $('#blog')

    // Scroll to top button
    $scrollToTop.click(function(e) {
      e.preventDefault();
      $blogDiv.animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    // Watching "#blog" scroll position
    $blogDiv.scroll(function () {
      var position = $blogDiv.scrollTop();

      if (position > 100) {
        $scrollToTop.addClass('show');
      } else {
        $scrollToTop.removeClass('show');
      }
    });

  });

})(jQuery);