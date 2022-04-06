const myButton = document.querySelector('button');
const image = document.querySelector('img');
const img = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    
    let randomIndex = Math.floor(Math.random() *  img.length);
    console.log(randomIndex);
    image.src ="img/" + img[randomIndex];
}