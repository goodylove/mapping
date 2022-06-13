let lapTop = [
   {
      Name: "elitebook",
      model: "8440p",
      favColor:["black","white","gray"],
      amount:"$230,000",
      productionYear:"2015",
      storage: "64ram",
      photo: "imgae/4.webp"
    },
  {
    Name: "elitebook",
    model: "8440p",
    amount:"$400,00",
    productionYear: "2015",
    storage: "64ram",
    photo: "imgae/1.webp"
  },
  {
   Name: "elitebook",
   model: "8440p",
   favColor:["black","white","gray"],
   amount:"$230,000",
   productionYear:"2015",
   storage: "64ram",
   photo: "imgae/4.webp"
 },

  {
    Name: "markbook",
    model: "4440p",
    amount:"$300,00",
    favColor:["black","blue","gray"],
    productionYear: "2017",
    storage: "16ram",
    photo: "imgae/2.jpeg",
  },

  {
    Name: "Dell",
    model: "6240p",
    amount:"$100,00",
    productionYear: "2004",
    storage: "34ram",
    favColor:["black","pink","gray"],
    photo: "/imgae/5.webp"
    
  },

  {
    Name: "elitebook",
    model: "8440p",
    favColor:["black","white","gray"],
    amount:"$230,000",
    productionYear:"2015",
    storage: "64ram",
    photo: "imgae/4.webp"
  },

  {
    Name: "microsoft",
    model: "10440p",
    amount:"$200,000",
    productionYear: "2021",
    storage: "64ram",
    photo: "/imgae/5.webp"
  },
  {
   Name: "elitebook",
   model: "8440p",
   favColor:["black","white","gray"],
   amount:"$230,000",
   productionYear:"2015",
   storage: "64ram",
   photo: "imgae/4.webp"
 },
]
function getAge(lapAge) {
   let currentYear = new Date().getFullYear();
   let age = currentYear-lapAge
   if(age <2){
      return`${age}year old`
   }
   else{
      return `${age }years old`
   }
}



function fvcolor(f) {
   if(f==undefined){
      return  "No favorite color"
   }
   else{
      return f 
   }
   
}

let lapStore = lapTop.map(function (v) {
  return `<div class="lap-content">
   <div class="lap-img">
   <img class="img-laptop" src= ${v.photo}>
   </div>
   <div class="info">
<p>Name:${v.Name}</p>
<p>Model:${v.model}</p>
<p>Amount:${v.amount}</p>
<p>Production:${getAge(v.productionYear)}</p>
<p>Storage:${v.storage}</p>
<p>Favoritecolor:${fvcolor(v.favColor)}</p>
   </div>
   </div>`
})
let laptop = document.querySelector(".laptops");

laptop.innerHTML = `<div class="page-container">
<h3>Welcome to  laptop store</h3>
     <div class="lapto-cont">
     ${lapStore}
     </div>
</div>`
