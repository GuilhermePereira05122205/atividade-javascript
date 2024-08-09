function editar(event){
    var id = event.target.getAttribute("id")
    var campo = document.getElementsByName(id)[0]
    campo.removeAttribute("disabled")
}

function excluir(event){
    var id = event.target.getAttribute("id")
    var campo = document.getElementsByName(id)[0]
    campo.value=""
}

export function addEvents(){
    var botoesEditar = document.querySelectorAll(".editar")
    for(let botao of botoesEditar){
        botao.addEventListener("click", editar)
    }

    var botoesExcluir = document.querySelectorAll(".excluir")
    for(let botao of botoesExcluir){
        botao.addEventListener("click", excluir)
    }


}