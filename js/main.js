function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var efect = "tada";
var gift = document.getElementById('gift');
var preload = document.getElementById('preload');
var loading = document.getElementById('loading');

var code = document.getElementById('code');
var fullname = document.getElementById('fullname');
var institution = document.getElementById('institution');

var genera = document.getElementById('generar');
var reiniciar = document.getElementById('reiniciar');


genera.onclick = () => {

    var x = document.getElementById("myAudio");
    x.play();


    // the code you're looking for
    var number = getRandomInt(1, 90);
    console.log('Numero: ', number);

    preload.classList.add("preloader");
    loading.classList.add("loading-circle");
    loading.classList.add("fa-spin");

    setTimeout(() => {
        preload.classList.remove("preloader");
        loading.classList.remove("loading-circle");
        loading.classList.remove("fa-spin");
        gift.classList.add(efect);

        code.innerHTML = list[number - 1].code;
        fullname.innerHTML = list[number - 1].fullname;
        institution.innerHTML = list[number - 1].institution;
    }, 7500);



}


/**
genera.onclick = () => {
   
    // the code you're looking for
    var number = getRandomInt(1, 90);

    // iterate over each element in the array
    for (var i = 0; i < list.length; i++) {

        // look for the entry with a matching `code` value    
        if (list[i].code == number) {            
            console.log(list[i].code);
            code.innerHTML = list[i].code;
            fullname.innerHTML = list[i].fullname;
            institution.innerHTML = list[i].institution;
        }
    }

}
 */

reiniciar.onclick = () => {
    code.innerHTML = ' xx ';
    fullname.innerHTML = 'xx - xx - xx - xx ';
    institution.innerHTML = 'xx - xx';
    gift.classList.remove(efect);
}
