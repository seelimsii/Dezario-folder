// Get the current date
let d = new Date();

// Display the current date in the hero section
document.querySelector('.hero h1').innerHTML = "Today's date is " + d;

// Add event listeners to the navigation menu
document.querySelectorAll('nav ul li a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    // Add your navigation logic here
  });
});

// Add event listeners to the services section
document.querySelectorAll('.services ul li').forEach(function(service) {
  service.addEventListener('mouseover', function() {
    // Add your hover effect logic here
  });
  service.addEventListener('mouseout', function() {
    // Add your hover effect logic here
  });
});

// Add event listeners to the portfolio section
document.querySelectorAll('.portfolio ul li').forEach(function(project) {
  project.addEventListener('mouseover', function() {
    // Add your hover effect logic here
  });
  project.addEventListener('mouseout', function() {
    // Add your hover effect logic here
  });
});