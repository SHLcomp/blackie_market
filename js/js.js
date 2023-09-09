const search = () => {
    const searchBox = document.getElementById("searchbox").value.toUpperCase();
    const storeItems = document.getElementById("products");
    const product = document.querySelectorAll(".product");
    const pName = storeItems.getElementsByTagName("h1");

    for (var i=0; i < pName.length; i++){
        let match = product[i].getElementsByTagName('h1')[0];



        if(match){
          let textvalue =  match.textContent || match.innerHTML
          if(textvalue.toUpperCase().indexOf(searchBox) > -1) {
            product[i].style.display = "";
            console.log("found some itmes...")

          }else{
            product[i].style.display = "none";
            let displayPhrase = document.getElementById('noItemsPhrase').style.display = "flex";
            console.log("no items are here...")
           }
        }
    }

};
window.addEventListener('keyup', (event) =>{ // it's (event) not event
    if(event.key === 'Enter'){
        search()
    }
});





// burger

const burger = () =>{
   const burg = document.getElementById('burger');
   const ul = document.getElementsByTagName('ul')[0];
   burg.addEventListener('click',()=>{
    ul.style.display = "block";
    console.log("displayed ul.");
   });


    if(ul.style.display="block"){
      burg.addEventListener('click', () =>{
           ul.style.display="none";
           console.log("removed ul");
           });
    
      }else{
        ul.style.display="block";
       console.log("wasn't clicked again.");
      }
};

