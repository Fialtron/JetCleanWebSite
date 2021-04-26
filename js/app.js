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
                    We are certified in the use of specialized machinery and equipment. 
                    Regardless of how complex your project is, we have the qualified personnel 
                    and machinery necessary to carry through. Our customers love working with us. 
                    Professionality is key to us, and our customers can see we are only getting 
                    better with time.
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
                    Jet Clean recognizes that every client is different and needs different solutions. 
                    Therefore, we offer a variety of contracts to meet every one of your needs.
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
                    Accidents are inevitable, and you will need a prompt and efficient solution. 
                    Jet Clean Multiservices offer quality services along with an efficient and 
                    rapid response to your needs.
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
                    We understand our customers need the best service possible. 
                    Therefore, our staff is distinguished for its tremendous responsibility, 
                    vast experience, impeccable background, and passion for their daily 
                    work activities. Every employee goes through several interviews and a 
                    selective process to ensure they are the perfect fit to provide the best service.
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
                      Many times there is dirt that is impossible to remove with 
                      traditional methods. Therefore, Jet Clean uses the power of 
                      wash technology and efficiency to eliminate dirt and stains 
                      in spaces that seem impossible to clean.
                      </p>
                    </div>
                </li>
                <li>
                    <div>
                      <h3>Daily night and day cleaning 24/7 </h3>
                      <p>
                      Some places need constant cleaning and disinfection for the 
                      optimal work of the establishment. Also, the situation generated 
                      by the COVID-19 makes establishments that did not have the necessary 
                      process comply with biosecurity measures. Our disinfection service 
                      has all the quality standards to meet those needs.
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
                      The weather such as winter can hinder people from moving around. 
                      As a result delays or accidents can happen. With this in mind, 
                      Jet Clean team provides snow removal services as well to lessen 
                      the weather complications. 
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
              <form id="myForm">
                <input type="text" placeholder="Full name" name="from_name">
                <input type="text" placeholder="E-mail address" name="email">
                <input type="text" placeholder="Tell us about your need" name="message">
              </form>
              <button onclick="app.sendEmail()" >Send</button>
              
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
    <div id="servicesContainer">
      <div>
        <h2>SERVICES</h2>
      </div>

      <section id="menu">
        <div id="scene">
        
        <div id="left-zone">
          <ul class="list">

            <li class="item">
              <input type="radio" id="radio_Powerwash" name="basic_carousel" checked="checked"/>
              <label class="label_Powerwash" for="radio_Powerwash">Power wash</label>
              <div class="content ">
                <div class="why">
                  <img src="img/wash.jpeg" alt="">
                  <h3>Our work</h3>
                  <p>
                    Many times there is dirt that is impossible to remove with 
                    traditional methods. Therefore, Jet Clean uses the power wash 
                    technology and efficiency to eliminate dirt and stains in spaces 
                    that seem impossible to clean. 
                  </p>
                </div>
              </div>
            </li>

            <li class="item">
              <input type="radio" id="radio_Floorwaxing" name="basic_carousel" />
              <label class="label_Floorwaxing" for="radio_Floorwaxing">Floor waxing</label>
              <div class="content ">
                <div class="why">
                  <img src="img/waxing.jpeg" alt="">
                  <h3>Our work</h3>
                  <p>
                    Many times there is dirt that is impossible to remove with traditional 
                    methods. Therefore, Jet Clean uses the power of wash technology and 
                    efficiency to eliminate dirt and stains in spaces that seem impossible 
                    to clean. 
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
                  <h3>Our work</h3>
                  <p>
                    Jet clean recognizes that there are different reasons why our clients 
                    might take this service, to make new graffiti, paint a mural, or free 
                    up space. Regardless of any reason, jet clean offers graffiti removal 
                    services for each client to decide what to do next.
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
                  <h3>Our work</h3>
                  <p>
                    Every space is important and should be taken care of. However, 
                    carpets need special care and cleaning. For this reason, Jet Clean 
                    has the technology and specialized personnel to clean and appropriately 
                    care for your carpets.
                  </p>
                </div>
              </div>
            </li>

            <li class="item">
              <input type="radio" id="radio_Windowcleaning" name="basic_carousel"/>
              <label class="label_Windowcleaning" for="radio_Windowcleaning">Window cleaning</label>
              <div class="content ">
                <div class="why">
                  <img src="img/window.jpeg" alt="">
                  <h3>Our work</h3>
                  <p>
                    Illuminating spaces is not the only job of windows. Providing security, 
                    confidence, and style are too. These reasons are enough to keep them clean 
                    and in good shape. Jet clean has the right products and cleaning processes 
                    for your windows. 
                  </p>
                </div>
              </div>
            </li>

            <li class="item">
              <input type="radio" id="radio_Personnellogisticsforcompanies" name="basic_carousel"/>
              <label class="label_Personnellogisticsforcompanies" for="radio_Personnellogisticsforcompanies">Personnel logistics for companies</label>
              <div class="content ">
                <div class="why">
                  <img src="img/personel.jpeg" alt="">
                  <h3>Our work</h3>
                  <p>
                    Managing all aspects of a company can become tedious; activities such as 
                    big events, simultaneous meetings, and services in complex schedules make it 
                    complicated to manage the company. For this reason, Jet Clean offers its 
                    service of personnel logistics management, so each client can focus and fulfill 
                    all scheduled events without losing the quality of its service. 
                  </p>
                </div>
              </div>
            </li>

            <li class="item">
              <input type="radio" id="radio_Dailynightanddaycleaning24/7" name="basic_carousel"/>
              <label class="label_Dailynightanddaycleaning24/7" for="radio_Dailynightanddaycleaning24/7">Daily night and day cleaning 24/7</label>
              <div class="content ">
                <div class="why">
                  <img src="img/daily.jpeg" alt="">
                  <h3>Our work</h3>
                  <p>
                    Some places need constant cleaning and disinfection for the optimal work of the establishment. 
                    Also, the situation generated by the COVID-19 makes establishments that did not have the 
                    necessary process comply with biosecurity measures. Our disinfection service has all the 
                    quality standards to meet those needs. 
                  </p>
                </div>
              </div>
            </li>

            <li class="item">
              <input type="radio" id="radio_Snowremovalandsaltingprevention" name="basic_carousel"/>
              <label class="label_Snowremovalandsaltingprevention" for="radio_Snowremovalandsaltingprevention">Snow removal and salting prevention</label>
              <div class="content ">
                <div class="why">
                  <img src="img/snow.png" alt="">
                  <h3>Our work</h3>
                  <p>
                    The weather such as winter can hinder people from moving around. As a result delays or 
                    accidents can happen. With this in mind, Jet Clean team provides snow removal services 
                    as well to lessen the weather complications. 
                  </p>
                </div>
              </div>
            </li>

            <li class="item">
              <input type="radio" id="radio_Snowremovalandsalting" name="basic_carousel"/>
              <label class="label_Snowremovalandsalting" for="radio_Snowremovalandsalting">Snow removal and salting</label>
              <div class="content ">
                <div class="why">
                  <img src="img/snow.png" alt="">
                  <h3>Our work</h3>
                  <p>
                    We provide you with the clear mind and clear driveway, Our services are 
                    tailored for your commercial property and your specific needs. You can rely 
                    on us to take care of your property so that you can focus on the things that 
                    are important to you. Our main goal is to make sure that we leave your property 
                    with surfaces cleared of any snow or ice. We are always prepared for any snow 
                    cleaning requirements and will complete your requested tasks in a timely manner 
                    with detail and precision, and most importantly at a price you'll love. We have 
                    equipment, staff, and logistics to handle any storm that Ontario has to offer. 
                    But more than that, we have the experience to ensure a seamless process throughout 
                    the entire winter season, and to foresee any issues long before they arise. 
                  </p>
                </div>
              </div>
            </li>

            <li class="item">
              <input type="radio" id="radio_Summertimelandscapingservices" name="basic_carousel"/>
              <label class="label_Summertimelandscapingservices" for="radio_Summertimelandscapingservices">Summer time landscaping services</label>
              <div class="content ">
                <div class="why">
                  <img src="img/snow.png" alt="">
                  <h3>Our work</h3>
                  <p>
                    We can customize your space to meet your needs. We would be happy to work with 
                    you to achieve your dream. Our experienced team have extensive industry knowledge 
                    and offer a variety of personalized services. We provide innovative landscaping 
                    solutions in a personal, cost effective and timely manner. We work very closely 
                    with our clients and are committed to quality work. Our mission is to provide our 
                    clients with the highest landscaping standards in the industry and enhance the 
                    value of our client’s homes, by providing innovative landscaping solutions with 
                    our experts in the field. 
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


    <div id="slider2">
    
      <i>
      <input checked type="radio" name="s" class="bg1"  title="Random Picture 1">
      <input type="radio" name="s" class="bg2" title="Random Picture 2">
      <input type="radio" name="s" class="bg3" title="Random Picture 3">
      <input type="radio" name="s" class="bg4" title="Random Picture 4">
      <input type="radio" name="s" class="bg5" title="Random Picture 5">
      </i>

    </div>

    `);
  

  
  };

  const insertAboutUsSection = () => {
    const content = $('#contenido');
    document.getElementById("currentTransitionStyle").setAttribute("href", "css/aboutUs.css");
    cleanHTMLTags(content);
    content.append(`
    <div id="mainGrid">
            <div id="banner" class="perfect-center">
                <h3>JET CLEAN</h3>
                <p>NOBODY DOES IT LIKE US</p>
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
                      With a combination of certified administrative management, 
                      a professional team, and a solid infrastructure, Jet Clean 
                      provides comprehensive cleaning solutions by providing permanent 
                      personnel for all cleaning and service areas. 
                    </p>
                    <p>
                      We are certified in the use of Specialized Machinery and equipment. 
                      Our qualified personnel and machinery allow us to produce the best results.  
                      We do everything, from electrical repairs to cleaning roofs and facades. 
                      Jet Clean will provide the security, trust, consistency, and support of 
                      our team and service.
                    </p>
                    <p>
                      Jet Clean knows every client is different and has different needs. 
                      Services, time frames, and periodicity vary from client to client.  
                      Therefore, it offers a range of variable contracts that best meet 
                      the client's demands. 
                    </p>
                    <p>
                      We keep the facilities free of pathogenic germs and reducing harmful 
                      microorganisms in homes or commercial industrial enterprises.
                    </p>
                    <p>
                      We carefully select personnel after several interviews.  
                      Our selection process ensures that they have the proper 
                      work experience, recommendations, and an impeccable background.  
                      Our staff knows that responsibility plays a huge role in the 
                      job environment. 
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
                        <br/>  
                        · Residential complexes
                        <br/>  
                        · Residential or building 
                          cleaning services.
                        <br/>  
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
                        <br/>  
                        · Schools.
                        <br/>  
                        · Universities.
                        <br/>  
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
                        <br/>  
                        · Malls.
                        <br/> 
                        · Shopping centers.
                        <br/> 
                        · Public use areas.
                        <br/> 
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
                <h1>FIND US</h1>
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

   sendEmail(){
    const formulario = document.getElementById("myForm");
    emailjs.sendForm('service_ryot351', 'template_827qyud', formulario ).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

   }

  }
  
})();
