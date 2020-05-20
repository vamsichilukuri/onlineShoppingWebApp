var mobileProducts = [
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile1.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile2.jpeg",
  },
  {
    price: 450,
    image: "../images/mobiles/mobile3.jpeg",
  },
  {
    price: 550,
    image: "../images/mobiles/mobile4.jpeg",
  },
  {
    price: 950,
    image: "../images/mobiles/mobile5.jpeg",
  },
];
var mobileIteams = () => {
  for (let i = 0; i < mobileProducts.length; i++) {
    productsList(mobileProducts[i]);
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
  $(".mobiles-block").append(ulTag);
}
mobileIteams();
