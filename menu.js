
// var $window = $(window);
// var $header = $('.header');
 
// $window.scroll(onScroll);
 
// function onScroll() {
//   if ($window.scrollTop()) {
//     $header.addClass('is-active');
//   } else {
//     $header.removeClass('is-active');
//   }
// }

// 

window.onload = () => getPos();

window.addEventListener(
  "scroll",
  function () {
    var top = this.scrollY;
    document.querySelector("header").className = top > 0 ? "scrolled" : "";
    const active = cordsSection.find(
      (section) =>
        top >= section.positionTop - 90 && top <= section.positionBottom
    );
    navLinks.forEach((link) => link.classList.remove("active"));
    try {
      const link = navLinks.find(
        (link) => link.getAttribute("href") === active.link
      );
      link.classList.add("active");
    } catch (e) {}
  },
  false
);

