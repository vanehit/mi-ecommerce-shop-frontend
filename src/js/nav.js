const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML =`
    <div class="nav">
    <img src="./public/img/dark-logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="¿qué estás buscando?, producto...">
            <button class="search-btn">Búsqueda</button>
        </div>
        <a href=""><img src="./public/img/user.png" alt=""></a>
        <a href=""><img src="./public/img/cart.png" alt=""></a>
    </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="" class="link">Home</a></li>
        <li class="link-item"><a href="" class="link">mujer</a></li>
        <li class="link-item"><a href="" class="link">hombre</a></li>
        <li class="link-item"><a href="" class="link">niños</a></li>
        <li class="link-item"><a href="" class="link">accesorios</a></li>
    </ul>
    `;
}

createNav();