// This goes FIRST to Projects, then it's used by ProjectCard

/* Images */
import pixelGif from "../images/pixel-art-jrgc.gif";
import shoppingCartGif from "../images/shopping-cart.gif";
import todoGif from "../images/todo-list-example.gif";
/* Images */

const refineToCard = (title, summary, stack, description, imgSrc = "", site = "site", repository = "repository") => ({ title, summary, stack, description, imgSrc, site, repository });

/* Front-End */
const pixelArt = refineToCard("Pixel Art", "Fazendo arte em pixel", "HTML, CSS e JS", "Neste projeto estava descobrindo o javascript", pixelGif, "https://jrgcast.github.io/pixel-art-simple-htmlcssjs/", "https://github.com/JRGCast/pixel-art-simple-htmlcssjs");
const todoList = refineToCard("To-do List", "Simples lista de afazeres", "HTML, CSS e JS", "Descobrindo o DOM, fiz esta lista de afazeres simples", todoGif, "https://jrgcast.github.io/todo-list-simple-htmlcssjs/", "https://github.com/JRGCast/todo-list-simple-htmlcssjs");
const shoppingCart = refineToCard("Shopping cart", "Modelo simples de carrinho de compras", "HTML CSS JS", "Aprofundando no DOM", shoppingCartGif, "https://jrgcast.github.io/shopping-cart-simple-htmlcssjs/", "https://github.com/JRGCast/shopping-cart-simple-htmlcssjs");
const recipesApp = refineToCard("Recipes App", "Busque e realize suas receitas", "React", "Primeiro projeto em grupo com react hooks", 'Em breve', 'https://jrgcast.github.io/recipes-app/', 'https://github.com/JRGCast/recipes-app');
/* Front-end */

export const frontProjs = [pixelArt, todoList, shoppingCart, recipesApp];
export const backProjs = [];
