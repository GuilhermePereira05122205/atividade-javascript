
export class Navbar{
    carregar(){
        const navBar = document.querySelector('nav')
        navBar.innerHTML = `
        <ul>
            <li id="home">Home</li>
            <li id="cadastrar">Criar portifolio</li>
            <li id="listar">Listar</li>
        </ul>`
    }
}



// document.addEventListener('DOMContentLoaded', ()=>{
//     const navBar = document.querySelector('nav')
//     navBar.innerHTML = `<ul>
//     <a href="/">
//             <li>Home</li>
//         </a>
//         <a href="/cadastrarView.php">
//             <li>Criar portifolio</li>
//         </a>
//         <a href="/listar.php">
//             <li>Listar</li>
//         </a>
//     </ul>`
// })