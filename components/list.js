export class List{

    constructor(children){
        this.children = children
    }

    load(){
        var content = this.loadChildren()
        return `
        <section class="grid">
            ${content}
        </section>
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