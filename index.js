const btnPlus = document.querySelectorAll(".plus");
const btnMinus = document.querySelectorAll(".minus");
const btnDelete = document.querySelectorAll(".delete");
const btnLike = document.querySelectorAll(".like");
const chekboxtag = document.getElementsByClassName("check");

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
  chekboxtag[i].addEventListener("click", totelprice);
  btnMinus[i].addEventListener("click", decrement);
  btnDelete[i].addEventListener("click", deleted);
  btnLike[i].addEventListener("click", wishlist);
}

function increment(event) {
  var btnplus = event.target;
  var divElt = btnplus.parentElement;
  var quentitytag = divElt.querySelector("p");
  quentityvalue = Number(quentitytag.innerHTML);
  quentityvalue++;
  quentitytag.innerHTML = quentityvalue;

  var trElt = divElt.parentElement.parentElement;
  var unitpricevalue = Number(trElt.querySelector(".unitePrice").innerHTML);
  var pricetag = trElt.querySelector(".price");
  var pricevalue = Number(pricetag.innerHTML);
  pricevalue = quentityvalue * unitpricevalue;
  pricetag.innerHTML = pricevalue;
}

function decrement(event) {
  var btnminus = event.target;
  var divElt = btnminus.parentElement;
  var quentitytag = divElt.querySelector("p");
  quentityvalue = Number(quentitytag.innerHTML);
  if (quentityvalue > 0) {
    quentityvalue--;
  }
  quentitytag.innerHTML = quentityvalue;
  var trElt = divElt.parentElement.parentElement;
  var unitpricevalue = Number(trElt.querySelector(".unitePrice").innerHTML);
  var pricetag = trElt.querySelector(".price");
  var pricevalue = Number(pricetag.innerHTML);
  pricevalue = quentityvalue * unitpricevalue;
  pricetag.innerHTML = pricevalue;
}
// fonction wishlist
function wishlist(event) {

    var btnlike = event.target;
    if(btnlike.style.color==="gray"){
        btnlike.style.color = "red";
    }
    else {
        btnlike.style.color = "gray";
    } 
  }
// fonction delete
function deleted(event) {
  var btndelete = event.target;
  var tdElt = btndelete.parentElement.parentElement.parentElement;
  var trElt = tdElt.parentElement;
  trElt.remove();
}
//totale price
function totelprice(e) {
  checkbox = e.target;
  var pricevalue = Number(
    checkbox.parentElement.parentElement.querySelector(".price").innerHTML
  );
  var totaltag = document.getElementById("total");
  var totalvalue = Number(totaltag.innerHTML);
  var btnPluss = checkbox.parentElement.parentElement.querySelector(".plus");
  var btnMinuss = checkbox.parentElement.parentElement.querySelector(".minus");
  if (checkbox.checked === true) {
    totalvalue += pricevalue;
    btnPluss.setAttribute("disabled", true);
    btnMinuss.setAttribute("disabled", true);
  } else {
    totalvalue -= pricevalue;
    btnPluss.removeAttribute("disabled");
    btnMinuss.removeAttribute("disabled");
  }
  totaltag.innerHTML = totalvalue;
}
