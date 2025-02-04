$("header").load("components/header.html");
$("footer").load("components/footer.html");
$(window).on("load", function () {
  let path = window.location.pathname;
  // const links = document.querySelectorAll("nav .nav-link");
  // links.forEach((item) => {
  //   if (item.getAttribute("href") == path) {
  //     item.classList.add("active");
  //   }
  // });
  $(".linkTo").click(function (e) {
    e.preventDefault();
    $("header .collapse.show").removeClass("show");
    const url = $(this).attr("href");
    const header = $("header").height();
    if (!url.includes("html") && path === "/") {
      const section = $(url.slice(1)).offset().top;
      window.scrollTo({ top: section - header, behavior: "smooth" });
    } else {
      window.location = url;
    }
  });
  $(".linkTop").click(function (e) {
    e.preventDefault();
    const url = $(this).attr("href");
    const fbaner = $(".linkbtn").height();
    if (!url.includes("html")) {
      const section = $(url.slice(1)).offset().top;
      window.scrollTo({ top: section - fbaner, behavior: "smooth" });
    } else {
      window.location = url;
    }
  });
  $("body").css("opacity", "1");
});
