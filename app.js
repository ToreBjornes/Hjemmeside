

//Velkommen
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var image = document.getElementById("image");
var description = document.getElementById("description");
var currentImage = 0;

//Image array

var images = [
  {
    link: "image/img_01.jpg",
    text: "Stor gjeng samlet i Haugesgate"
  },
  {
    link: "image/img_02.jpg",
    text: "Ladys section"
  },
  {
    link: "image/img_03.jpg",
    text: "Smil til fotografen"
  },
  {
    link: "image/img_04.jpg",
    text: "Skål da jenter!"
  },
  {
    link:"image/Utestue_01.jpg",
    text:"Utestua mi"
  }
];

//next eventhandler

next.addEventListener("click", function(){
  currentImage = currentImage + 1;
  if(currentImage === images.length){
    currentImage = 0;
  }
  image.src = images[currentImage].link;
  description.textContent = images[currentImage].text;
});

//prev eventhandler
prev.addEventListener("click", function(){
  currentImage = currentImage - 1;
  if(currentImage === -1){
    currentImage = images.length -1;
  }
  image.src = images[currentImage].link;
  description.textContent = images[currentImage].text;
});
