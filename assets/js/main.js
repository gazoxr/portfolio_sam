/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader = document.getElementById("header");
      const isMobile = window.innerWidth <= 540;

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = isMobile ? "50px" : "70px";
        navHeader.style.lineHeight = isMobile ? "50px" : "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = isMobile ? "40px" : "90px";
        navHeader.style.lineHeight = isMobile ? "40px" : "90px";
      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Infographe","Photographe","Designer","Maintenancier  informatique","Cartographe"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }
document.querySelectorAll('.downloadCV').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/Sam_cv/Sam.pdf';
    link.download = 'Sam.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});



document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('assets/php/send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        const msgDiv = document.getElementById('formMessage');
        if(result.trim() === "success") {
            msgDiv.textContent = "Votre message a bien été envoyé !";
            msgDiv.style.color = "green";
            form.reset();
        } else {
            msgDiv.textContent = "Erreur lors de l'envoi. Réessayez.";
            msgDiv.style.color = "red";
        }
    })
    .catch(() => {
        const msgDiv = document.getElementById('formMessage');
        msgDiv.textContent = "Erreur réseau. Réessayez.";
        msgDiv.style.color = "red";
    });
});

// Efface le message dès qu'un champ du formulaire est modifié
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function(field) {
    field.addEventListener('input', function() {
        const msgDiv = document.getElementById('formMessage');
        if (
            document.querySelector('input[name="name"]').value === '' ||
            document.querySelector('input[name="email"]').value === '' ||
            document.querySelector('textarea[name="message"]').value === ''
        ) {
            msgDiv.textContent = '';
        }
    });
});
  window.addEventListener('scroll', scrollActive)