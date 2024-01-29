(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


//open chat

// JavaScript for opening, closing, and sending messages in the chat pop-up

function openChat() {
    document.getElementById("chatPopup").style.display = "block";
}
  
function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
}
  
function sendMessage() {
    // Add your logic for sending messages here
    var input = document.querySelector(".chat-footer input");
    var message = input.value;
    if (message.trim() !== "") {
      var chatBody = document.querySelector(".chat-body");
      var newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.textContent = message;
      chatBody.appendChild(newMessage);
      input.value = "";
    }
}
  

/*--------------------services modal-----------*/
const modalViews = document.querySelectorAll('.services_modal-content'),
      modelBtns = document.querySelectorAll('.services_button-s'),
      modalCloses = document.querySelectorAll('.services_modal-close'),
      closeMdl = document.querySelectorAll('.close_modl')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () =>{
        modal(i)
    })
})
closeMdl.forEach((modelLink, i) => {
    modelLink.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
