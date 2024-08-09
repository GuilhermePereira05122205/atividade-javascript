export class Button{

    constructor(id, nome, classCss){

        this.children = []
        this.classCss = classCss

        this.id = id
        this.nome = nome
    }

    load(){
        return `
            <button type="button" id="${this.id}"> ${this.nome} </button>
        `
    }

    loadChildren(){
        var content = ""

        for(let child of this.children){
            content += child.load()
        }

        return content
    }

    addClassCss(){
        if(this.classCss && this.id){
            document.getElementById(this.id).classList.add(...this.classCss)
        }
    }
}