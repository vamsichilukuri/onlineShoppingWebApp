var mainProducts = [
  {
    price: 550,
    image: "../images/mens/menshirt1.jpg",
  },
  {
    price: 950,
    image: "../images/mens/menshirt2.jpg",
  },
  {
    price: 450,
    image: "../images/mens/menshirt3.jpg",
  },
  {
    price: 550,
    image: "../images/mens/menshirt4.jpg",
  },
  {
    price: 950,
    image: "../images/mens/menshirt5.jpg",
  },
];
var mainIteams = () => {
  for (let i = 0; i < mainProducts.length; i++) {
    productsList(mainProducts[i]);
  }
};

function productsList(data) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${data.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", data.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".men-product-block").append(ulTag);
}
mainIteams();
