var header = document.querySelector('header');
var footer = document.querySelector('footer');


header.innerHTML = `<nav class="navbar navbar-expand-lg">

<div class="container-fluid">
    <img id='logo' src="img/Acordes-y" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="btnNav"></span>
    </button>

    <div class="collapse navbar-collapse tamanho" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Index.html">Home |</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Oficinas.html">Oficinas |</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Padrinho.html">Padrinhos |</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="quemsomos" href="QuemSomos.html" id="navbarDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Quem Somos
                </a>
                <ul class="dropdown-menu cor-amarelo" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item cor" href="QuemSomos.html">Nossa história</a></li>
                    <li><a class="dropdown-item cor" href="QuemSomos.html">Depoimentos</a></li>
                </ul>
            </li>
            <a href="#"><button class="amarelo-btn" id="login">Login</button></a>
        </ul>

    </div>

</div>
</nav>`;

footer.innerHTML = `<div class="row g-0 pt-2">
<div class="col-4">
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active p-0  tamanho-a" href="index.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-0 tamanho-a" href="Oficinas.html">Oficinas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link p-0 tamanho-a" href="QuemSomos.html">Quem Somos</a>
        </li>
    </ul>
</div>
<!-- Copyright -->
<div id="copyright" class="col-4  p-0">
    © 2021 Copyright
</div>
<div class="col-4 pe-5 pt-4 text-end">
    <section >
        <a class="icon-facebook text-decoration-none" href="#facebook" class="iconsMidias"
            style="margin-right: 10px;"></a>
        <a class="icon-instagram text-decoration-none" href="#instagram" style="margin-right: 10px;"></a>
        <a class="icon-whatsapp text-decoration-none" href="#whats" style="margin-right: 10px;"></a>
        <a class="icon-twitter text-decoration-none" href="#twitter" style="margin-right: 10px;"></a>
        <a class="icon-youtube text-decoration-none" href="#youtube" style="margin-right: 10px;"></a>
    </section>
</div>


</div>`