export class Titulo{

    constructor(){
        this.children = []
    }

    load(){
        return`<h1> ola </h1>`
    }

    loadChildren(){
        var content = ""

        for(let child of this.children){
            content += child.load()
        }

        return content
    }
}