const categories = [
    {
      id: 1,
      img:
        "https://i.postimg.cc/QxBkFz8p/cover.jpg",
      name: "Eyeshadows",
      link: "",
      quantity: 1,
    },
    {
      id: 2,
      img:
        "https://i.postimg.cc/5ygGjRfc/cover444.jpg",
      name: "Foundation",
      link: "",
      quantity: 2,
    },
    {
      id: 3,
      img:
        "https://i.postimg.cc/JhRpHQdM/999.jpg",
      name: "Concealers",
      link:"",
      quantity: 3,
    },
   
  ];
  
  let dispCategories = document.getElementById("categories");
   categories.forEach((data) => {
    dispCategories.innerHTML += `
    <div class="container">
    <div class="card" style="width: 18rem; ">
    <img src="${data.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <a href="${data.link}" class="btn">${data.name}</a>
    </div>
  </div><br>
  </div>`;
  });
  
  