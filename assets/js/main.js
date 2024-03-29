/* ==== MENU SHOW ==== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ==== ACTIVE AND REMOVE MENU ==== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    // Remove Link 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==== SCROLL REVEAL ANIMATION ==== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})

    /* SCROLL HOME */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

    /* SCROLL ABOUT */
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

    /* SCROLL SKILLS */
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

    /* SCROLL WORK */
sr.reveal('.work__img',{interval: 200})
sr.reveal('.project-title',{interval: 200})

    /* SCROLL CONTACT */
sr.reveal('.contact__input',{interval: 200})

function _(id) {return document.getElementById(id);}

function submitForm() {
    //_("mybtn").disabled = true;
    _("status").innerHTML = 'please wait...';

    var formdata = new FormData();
    
    formdata.append( "n", _("n").value );
    formdata.append( "e", _("e").value );
    formdata.append( "m", _("m").value );

    var ajax = new XMLHttpRequest();

    ajax.open( "POST", "./assets/php/envia.php");
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            if(ajax.responseText == "success") {
                _("status").innerHTML = '<h5> Thanks ' + _("n").value + ', your message has been sent.</h5>';
                console.log("<------------------Email enviado---------->")
                _("n").value = ""
                _("e").value = ""
                _("m").value = ""
            }
            else {
                _("status").innerHTML = ajax.responseText;
                //_("mybtn").disabled = false;
            }
        }
    }
    ajax.send( formdata );
    
}


