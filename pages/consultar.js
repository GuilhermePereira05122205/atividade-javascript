import { InputUpdate } from "../components/InputUpdate.js"
import { Button } from "../components/button.js"
import { Buttons } from "../components/buttons.js"
import { FieldsForm } from "../components/fieldsForm.js"
import { Form } from "../components/form.js"
import { InputImage } from "../components/inputImage.js"
import { addEvents } from "../events/edit_forms.js"

export class Consultar{

    constructor(){

        var content = [
            new FieldsForm([
                new InputUpdate("Nome"),
                new InputUpdate("Email"),
                new InputUpdate("Data de Nascimento"),
                new InputUpdate("Github"),
                new InputUpdate("Linkedin"),
                new InputImage("image"),
                new InputUpdate("Sobre projetos")
        
            ]),
            new Buttons([
                new Button("excluir", "Excluir", ["botao", "excluir"]),
                new Button("atualizar", "Atualizar", ["botao", "atualizar"]),
            ])
            
        ]

        this.children = [
            new Form(content)
        ]

        this.css = [
            "/css/stylecss.css",
            "/css/index.css"
        ]
    }

    load(){
        var content = this.loadChildren()
        var css = this.loadCss()
        return`
        ${css} 
            <div class="borda formulario">
                <div style="text-align: center; font-size: 7vh; font-weight: bold;">Suas informações</div><br>
                ${content}
            </div>
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

    loadEvents(){
        addEvents()
    }

    loadChildren(){
        var content = ""

        for(let child of this.children){
            content += child.load()
        }

        return content
    }
}
