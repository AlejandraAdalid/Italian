


//Almaceno en una variable let header con unas comillas fracesas para almacer un string con salto de linea y tabulaciones


//<div class="container text-center">
    
//<h1>Italian Pizza & Pasta</h1>
//<img src="imagenes/logo.png" class="img-circle" class="img-responsive" alt="logo" width="200" height="200">
//<h3>I'm an adventurer</h3>
//</div>
//</div>


let header = `
<div>

<div class="media">
   <img src="imagenes/logo.png" class="img-circle" class="img-responsive" alt="logo" width="100" height="100">
   <h1 class="mt-4">Italian Pizza </h1>
   <div class="media-body">
  </div>
</div>

     <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a class="navbar-brand" href="index.html">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
    
          <li class="nav-item">
            <a class="nav-link" href="about.html">Acerda de</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="location.html">Sucursal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="form.html">Registrarse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="NuestrosProductos.html">Nuestros Productos</a>
          </li>
        </ul>
    </nav>`

    //traeme el contenido de la etiqueta idheader 


    document.getElementById("idheader").innerHTML=header 

let footer= `       
<a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter fa-3x"
          aria-hidden="true"></i></a>
<a class="redsoc" href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook fa-3x"
        aria-hidden="true"></i></a>
<a class="redsoc" href="https://www.pinterest" target="_blank"><i class="fa fa-pinterest fa-3x"
        aria-hidden="true"></i></a>
<a class="redsoc" href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram fa-3x"
        aria-hidden="true"></i></a>
<a class="redsoc" href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin fa-3x" 
        aria-hidden="true"></i></a>
<p>Derechos reservados @2020 </p>`

document.getElementById("idfooter").innerHTML=footer

let tabla=` 

<table>
<tr>
  <th>codigo </th>
  <th>Nombre</th>
  <th>Descipcion</th>
  <th>Imagen</thd>
</tr>
<tr>
  <td>${codigos[0]}</td>
  <td>${nombres[0]}</td>
  <td>${descripciones[0]}</td>
  <td><img src="${imagenes[0]}" alt="${nombres[0]}"  class="container text-center" ></td>



</tr>
<tr>
  <td>${codigos[1]}</td>
  <td>${nombres[1]}</td>
  <td>${descripciones[1]}</td>
  <td><img src="${imagenes[1]}" alt="${nombres[1]}" class="container text-center"></td>
  </tr>
</tr>
<tr>
  <td>${codigos[2]}</td>
  <td>${nombres[2]}</td>
  <td>${descripciones[2]}</td>
  <td><img src="${imagenes[2]}" alt="${nombres[2]}" class="container text-center"></td>
</tr>
<tr>
  <td>${codigos[3]}</td>
  <td>${nombres[3]}</td>
  <td>${descripciones[3]}</td>
  <td><img src="${imagenes[3]}" alt="${nombres[3]}" class="container text-center"></td>
</tr>
</table>` 

document.getElementById("idtabla").innerHTML=tabla

let tabla1=` 
<div class="col-md-3 col-sm-3">
      <div class="aside">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"</p>
      </div>
    </div>
    <div class="col-md-6 col-sm-9">
      <h2>Acerca de mi</h2>
      <img class="imgabout" src="Imagenes\cocina.jpg" alt="Mi Cocina" width="500"></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,
        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis
        sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.
        Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
      </p>
    </div>
    <div class="col-md-3 col-sm-12">
      <div class="aside">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"</p>
      </div>
    </div>
  </div>`


  document.getElementById("idtabla2").innerHTML=tabla2