$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }

  // aos
  AOS.init({
    disable: "mobile",
    once: true,
    mirror: false,
    duration: 700,
  });

  // particles

  particlesJS.load(
    "particles-js",
    "./js/vendor/particles.json",
    function () {}
  );

  function duplicateArray(array, count=2) {
    return Array(count).fill(array).flat();
  }

  let typed_strings = [
    "Software Engineer",
    "Front-End Developer",
    "Python Developer",
    "Javascript Developer",
  ]

  // typed
  var typed = new Typed("#job", {
    strings: duplicateArray(typed_strings, 50),
    typeSpeed: 40,
    backSpeed: 25,
    startDelay: 1500,
    loop: true,
    backDelay: 1000,
  });

  //parallax

  var scenes = document.querySelectorAll(".scene");
  scenes.forEach((e) => {
    new Parallax(e, {
      relativeInput: true,
      clipRelativeInput: true,
    });
  });

  //email
  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    window.open(
      `mailto:gluturus22@gmail.com?subject=${subject}&body=${message}`
    );
  });

  let flag2 = true;
  function changeSlide() {
    if (window.innerWidth <= 992 && flag2) {
      $(".swiper-container-here").addClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").addClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").addClass("swiper-slide");

      //swiper
      var mySwiper2 = new Swiper(".s-swiper-container", {
        direction: "horizontal",
        loop: true,
        updateOnWindowResize: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: false,
        allowTouchMove: false,

        breakpoints: {
          768: {
            slidesPerView: 3,
            allowTouchMove: true,
            autoplay: {
              delay: 4000,
            },
          },
          576: {
            slidesPerView: 2,
            allowTouchMove: true,
            autoplay: {
              delay: 4000,
            },
          },
          0: {
            slidesPerView: 1,
            allowTouchMove: true,
            autoplay: 4000,
          },
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      if (window.innerWidth <= 992 && $(".s-swiper-container").length) {
        setInterval(function () {
          mySwiper2.forEach((element) => {
            element.slidePrev();
          });
        }, 4000);
      }

      flag2 = !flag2;
    } else if (window.innerWidth > 992 && !flag2) {
      $(".swiper-container-here").removeClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").removeClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").removeClass(
        "swiper-slide"
      );

      flag2 = !flag2;
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);
});
