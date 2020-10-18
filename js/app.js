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
    const content = $('#contenido');
    cleanHTMLTags(content);
    document.getElementById("currentTransitionStyle").setAttribute("href", "css/index.css");
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
              <h2>Sobre nosotros</h2>
              <div>Descripcion de lo que se hace</div>
              <div>Valor 1</div>
              <div>Valor 2 </div>
              <div>Valor 3 </div>
              <div>Valor 4</div>
              <span>Ver mas</span>
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

  const insertServicesSection = () => {
    const content = $('#contenido');
    cleanHTMLTags(content);
    document.getElementById("currentTransitionStyle").setAttribute("href", "css/services.css");
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
    <div id="servicesContainer">
        <ul>
            <li>
                <h3>CARPET CLEANING</h3>
            </li>
            <li>
                <h3>PISOS WAXING</h3>
            </li>
            <li>
                <h3>LIMPIEZA GENERAL DE MERCADO</h3>
            </li>
            <li>
                <h3>BARRIDA DE PARQUEADEROS</h3>
            </li>
            <li>
                <h3>PISOS WAXING</h3>
            </li>
            <li>
                <h3>REMOVE GRAFFITI</h3>
            </li>
            <li>
                <h3>REMOVE SHOW</h3>
            </li>
        </ul>
        
    </div>
    `);
  };

  const insertAboutUsSection = () => {
    const content = $('#contenido');
    document.getElementById("currentTransitionStyle").setAttribute("href", "css/aboutUs.css");
    cleanHTMLTags(content);
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
    <div id="mainGrid">
        
            <div id="banner" class="perfect-center">
                <h3>JET CLEAN</h3>
                <p>CLOSE YOUR EYES AND BREATH</p>
            </div>
            
            <div id="col1" class="col">
            
            </div>
            
            <div id="about-us">
                <figure>
                
                </figure>
                <div>
                    <h3>About Us</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet asperiores cupiditate ducimus eum nostrum placeat tempore. Consequatur minima non nostrum numquam placeat quibusdam repellendus velit voluptatem? Unde, vitae voluptatem.</p>
                </div>
            </div>
            
            <div id="col2" class="col"></div>
            
            <div id="col3" class="col"></div>
            
            <section id="testimonials">
            <ul>
                <li>
                    
                    <div class="perfect-center">
                        <h4>Persona 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cumque earum et ex illo maiores quaerat repudiandae sunt tenetur? Consequuntur dolor earum et, fuga in minus mollitia nisi pariatur?</p>
                    </div>
                    <figure>
                    </figure>
                    
                </li>
                <li>
                    <div class="perfect-center">
                        <h4>Persona 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque doloremque exercitationem, fuga, ipsum iste laudantium molestias necessitatibus odio placeat quas quibusdam, quisquam quos reiciendis repudiandae vel velit vitae voluptas.</p>
                    </div>
                    <figure>
                    </figure>

                </li>
                <li>
                    
                    <div class="perfect-center">
                        <h4>Persona 3</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores assumenda consectetur deleniti dolores ex officia omnis quos repudiandae voluptatibus. Aliquam aliquid in ipsa libero nihil quaerat quam sit totam.</p>
                    </div>
                    <figure >
                    </figure>

                </li>
            </ul>
            </section>
            <div id="col4" class="col"></div>
            <section id="findUs">
                <h1>Encuentranos</h1>
                <figure id="map">
                
                </figure>
                <ul>
                    <li>
                        <p>Dirección 1</p>
                    </li>
                    <li>
                        <p>Dirección 2</p>
                    </li>
                    <li>
                        <p>Dirección 3</p>
                    </li>
                </ul>
                
                <div id="icons">
                    <figure></figure>
                    <figure></figure>
                    <figure></figure>
                </div>
                
            </section>
    </div>`);
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
