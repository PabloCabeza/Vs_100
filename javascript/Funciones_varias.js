//coloca el foco autotmaticamente en el primer input de los formularios
    function foco(id){
        document.getElementById(id).focus();   
    }

// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
	function autofocusRegistroGratis(){
		document.getElementById('Nombre').focus();
	}

<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->

	function autofocusRegistroInscripcion(){
		document.getElementById('comprobantePago').focus();
	}

<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->

	function autofocusContacto(){
		document.getElementById('Nombre').focus();
	}

<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->

    function autofocusInicioSesion(){
        document.getElementById('Correo').focus();
    }

<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->

    function quitarAnuncio(){
        document.getElementById("recibir").innerHTML="";
        setTimeout('llamarCorreo()',500);        
        setTimeout('autofocusInicioSesion()',1000);
    }

<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->

    var http_request = false;
    var peticion= conexionAJAX();

        function conexionAJAX(){
            http_request = false;
            if (window.XMLHttpRequest){ // Mozilla, Safari,...
                http_request = new XMLHttpRequest();
                if (http_request.overrideMimeType){
                    http_request.overrideMimeType('text/xml');
                }
            } else if (window.ActiveXObject){ // IE
                try {
                    http_request = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e){
                    try{
                        http_request = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {}
                }
            }
            if (!http_request){
                alert('No es posible crear una instancia XMLHTTP');
                return false;
            }
          	/*else{
                alert("Instancia creada exitosamente ok");
            }*/
           return http_request;
        } 

function llamarCorreo(){
	var aleatorio = parseInt(Math.random()*999999999);
    A=document.getElementById("Correo").value;//se inserta la direccion de correo
   	var url="Sesiones_Cookies/verificarCorreo.php?val_1=" + A  + "&r=" + aleatorio;
    http_request.open('GET',url,true);     
    peticion.onreadystatechange = respuesta_llamarCorreo;
    peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
    peticion.send("null");
}                         

function respuesta_llamarCorreo(){
    if (peticion.readyState == 4){
         if (peticion.status == 200){
           document.getElementById('recibir').innerHTML=peticion.responseText;//se recoje el numero de pacientes
           return false;
        } 
        else{
            alert('Hubo problemas con la petición.');
        }
    }
}


<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->

    function recargaInput(){
        document.getElementById("Correo").reload();
        return false;
    }

<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->
     //No hace nada
        function mostrar() {
            div = document.getElementById('Temporizador_2');
            div.style.display = '';
        }
        //Quita el temporizador en cada pregunta al seleccionar una respuesta
        function cerrar() {
            div = document.getElementById('Temporizador_2');
            div.style.display = 'none';
        }

<!-- //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   //////  JAVASCRIPT   ////// -->   

        function mostrarMenu(){//menu responsive
            var A= document.getElementById("MenuResponsive");//nav
            if(A.style.marginLeft < "0%"){
                    //alert("hola");
                    A.style.marginLeft = "0%";
                }
            else if(A.style.marginLeft = "0%"){
                    //alert("hola");
                    A.style.marginLeft = "-35%";
                }
        }

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->   ////// -->

        function ocultarMenu(){//menu responsive, llamado desde todas las paginas.
            if(window.screen.width<=800){//solo funciona si la pantalla es menor a 800px          
                var A= document.getElementById("MenuResponsive");
                    if(A.style.marginLeft = "0%"){
                    A.style.marginLeft = "-35%";
                }
            }
        }   

// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
//va dando en pantalla la cantidad de caracteres que quedan mientra se escribe un total de 800, llamada desde contacto.php
    function contar(){
         var max = 500; 
         var cadena = document.getElementById("Contenido").value; 
         var longitud = cadena.length; 

             if(longitud <= max) { 
                  document.getElementById("Contador").value = max-longitud; 
             } else { 
                  document.getElementById("Contenido").value = cadena.subtring(0, max);
             } 
    } 
        
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
        
//Impide que se sigan introduciendo caracteres al alcanzar el limite maximo, llamada desde contacto.php 
    var contenido_textarea = "";    
    function valida_Longitud(){  
        var num_caracteres_permitidos = 500;

        //se averigua la cantidad de caracteres escritos
        num_caracteres = document.forms[0].contenido.value.length; 

        if(num_caracteres > num_caracteres_permitidos){ 
            document.forms[0].contenido.value = contenido_textarea; 
        }
        else{ 
            contenido_textarea = document.forms[0].contenido.value; 
        } 
    } 




