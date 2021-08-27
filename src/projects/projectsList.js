// This goes FIRST to Projects, then it's used by ProjectCard

/* Images */
import pixelGif from "../images/pixel-art-jrgc.gif";
import todoGif from "../images/todo-list-example.gif";
import shoppingCartGif from "../images/shopping-cart.gif"
/* Images */

const refineToCard = (title, summary, stack, description, imgSrc = "", site = "site", repository = "repository") => ({ title, summary, stack, description, imgSrc, site, repository });

/* Front-End */
const pixelArt = refineToCard("Pixel Art (a consertar)", "Arte em pixel", "HTML, CSS e JS", "Neste projeto estava descobrindo o javascript", pixelGif, "https://jrgcast.github.io/pixel-art-simple-htmlcssjs/", "https://github.com/JRGCast/pixel-art-simple-htmlcssjs");
const todoList = refineToCard("To-do List (a melhorar)", "Lista de afazeres", "HTML, CSS e JS", "Descobrindo o DOM, fiz esta lista de afazeres simples", todoGif, "https://jrgcast.github.io/todo-list-simple-htmlcssjs/", "https://github.com/JRGCast/todo-list-simple-htmlcssjs");
const shoppingCart = refineToCard("Shopping cart (a melhorar)", "Modelo simples de carrinho de compras", "HTML CSS JS", "Aprofundando no DOM", shoppingCartGif, "https://jrgcast.github.io/shopping-cart-simple-htmlcssjs/", "https://github.com/JRGCast/shopping-cart-simple-htmlcssjs");
const recipesApp = refineToCard("Recipes App (a melhorar)", "App de Receitas", "React", "Primeiro projeto em grupo com react hooks");
/* Front-end */

export const frontProjs = [pixelArt, todoList, shoppingCart, recipesApp];
