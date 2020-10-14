app = (() => {

  const alertSize = () => {
    let myWidth = 0, myHeight = 0;
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
    const menu = document.getElementById("menu_movil");
    let display = menu.style.display;

    if(myWidth <= 767){
      menu.style.display = 'none';
    }else{
      menu.style.display = 'block';
    }

  };

  const insertMainSection = () => {
    const style = $('#currentTransitionStyle');
    style.empty();
    style.append(`<link id="currentTransitionStyle" type="text/css" rel="stylesheet" href="css/index.css">`);
    const content = $('#contenido');
    content.empty();
    content.append(`
    <header>
            <figure>
                <img src="img/Aspiradora.jpg" alt="El nuevo concepto de limpieza">
            </figure>
        </header>
        <section id="about-us">
            <div class="informacion">

            </div>
        </section>
        <section id="services">
            <ul>
                <li>
                    <figure>
                    </figure>
                    <div></div>
                </li>
                <li>
                    <div>
                    </div>
                    <figure>
                    </figure>

                </li>
                <li>
                    <figure >
                    </figure>
                    <div></div>
                </li>
            </ul>
        </section>
        <aside>
            <figure>
                <img src="img/supermarket-949913_1920.jpg" alt="">
            </figure>
        </aside>
        <section id="contact-us">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    `);

  };

  return {

    init: () => {
      alertSize();
      insertMainSection();
      },
    displayMenu(){
      const menu = document.getElementById("menu_movil");
      let display = menu.style.display;
      if (display == 'none') {
           menu.style.display = 'block';
      } else {
          menu.style.display = 'none';
      }
   },

  }
})();


