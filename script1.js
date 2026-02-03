
document.addEventListener("DOMContentLoaded" , function(){
const explore = document.getElementById("explore-buton");
const explores = document.getElementById("ex");
const home = document.getElementById("Home");



explore.addEventListener("click", function(){
     window.location.href = "customerPage.html";

});  

explores.addEventListener("click", function(){
     window.location.href = "explore.html";

});  

home.addEventListener("click", function(){
     window.location.href = "index.html";

});  
});