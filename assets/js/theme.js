jQuery(".banner-slider-main").slick({
  dots: true,
  infinite: true,
  arrows: true,
  autoplay: true,
autoplaySpeed: 2000,
speed:1500,
  slidesToShow: 1,
 pauseOnHover:false,
 prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
 nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  slidesToScroll: 1,
   responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
  autoplay: false,
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

// Interiors-designers-slider

jQuery(".Interiors-designers-slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
autoplaySpeed: 2000,
speed:1500,
  slidesToShow: 3,
 pauseOnHover:false,
 prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
 nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  slidesToScroll: 1,
   responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
  autoplay: false,
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


// .......Testimonials....
	jQuery(".Testimonials-main").slick({
    dots: true,
	arrows:false,	
    infinite: true,
    autoplay: false,
	autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
     responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


const modal = document.getElementById('imageModal');


const modalImg = document.getElementById('modalImage');

const galleryItems = document.querySelectorAll('.gallery-item img');


galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    modal.style.display = 'flex'; 
    modalImg.src = this.src; 
  });
});


function closeModal() {
  modal.style.display = 'none'; 
}

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});


jQuery('.hamburger').click(function(){
	jQuery('.mobile-menu').addClass('active');
});


jQuery('.Close-menu').click(function(){
	jQuery('.mobile-menu').removeClass('active');
});


jQuery('#sub-menu-drop').click(function() {
  jQuery('.sub-menu1').toggleClass('active');
});
jQuery('#sub-menu-drop-2').click(function() {
  jQuery('.sub-menu-2').toggleClass('active');
});

jQuery('#inner-menu-drop').click(function() {
  jQuery('.inner-sub-menu').toggleClass('active');
});

jQuery('#inner-menu-drop2').click(function() {
  jQuery('.inner-sub-menu2').toggleClass('active');
});
jQuery('#inner-menu-drop3').click(function() {
  jQuery('.inner-sub-menu3').toggleClass('active');
});
jQuery('#inner-menu-drop4').click(function() {
  jQuery('.inner-sub-menu4').toggleClass('active');
});
jQuery('#inner-menu-drop5').click(function() {
  jQuery('.inner-sub-menu5').toggleClass('active');
});









