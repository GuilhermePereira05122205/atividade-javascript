import { Button } from "./button.js"
import { Fieldset } from "./fieldset.js"
import { Input } from "./input.js"
import { InputImage } from "./inputImage.js"

export class Form{

    constructor(children){
        this.children = children
    }

    load(){
        var content = this.loadChildren()
        return `
            <form enctype="multipart/form-data">
                ${content}
            </form>
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