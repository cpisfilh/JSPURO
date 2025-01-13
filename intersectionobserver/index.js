const sections = document.querySelectorAll(".section");
const lis = document.querySelectorAll("li")

const options ={
    root: null, //El valor predeterminado es la ventanilla del explorador
    rootMargin: "0px", //margin antes de llegar a la sección
    threshold: 0.5, //porcentaje de la sección en la que ejecutaremos acciones
}

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            lis.forEach((item)=>{
                if(entry.target.getAttribute("id")==item.textContent){
                    item.style.color = "red";
                }else{
                    item.style.color = "white";
                }
            })
            
        }
    });
  };
  

const observer = new IntersectionObserver(callback, options);

sections.forEach((el)=>{
    observer.observe(el);
})