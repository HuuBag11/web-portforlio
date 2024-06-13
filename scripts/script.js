$(document).ready(function(){
    new Typed('.multi-text', {
        strings: ['Front-end/UI Developer'],
		// typing speed
		typeSpeed: 100,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 100,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
    });
})

function changeTheme(){
    //e.preventDefault();
    $("#change-theme").toggleClass("dark-active");
    $('body').toggleClass("theme-light");
}

function popupChangeTheme(){
    $("#good").on("change", function(){
        changeTheme();
    })
}
popupChangeTheme();

function activeNavLink() {
    let sections = document.querySelectorAll('section');

    window.onscroll = () => {
        let fromTop = window.scrollY + 150;

        sections.forEach(sec => {
            let sectionTop = sec.offsetTop;
            let sectionHeight = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                let targetNavLink;
                let targetPopupLink;
                
                if (id === 'sectionHome') {
                    targetNavLink = document.querySelector('header nav a[href="#"]');

                } else {
                    targetNavLink = document.querySelector(`header nav a[href="#${id}"]`);
                    targetPopupLink = document.querySelector(`#menu-popup a[href="#${id}"]`);
                }

                if (targetNavLink) {
                    let parentMenuItem = targetNavLink.closest('.menu-item');
                    
                    if (parentMenuItem) {
                        document.querySelectorAll('.menu-item').forEach(item => {
                            item.classList.remove('active');
                        });

                        parentMenuItem.classList.add('active');
                    }
                }

                if (targetPopupLink) {
                    let parentMenuPopup = targetPopupLink.closest("li");
                    
                    if (parentMenuPopup) {
                        parentMenuPopup = parentMenuPopup.querySelector("a");

                        document.querySelectorAll('#menu-popup li a').forEach(item => {
                            item.classList.remove('active');
                        });

                        parentMenuPopup.classList.add('active');
                    }
                }
            }
        });
    };
}
activeNavLink();

function menuBtnFunction(event) {
    event.preventDefault();
    $("#btn-menu").toggleClass("active");

    let menuPopup = $("#menu-popup");
    menuPopup.toggleClass("show");

    let backdrop = $("#backdrop");
    backdrop.toggleClass("open");
}

ScrollTrigger.create({
    start: "top -150px",
    //markers: true,
    end: 99999,
    onUpdate: (self) => {
        self.direction === 1 ? $('#btn-menu').addClass('show') : '';
        self.progress === 0 ? $('#btn-menu').removeClass('show') : '';

        self.progress === 0 ? $('#btn-menu').removeClass('active') : '';
        self.progress === 0 ? $('#menu-popup').removeClass('show') : '';

        self.progress === 0 ? $('#backdrop').removeClass('open') : '';
    },
});

function splideProjects(){
    if($(".splide-prodjects").length){
        var splide = new Splide( '.splide-prodjects', {
            type   : 'slide',
            perPage: 3,
            perMove: 1,
            autoplay: true,
            gap: 20,
            arrows: false,
            interval: 8000,
            speed: 1000,
            breakpoints: {
                1024: {
                    perPage: 2
                },
                768: {
                    perPage: 1
                }
            }
        } );
        splide.mount();
    }
}
splideProjects();