var currentSlide = 1;
  var totalSlides = 2; // Update this value based on the total number of slides

  function changeSlide(direction) {
    if (direction === 'prev') {
      currentSlide = (currentSlide === 1) ? totalSlides : currentSlide - 1;
    } else {
      currentSlide = (currentSlide === totalSlides) ? 1 : currentSlide + 1;
    }

    var imagePath = 'assets/images/' + currentSlide + '.jpg';
    document.getElementById('slide1').querySelector('img').src = imagePath;
  }