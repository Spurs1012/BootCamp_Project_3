particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, // Reduced particle count for less crowded feel
        density: {
          enable: true,
          value_area: 1200
        }
      },
      color: {
        value: ["#FF114F", "#FF00A1", "#FE76FF", "#7904EB", "#110458"]
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,  // Increased opacity for better visibility
        random: true,
      },
      size: {
        value: 4,
        random: true
      },
      move: {
        speed: 5,  // Increased movement speed for smoother animation
        random: true, 
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        bubble: {
          distance: 220,
          size: 6,  // Increased bubble size for smoother transition
          duration: 2,
          opacity: 0.8,
          speed: 5  // Decreased speed for a softer bubble effect
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    }
});