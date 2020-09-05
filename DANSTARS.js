   
   $(document).ready(function()
   {
      $("a[href*='#welcome']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_welcome').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_about').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#infoBlock1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_infoBlock1').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#services').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#chooseUs']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_chooseUs').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#testimonials']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#testimonials').offset().top }, 600, 'easeOutSine');
      });
      $("#testimonialsContainer").owlCarousel({autoplayTimeout:5000, margin: 0, autoplay: true, nav: false, loop: true, dots: true, items: 1, slideBy: 1});
      $("a[href*='#team']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#team').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#newsletter']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_newsletter').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#links']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top }, 600, 'easeOutSine');
      });
      $(document).on('click','.headerMenu-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_teamCard1,#wb_teamCard2,#wb_teamCard3,#wb_teamCard4').css('background-attachment', 'scroll');
      }
   });
