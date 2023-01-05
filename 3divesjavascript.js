const special_function = function (){
    let divs = document.querySelectorAll("div");
    divs.forEach(element => {
    
element.onclick=function(){
    
  const clone = element.cloneNode(true);
  document.body.append(clone);
  console.log(clone);
  element.classList.add("blocked"); 
  special_function ();
  
 }
});
}
//////////////////////////////
window.addEventListener("load",special_function);


    