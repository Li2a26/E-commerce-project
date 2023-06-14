let products = [
  {
    id: 1,
    name: " MAC fondation ",
    img: "https://i.postimg.cc/4d3S1q9W/mac-fondation-b.jpg",
    price: "R2500",
    catergory: "Fondation",
  },

  {
    id: 2,
    name: "Revlon fondation  ",
    img: "https://i.postimg.cc/bwTHDQPH/revelon-fondation.jpg",
    price: "R1000",
    catergory: "Fondation",
  },

  {
    id: 3,
    name: "Maybelline foundation ",
    img: "https://i.postimg.cc/XN2PXHdL/REvelon-concealer.webp",
    price: "R850",
    catergory: "Fondation",
  },

  {
    id: 4,
    name: " NYX foundation",
    img: "https://i.postimg.cc/wMvfkWwc/nyx-fond.jpg",
    price: "R2500",
    catergory: "Fondation",
  },

  {
    id: 5,
    name: " MAC fondation ",
    img: "https://i.postimg.cc/4d3S1q9W/mac-fondation-b.jpg",
    price: "R2500",
    catergory: "Fondation",
  },

  {
    id: 6,
    name: "Revlon Eyeshadow ",
    img: "https://i.postimg.cc/Ls0WJS4t/rr.png",
    price: "R1000",
    catergory: "Eyeshadow",
  },

  {
    id: 7,
    name: "Maybelline Eyeshadow",
    img: "https://i.postimg.cc/CLfQdX9D/55.webp",
    price: "R850",
    catergory: "Eyeshadow",
  },

  {
    id: 8,
    name: " NYX Eyeshadow",
    img: "https://i.postimg.cc/hPfqs26P/11t.webp",
    price: "R2000",
    catergory: "Eyeshadow",
  },

  {
    id: 9,
    name: "Maybelline Eyeshadow",
    img: "https://i.postimg.cc/nhWrTs0N/mayibilieb-eyeshadow-palette.jpg",
    price: "R850",
    catergory: "Eyeshadow",
  },

  {
    id: 10,
    name: " NYX Eyeshadow",
    img: "https://i.postimg.cc/LXLJJHkw/nyx-eyeshadow.jpg",
    price: "R1200",
    catergory: "Eyeshadow",
  },
  {
    id: 11,
    name: " MAC Concealer ",
    img: "https://i.postimg.cc/L5kgbHnL/macp.png",
    price: "R1500",
    catergory: "Concealer",
  },
  {
    id: 12,
    name: " Maybelline concealer",
    img: "https://i.postimg.cc/85HygVJQ/may2.jpg",
    price: "R2500",
    catergory: "Concealer",
  },
  {
    id: 13,
    name: " Maybelline concealer ",
    img: "https://i.postimg.cc/prMP4zF1/maybelline.png",
    price: "R2500",
    catergory: "Concealer",
  },
  {
    id: 14,
    name: " MAC concealer ",
    img: "https://i.postimg.cc/bY5JHSrb/mac-con.webp",
    price: "R2500",
    catergory: "Concealer",
  },
  {
    id: 15,
    name: " Revlon Eyeshadow ",
    img: "https://i.postimg.cc/Ssxzv0cv/rev.jpg",
    price: "R2500",
    catergory: "Concealer",
  },
  {
    id: 16,
    name: " Revlon Eyeshadow",
    img: "https://i.postimg.cc/mgc4Vmcy/download-1.jpg",
    price: 2500,
    catergory: "Concealer",
  },
];

// let dispFondation= document.querySelector(".fond");
// Fondation.forEach((data) => {
//   dispFondation.innerHTML += `
//     <div class= "card productCard col-lg-3 col-md-3 col-12 mx-2 my-2">
//       <img src="${data.img}" class="">
//       <h4 class="">${data.name}</h4>
//       <h4 class="">${data.price}</h4>
//       <h4 class="">${data.catergory}</h4>
//       <button type="button" class="btn btn-primary  mx-5" data-bs-toggle="modal" data-bs-target="#myModal" id="cart-btn">
//       <img src="https://i.postimg.cc/xC5sY8MM/shopping-cart-xxl.png" width="25" height="25" class="d-inline-block rounded-circle me-2">
//        add to cart</button>
//       <div class="card-body">

//       </div>
//     </div>`
// });

let Cart = JSON.parse(localStorage.getItem("product")) || [];
function addToCart(productId) {
  let product = products.find((product) => product.id === productId);
  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  deletedProduct.quantity++;
  updateCart();
}
function updateCart() {
  let cartContainer = document.getElementById("cart-body1");
  localStorage.setItem("products", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    let cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
        <span>${product.name}</span>
        <span>${product.price}</span>
        <input type="number" placeholder="1" min="1" width="50px" height="40px">
        <p>Total ${product.price}</p>
        <button onclick="deleteFromCart(${index})" class="delbtn">Delete</button>`;
    cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += eval(item.price);
  });
  totalElement.textContent = `${total}`;
}

function displayProducts() {
  const ourProducts = document.getElementById("products");
  products.forEach((data) => {
    let productElement = document.createElement("div");
    productElement.innerHTML = `
      <img src="${data.img}" alt="${data.name}" id="product-img">
      <h3>${data.name}</h3>
      <p>R${data.price}</p>
      <button onclick="addToCart(${data.id})" class="btn add-btn">Add To Cart</button>`;
    ourProducts.appendChild(productElement);
  });
}
let cart = JSON.parse(localStorage.getItem("cart"));
if(!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}

const saveCart =  () => {
  localStorage.setItem("cart", JSON.stringify(cart))
}
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product ) {
    cart.push(product);
    product.quantity++;
    saveCart()
    updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  deletedProduct.quantity++;
  updateCart();
}
function updateCart() {
  let cartContainer = document.getElementById("cart-body1");
  localStorage.setItem("products", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    let cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
      <span>${product.name}</span>
      <span>${product.price}</span>
      <input type="number" placeholder="1" min="1" width="50px" height="40px">
      <p>Total ${product.price}</p>
      <button onclick="deleteFromCart(${index})" class="delbtn">Delete</button>`;
    cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += eval(item.price);
  });
  // totalElement.textContent = `<span>${total}</span>`;
}
displayProducts();
updateCart();
function checkout() {
  const modalFooter = document.querySelector(".modal-footer");
  modalFooter.innerHTML =  cart = [];
  updateCart();
}
function renderCartTotal() {
  let totalCartPrice = 0;
  totalCartAmount = 0;

  cart.forEach((item) => {
    totalCartPrice += item.price * item.numberOfUnits;
  });

  totalPriceEl.innerHTML = `Total Price: R${totalCartPrice.toFixed(2)}`;
}