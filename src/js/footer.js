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
<p class="info">  
La propuesta de valor de Clothing brinda lo más relevante de cada colección, a través de modelos exclusivos e innovaciones que marcan tendencia urbana.
Actualmente, Clothing cuenta con tres tiendas: una en el barrio el Talar, en mendiolaza; otra en la Ciudad de Córdoba, y una tercera recientemente inaugurada en Villa Allende, todas ellas orientadas a ofrecer la mejor experiencia al cliente. Además, prevé nuevas aperturas en zonas estratégicas de CABA y Gran Buenos Aires.
 
Gracias por tu visita!!!
</p>
<p class="info">Support emails helps@clothing.com, customersupport@clothing.com</p>
<p class="info">Teléfono 351 4238386 - 351 156865256</p>
<p class="footer-social-container">
    <a href="#" class="social-link">Términos y Condiciones</a>
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