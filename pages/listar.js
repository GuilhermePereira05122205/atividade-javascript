import { List } from "../components/list.js"
import { Portfolio } from "../components/portfolio.js"

export class Listar{

    constructor(){

        this.children = [
            new List([
                new Portfolio("img/user.png", "Guilherme", "guilherme@email.com", "Sou desenvolvedor back-end e trabalho com as linguagens PHP e Javscript, estou em busca de novas oportunidades", "https://github.com/", "https://www.linkedin.com/"),
                new Portfolio("img/user.png", "Daniel", "daienl@email.com", "Sou desenvolvedor fullstack com a lingauegem PHP e Java e busco uma oportunidade", "https://github.com/", "https://www.linkedin.com/")
            ])
        ]

        this.css = [
            "/css/index.css"
        ]
    }

    load(){
        var content = this.loadChildren()
        var css = this.loadCss()
        return`${css} 

            <section class="titulo">
                <h1>Portifolios</h1>
            </section>

            ${content}
        `
    }

    loadCss(){
        var content = ""

        for(let cssF of this.css){
            content += `
                <link rel="stylesheet" href="${cssF}">
            `
        }

        return content
    }

    loadClassCss(){
    
        let childComponent = this.children
    
        while(childComponent.length != 0){
    
            let children = childComponent
            childComponent = []
    
            for(let child of children){
                if('addClassCss' in child.constructor.prototype){
                    child.addClassCss()
                }
    
                childComponent.push(...child.children)
            }
        }
            
        }

    loadChildren(){
        var content = ""

        for(let child of this.children){
            content += child.load()
        }

        return content
    }

    loadEvents(){
        
    }
}