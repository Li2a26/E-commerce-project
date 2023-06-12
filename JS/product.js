let products = [
  {
    id: 1,
    name: " 35inch highlight fill frontal weave" ,
    img: "https://i.postimg.cc/X7NxjsCg/Highlight-Wig-Brown-Lace-Front-Human-Hair-Wigs-For-Women-Bone-Straight-13x4-Transparent-Lace-Frontal.webp",
    price: "R2000",
  },
  
  {
    id: 2,
    name: "4x4 frontal bob",
    img: "https://i.postimg.cc/3JYGJ60b/IMG-20230327-WA0124-76b5f201-e634-48e9-9dc9-67f7690bd2a8.webp",
    price: "R1500",
  },
  
  {
    id: 3,
    name: "30inch deepwave full frontal  ",
    img: "https://i.postimg.cc/25NzvLm2/688562873-max.jpg",
    price: "R8000",
  },
  
  {
    id: 4,
    name: "30inch full frontal kinky ",
    img: "https://i.postimg.cc/43fSrX1X/3.jpg",
    price: "R5000",
  },
  {
      id: 4,
      name: " 35inch Straight full frontal ",
      img: "https://i.postimg.cc/SNc95656/images-5.jpg",
      price: "R4000",
    },
    

];

let dispProduct = document.querySelector(".mbuwa");
products.forEach((data) => {
  dispProduct.innerHTML += `
    <div class= "card col productCard">
    <img src="${data.img}" class="">
    <h4 class="">${data.name}</h4>
    <h4 class="">${data.price}</h4>
    <div class="card-body">
    
    </div>
    </div>`
});
   