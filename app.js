import { Router } from "./router/router.js";
import { Footer } from "./sections/footer.js";
import { Navbar } from "./sections/navbar.js";

class App {
    constructor() {
        this.nav = new Navbar();
        this.router = new Router();
        this.footer = new Footer()
        this.iniciar();
    }

    iniciar() {
        this.footer.carregar()

        this.nav.carregar()
        document.getElementById('home').addEventListener('click', () => {
            window.location.hash = '#home';
            this.router.navegar();
        });

        document.getElementById('cadastrar').addEventListener('click', () => {
            window.location.hash = '#cadastrar';
            this.router.navegar();
        });

        document.getElementById('listar').addEventListener('click', () => {
            window.location.hash = '#listar';
            this.router.navegar();
        });

        this.router.navegar();
    }
}

const app = new App();