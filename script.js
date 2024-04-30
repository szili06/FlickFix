const movie_count = 28;
const movie1 = document.querySelector(".image1");
const movie2 = document.querySelector(".image2");
const movie3 = document.querySelector(".image3");
const movie4 = document.querySelector(".image4");
const movie5 = document.querySelector(".image5");
const movie6 = document.querySelector(".image6");
const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const title5 = document.querySelector(".title5");
const title6 = document.querySelector(".title6");

let frequency = [];
const posters = [
    "src/poster/Poster (1).jpg",
    "src/poster/Poster (2).jpg",
    "src/poster/Poster (3).jpg",
    "src/poster/Poster (4).jpg",
    "src/poster/Poster (5).jpg",
    "src/poster/Poster (6).jpg",
    "src/poster/Poster (7).jpg",
    "src/poster/Poster (8).jpg",
    "src/poster/Poster (9).jpg",
    "src/poster/Poster (10).jpg",
    "src/poster/Poster (11).jpg",
    "src/poster/Poster (12).jpg",
    "src/poster/Poster (13).jpg",
    "src/poster/Poster (14).jpg",
    "src/poster/Poster (15).jpg",
    "src/poster/Poster (16).jpg",
    "src/poster/Poster (17).jpg",
    "src/poster/Poster (18).jpg",
    "src/poster/Poster (19).jpg",
    "src/poster/Poster (20).jpg",
    "src/poster/Poster (21).jpg",
    "src/poster/Poster (22).jpg",
    "src/poster/Poster (23).jpg",
    "src/poster/Poster (24).jpg",
    "src/poster/Poster (25).jpg",
    "src/poster/Poster (26).jpg",
    "src/poster/Poster (27).jpg",
    "src/poster/Poster (28).jpg"
];
const titles = [
    "12 Angry Men",
    "500 Days of Summer",
    "2001: a Space Odessey",
    "The Dictator",
    "About Time",
    "Ace Ventura",
    "IT",
    "Dr. Strangelove",
    "The Fast and the Furious",
    "How To Train Your Dragon",
    "The Lion King",
    "The Interview",
    "Jurassic Park",
    "Just Go With It",
    "Kill Bill vol. 1",
    "La La Land",
    "Soul",
    "Matrix",
    "Titanic",
    "Friday the 13th",
    "War for the Planet of the Apes",
    "The Shining",
    "First Blood",
    "A Nightmare on Elm Street",
    "The Shawshank Redemption",
    "Schindler's List",
    "Star Wars",
    "Terminator"
];
let random = Math.floor(Math.random() * movie_count);
movie1.style.backgroundImage = `url('${posters[random]}')`;
title1.textContent = titles[random];
frequency[random] = 1;
do{
    random = Math.floor(Math.random() * movie_count);
}while(frequency[random]);
movie2.style.backgroundImage = `url('${posters[random]}')`;
title2.textContent = titles[random];
frequency[random] = 1;
do{
    random = Math.floor(Math.random() * movie_count);
}while(frequency[random]);
movie3.style.backgroundImage = `url('${posters[random]}')`;
title3.textContent = titles[random];
frequency[random] = 1;
do{
    random = Math.floor(Math.random() * movie_count);
}while(frequency[random]);
movie4.style.backgroundImage = `url('${posters[random]}')`;
title4.textContent = titles[random];
frequency[random] = 1;
do{
    random = Math.floor(Math.random() * movie_count);
}while(frequency[random]);
movie5.style.backgroundImage = `url('${posters[random]}')`;
title5.textContent = titles[random];
frequency[random] = 1;
do{
    random = Math.floor(Math.random() * movie_count);
}while(frequency[random]);
movie6.style.backgroundImage = `url('${posters[random]}')`;
title6.textContent = titles[random];

let slideIndex = Math.ceil(Math.random() * 6);
const slides = document.getElementsByClassName("slide");
showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}