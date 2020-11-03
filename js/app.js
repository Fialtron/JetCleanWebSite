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
                  <h2>Un nuevo concepto de limpieza</h2>
                  <h3>Somos expertos en limpieza</h3>
                </div>
            </figure>
        </header>
        <section id="about-us">
            <div class="informacion">
              <h2>Sobre nosotros</h2>
              <div class="valores">
                <figure>
                  <img src="img/canada.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>En todos los lugares</h3>
                    <p>Trabajando desde el 2015 contamos con la experiencia necesaria cubrir las necesidades de cada uno de nuestros clientes. Hacemos presencia en mas de 30 puntos al rededor del país.</p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/24-horas.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Horarios flexibles</h3>
                    <p>Las necesidades de nuestros clientes nos han demostrado que en cualquier momento es necesario un servicio de limpieza. Por ello, ofrecemos nuestros servicios 24 horas los 7 días de la semana.</p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/velocimetro.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Velocidad</h3>
                    <p>En cualquier momento puede ocurrir un accidente que necesite de una pronta solución. Por ello, nuestro servicio es eficaz y veloz sin perder la calidad característica de Jet Clean Multiservices.</p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/equipo-de-limpieza.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Nuestro equipo</h3>
                    <p>Nuestro criterio de selección de personal nos permite garantizar la calidad de nuestros servicios. Nuestro equipo de trabajo conoce las herramientas y equipos necesarios para solucionar las necesidades de nuestros clientes.</p>
                  </figcaption>
                </figure>
              </div>
              <span onclick="app.displayAboutUs()">Ver mas</span>
            </div>
        </section>
        <section id="services">

            <h2>Servicios</h2>
            <ul>
                <li>
                    <figure>
                      <img src="img/WhatsApp Image 2020-10-28 at 10.36.36 PM.jpeg" alt="El nuevo concepto de limpieza">
                    </figure>
                    <div>
                      <h3>Encerado de pisos</h3>
                      <p>Al ingresar a su negocio, sus clientes se fijaran especialmente en el suelo por donde caminan. Por ello, el equipo de Jet Clean cuenta con el personal y las herramientas suficientes para cuidar y mantener relucientes sus pisos.  </p>
                    </div>
                </li>
                <li>
                    <div>
                      <h3>Desinfección diaria </h3>
                      <p>Existen lugares que necesitan de una constante limpieza y desinfección para el trabajo optimo del establecimiento. Además, la situación generada por el COVID‑19 hace que establecimientos que no tenían este proceso, lo necesiten para cumplir con las medidas de bioseguridad. Nuestro servicio de desinfección cuenta con todos los estándares de calidad.</p>
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
                      <h3>Limpieza de nieve </h3>
                      <p>Climas fuertes como el invierno pueden obstaculizar a las personas que se movilicen. Impidiendo el correcto flujo de estas, además de generar retraso o accidentes. Pensando en esto, el equipo Jet Clean provee el servicio de remoción de nieve. </p>
                    </div>
                </li>
            </ul>
            <span onclick="app.displayServices()" >Ver mas</span>
        </section>
        <aside id="contacto">
            <figure>
                <img src="img/WhatsApp Image 2020-10-01 at 11.24.53 AM (13).jpeg" alt="">
                <div>
                  <p>Cierra tus ojos y respira</p>
                </div>
            </figure>
        </aside>
        <section id="contact-us">
            <div>
              <h2>Contáctanos</h2>
              <form>
                <input type="text" placeholder="Nombre completo">
                <input type="text" placeholder="Correo electrónico">
                <input type="text" placeholder="Hablenos sobre su necesidad">
              </form>
              <button>Enviar</button>
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
