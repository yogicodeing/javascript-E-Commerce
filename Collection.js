let productContainer = document.getElementById("product");
let search = document.getElementById("search");
let productList = productContainer.querySelectorAll("div");

search.addEventListener('keyup',(event)=>{
   let enteredValue = event.target.value.toUpperCase();
   for(count=0; count<productList.length; count++){
      let productName = productList[count].querySelector("p").textContent
      if(productName.toLowerCase().indexOf(enteredValue)<0){
        productList[count].style.display="none"
      }else{
        productList[count].style.display="block"
      }
   }
})


