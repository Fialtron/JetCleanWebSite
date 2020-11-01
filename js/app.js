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
                      <img src="img/WhatsApp Image 2020-10-28 at 10.36.36 PM.jpeg" alt="El nuevo concepto de limpieza">
                    </figure>
                    <div>
                      <h3>Pisos waxing</h3>
                      <p>Descripcion del valor</p>
                    </div>
                </li>
                <li>
                    <div>
                      <h3>Daily desinfection</h3>
                      <p>Descripcion del valor</p>
                    </div>
                    <figure>
                      <img src="img/WhatsApp Image 2020-10-28 at 10.44.03 PM (3).jpeg" alt="El nuevo concepto de limpieza">
                    </figure>
                </li>
                <li>
                    <figure>
                      <img src="img/WhatsApp Image 2020-10-28 at 10.40.37 PM.jpeg" alt="El nuevo concepto de limpieza">
                    </figure>
                    <div>
                      <h3>Remove snow</h3>
                      <p>Descripcion del valor</p>
                    </div>
                </li>
            </ul>
            <span>Ver mas</span>
        </section>
        <aside id="contacto">
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

    const content = $('#contenido');
    cleanHTMLTags(content);
    document.getElementById("currentTransitionStyle").setAttribute("href", "css/services.css");
    content.append(`
     <header>
        <figure>
            <img src="img/Aspiradora.jpg" alt="El nuevo concepto de limpieza">
            <div>
                <h2>Services</h2>
                <h3>Close your eyes and breath</h3>
            </div>
        </figure>
    </header>
    <div id="servicesContainer">

      <section id="menu">

      <div id="scene">
      <div id="left-zone">
        <ul class="list">
          <li class="item">
            <input type="radio" id="radio_carpetCleaning" name="basic_carousel" checked="checked"/>
            <label class="label_carpetCleaning" for="radio_carpetCleaning">Carpet Cleaning</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
                <h2>¿Por que?</h2>
                <p>The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)</p>
              </div>
              <div >
                <h2>Nuestro trabajo</h2>
                <p>The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)</p>
              </div>
              <div >
                <h2>Herramientas que usamos</h2>
                <p>The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)</p>
              </div>
              
              
            </div>
          </li>
          <li class="item">
            <input type="radio" id="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa." name="basic_carousel" value="A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."/>
            <label class="label_banana" for="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.">banana</label>
            <div class="content content_banana"><span class="picto"></span>
              <h1>banana</h1>
              <p>A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.</p>
            </div>
          </li>
          <li class="item">
            <input type="radio" id="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus." name="basic_carousel" value="The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."/>
            <label class="label_apple" for="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.">apple</label>
            <div class="content content_apple"><span class="picto"></span>
              <h1>apple</h1>
              <p>The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.</p>
            </div>
          </li>
          <li class="item">
            <input type="radio" id="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae." name="basic_carousel" value="The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."/>
            <label class="label_orange" for="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.">orange</label>
            <div class="content content_orange"><span class="picto"></span>
              <h1>orange</h1>
              <p>The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.</p>
            </div>
          </li>
        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
    </section>
  






    <div id="slider">
    <h2>Resultados</h2> 
        <div class="wrapper">
  <input checked type=radio name="slider" id="slide1" />
  <input type=radio name="slider" id="slide2" />
  <input type=radio name="slider" id="slide3" />
  <input type=radio name="slider" id="slide4" />
  <input type=radio name="slider" id="slide5" />

  <div class="slider-wrapper">
    <div class=inner>
      <article>
        <div class="info top-left">
          <h3></h3>
        </div>
        <img src="img/slider/0.jpeg" />
      </article>

      <article>
        <div class="info bottom-right">
          <h3></h3>
        </div>
        <img src="img/slider/1.jpeg" />
      </article>

      <article>
        <div class="info bottom-left">
          <h3></h3>
        </div>
        <img src="img/slider/3.jpeg" />
      </article>

      <article>
        <div class="info top-right">
          <h3></h3>
        </div>
        <img src="img/slider/8.jpeg" />
      </article>

      <article>
        <div class="info bottom-left">
          <h3></h3>
        </div>
        <img src="img/slider/10.jpeg"/>
      </article>
    </div>
    <!-- .inner -->
  </div>
  <!-- .slider-wrapper -->

  <div class="slider-prev-next-control">
    <label for=slide1><img src="img/flecha-izquierda.svg"/></label>
    <label for=slide2><img src="img/proximo.svg"/></label>
    <label for=slide3><img src="img/proximo.svg"/></label>
    <label for=slide4><img src="img/flecha-izquierda.svg"/></label>
    <label for=slide5><img src="img/flecha-izquierda.svg"/></label>
  </div>
  <!-- .slider-prev-next-control -->

  <div class="slider-dot-control">
    <label for=slide1></label>
    <label for=slide2></label>
    <label for=slide3></label>
    <label for=slide4></label>
    <label for=slide5></label>
  </div>
  <!-- .slider-dot-control -->
</div>
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
                <h1>The new cleaning concept</h1>
                <h2>You can fell it with all your senses</h2>
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
                  <img src="img/tienda.jpeg" alt="">
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
                    
                    <div>
                        <h4>Persona 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cumque earum et ex illo maiores quaerat repudiandae sunt tenetur? Consequuntur dolor earum et, fuga in minus mollitia nisi pariatur?</p>
                    </div>

                    <figure>
                      <img src="img/persona1.jpg" alt="">
                    </figure>
                    
                </li>
                <li>
                    <div>
                        <h4>Persona 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque doloremque exercitationem, fuga, ipsum iste laudantium molestias necessitatibus odio placeat quas quibusdam, quisquam quos reiciendis repudiandae vel velit vitae voluptas.</p>
                    </div>
                    <figure>
                      <img src="img/persona2.jpg" alt="">
                    </figure>

                </li>
                <li>
                    
                    <div>
                        <h4>Persona 3</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores assumenda consectetur deleniti dolores ex officia omnis quos repudiandae voluptatibus. Aliquam aliquid in ipsa libero nihil quaerat quam sit totam.</p>
                    </div>
                    <figure >
                      <img src="img/persona3.jpg" alt="">
                    </figure>
                </li>
            </ul>
            </section>
            <div id="col4" class="col"></div>
            <section id="findUs">
                <h1>Encuentranos</h1>
                <figure id="map">
                  <img src="img/mapa.png" alt="">
                </figure>
                <ul>
                    <li>
                        <p>Dirección: 1679 conssesion 4 Road Virgil</p>
                    </li>
                    <li>
                        <p>Codigo Postal LOS1JO</p>
                    </li>
                    <li>
                        <p>Telefono: +1(289) 440-2188</p>
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
