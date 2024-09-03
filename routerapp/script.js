//para mostrar el cambio de ruta en url browser
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

//rutas actuales
const routes = {
    404: "/404.html",
    "/": "/index2.html",
    "/about": "/about.html",
};

//carga contenido adecuado según la ruta
const handleLocation = async () => {
    console.log(window.location)
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

//
window.onpopstate = handleLocation;
window.route = route;

handleLocation();