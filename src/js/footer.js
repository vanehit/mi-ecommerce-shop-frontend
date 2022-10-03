const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="./public/img/light-logo.png" class="logo" alt="">
    <div class="footer-url-container">
        <ul class="category">
            <li class="category-title">Hombre</li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Jeans</a></li>
            <li><a href="#" class="footer-links">Pantalones</a></li>
            <li><a href="#" class="footer-links">Calzado</a></li>
            <li><a href="#" class="footer-links">Casual</a></li>
            <li><a href="#" class="footer-links">Formal</a></li>
            <li><a href="#" class="footer-links">Deporte</a></li>
            <li><a href="#" class="footer-links">Accesorios</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Mujer</li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Remeras</a></li>
            <li><a href="#" class="footer-links">Jeans</a></li>
            <li><a href="#" class="footer-links">Pantalones</a></li>
            <li><a href="#" class="footer-links">Calzado</a></li>
            <li><a href="#" class="footer-links">Casual</a></li>
            <li><a href="#" class="footer-links">Formal</a></li>
            <li><a href="#" class="footer-links">Deporte</a></li>
            <li><a href="#" class="footer-links">Accesorios</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">Acerca de Nosotros</p>
<p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime praesentium dicta excepturi est, assumenda voluptatibus fugiat. Voluptates fugiat, eaque possimus sed animi corporis ducimus dicta autem cum, recusandae sint.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, esse odit iure sint debitis quos rerum ullam nesciunt similique sapiente, deleniti officiis! Iusto qui quod fuga delectus nostrum, a eius.
</p>
<p class="info">Support emails helps@clothis.com, customersupport@clothing.com</p>
<p class="info">Teléfono 351 4238386 - 351 156865256</p>
<p class="footer-social-container">
    <a href="#" class="social-link">Términos y Condiciones</a>
    <a href="#" class="social-link">Politica de Privacidad</a>
</p>
<p class="footer-social-container">
    <a href="#" class="social-link">Instagram</a>
    <a href="#" class="social-link">facebook</a>
    <a href="#" class="social-link">Twitter</a>
</p>

<p class="footer-credit">Clothing, Mi Tienda OnLine</p>
    `;
}

createFooter();