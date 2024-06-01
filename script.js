document.querySelectorAll('img').forEach(function(img) {
  var audio = new Audio(img.dataset.audio);

  img.addEventListener('click', function() {
    if (!audio.paused) {
      audio.pause();
      this.classList.remove('rotate-right');
    } else {
      audio.play();
      this.classList.add('rotate-right');
    }
  });
});


document.querySelectorAll('.logo').forEach(function(logo) {
  var audio = new Audio('musique/prout.mp3');

  logo.addEventListener('click', function() {
      audio.play();
    });
});


function toggleMoreContent(button) {
  var moreContent = button.nextElementSibling;
  if (moreContent.classList.contains('hidden')) {
      moreContent.classList.remove('hidden');
  } else {
      moreContent.classList.add('hidden');
  }
}