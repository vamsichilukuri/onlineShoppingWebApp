var womensProducts = [
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women1.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women2.jpeg",
  },
  {
    price: 450,
    image: "../images/women/women3.jpeg",
  },
  {
    price: 550,
    image: "../images/women/women4.jpeg",
  },
  {
    price: 950,
    image: "../images/women/women5.jpeg",
  },
];
var womensIteams = () => {
  for (let i = 0; i < womensProducts.length; i++) {
    productsList(womensProducts[i]);
  }
};
function productsList(data) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${data.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var li4 = $("<li></li>").text("Women's Regular fit T-Shirt (Pack of 3)");
  var li5 = $("<li.</li>").text(
    "FREE Delivery over ₹499. Fulfilled by Amazon."
  );
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", data.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3, li4, li5);
  $(".womens-wear-block").append(ulTag);
}
womensIteams();
