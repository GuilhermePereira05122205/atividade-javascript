export class Fieldset{

    constructor(children, id){
        this.children = children
        this.id = id
    }

    load(){
        var content = this.loadChildren()
        return `
            <fieldset class="container" id="${this.id}"> 
            <h3> Insira as informações necesárias </h3>
                ${content}
            </fieldset>
        `
    }

    loadChildren(){
        var content = ""

        for(let child of this.children){
            content += child.load()
        }

        return content
    }
}