
let opcoes = document.querySelectorAll(".opcaoTipo .container");
let carousel = document.querySelector("#carouselProdutos");
let imagens = carousel.querySelectorAll("img");
let imagensPath = {
    "bedroom": [
        "assets/images/bedroom/bedroom_1.jpeg",
        "assets/images/bedroom/bedroom_2.jpeg",
        "assets/images/bedroom/bedroom_3.jpeg",
    ],
    "kitchen": [
        "assets/images/kitchen/kitchen_1.jpeg",
        "assets/images/kitchen/kitchen_2.jpeg",
        "assets/images/kitchen/kitchen_3.jpeg",
    ],
    "office": [
        "assets/images/office/desk_1.jpeg",
        "assets/images/office/desk_2.jpeg",
        "assets/images/office/desk_3.jpeg",
    ]
    // Adicione as outras categorias aqui...
};

opcoes.forEach((opcao, index) => {
    opcao.addEventListener("click", () => {
        opcoes.forEach((opcao) => {
            opcao.style.backgroundColor = "white";
            opcao.style.color = "black";
        });
        opcao.style.backgroundColor = "lightgray";
        opcao.style.color = "black";
        let tipo = opcao.getAttribute("data-option"); // Obtenha o valor do atributo data-option
        let imagensTipo = imagensPath[tipo]; // Use esse valor para obter as imagens corretas
        imagens.forEach((imagem, index) => {
            imagem.src = imagensTipo[index]; // Atualize o src das imagens
        });
    });
});

let btnHeader = document.querySelector("#btnHeader");
btnHeader.addEventListener("click", () => {
    window.scrollTo({
        top: 800,
        behavior: "smooth",
    });
});


    