// FAQ Accordion

// The document variable is our entire app
// DOMContentLoaded is when the website is finished loading
// ...so what this means is when the website is completely loaded
// run this function!
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  /**
   * Instead of adding a listener to each header, we
   * instead add it to the container and then check
   * which one we're at
   * 
   * Additionally e.target is the element clicked on 
   * by the user
   */
  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if(!groupHeader) return;
    console.log(groupHeader);

    //Grabbing faq-group (the parent of .faq-group-header)
    const group = groupHeader.parentElement;
    const gorupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    gorupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    otherGroups.forEach((otherGroup) => {
      if(otherGroup != group)
      {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu 
document.addEventListener(('DOMContentLoaded'), () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});