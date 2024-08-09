export class Portfolio{

    constructor(fotoPerfil, nome, email, descricao, github, linkedin){
        this.children = []

        this.fotoPerfil = fotoPerfil
        this.nome = nome
        this.email = email
        this.descricao = descricao
        this.github = github
        this.linkedin = linkedin
    }

    load(){
        return `
        <aside class="portfolio">
            <div class="nome">
                <img src="${this.fotoPerfil}" alt="">
            <div>
                <p>${this.nome}</p>
                <p>${this.email}</p>
            </div>
            </div>
            <div class="descricao">
                <h3>Saiba mais sobre mim e meus trabalhos</h3>
                <p>${this.descricao}</p>
            </div>
            <div class="redes">
                <div>
                    <a href="${this.github}"><img src="./img/github.png" alt=""></a>
                </div>
                <div>
                    <a href="#atualizar"> <img src="./img/edit.png" alt=""> </a>
                </div>
                <div>
                    <a href="${this.linkedin}"><img src="./img/linkedin.png" alt=""></a>
                </div>
            </div>

        </aside>
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