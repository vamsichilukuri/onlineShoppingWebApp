var mainProducts = [
  {
    price: 550,
    image: "../images/kids/kids1.jpeg",
  },
  {
    price: 950,
    image: "../images/kids/kids2.jpeg",
  },
  {
    price: 450,
    image: "../images/kids/kids3.jpeg",
  },
  {
    price: 550,
    image: "../images/kids/kids4.jpeg",
  },
  {
    price: 950,
    image: "../images/kids/kids5.jpeg",
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
  $(".kids-product-block").append(ulTag);
}
mainIteams();
