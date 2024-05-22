let productdata=[]
function fetchapi() {
  fetch("http://localhost:3000/ATLAS")
    .then((res) => res.json())
    .then((data) =>{
      productdata=data
      CardList(data)
    })
    .catch((err) => console.log(err))
}
fetchapi()

function CardList(data) {
  let store = data.map((el) => SignleCard(el.image, el.price, el.tittle))
  console.log(store)
  document.getElementById("container").innerHTML = store.join("");
}

function SignleCard(image, price, tittle) {
  let card = `
    <div class="box">
      <div class="image-hover">
        <img src="${image[0]}" alt="" height="300" width="300" id="i1" class="front-image">
        <img src="${image[1]}" alt="" height="300" width="300" class="back-image">
      </div>
      <div style="background-color:#E7EAE9; width:300px;text-align:center" class="p-1 mb-5">
        <h4 style="text-transform: uppercase;">${tittle}</h3>
        <p class="fw-bold price-product">${price}</p>
        <button class="btn mb-1 cart-btn" style="background-color:#F4E967;">ADD TO CART</button>
      </div>
    </div>
    `;

  return card;
}
let dataformAtlas=new URLSearchParams(window.location.search)
window.addEventListener("load",()=>{
  setTimeout(()=>{
    let filtterdata=productdata.filter((el)=>el.catagory===dataformAtlas.get("catagory"))
 if(dataformAtlas.get("catagory")=="ATLAS"){
  CardList(filtterdata);
  document.getElementById("lists").innerText=dataformAtlas.get("name")
 }
 else if(dataformAtlas.get("catagory")=="ARUSHA"){
  CardList(filtterdata);
  document.getElementById("lists").innerText=dataformAtlas.get("name1")
 }
 else if(dataformAtlas.get("catagory")=="KASAI"){
  CardList(filtterdata);
  document.getElementById("lists").innerText=dataformAtlas.get("name2")
 }
 else if(dataformAtlas.get("catagory")=="BINI"){
  CardList(filtterdata);
  document.getElementById("lists").innerText=dataformAtlas.get("name3")
 }
 else if(dataformAtlas.get("catagory")=="L'ICONIQUE"){
  CardList(filtterdata);
  document.getElementById("lists").innerText=dataformAtlas.get("name4")
 }
 else if(dataformAtlas.get("catagory")=="SAHARA"){
  CardList(filtterdata);
  document.getElementById("lists").innerText=dataformAtlas.get("name5")
 }
 else if(dataformAtlas.get("catagory")=="AKANDA"){
  CardList(filtterdata);
  document.getElementById("lists").innerText=dataformAtlas.get("name6")
 }
 else
 {
  fetchapi()
 }
  },500)
})




