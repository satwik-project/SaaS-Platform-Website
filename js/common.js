jQuery(document).ready(function($){
    // document start
     // Navbar
     $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
     $('.navbar-nav li .clickD').click(function(e) {
         e.preventDefault();
         var $this = $(this);
         if ($this.next().hasClass('show'))
            {
                $this.next().removeClass('show');
                $this.removeClass('toggled');
            } 
            else 
            {
                $this.parent().parent().find('.sub-menu').removeClass('show');
                $this.parent().parent().find('.toggled').removeClass('toggled');
                $this.next().toggleClass('show');
                $this.toggleClass('toggled');
            }
     });
    
     $(window).on('resize', function(){
         if ($(this).width() < 1025) {
             $('html').click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $(document).click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $('.navbar-nav').click(function(e){
                e.stopPropagation();
             });
         }
     });

    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html' ).toggleClass("open-nav");
    });
    
    // Navbar end
    
    
    // Sticky Nav
        $(window).scroll(function() {     
            var scroll = $(window).scrollTop();     
            if (scroll > 0) { 
                $(".main-head").addClass("fixed"); 
            } 
            else {
            $(".main-head").removeClass("fixed"); 
            }
        })

        $('.js-banner').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false
                  }
                }
              ]
          });

        //   counter

        var counted = 0;
        $(window).on("scroll", function () {
            var $counter = $("#counter");
        
            if ($counter.length) { // Ensure #counter exists before proceeding
                var oTop = $counter.offset().top - window.innerHeight;
        
                if (counted == 0 && $(window).scrollTop() > oTop) {
                    $(".count").each(function () {
                        var $this = $(this),
                            countTo = $this.attr("data-count");
                        $({ countNum: $this.text() }).animate(
                            { countNum: countTo },
                            {
                                duration: 5000,
                                easing: "swing",
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum); // Ensure final value is exact
                                },
                            }
                        );
                    });
                    counted = 1;
                }
            }
        });

        $('.js-service-card').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

          $(".accordion-item:first .accordion-content").show();
          $(".accordion-item:first .accordion-header").addClass("active");
      
          $(".accordion-header").click(function () {
              var content = $(this).next(".accordion-content");
      
              // Toggle the clicked section without closing others
              content.slideToggle();
              $(this).toggleClass("active");
          });
      



          $(document).ready(function () {
            const $minSlider = $("#minRange");
            const $maxSlider = $("#maxRange");
            const $minLabel = $("#minLabel");
            const $maxLabel = $("#maxLabel");
            const $highlight = $(".range-highlight");

            function updateSliders() {
                let minValue = parseInt($minSlider.val());
                let maxValue = parseInt($maxSlider.val());

                // Prevent overlapping
                if (minValue >= maxValue - 100) {
                    minValue = maxValue - 100;
                    $minSlider.val(minValue);
                }

                if (maxValue <= minValue + 100) {
                    maxValue = minValue + 100;
                    $maxSlider.val(maxValue);
                }

                // Update price labels
                $minLabel.text(`₹ ${minValue.toLocaleString()}`);
                $maxLabel.text(`₹ ${maxValue.toLocaleString()}`);

                // Calculate percentages
                const minPercent = (minValue / $minSlider.attr("max")) * 100;
                const maxPercent = (maxValue / $maxSlider.attr("max")) * 100;

                // Position the labels
                $minLabel.css("left", `${minPercent}%`);
                $maxLabel.css("left", `${maxPercent}%`);

                // Update highlight track
                $highlight.css({
                    left: `${minPercent}%`,
                    width: `${maxPercent - minPercent}%`
                });
            }

            // Event Listeners
            $minSlider.on("input", updateSliders);
            $maxSlider.on("input", updateSliders);

            // Initialize
            updateSliders();
        });

        $(document).ready(function () {
            $(window).on("scroll", function () {
                var totalHeight = $(".main-head").outerHeight() + $(".inner-banner").outerHeight();
                var productEnd = $(".product-listing").offset().top + $(".product-listing").outerHeight();
                var scrollPos = $(window).scrollTop();

                if (scrollPos >= totalHeight && scrollPos < productEnd) {
                    $(".btn-filter-list").addClass("active");
                } else {
                    $(".btn-filter-list").removeClass("active");
                }
            });

            $('.btn-filter-list').click(function() {
                $(this).toggleClass('open');
                $('.prdc-col-left').toggleClass('active');
            })
        });

        if($("[data-fancybox]").length){ 
            Fancybox.bind("[data-fancybox]", {
            });
          }
    
    })