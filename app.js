

function changeMode(e){
    var para = document.getElementsByTagName("label");

    if(e.innerHTML == "Dark Mode"){
        for(var i=0; i<para.length; i++){
        }
        document.body.classList.add("dark-mode");
        // e.innerHTML = '<img class="dark" src="./img/circle-half-stroke-solid-full.svg" alt=""> Light Mode';
        // e.innerHTML = "https://fontawesome.com/icons/classic/solid/circle-half-stroke"

        e.innerHTML = "Light Mode";
    }
    else{
        for(var i=0; i<para.length; i++){
        }
        document.body.classList.remove("dark-mode");
        // e.innerHTML = '<img class="dark" src="./img/circle-half-stroke-solid-full.svg" alt=""> Dark Mode';

        // e.innerHTML = "https://fontawesome.com/icons/classic/solid/circle-half-stroke" 
        e.innerHTML = "Dark Mode";
    }
}
