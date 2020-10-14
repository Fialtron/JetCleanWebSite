alertSize();
function alertSize() {
    var myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      //No-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    var menu = document.getElementById("menu_movil");
    var display = menu.style.display;

    if(myWidth <= 767){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
    
  } 


function displayMenu(){
   var menu = document.getElementById("menu_movil");
   var display = menu.style.display;
   if (display == 'none') {
        menu.style.display = 'block';
   } else {
       menu.style.display = 'none';
   }
}