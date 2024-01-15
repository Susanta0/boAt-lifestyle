let addCart = document.querySelector(".fa-bag-shopping");
// let body = document.querySelector("#addcart")
let openPopup = document.querySelector("#addcart");

addCart.addEventListener("click", function () {
  openPopup.style.right = "0";
  document.body.classList.add("freeze-scroll");

  document.addEventListener("click", function (event) {
    if (!openPopup.contains(event.target) && event.target !== addCart) {
      openPopup.style.right = "-400px";
      document.body.classList.remove("freeze-scroll");
    }
  });
});

// Your JSON data
const productsData = [
  {
    id: 1,
    name: "Airdopes 131",
    price: 849,
    image: "/pic/firstrow-1.webp",
  },
  {
    id: 2,
    name: "Airdopes 161",
    price: 999,
    image: "/pic/firstrow-2.webp",
  },
  {
    id: 3,
    name: "Rockerz 235 V2",
    price: 999,
    image: "/pic/firstrow-3.webp",
  },
  {
    id: 4,
    name: "Airdopes 141",
    price: 1299,
    image: "/pic/firstrow-4.webp",
  },
  {
    id: 5,
    name: "Stone 750",
    price: 2199,
    image: "/pic/Stone_750.webp",
  },
  {
    id: 6,
    name: "Lunar Peak",
    price: 2699,
    image: "/pic/Lunar_Peak.webp",
  },
  {
    id: 7,
    name: "Rockerz 110",
    price: 1299,
    image: "/pic/Rockerz_110.webp",
  },
  {
    id: 8,
    name: "Aavante Bar Azure",
    price: 14999,
    image: "/pic/home.png",
  },
  {
    id: 9,
    name: "Airdopes 161",
    price: 999,
    image:"/pic/firstrow-2.webp"
  },
  {
    id: 10,
    name: "Airdopes 131 PRO",
    price: 999,
    image:"/pic/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.webp"
  },
  {
    id: 11,
    name: "Wave Flex Connect",
    price: 1499,
    image:"/pic/Wave_Flex_Connect.webp"
  },
  {
    id: 12,
    name: "Aavante Bar Azure",
    price: 1299,
    image:"/pic/firstrow-4.webp"
  },
  {
    id: 13,
    name: "Aavante Bar 1150",
    price: 5299,
    image:"https://www.boat-lifestyle.com/cdn/shop/products/aavante-bar-1160-1_1cd9e34a-6cb5-475e-abd8-3af626084116_300x.png?v=1629091898"
  },
  {
    id: 14,
    name: "Aavante Bar Raga",
    price: 5499,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB_Aspire.jpg?v=1698652468"
  },
  {
    id: 15,
    name: "Avante Bar Rhythm",
    price: 4999,
    image:"https://www.boat-lifestyle.com/cdn/shop/products/FIABTune01_300x.png?v=1677749072"
  },
  {
    id: 16,
    name: "Aavante 3150D",
    price: 11999,
    image:"https://www.boat-lifestyle.com/cdn/shop/files/AavanteBar480_300x.png?v=1697708997"
  },
  {
    id: 17,
    name: "Airdopes Atom 81",
    price: 1099,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Atom_81.jpg?v=1688452928"
  },
  {
    id: 18,
    name: "Airdopes 115",
    price: 1299,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-115_1.jpg?v=1686139410"
  },
  {
    id: 19,
    name: "Airdopes 191G",
    price: 1399,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/191G_1.gif?v=1686650191"
  },
  {
    id: 20,
    name: "Airdopes 383",
    price: 2999,
    image:"https://www.boat-lifestyle.com/cdn/shop/products/airdopes-383-black_300x.png?v=1613457326"
  },
  {
    id: 21,
    name: "Wave Call",
    price: 1699,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call__1.jpg?v=1689751649"
  },
  {
    id: 22,
    name: "Storm Call",
    price: 1499,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call.jpg?v=1682408982"
  },
  {
    id: 23,
    name: "Lunar Connect",
    price: 1799,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Connect.jpg?v=1686904362"
  },
  {
    id: 24,
    name: "Wave Lite",
    price: 1799,
    image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave-Lite.jpg?v=1682408982"
  },
  {
    id: 25,
    name: "Dual Rapid-Qc Car Charger 3.0 F Nc",
    price: 499,
    image:"https://www.boat-lifestyle.com/cdn/shop/products/qc-pd_main_mu_300x.png?v=1627301901"
  },
  {
    id: 26,
    name: "3A Qualcomm 3.0 Turbo Car Charger",
    price: 499,
    image:"https://www.boat-lifestyle.com/cdn/shop/products/qc-pd_main_TC_300x.png?v=1627302470"
  },
  {
    id: 27,
    name: "Dual Rapid-Qc 3.0 Car Charger F Type C Black",
    price: 499,
    image:"https://www.boat-lifestyle.com/cdn/shop/products/qc-pd_main_300x.png?v=1627300709"
  },
  {
    id: 28,
    name: "Dual Port Rapid Car Charger (Qualcomm...)",
    price: 599,
    image:"https://www.boat-lifestyle.com/cdn/shop/products/car-charger-main-image_300x.png?v=1613736643"
  }
];

//add a product to the cart
function addToCart(productId) {
  // Retrieve the product data based on the product ID
  const product = productsData.find((item) => item.id === productId);

  // Get existing cart data from local storage
  const existingCart = JSON.parse(localStorage.getItem("listCart")) || [];

  // Add the product to the cart
  existingCart.push(product);

  // Save the updated cart back to local storage
  localStorage.setItem("listCart", JSON.stringify(existingCart));

  // Update the cart display
  updateCartDisplay();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  // Get existing cart data from local storage
  const existingCart = JSON.parse(localStorage.getItem("listCart")) || [];

  // Find the index of the product with the given ID in the cart
  const productIndex = existingCart.findIndex((item) => item.id === productId);

  // Remove the product from the cart if found
  if (productIndex !== -1) {
    existingCart.splice(productIndex, 1);

    // Save the updated cart back to local storage
    localStorage.setItem("listCart", JSON.stringify(existingCart));

    // Update the cart display
    updateCartDisplay();
  }
}

// to update the cart display
function updateCartDisplay() {
  const cartDiv = document.getElementById("listCart");
  const cartItems = JSON.parse(localStorage.getItem("listCart")) || [];

  // Clear the current content of the cart
  cartDiv.innerHTML = "";

  // Display each item in the cart
  cartItems.forEach((item) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = `Name:- ${item.name}`;
    h3.style.fontSize = "14px";
    let img = document.createElement("img");
    img.src = item.image;
    img.style.width = "100px";
    img.style.margin = "10px 0px";
    let price = document.createElement("p");
    price.innerText = `₹ ${item.price}`;
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.style.padding = "2px 20px";

    // remove button
    removeButton.addEventListener("click", () => {
      removeFromCart(item.id);
    });

    div.append(h3, img, price, removeButton);
    cartDiv.append(div);
  });
}
updateCartDisplay();

// remove card div
let addCartDiv = document.querySelector("#addcart");
let closeCart = document.querySelector(".croseCar");
closeCart.addEventListener("click", function () {
  openPopup.style.right = "-400px";
});
