export class Input{

    constructor(name){
        this.children = []
        this.name = name
    }

    load(){
        return `
            <label class="campoLabel" for="${this.name}">${this.name}</label><br>
            <input type="text" id="${this.name}" name="${this.name}"><br>
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