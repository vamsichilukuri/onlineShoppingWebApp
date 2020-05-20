function readData() {
  var uname = $("#uname").val();
  var pwd = $("#pwd").val();

  if (uname == "vamsi" && pwd == "india") {
    loadPage();
  } else {
    alert("User Not Valid");
  }
}
function loadPage() {
  location.replace("../assets/user1.html");
}
