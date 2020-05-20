var images = [
  {
    img: "./images/slideImg/img1.jpeg",
  },
  {
    img: "./images/slideImg/img2.jpeg",
  },
  {
    img: "./images/slideImg/img4.jpeg",
  },
  {
    img: "./images/slideImg/img5.jpeg",
  },
  {
    img: "./images/slideImg/img6.jpeg",
  },
  {
    img: "./images/slideImg/img7.jpeg",
  },

  {
    img: "./images/slideImg/img9.jpeg",
  },
  {
    img: "./images/slideImg/img11.jpeg",
  },
];

function indicators() {
  for (let i = 0; i < images.length; i++) {
    addImageToSlide(images[i], i);
  }
}
function addImageToSlide(imgUrl, index) {
  var liTag = $("<li></li>");
  liTag.attr("data-target", "#carouselExampleIndicators");
  liTag.attr("data-slide-to", index);
  if (index == 0) {
    liTag.attr("class", "active");
  }
  $(".carousel-indicators").append(liTag);
  var divTag = $("<div></div>").attr("class", "carousel-item");
  divTag.attr("data-interval", "2000");
  if (index == 0) {
    divTag.attr("class", "carousel-item active");
  }

  var imgTag = $("<img>").attr("src", imgUrl.img);
  imgTag.attr("class", "d-block w-100");
  divTag.append(imgTag);
  $(".carousel-inner").append(divTag);
}

indicators();
