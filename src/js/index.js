import $ from "jquery";

$(document).ready(function() {
  //Default Action
  $(".tab_content").hide(); //Hide all content
  $("ul.tabs li:first")
    .addClass("active")
    .show(); //Activate first tab
  $(".tab_content:first").show(); //Show first tab content

  //On Click Event
  $("ul.tabs li").click(function() {
    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tab_content").hide(); //Hide all tab content
    var activeTab = $(this)
      .find("a")
      .attr("href"); //Find the rel attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active content
    return false;
  });
});

function openTab(tab) {
  $("ul.tabs li").removeClass("active"); //Remove any "active" class
  $(tab).addClass("active"); //Add "active" class to selected tab
  $(".tab_content").hide(); //Hide all tab content
  var activeTab = $(tab)
    .find("a")
    .attr("href"); //Find the rel attribute value to identify the active tab + content
  $(activeTab).fadeIn(); //Fade in the active content

  // ToDo: anchor
}

$(document).ready(function() {
  var slides = document.querySelectorAll("#partners_slider .slide");
  console.log(slides);
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 3000);
  // var next = document.getElementById('next');
  // var previous = document.getElementById('previous');
  
  // next.onclick = function() {
  //  pauseSlideshow();
  //  nextSlide();
  // };

  // previous.onclick = function() {
  //  pauseSlideshow();
  //  previousSlide();
  // };
  $(".slide_1").click(function() {
    slideOne();
    $(".slide_1").addClass("active");
    $(".slide_2").removeClass("active");
  });
  $(".slide_2").click(function() {
    slideTwo();
    $(".slide_2").addClass("active");
    $(".slide_1").removeClass("active");
  });


  function slideOne() {
    goToSlide(0);
  }

  function slideTwo() {
    goToSlide(1);
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = "slide";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = "slide showing";
  }
  // var playing = true;
  // var pauseButton = document.getElementById("pause");

  // function pauseSlideshow() {
  //   pauseButton.innerHTML = "Play";
  //   playing = false;
  //   clearInterval(slideInterval);
  // }

  // function playSlideshow() {
  //   pauseButton.innerHTML = "Pause";
  //   playing = true;
  //   slideInterval = setInterval(nextSlide, 2000);
  // }

  // pauseButton.onclick = function() {
  //   if (playing) {
  //     pauseSlideshow();
  //   } else {
  //     playSlideshow();
  //   }
  // };
});
