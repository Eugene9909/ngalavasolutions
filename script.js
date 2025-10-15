// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

// Services Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    // Show corresponding content
    const tabId = btn.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Fleet Slider
const fleetTrack = document.querySelector('.fleet-track');
const fleetSlides = document.querySelectorAll('.fleet-slide');
const fleetDots = document.querySelectorAll('.fleet-slider .slider-dot');
let fleetCurrentIndex = 0;
function updateFleetSlider() {
  fleetTrack.style.transform = `translateX(-${fleetCurrentIndex * 100}%)`;
  // Update dots
  fleetDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === fleetCurrentIndex);
  });
}
// Auto slide
setInterval(() => {
  fleetCurrentIndex = (fleetCurrentIndex + 1) % fleetSlides.length;
  updateFleetSlider();
}, 3000);
// Dot navigation
fleetDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    fleetCurrentIndex = index;
    updateFleetSlider();
  });
});

// Team Slider
const teamTrack = document.querySelector('.team-track');
const teamSlides = document.querySelectorAll('.team-slide');
const teamDots = document.querySelectorAll('.team-slider .slider-dot');
let teamCurrentIndex = 0;
function updateTeamSlider() {
  teamTrack.style.transform = `translateX(-${teamCurrentIndex * 33.33}%)`;
  teamDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === teamCurrentIndex);
  });
}
teamDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    teamCurrentIndex = index;
    updateTeamSlider();
  });
});
// Auto slide
setInterval(() => {
  teamCurrentIndex = (teamCurrentIndex + 1) % teamSlides.length;
  updateTeamSlider();
}, 3000);

// Truck Slider
const truckTrack = document.querySelector('.truck-track');
const truckSlides = document.querySelectorAll('.truck-slide');
const truckDots = document.querySelectorAll('.truck-slider .slider-dot');
let truckCurrentIndex = 0;
function updateTruckSlider() {
  truckTrack.style.transform = `translateX(-${truckCurrentIndex * 100}%)`;
  truckDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === truckCurrentIndex);
  });
}
function autoScrollTruck() {
  truckCurrentIndex = (truckCurrentIndex + 1) % truckSlides.length;
  updateTruckSlider();
}
// Auto slide
setInterval(autoScrollTruck, 3000);
// Manual navigation
truckDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    truckCurrentIndex = index;
    updateTruckSlider();
  });
});
