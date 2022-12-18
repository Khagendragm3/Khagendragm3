// handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // validate form data
  if (!name || !email || !message) {
    alert('Please fill out all fields');
    return;
  }

  // send form data to server
  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Form submitted successfully');
      } else {
        alert('Error submitting form');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Error submitting form');
    });
});

// toggle menu on mobile devices
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.toggle('menu-open');
});

// smooth scroll to anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
