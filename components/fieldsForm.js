export class FieldsForm {

    constructor(children) {
        this.children = []
        this.children = children
    }

    load() {
        var content = this.loadChildren()
        return `
            <div class="form">
                ${content}
            </div>
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