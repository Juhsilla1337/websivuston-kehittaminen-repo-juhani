fetch("./components/header.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("header").innerHTML = data;

    // Burger menu vasta headerin latauduttua
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-container");

    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

  });

fetch("./components/footer.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("footer").innerHTML = data;

    // Vuosiluku footerin latauduttua
    const yearElement = document.getElementById("year");

    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

  });