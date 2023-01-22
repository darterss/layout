const photo = ['table', 'window', 'table1'];  /////////////////////////Slider for section-sec mobile
let index = 0;
const mobileImage = document.getElementById('mobile-image');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');

prevSlide.addEventListener('click', prevImage);
function prevImage(){
    if (index >= 1)  index--;
    else index = (photo.length-1);
    mobileImage.src = `Images/${photo[index]}.jpg`;
}
nextSlide.addEventListener('click', nextImage);
function nextImage(){
    if (index < (photo.length-1))  index++;
    else index = 0;
    mobileImage.src = `Images/${photo[index]}.jpg`;
}