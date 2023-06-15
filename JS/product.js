let products = [
  {
    id: 1,
    name: " MAC foundation ",
    img: "https://i.postimg.cc/4d3S1q9W/mac-fondation-b.jpg",
    price: "2500",
    category: "Foundation",
  },

  {
    id: 2,
    name: "Revlon foundation  ",
    img: "https://i.postimg.cc/bwTHDQPH/revelon-fondation.jpg",
    price: "1000",
    category: "Foundation",
  },

  {
    id: 3,
    name: "Maybelline foundation ",
    img: "https://i.postimg.cc/XN2PXHdL/REvelon-concealer.webp",
    price: "850",
    catergory: "Foundation",
  },

  {
    id: 4,
    name: " NYX foundation",
    img: "https://i.postimg.cc/wMvfkWwc/nyx-fond.jpg",
    price: "2500",
    catergory: "Foundation",
  },

  {
    id: 5,
    name: " MAC foundation ",
    img: "https://i.postimg.cc/4d3S1q9W/mac-fondation-b.jpg",
    price: "2500",
    category: "Foundation",
  },

  {
    id: 6,
    name: "Revlon Eyeshadow ",
    img: "https://i.postimg.cc/Ls0WJS4t/rr.png",
    price: "1000",
    category: "Eyeshadow",
  },

  {
    id: 7,
    name: "Maybelline Eyeshadow",
    img: "https://i.postimg.cc/CLfQdX9D/55.webp",
    price: "850",
    category: "Eyeshadow",
  },

  {
    id: 8,
    name: " NYX Eyeshadow",
    img: "https://i.postimg.cc/hPfqs26P/11t.webp",
    price: "2000",
    category: "Eyeshadow",
  },

  {
    id: 9,
    name: "Maybelline Eyeshadow",
    img: "https://i.postimg.cc/nhWrTs0N/mayibilieb-eyeshadow-palette.jpg",
    price: "R850",
    category: "Eyeshadow",
  },

  {
    id: 10,
    name: " NYX Eyeshadow",
    img: "https://i.postimg.cc/LXLJJHkw/nyx-eyeshadow.jpg",
    price: "1200",
    category: "Eyeshadow",
  },
  {
    id: 11,
    name: " MAC Concealer ",
    img: "https://i.postimg.cc/L5kgbHnL/macp.png",
    price: "1500",
    category: "Concealer",
  },
  {
    id: 12,
    name: " Maybelline concealer",
    img: "https://i.postimg.cc/85HygVJQ/may2.jpg",
    price: "2500",
    category: "Concealer",
  },
  {
    id: 13,
    name: " Maybelline concealer ",
    img: "https://i.postimg.cc/prMP4zF1/maybelline.png",
    price: "2500",
    category: "Concealer",
  },
  {
    id: 14,
    name: " MAC concealer ",
    img: "https://i.postimg.cc/bY5JHSrb/mac-con.webp",
    price: "2500",
    category: "Concealer",
  },
  {
    id: 15,
    name: " Revlon Eyeshadow ",
    img: "https://i.postimg.cc/Ssxzv0cv/rev.jpg",
    price: "R2500",
    category: "Concealer",
  },
  {
    id: 16,
    name: " Revlon Eyeshadow",
    img: "https://i.postimg.cc/mgc4Vmcy/download-1.jpg",
    price: 2500,
    category: "Concealer",
  },
];

function displayProducts(category = "") {
  const ourProducts = document.getElementById("products");
  ourProducts.innerHTML = "";
  products.forEach((data) => {
    if (category === "" || data.category === category) {
      let productElement = document.createElement("div");
      productElement.innerHTML = `
        <img src="${data.img}" alt="${data.name}" id="product-img">
        <h3>${data.name}</h3>
        <p>R${data.price}</p>
        <button onclick="addToCart(${data.id})" class="btn add-btn button">Add To Cart</button>`;
      ourProducts.appendChild(productElement);
    }
  });
}
displayProducts();

function filterByCategory() {
  const selectCategory = document.getElementById("category");
  const selectedCategory = selectCategory.value;
  displayProducts(selectedCategory);
}




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
// function displayProducts(category = "") {
//   const ourProducts = document.getElementById("1st-products");
//   ourProducts.innerHTML = "";
//   myProducts.forEach((product) => {
//     if (category === "" || product.category === category) {
//       const productElement = document.createElement("div");
//     productElement.innerHTML += `
//   <div class="card">
//       <div>
//         <img src="${product.image}" alt="${product.name}">
//       </div>
//       <div class="details">
//       <div class="min-details">
//       <h1>${product.name}<span>${product.name}</span></h1>
//       <h1 class="price"> R ${product.price}</h1>
//       </div>

//       <div class="options">
//       <div class="description">
//       </div>
//       </div>
//       <button onclick="addToCart(${product.id})" class="cart-btn">Add to cart</button> 
//       </div>
//   </div>`;
//     ourProducts.appendChild(productElement);
//     console.log(productElement);
//     }
//   });
// }
displayProducts();