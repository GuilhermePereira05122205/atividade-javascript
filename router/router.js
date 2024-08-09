import { Cadastrar } from "../pages/cadastrar.js";
import { Consultar } from "../pages/consultar.js";
import { Home } from "../pages/home.js";
import { Listar } from "../pages/listar.js";

export class Router {
    constructor() {
        this.rotas = {
            '#home': new Home(),
            '#cadastrar': new Cadastrar(),
            '#atualizar': new Consultar(),
            '#listar': new Listar()
        };

        window.addEventListener('load', this.navegar.bind(this));
        window.addEventListener('hashchange', this.navegar.bind(this));
    }

    navegar() {
        const divConteudo = document.getElementById('main');
        const hash = window.location.hash;

        const pagina = this.rotas[hash] || this.rotas['#home'];
        divConteudo.innerHTML = pagina.load();
        pagina.loadClassCss()
        pagina.loadEvents()
    }

}