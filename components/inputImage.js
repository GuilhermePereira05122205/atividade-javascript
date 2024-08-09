export class InputImage{

    constructor(id){
        this.children = []
        
        this.id = id
    } 

    load(){
        return `
        <div class="conteudo">
            <label class="campoLabel">Sua foto</label><br>

            <div class="imagem">
                <img src="" alt="" id="foto">
                <input type="file" name="fotoPerfil" class="input" id="${this.id}">
                <div class="botaoImagem">
                    <label for="${this.id}">Cadastrar Imagem</label>
                </div>
            </div>
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