// Parallax
try {
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);
} catch (err) {};


/** Load Particle JS Container */
try {
  particlesJS.load('particles-js', '/assets/js/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
} catch (err) {};