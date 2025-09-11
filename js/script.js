document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            // if true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            // else (id false) do this:
            menunav.setAttribute('data-navstate', 'open');
        };
    });

});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var splashScreen = document.getElementById("splash-screen");
        if (splashScreen) {
            splashScreen.style.display = 'none';
        }
    }, 2000);
});

// SLIDE_ANIMATION //

document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".slide-in-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 一度表示したら監視を外す
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(target => observer.observe(target));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".slide-in-left");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // 一度だけ実行したい場合は↓
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});

// Final Logo Animation
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".observe-me");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target); // 1回だけアニメーションするなら
      }
    });
  }, {
    threshold: 0.2 // 要素の20%が見えたら発火
  });

  targets.forEach(el => observer.observe(el));
});









