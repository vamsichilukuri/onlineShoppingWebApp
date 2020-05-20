var mainProducts = [
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
var mainIteams = () => {
  for (let i = 0; i < mainProducts.length; i++) {
    productsList(mainProducts[i]);
  }
};
function productsList(data) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${data.price}`);
  var li2 = $("<li></li>");
  var imgTag = $("<img>").attr("src", data.image);
  li2.append(imgTag);
  ulTag.append(li2, li1);
  $(".women-product-block").append(ulTag);
}
mainIteams();
