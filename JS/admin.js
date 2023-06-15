// fetch from localstorage
let products = JSON.parse(localStorage.getItem("products"));
    

// adding
// let saveProduct = document.querySelector("#addProduct");
let adminBody = document.querySelector("#adminContent");

// table
function display() {
  try {
    adminBody.innerHTML = "";
    if (!products || !products.length) throw "Please add products";
    products.forEach((product) => {
      adminBody.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name} </td>
                    <td>${product.category}</td>
                    <td>R${product.price}</td>
                    <td>
                    <span class="edit" data-bs-toggle="modal" data-bs-target="#editProduct${product.id}">Edit</span>
                    <span class="delete" onclick='deleteProduct(${JSON.stringify(product)})'>Delete</span>
                    </td>
                        <!-- Modal -->
                        <div class="modal fade" id="editProduct${
                          product.id
                        }" tabindex="-1" aria-labelledby="editProductLabel${
        product.id
      }" aria-hidden="true">
                            <div class="modal-dialog"> 
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editProductLabel${
                                    product.id
                                  }">Edit</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <form class="form g-2">
                                    <div class="container">
                                        <input class="form-control" type="text" placeholder="Enter the name of the book" value='${
                                          product.make
                                        }' name="Book-name" id="Book-name" required>
                                        <textarea class="form-control my-2" placeholder="Enter Author name" required name="author" id="author">${
                                          product.brand
                                        }</textarea>
                                        <input class="form-control" type="number" placeholder="Enter price" value='${
                                          product.price
                                        }' name="amount" id="amount" required>
                                        <input class="form-control my-2" type="text" placeholder="In what category" value='${
                                          product.category
                                        }' name="category" id="category" required>
                                    </div>
                                  </form>
                                </div>
                                <div class="modal-footer my-2">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCloseModal">Close</button>
                                  <button type="button" class="btn btn-success" onclick='new EditProduct(${JSON.stringify(
                                    product
                                  )})'>Save changes</button>
                                </div>
                              </div>
                            </div>
                        </div>        
                </tr>
            `;
    });
  } catch (e) {
    alert(e);
  }
}

display();

// editing already put items
class EditProduct {
    constructor(product) {
        this.id = product.id;
        this.name = document.querySelector(`#Book-name${product.id}`).value;
        this.brand = document.querySelector(`#brand${product.id}`).value;
        this.amount = document.querySelector(`#amount${product.id}`).value;
        this.category = document.querySelector(`#category${product.id}`).value;

        let itemIndex = product.findIndex((data) => {
            return data.id === product.id;
        });
        // Update
        product[itemIndex] = Object.assign({}, this);
        localStorage.setItem('products', JSON.stringify(product));
        display();
        location.reload();
    }
}

// Delete
function deleteProduct(product) {
    let index = product.findIndex(a => {
        return a.id == product.id
    });
    product.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(product));
    display();
}

// Adding new product
saveProduct.addEventListener('click', ()=>{
    try{
        const name = document.querySelector('#addName').value;
        const brand = document.querySelector('#addBrand').value;
        const amount = document.querySelector('#addPrice').value;
        const category = document.querySelector('#addCategory').value;

        let id = products.map(item=> item.id).at(-1) >= 1 ?
        products.map(product=> product.id).at(-1) : 0;
        id++;
        products.push({
            id,
            name,
            brand,
            amount,
            category
        });
        localStorage.setItem('products', JSON.stringify(Products));
        display();
    }catch(e) {
        alert(e);
    }

});

// Sorting
let sorting = document.querySelector("#sorting");
let isToggle = false;
sorting.addEventListener('click',()=>{
    if(!isToggle) {
      products.sort((a, b)=> a.id - b.id);
      sorting.textContent = "Sorted by asc (ID)";
      isToggle = true;
    }else {
      products.sort((a, b)=> b.id - a.id);
      sorting.textContent = "Sorted by desc (ID)";
      isToggle = false;
    }
    display();
})





