$(document).ready(function(){
    // Initialize Bootstrap Carousel
    $('#carouselExampleIndicators').carousel({
        interval: 4000 // changes the speed to  seconds
    });

    // Add any other JavaScript or jQuery code here
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentlyActiveAccordionButton = document.querySelector('.accordion-button.active');
            if (currentlyActiveAccordionButton && currentlyActiveAccordionButton !== button) {
                currentlyActiveAccordionButton.classList.toggle('active');
                currentlyActiveAccordionButton.nextElementSibling.style.display = 'none';
            }

            button.classList.toggle('active');
            const accordionContent = button.nextElementSibling;
            if (button.classList.contains('active')) {
                accordionContent.style.display = 'block';
            } else {
                accordionContent.style.display = 'none';
            }
        });
    });
});
