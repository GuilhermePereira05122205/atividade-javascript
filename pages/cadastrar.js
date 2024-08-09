import { Button } from "../components/button.js"
import { Fieldset } from "../components/fieldset.js"
import { Form } from "../components/form.js"
import { Input } from "../components/input.js"
import { InputImage } from "../components/inputImage.js"
import { change_form } from "../events/change_form.js"

export class Cadastrar{

    constructor(){

        var content = [
            new Fieldset([
                new Input("nome"),
                new Input("email"),
                new Input("Data de nascimento"),
                new Button("change", "proximo"),
            ], "form_1"),
            new Fieldset([
                new Input("GitHub"),
                new Input("Linkedin"),
                new InputImage("imagem"),
                new Input("Sobre seus projetos"),
                new Button("change", "voltar"),
                new Button("cadastrar", "cadastrar")
            ], "form_2")
        ]

        this.children = [
            new Form(content),
        ]

        this.css = [
            "/css/index.css",
            "/css/insertInformacoes.css"
        ]

    }

    load(){
        var content = this.loadChildren()
        var css = this.loadCss()
        return`${css} ${content}`
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
        change_form()
    }
}