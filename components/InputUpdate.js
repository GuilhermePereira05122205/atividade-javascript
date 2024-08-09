export class InputUpdate {

    constructor(name) {
        this.children = []
        this.name = name
    }

    load() {
        return `
           
            <div>
                <label> ${this.name} </label>
                <input type="text" name="${this.name}" class="input" disabled>
            </div>
            <button class="botao editar" type="button" id="${this.name}">Editar</button> 
            <button class="botao excluir" type="button" id="${this.name}">Excluir</button>
        `
    }

    loadChildren() {
        var content = ""

        for (let child of this.children) {
            content += child.load()
        }

        return content
    }
}