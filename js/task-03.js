const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const newGallery = document.querySelector("ul.gallery")

const newGalleryItem = images.forEach(el => {
  newGallery.insertAdjacentHTML("afterbegin",`
  <li class = "picture"> 
    <img src="${el.url}" alt="${el.alt}" width="300"/> 
  </li>`);
});

console.log(newGalleryItem);

const GalleryItem = document.querySelectorAll("ul.gallery>li.picture");
newGallery.style.gap = "20px";
newGallery.style.listStyle = "none";
newGallery.style.flexDirection = "column";
newGallery.style.display = "flex";
newGallery.style.alignItems = "center";
newGallery.style.justifyContent = "center";


const body = document.body;
console.log(body);

const goBack = body.firstElementChild;
console.log(goBack);

goBack.style.gap = "20px";
goBack.style.listStyle = "none";
goBack.style.flexDirection = "column";
goBack.style.display = "flex";
goBack.style.alignItems = "center";
goBack.style.justifyContent = "center";

