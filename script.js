document.querySelectorAll('.iconmusiques').forEach(function(iconmusiques) {
  var audio = new Audio(iconmusiques.dataset.audio);

  iconmusiques.addEventListener('click', function() {
    if (!audio.paused) {
      audio.pause();
      this.classList.remove('rotating');
    } else {
      audio.play();
      this.classList.add('rotating');
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

// script.js
const image = document.getElementById("img");

image.addEventListener("click", function() {
    if (image.style.filter === "blur(0px)") {
        image.style.filter = "blur(10px)";
    } else {
        image.style.filter = "blur(0px)";
    }
})

function toggleMoreContent(button) {
  let content = button.nextElementSibling;
  if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
};
