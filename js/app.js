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
                  <h1>Jet Clean Multiservices</h1>
                  <h2>NOBODY DOES IT LIKE US</h2>
                  <h3>Experience the difference with us</h3>
                </div>
            </figure>
        </header>
        <section id="about-us">
            <div class="informacion">
              <h2>About Us</h2>
              <div class="valores">
                <figure>
                  <img src="img/canada.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Committed to quality</h3>
                    <p>
                      We are certified in the use of 
                      Specialized Machinery and 
                      equipment. Regardless of the 
                      complexity of the project, we 
                      have the personnel and 
                      machinery necessary to carry 
                      it out.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/24-horas.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Flexibility</h3>
                    <p>
                      Jet Clean recognizes that not all 
                      clients need the same services 
                      or in the same periodicity.  
                      Therefore, it offers a range of 
                      variable contracts that 
                      best meet the client's needs.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/velocimetro.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Speed</h3>
                    <p>
                      An accident can happen at any 
                      time that needs a prompt solution. 
                      Therefore, our service is efficient 
                      and fast without losing the characteristic
                       quality of Jet Clean Multiservices.
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div class="valores">
                <figure>
                  <img src="img/equipo-de-limpieza.svg" alt="El nuevo concepto de limpieza">
                  <figcaption>
                    <h3>Staff</h3>
                    <p>
                      We select personnel after 
                      several interviews, ensuring
                      that they have experience, 
                      recommendations, an 
                      impeccable background 
                      and they know that 
                      responsibility plays a huge 
                      role in the job environment
                    </p>
                  </figcaption>
                </figure>
              </div>
              <span onclick="app.displayAboutUs()">See more</span>
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
                      <h3>Floor waxing</h3>
                      <p>
                        When entering your business, your 
                        customers will pay special attention 
                        to the floor they walk on. That's why the 
                        Jet Clean team has the personnel and tools
                        to take care of your floors and keep them
                        sparkling clean.
                      </p>
                    </div>
                </li>
                <li>
                    <div>
                      <h3>Daily night and day cleaning 24/7 </h3>
                      <p>
                        There are places that need constant cleaning 
                        and disinfection for the optimal work of the 
                        establishment. In addition, the situation 
                        generated by the COVID-19 makes establishments 
                        that did not have this process, need it to 
                        comply with biosecurity measures. Our 
                        disinfection service has all the quality 
                        standards.
                      </p>
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
                      <h3>Snow removal and salting prevention</h3>
                      <p>
                        Strong weather such as winter can hinder people moving 
                        around. Impeding the correct flow of these, in addition 
                        to generating delays or accidents. With this in mind, 
                        the Jet Clean team provides snow removal services. 
                      </p>
                    </div>
                </li>
            </ul>
            <span onclick="app.displayServices()" >See more</span>
        </section>
        <aside id="contacto">
            <figure>
                <img src="img/WhatsApp Image 2020-10-01 at 11.24.53 AM (13).jpeg" alt="">
            </figure>
        </aside>
        <section id="contact-us">
            <div>
              <h2>Contact us</h2>
              <form>
                <input type="text" placeholder="Full name">
                <input type="text" placeholder="E-mail address">
                <input type="text" placeholder="Tell us about your need">
              </form>
              <button>Send</button>
            </div>
            <div>
              <img src="img/facebook.png" alt="">
            </div>
            <div>
              <img src="img/instagram.png" alt="">
            </div>
            <div>
              <a id="none" href="https://wa.me/573138087186" target="_blank"  > <img src="img/whatsapp.png" alt=""></a> 
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
            </div>
        </figure>
    </header>
    <div id="servicesContainer">

      <section id="menu">

      <div id="scene">
      
      <div id="left-zone">
        <ul class="list">

          <li class="item">
            <input type="radio" id="radio_Powerwash" name="basic_carousel" checked="checked"/>
            <label class="label_Powerwash" for="radio_Powerwash">Power wash</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  Many times there is dirt that is impossible to remove with traditional methods. 
                  Therefore, Jet Clean brings the technology and efficiency of the power wash to 
                  eliminate those spaces that seem impossible to clean. 
                </p>
              </div>
            </div>
          </li>

          <li class="item">
            <input type="radio" id="radio_Floorwaxing" name="basic_carousel" />
            <label class="label_Floorwaxing" for="radio_Floorwaxing">Floor waxing</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  When entering your business, your customers will pay special attention to the floor 
                  they walk on. That's why the Jet Clean team has the personnel and tools to take care 
                  of your floors and keep them sparkling clean. 
                </p>
              </div>
            </div>
          </li>

          <li class="item">
            <input type="radio" id="radio_Graffitiremoval" name="basic_carousel" />
            <label class="label_Graffitiremoval" for="radio_Graffitiremoval">Graffiti removal</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  Jet clean recognizes that there are different reasons why our clients might take this 
                  service; to make a new graffiti, paint a mural or simply free up space.
                  Regardless of the reason jet clean offers graffiti removal services for each client 
                  to decide what to do next.
                </p>
              </div>
            </div>
          </li>

          <li class="item">
            <input type="radio" id="radio_Carpetcleaning" name="basic_carousel" />
            <label class="label_Carpetcleaning" for="radio_Carpetcleaning">Carpet cleaning</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  Every space is important and should be taken care of. However, carpets need special
                  care and cleaning. For this reason, Jet Clean has the technology and specialized 
                  personnel to clean and care for these spaces with carpets.
                </p>
              </div>
            </div>
          </li>

          <li class="item">
            <input type="radio" id="radio_Windowcleaning" name="basic_carousel"/>
            <label class="label_Windowcleaning" for="radio_Windowcleaning">Window cleaning</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  Illuminating spaces is not the only job of windows; providing security, confidence 
                  and style is too.These reasons are enough to keep them clean and cared for. Jet clean 
                  has the right products and cleaning processes for windows. 
                </p>
              </div>
            </div>
          </li>

          <li class="item">
            <input type="radio" id="radio_Personnellogisticsforcompanies" name="basic_carousel"/>
            <label class="label_Personnellogisticsforcompanies" for="radio_Personnellogisticsforcompanies">Personnel logistics for companies</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  Managing all aspects of a company can become tedious; large events, simultaneous 
                  meetings, services in complex schedules make it difficult to manage the company. 
                  For this reason, Jet Clean offers the service of personnel logistics management, 
                  so each client can focus and fulfill all scheduled events without losing the quality 
                  of its service. 
                </p>
              </div>

            </div>
          </li>

          <li class="item">
            <input type="radio" id="radio_Dailynightanddaycleaning24/7" name="basic_carousel"/>
            <label class="label_Dailynightanddaycleaning24/7" for="radio_Dailynightanddaycleaning24/7">Daily night and day cleaning 24/7</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  There are places that need constant cleaning and disinfection for the optimal work of
                  the establishment. In addition, the situation generated by the COVID-19 makes 
                  establishments that did not have this process, need it to comply with biosecurity 
                  measures. Our disinfection service has all the quality standards. 
                </p>
              </div>
            </div>
          </li>

          <li class="item">
            <input type="radio" id="radio_Snowremovalandsaltingprevention" name="basic_carousel"/>
            <label class="label_Snowremovalandsaltingprevention" for="radio_Snowremovalandsaltingprevention">Snow removal and salting prevention</label>
            <div class="content ">
              <div class="why">
                <img src="img/carpet.jpeg" alt="">
              </div>
              <div >
                <h2>Our work</h2>
                <p>
                  Strong weather such as winter can hinder people moving around. Impeding the correct 
                  flow of these, in addition to generating delays or accidents. With this in mind, the
                  Jet Clean team provides snow removal services. 
                </p>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
    </section>
  






    <div id="slider">
    <h2>Results</h2> 
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
                    <p>
                      Through a certified 
                      administrative management, 
                      with a professional team and a 
                      solid infrastructure. Jet Clean 
                      provides comprehensive 
                      cleaning solutions by providing 
                      permanent staff to attend all 
                      cleaning and service areas. 
                    </p>
                    <p>
                      We are certified in the use of 
                      Specialized Machinery and 
                      equipment. Regardless of the 
                      complexity of the project, we 
                      have the personnel and 
                      machinery necessary to carry 
                      it out.  From electrical repairs to
                      cleaning roofs and facades. At
                      Jet Clean you can count on all the 
                      security, trust and support of 
                      our team.
                    </p>
                    <p>
                      Jet Clean recognizes that not all 
                      clients need the same services 
                      or in the same periodicity.  
                      Therefore, it offers a range of 
                      variable contracts that 
                      best meet the client's needs, 
                      without neglecting the viability 
                      of the work of the health 
                      professionals who 
                      carefully serve our clients. 
                    </p>
                    <p>
                      We keep the facilities free 
                      of pathogenic germs and 
                      reducing microbism in 
                      homes or in commercial 
                      industrial enterprises.
                    </p>
                    <p>
                      We select personnel after 
                      several interviews, ensuring
                      that they have experience, 
                      recommendations, an 
                      impeccable background 
                      and they know that 
                      responsibility plays a huge 
                      role in the job environment 
                    </p>
                    <p>
                      We sanitize and do general
                      cleaning in big companies,
                      living areas, commercial 
                      markets, etc. 
                    </p>
                </div>
            </div>
            
            <div id="col2" class="col"></div>
            
            <div id="col3" class="col"></div>
            
            <section id="testimonials">
            <ul>
                <li>
                    
                    <div>
                        <h4>Business</h4>
                        <p>We offer cleaning services 
                        to medium and large 
                        companies
                        · Residential complexes
                        · Residential or building 
                          cleaning services.
                        · Industrial parks.</p>
                    </div>

                    <figure>
                      <img src="img/persona1.jpg" alt="">
                    </figure>
                    
                </li>
                <li>
                    <div>
                        <h4>Educational institutions</h4>
                        <p>We offer cleaning services 
                        to educational institutions 
                        nationwide.  
                        · Schools.
                        · Universities.
                        · Technological Institutions</p>
                    </div>
                    <figure>
                      <img src="img/persona2.jpg" alt="">
                    </figure>

                </li>
                <li>
                    
                    <div>
                        <h4>Factories</h4>
                        <p>We offer cleaning services 
                        to factories nationwide, 
                        with complete cleaning 
                        and gardening equipment.  
                        · Malls.
                        · Shopping centers.
                        · Public use areas.
                        · Administrative areas.</p>
                    </div>
                    <figure >
                      <img src="img/persona3.jpg" alt="">
                    </figure>
                </li>
            </ul>
            </section>
            <div id="col4" class="col"></div>
            <section id="findUs">
                <h1>Find us</h1>
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
