/* Variables to load scripts only when needed */
var breakpoint = 1100;
var windowwidth = window.innerWidth;



/* ------------------------ SCRIPT TO RUN ON A COMPUTER ONLY ------------------------ */

if (windowwidth > breakpoint) {
  var randomNum = 0;
  var norm = 1;
  var z = 0;

  /* Display loader until page ready (with min 3s of display) */
  window.addEventListener("load", function(){
    setTimeout(() => {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("#collagescontainer").style.display = "flex";
      document.querySelector("#container").setAttribute("onclick", "switchMode(); resize()");
    }, 3000);
  });

  /* Preload all images so the website is fully functional */
  var images = new Array()
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image()
      images[i].src = preload.arguments[i]
    }
  }
  preload(
    "images/img-22.jpg",
    "images/img-23.jpg",
    "images/img-24.jpg",
    "images/img-25.jpg",
    "images/img-26.jpg",
    "images/img-27.jpg",
    "images/img-28.jpg",
    "images/img-29.jpg",
    "images/img-32.jpg",
    "images/img-48.jpg",
    "images/img-49.jpg",
    "images/img-50.jpg",
    "images/img-51.jpg",
    "images/img-52.jpg",
    "images/img-53.jpg",
    "images/img-54.jpg",
    "images/img-55.jpg",
    "images/img-56.jpg",
    "images/img-57.jpg",
    "images/img-58.jpg",
    "images/img-59.jpg",
    "images/img-60.jpg",
    "images/img-61.jpg",
    "images/img-62.jpg",
    "images/img-63.jpg",
    "images/img-64.jpg",
    "images/img-65.jpg",
    "images/img-67.jpg",
    "images/img-68.jpg",
    "images/img-69.jpg",
    "images/img-70.jpg",
    "images/img-71.jpg",
    "images/img-72.jpg",
    "images/img-73.jpg",
    "images/img-74.jpg",
    "images/img-75.jpg",
    "images/img-76.jpg",
    "images/img-77.jpg",
    "images/img-78.jpg",
    "images/img-79.jpg",
    "images/img-80.jpg",
    "images/img-81.jpg",
    "images/img-82.jpg",
    "images/img-83.jpg",
    "images/img-84.jpg",
    "images/img-85.jpg",
    "images/img-86.jpg",
    "images/img-87.jpg",
    "images/img-88.jpg",
    "images/img-89.jpg",
    "images/img-90.jpg",
    "images/img-91.jpg",
    "images/img-92.jpg",
    "images/img-94.jpg",
    "images/img-alambicpourlesthes.jpg",
    "images/img-glamouretmort.jpg",
    "images/img-jambesroyales.jpg",
    "images/img-lamachoiredelabaleine.jpg",
    "images/img-lapropagationdescristaux.jpg",
    "images/img-latisserie.jpg",
    "images/img-leplongeondelasirene.jpg",
    "images/img-lesignaldelhommeseul.jpg",
    "images/img-letheatreduchaman.jpg",
    "images/img-morceauxdeglaceetdecharbon.jpg",
    "images/img-rebondissements.jpg",
    "images/img-soleilendommage.jpg",
    "images/img-soleilsurmarecage.jpg",
    "images/img-tueslestous.jpg",
    "images/img-vaguesaberrantes.jpg"
  )


  /* Get the coordinates and calculate z */
  function getCoordinates(e) {
    var x = e.clientX;
    var y = e.clientY;
    var norm = Math.floor((x + y + 1) / (x + y));
    var randomNum = Math.floor(Math.random() * data.length);

    changeCollage(norm, randomNum)


  }

  /* Auto-increase z and change collage/info every z pixels */
  function changeCollage(norm, randomnumber) {
    z = z + norm;

    if (z > 5) {
      z = 0;
      chooseCollage(randomnumber)
      resize()
    }
  }

  /* Resize the text block so it fits a container */
function resize() {
  $('.resize').each(function (i, obj) {
    $(this).css('font-size', '8em');

    while ($(this).width() > $(this).parent().width()) {
      $(this).css('font-size', (parseInt($(this).css('font-size')) - 1) + "px");

    }
  });
}

  /* Choose the collage and the matching info based on the same random number */
  function chooseCollage(number) {
    document.getElementById("myCollage").style.padding = "0";
    document.getElementById("myCollage").src = data[number].src;
    document.getElementById("myBio").style.display = "none";
    document.getElementById("social").style.display = "none";
    document.getElementById("myCollageInfo").style.display = "flex";
    document.getElementById("line1").innerHTML = data[number].title;
    document.getElementById("line2").innerHTML = data[number].year + ", " + data[number].type + ", " + data[number].place;
    document.getElementById("line3").innerHTML = data[number].dimensions;
  }



  /* Move between the collage mode and the info mode */
  function switchMode() {
    var jooo = document.getElementById("myInfo").style.display;

    if (jooo == "none") {
      document.getElementById("myCollageContainer").style.display = "none";
      document.getElementById("myInfo").style.display = "flex";
    }
    else {
      document.getElementById("myInfo").style.display = "none";
      document.getElementById("myCollageContainer").style.display = "flex";
    }
  }

}





/* ------------------------ SCRIPT TO RUN ON SMALL SCREENS ONLY ------------------------ */
else {

  /* 100vh doesn't work on mobiles */
  window.onload = function correctHeight() {
    var fullHeightMobile = window.innerHeight ;

    document.getElementById("loadermobile").style.height = fullHeightMobile + "px" ;
    document.getElementById("logomobile").style.height = fullHeightMobile + "px" ;

    addEventListener('orientationchange', correctHeight)
  }


  /* Display loader until page ready */
  window.addEventListener("load", function(){
    setTimeout(() => {
      document.getElementById("loadermobile").style.display = "none";
      document.getElementById("logomobile").style.display = "flex";
      document.getElementById("collagescontainermobile").style.display = "flex";
      document.getElementById("endsocial").style.display = "flex";
      
    }, 3000);
  });


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




  /* Switch between collage mode and info mode on mobile */
  function switchStateMobile(number) {
    var collage = document.getElementById("collage" + number);
    var outside = document.getElementById("newInfo" + number);
    var collageHeight = collage.offsetHeight;

    if (outside.style.display == "none") {
      outside.style.height = collageHeight + "px";
      collage.style.display = "none";
      outside.style.display = "flex";

      var line1 = document.getElementById("line1of" + number);
      var line2 = document.getElementById("line2of" + number);
      var line3 = document.getElementById("line3of" + number);

      line1.classList.add("resize");
      line2.classList.add("resize");
      line3.classList.add("resize");
    }

    else {
      outside.style.display = "none";
      collage.style.display = "flex";
    }
  }

  /* Resize the text block so it fits a container */
function resize() {
  $('.resize').each(function (i, obj) {
    $(this).css('font-size', '4em');

    while ($(this).width() > $(this).parent().width()) {
      $(this).css('font-size', (parseInt($(this).css('font-size')) - 1) + "px");

    }
  });
}

  /* Move between the logo and the bio */
  function switchIntroMobile() {
    var jooo = document.getElementById("biomobile").style.display;

    if (jooo == "none") {
      document.getElementById("logomobile").style.display = "none";
      document.getElementById("biomobile").style.display = "flex";
    }
    else {
      document.getElementById("biomobile").style.display = "none";
      document.getElementById("logomobile").style.display = "flex";
    }
  }



};







