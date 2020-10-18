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

  const cleanHTMLTags = (...tags) => {
    tags.forEach( tag => tag.empty());

  };

  const insertMainSection = () => {
    const style = $('#currentTransitionStyle');
    const content = $('#contenido');
    cleanHTMLTags(style, content);
    style.append(`<link id="currentTransitionStyle" type="text/css" rel="stylesheet" href="css/index.css">`);
    content.append(`
        <header>
            <figure>
                <img src="img/Aspiradora.jpg" alt="El nuevo concepto de limpieza">
                <div>
                  <h1>Jet Clean</h1>
                  <h2>A new cleanning concept</h2>
                  <h3>We are experts about cleanning </h3>
                </div>
            </figure>
        </header>
        <section id="about-us">
            <div class="informacion">
              <h2>About us</h2>
              <div class="valores">
                <figure>
                  <img src="img/canada.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>All places</h3>
                    <p>Descripcion del valor</p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/24-horas.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Full time</h3>
                    <p>Descripcion del valor</p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/velocimetro.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Speed</h3>
                    <p>Descripcion del valor</p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/equipo-de-limpieza.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Staff</h3>
                    <p>Descripcion del valor</p>
                  </figcaption>
                </figure>
              </div>
              <span>Ver mas</span>
            </div>
        </section>
        <section id="services">

            <h2>Services</h2>
            <ul>
                <li>
                    <figure>
                      <img src="img/alfombra.jpg" alt="El nuevo concepto de limpieza">
                    </figure>
                    <div>
                      <h3>carpet cleannig</h3>
                      <p>Descripcion del valor</p>
                    </div>
                </li>
                <li>
                    <div>
                      <h3>Daily cleaning</h3>
                      <p>Descripcion del valor</p>
                    </div>
                    <figure>
                      <img src="img/pisos.jpg" alt="El nuevo concepto de limpieza">
                    </figure>
                </li>
                <li>
                    <figure>
                      <img src="img/ventanas.jpg" alt="El nuevo concepto de limpieza">
                    </figure>
                    <div>
                      <h3>Remove graffiti</h3>
                      <p>Descripcion del valor</p>
                    </div>
                </li>
            </ul>
            <span>Ver mas</span>
        </section>
        <aside>
            <figure>
                <img src="img/supermarket-949913_1920.jpg" alt="">
                <div>
                  <p>Close your eyes and breath</p>
                </div>
            </figure>
        </aside>
        <section id="contact-us">
            <div>
              <h2>Contact us</h2>
              <form>
                <input type="text" placeholder="Your full name">
                <input type="text" placeholder="Email-address">
                <input type="text" placeholder="Your message">
              </form>
              <button>Submit</button>
            </div>
            <div>
              <img src="img/facebook.png" alt="">
            </div>
            <div>
              <img src="img/instagram.png" alt="">
            </div>
            <div>
              <img src="img/whatsapp.png" alt="">
            </div>
        </section>
    `);

  };

  const insertServicesSection = () => {
    const style = $('#currentTransitionStyle');
    const content = $('#contenido');
    cleanHTMLTags(style, content);
    style.append(`<link id="currentTransitionStyle" type="text/css" rel="stylesheet" href="css/services.css">`);
    content.append('<h1> SERVICES </h1>');
  };

  const insertAboutUsSection = () => {
    const style = $('#currentTransitionStyle');
    const content = $('#contenido');
    cleanHTMLTags(style, content);
    style.append(`<link id="currentTransitionStyle" type="text/css" rel="stylesheet" href="css/description.css">`);
    content.append('<h1> DESCRIPTION </h1>');
  };

  return {

    init: () => {
      alertSize();
      insertMainSection();
      },
    displayServices: () => {
      alertSize();
      insertServicesSection();
    },
    displayAboutUs:() => {
      alertSize();
      insertAboutUsSection();
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
