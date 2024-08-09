export class Buttons{

    constructor(children){
        this.children = children
    }

    load(){
        let content = this.loadChildren()
        return `
            <div class="botoes"> 
                ${content}
            </div>
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