var photo = document.querySelector("#img");

setInterval(() => {

  if (photo.src.includes("/assets/img/toksProfile.jpg") ) {
    photo.src = "./assets/img/toks-skydive.jpg"
  }
  else {
    photo.src = "./assets/img/toksProfile.jpg";
  }

}, 4000);