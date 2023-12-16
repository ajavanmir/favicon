/*
Copyright amir javanmir
Released on: december 16, 2023
*/
const fav = document.getElementById("favicon");
function changeFav(id){
    if(id.getAttribute("id") == "red"){
        fav.href = "./img/favicon-red.ico";
    }else{
        fav.href = "./img/favicon.ico";
    }
}