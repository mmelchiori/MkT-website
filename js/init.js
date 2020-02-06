/**
  * @package Forward HTML
  *
  * Template Scripts
  * Created by Dan Fisher
*/

;(function($){
  "use strict";

  $.fn.exists = function () {
    return this.length > 0;
  };

  /* ----------------------------------------------------------- */
  /*  Predefined Variables
  /* ----------------------------------------------------------- */
  var $main_nav     = $('.main-nav'),
      $gmap         = $('.gm-map'),
      $vegas        = $('.hero-slider_vegas'),
      $page_header  = $('.page-header'),
      $counter      = $('.counter__num[data-to]'),
      $swiper_testi = $('.testimonials-slider'),
      $swiper_rel   = $('.swiper_blog-related'),
      $mp_single    = $('.mp_single-img'),
      $mp_gallery   = $('.mp_gallery'),
      $mp_iframe    = $('.mp_iframe'),
      $txt_rotate   = $('.hero-txt-rotating'),
      $menu_pushy   = $('.nav-pushy-btn');

  var Core = {

    initialize: function() {

      this.MainNav();

      this.VegasSlider();

      this.TextRotate();

      this.MenuPushy();

      this.StickyHeader();

      this.CounterTo();

      this.Swiper();

      this.MagnificPopup();

      this.GoogleMap();

    },

    MainNav: function() {

      if ( $main_nav.exists() ) {
        $('.main-nav').superfish({
          delay:       300,
          animation: {
            opacity: 'show'
          },
          animationOut: {
            opacity: 'hide'
          },
          speed:       200,
          speedOut:    200,
          cssArrows:   false,
          dropShadows: false
        });

        // Trigger Mobile Menu Active State
        $('#mobnav-btn').click(function() {
          $('.main-nav').toggleClass("main-nav_active");
        });

        // Trigger Mobile Menu Dropdown Subs
        $('.mobnav-subarrow').click(function() {
          $(this).parent().toggleClass("mobile-drop-down");
        });
      }
    },

    VegasSlider: function() {

      if ( $vegas.exists() ) {
        $(".hero-slider_vegas").vegas({
          slides: [
            { src: "images/slide-1.jpg" },
          ],
          delay: 8000,
          timer: false,
          animation: 'kenburns',
          overlay: true
        });
      }
    },

    TextRotate: function() {

      if ( $txt_rotate.exists() ) {
        $(".hero-txt-rotating").Morphext({
          // The [in] animation type. Refer to Animate.css for a list of available animations.
          animation: "fadeIn",
          // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
          separator: ",",
          // The delay between the changing of each phrase in milliseconds.
          speed: 4000
        });
      }
    },

    MenuPushy: function() {

      if ( $menu_pushy.exists() ) {
        // Push menu button
        $('.nav-pushy-btn').on('click', function(e) {
          $('body').addClass('pushy-active').css('overflow', 'hidden');
          $('.site-overlay').fadeIn('fast');
          e.preventDefault();
          return false;
        });
        $('.nav-pushy__close, .site-overlay').on('click', function(e) {
          $('body').removeClass('pushy-active').css('overflow', 'visible');
          $('.site-overlay').fadeOut('fast');
          e.preventDefault();
          return false;
        });
      }
    },

    StickyHeader: function() {
      var $headerHeight = $('#header').innerHeight();
      $('.page-top-wrapper').css('padding-top', $headerHeight);

      $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
          $('#header').addClass('header_fixed');
        } else {
          $('#header').removeClass('header_fixed');
        }
      });

    },

    CounterTo: function() {

      if ( $counter.exists() ) {
        // Counter
        $counter.each(function() {
          var $this = $(this);
          $this.appear(function() {
            $this.countTo({
              onComplete: function() {
                if($this.data("append")) {
                  $this.html($this.html() + $this.data("append"));
                }
              }
            });
          }, {accX: 0, accY: 0});

        });
      }
    },

    Swiper: function() {

      if ( $swiper_testi.exists() ) {
        $swiper_testi.each(function() {
          // Swiper carousel
          //initialize swiper when document ready
          var mySwiper = new Swiper ('.testimonials-slider', {
            // Optional parameters
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            autoplay: 8000
          })
        });
      }

      if ( $swiper_rel.exists() ) {
        $swiper_rel.each(function() {
          // Swiper carousel
          //initialize swiper when document ready
          var mySwiper = new Swiper ('.swiper_blog-related', {
            // Optional parameters
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0,
            slidesPerView: 'auto'
          });
        });

      }
    },

    MagnificPopup: function(){

      if ($mp_single.exists() ) {
        // Single Image
        $('.mp_single-img').magnificPopup({
          type:'image',
          removalDelay: 300,

          gallery:{
            enabled:false
          },
          mainClass: 'mfp-fade',
          autoFocusLast: false,

        });
      };

      if ($mp_gallery.exists() ) {
        // Multiple Images (gallery)
        $('.mp_gallery').magnificPopup({
          type:'image',
          removalDelay: 300,

          gallery:{
            enabled:true
          },
          mainClass: 'mfp-fade',
          autoFocusLast: false,

        });
      };

      if ($mp_iframe.exists() ) {
        // Iframe (video, maps)
        $('.mp_iframe').magnificPopup({
          type:'iframe',
          removalDelay: 300,
          mainClass: 'mfp-fade',
          autoFocusLast: false,

          patterns: {
            youtube: {
              index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

              id: 'v=', // String that splits URL in a two parts, second part should be %id%
              // Or null - full URL will be returned
              // Or a function that should return %id%, for example:
              // id: function(url) { return 'parsed id'; }

              src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }
          },

          srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".

        });
      };
    },

    GoogleMap: function() {

      // Google Map
      if ( $gmap.exists()) {
        $gmap.each(function() {

          var $elem = $(this),
              mapAddress = $elem.attr('data-map-address') ? $elem.attr('data-map-address') : "New York, USA",
              mapZoom    = $elem.attr('data-map-zoom') ? $elem.attr('data-map-zoom') : "15",
              mapIcon    = $elem.attr('data-map-icon') ? $elem.attr('data-map-icon') : "images/gmap-icon.jpg",
              mapStyle   = $elem.attr('data-map-style');

          // Skins
          if ( mapStyle == 'light-dream') {
            // Skin: Light Dream
            var styles_output = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994			},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{				"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]

          } else if ( mapStyle == 'shades-of-grey') {
            // Skin: Shades of Grey
            var styles_output = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]

          } else if ( mapStyle == 'blue-water') {
            // Skin: Blue Water
            var styles_output = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]

          } else {
            // Skin: Ultra Light
            var styles_output = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
          }

          $elem.gmap3({
            zoom: Number(mapZoom),
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            address: mapAddress,
            styles: styles_output,
          })
          .marker({
            address: mapAddress,
            icon: mapIcon,
          });
        })
      }
    },

  };

  $(document).ready(function() {
    Core.initialize();
  });

})(jQuery);