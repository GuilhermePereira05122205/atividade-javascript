import {Titulo} from "../components/titulo.js"
import { Banner } from "../components/banner.js"
import { Description } from "../components/description.js"

export class Home{

    constructor(){

        this.children = [
            new Banner("/img/banner.jpeg"),
            new Description()
        ]

        this.css = [
            "/css/home.css",
            "/css/index.css"
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

    loadEvents(){
        
    }

    loadChildren(){
        var content = ""

        for(let child of this.children){
            content += child.load()
        }

        return content
    }
}

