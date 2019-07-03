ext = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#707070"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#a4a3a3",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


particlesJS('particles', ext, function() {
  console.log('callback - particles.js config loaded');
});



function navbar_font() {
  if (!$('#navbarTogglerDemo02').is(":hidden")) {
    $('.nav-link').removeClass('nav-link-mobile')
    $('.navbar-brand').removeClass('navbar-brand-mobile')
  } else {
    $('.nav-link').addClass('nav-link-mobile')
    $('.navbar-brand').addClass('navbar-brand-mobile')
  }
}



function aboutme() {
  $('#name-row').removeClass('name-row-scroll');
  // $('#name-row').css('top', '50%');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-10 col-md-10 col-sm-8 col-lg-4' id='about-sum'>  <p>    <h2 id='about-title-h2'>Hi, I'm Mihir. </h2>I am a sophomore pursuing Computer Engineering at University of California, Davis.    I'm currently an undergraduate researcher at ExpoLAB UC Davis, researching the applications of Blockchain in    sustainability and waste management under Prof. Mohammad Sadoghi. This research led me to co-found PlastiCoin,    a blockchain-based incentivized way of recycling plastic. In addition to this, I also work as a finance associate    for SacHacks, contacting industry professionals to raise money for the first intercollegiate hackathon in the    greater Sacramento area.  </p></div><div class='col'></div>"
  // $('#navbarTogglerDemo02').toggle();
}

function mihir() {
  $('#name-row').removeClass('name-row-scroll');
  // $('#name-row').css('top', '50%');

  document.getElementById('name-row').innerHTML = "        <div class='col'></div>                  <div class='col-10 col-sm-10 col-md-8 col-lg-3'>                    <div class='container' id='name-box'>            <img src='public/img/Avatar.jpg' id='avatar' class='mx-auto d-block'>            <h2 id='name'>Mihir Wadekar</h2>            <h6 id='name-des'>CE Major @ UC Davis 2022, Undergrad Researcher and PlastiCoin Co-Founder</h6>                        <h2 class='row' id='icon-row'>              <div class='col'></div>              <div class='col-3'>                <a class='fa fa-linkedin' aria-hidden='true' href='https://www.linkedin.com/in/mihir-wadekar-6bb691164/'></a>              </div>              <div class='col-3'>                <a class='fa fa-github' aria-hidden='true' href='https://github.com/mw2000'></a>              </div>                            <div class='col'></div>            </h2>          </div>          </div>                <div class='col'></div>          </div>"
  // $('#navbarTogglerDemo02').toggle();
}

function cv() { 
  // $('#name-row').css('top', '40%');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-lg-8 col-sm-10 col-md-10 col-12' id='resume'>  <h2 id='cv-title'><b> Mihir Wadekar </b></h2>  <h6 id='cv-email'> <i> mpwadekar [at] ucdavis [dot] edu </i></h6>  <hr>  <div class='row' style='text-align:left'>    <div class='col-12 col-md-12 col-sm-12 col-lg-6'>      <h4 id='cv-subtitle'><b>Work Experience</b></h4>      <ul>        <li>          <h5 id='cv-h5'><b>Finance Associate - SacHacks (2019 - Present)</b></h5>          <p id='cv-p'>Contacting industry professionals for company sponsorships to raise money for SacHacks</p>        </li>        <li>          <h5 id='cv-h5'><b>Co-Founder - PlastiCoin (2018 - Present)</b></h5>          <p id='cv-p'>Building a startup to tackle the problem of waste plastic by a incentivizing plastic recycling through Blockchain</p>        </li>      </ul>      <hr>      <h4 id='cv-subtitle'><b>Research Experience</b></h4>      <ul>        <li>          <h5 id='cv-h5'><b>Blockchain Applications in Sustainability and Waste Management (2019 - Present)</b></h5>          <p id='cv-p'>Researching real-world applications of blockchain in sustainability and waste management under Prof. Mohammed Sadoghi at Expolab, UC Davis. </p>        </li>      </ul>      <hr>      <h4 id='cv-subtitle'><b>Project Experience</b></h4>      <ul>        <li>          <h5 id='cv-h5'><b>Injecto (2018)</b></h5>          <p id='cv-p'>Built on the Nebulas Blockchain, this is a simple DApp which helps to keep record of your vaccination history.</p>        </li>        <li>          <h5 id='cv-h5'><b>PulsarCoin (2018 - present)</b></h5>          <p id='cv-p'>A basic javascript implementation of a blockchain.</p>        </li>        <li>          <h5 id='cv-h5'><b>Data Stuctures in Rust and Go (2019 - present)</b></h5>          <p id='cv-p'>Implementing common data structures in safe, modern Rust and Go and writing a book about the same.      </p>        </li>      </ul>      <hr>    </div>    <div class='col-12 col-md-12 col-sm-12 col-lg-6'>      <h4 id='cv-subtitle'><b>Skills</b></h4>      <ul>        <li id='cv-h6'><h6 class='skill-title'><b>Programming Languages:</b></h6> C, C++, Javascript, Python</li>        <li id='cv-h6'><h6 class='skill-title'><b>OS:</b></h6> Unix, MacOS, Linux</li>        <li id='cv-h6'><h6 class='skill-title'><b>Tools:</b></h6> Git, LaTeX, ViM, Google Test</li>        <li id='cv-h6'><h6 class='skill-title'><b>Frameworks:</b></h6> Ionic, React Native, AngularJS, NodeJS, Express</li>      </ul>      <hr>      <h4 id='cv-subtitle'><b>Education</b></h4>      <ul>        <li>          <h5 id='cv-h5'><b>The Bishop's School, Camp, Pune (2004 - 2016)</b></h5>          <p id='cv-p'>Elementary school through 10th grade</p>        </li>        <li>          <h5 id='cv-h5'><b>Laxmanrao Apte Jr. Clg, Pune (2016 - 2018)</b></h5>          <p id='cv-p'>11th and 12th grade</p>        </li>        <li>          <h5 id='cv-h5'><b>University of California, Davis (2018 - present)</b></h5>          <p id='cv-p'>BS, Computer Engineering </p>        </li>      </ul>      <hr>      <h4 id='cv-subtitle'><b>Awards and Other Achievements</b></h4>      <ul>        <li id='cv-h6'><h6 class='skill-title'><b>UC Davis College of Enginereing Dean's List:</b></h6> WQ2019</li>        <li id='cv-h6'><h6 class='skill-title'><b>UC GPA:</b></h6> 3.51</li>        <li id='cv-h6'><h6 class='skill-title'><b>SAT Score:</b></h6> 1450</li>        <li id='cv-h6'><h6 class='skill-title'><b>SAT Subject Tests:</b></h6> Math - 780, Physics - 720</li>        <li id='cv-h6'><h6 class='skill-title'><b>ICSE board examination:</b></h6> 93%</li>        <li id='cv-h6'><h6 class='skill-title'><b>HSC board examination:</b></h6> 80%</li>      </ul>      <hr>      <h4 id='cv-subtitle'><b>Languages</b></h4>        <h6 class='skill-title'>English, Hindi, Marathi</h6>      </ul>      <hr>    </div>  </div></div><div class='col'></div>"
  $('#name-row').addClass('name-row-scroll');
  // $('#navbarTogglerDemo02').toggle();
}


function startup() {
  navbar_font();
  mihir();
}

window.onload = startup();

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
})