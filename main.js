document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    menu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menu.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
    menu.addEventListener('click', function (event) {
        event.preventDefault();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById('notAllowedModal');
  
    // Get the button that opens the modal
    var btn = document.querySelector('.dec_btn');
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];
  
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = 'block';
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = 'none';
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });
  

