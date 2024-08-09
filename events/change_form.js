export function change_form(){

    document.querySelector("#form_2").classList.add("hidden")

    var buttons = document.querySelectorAll("#change")

    for(let button of buttons){
        button.addEventListener("click", () => {
            document.querySelector("#form_1").classList.toggle("hidden")
            document.querySelector("#form_2").classList.toggle("hidden")
        })
    }
}