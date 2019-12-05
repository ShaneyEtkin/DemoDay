function one() {
  findout("myDIV1");
}

function two() {
  findout("myDIV2");
}


function three() {
  findout("myDIV3");
}

function four() {
  findout("myDIV4");
}


function five() {
  findout("myDIV5");
}

function findout(questionname) {
  console.log()
  var x = document.getElementById(questionname);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}