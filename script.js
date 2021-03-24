// document.querySelector(".hamburguer").addEventListener("click" , () => 
//         document.querySelector(".container").classList.toggle("show-menu")
//     );

// var hamburguer = document.querySelector(".hamburguer");

// hamburguer.addEventListener("click", function() {
//     document.querySelector(".sidebar").classList.toggle("show-menu");
// });

function show (){;
    document.querySelector(".container").classList.toggle("show-menu")
};

document.querySelector("#qtde").addEventListener("click", atualizarPreco);

function atualizarPreco(){
const qtde = document.querySelector("#qtde").nodeValue;

console.log(qtde);
}