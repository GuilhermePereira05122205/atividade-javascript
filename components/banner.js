export class Banner{

    constructor(image){
        this.children = []
        
        this.image = image
    }

    load(){
        return `
        <section class="banner">
            <article>
                 <img src="${this.image}" alt="" class="banner">
            </article>
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