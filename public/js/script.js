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

particlesJS('jumbo', ext, function() {
  console.log('callback - particles.js config loaded');
});

function aboutme() {
  $('#name-row').css('top', '50%');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-10 col-md-10 col-sm-8 col-lg-4' id='about-sum'>  <p>    <h2 id='about-title-h2'>Hi, I'm Mihir. </h2>I am a sophomore pursuing Computer Engineering at University of California, Davis.    I'm currently an undergraduate researcher at ExpoLAB UC Davis, researching the applications of Blockchain in    sustainability and waste management under Prof. Mohammad Sadoghi. This research led me to co-found PlastiCoin,    a blockchain-based incentivized way of recycling plastic. In addition to this, I also work as a finance associate    for SacHacks, contacting industry professionals to raise money for the first intercollegiate hackathon in the    greater Sacramento area.  </p></div><div class='col'></div>"
}

function mihir() {
  $('#name-row').css('top', '50%');
  document.getElementById('name-row').innerHTML = "        <div class='col'></div>                  <div class='col-10 col-sm-10 col-md-8 col-lg-3'>                    <div class='container' id='name-box'>            <img src='public/img/Avatar.jpg' id='avatar'>            <h2 id='name'>Mihir Wadekar</h2>            <h6 id='name-des'>CE Major @ UC Davis 2022, Undergrad Researcher and PlastiCoin Co-Founder</h6>                        <h2 class='row' id='icon-row'>              <div class='col'></div>              <div class='col-3'>                <a class='fa fa-linkedin' aria-hidden='true' href='https://www.linkedin.com/in/mihir-wadekar-6bb691164/'></a>              </div>              <div class='col-3'>                <a class='fa fa-github' aria-hidden='true' href='https://github.com/mw2000'></a>              </div>                            <div class='col'></div>            </h2>          </div>          </div>                <div class='col'></div>          </div>"
}

function cv() {
  $('#name-row').css('top', '40%');
  document.getElementById('name-row').innerHTML = "<div class='col'></div><div class='col-12 col-sm-12 col-md-11 col-lg-5'>  <div class='row'>    <div class='col'></div>    <div class='col-6 col-sm-6 col-md-6 col-lg-3'>      <button id='copy'>Grab a copy!</button>    </div>    <div class='col'></div>  </div>    <img id='resume' src='public/img/Resume.png' width='100%' height=' 100%' /></div><div class='col'></div>"
}

window.onload = mihir();