export class Description{

    constructor(image){
        this.children = []
        
        this.image = image
    }

    load(){
        return `
            <section class="portfoliosite">
                <article>
                    <div class="imagem">
                        <img src="./img/imagem.jpeg" alt="" >
                    </div>
                    <div>
                        <h2>Você já teve dificuldades em fazer um portfólio? Se esse era o seu maior problema temos a solução!</h2>
                        <img src="./img/nota.jpeg" alt="" class="nota">
                    </div>
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