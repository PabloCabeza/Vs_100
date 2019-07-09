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
          	// else{
           //      alert("Instancia creada exitosamente ok");
           //  }
           return http_request;
        } 

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
        function llamar_verificaCorreo(){//Es llamada desde registro.php
            A=document.getElementById("Correo").value;//se inserta el ID_Especialidad desde Citas.php
            var url="../modelo/VerificarCorreo.php?val_1=" + A;
            http_request.open('GET',url,true);     
            peticion.onreadystatechange = respuesta_verificaCorreo;
            peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
            peticion.send("null");
        }                                                           
        function respuesta_verificaCorreo(){
            if (peticion.readyState == 4){
                if (peticion.status == 200){
                   document.getElementById('Mostrar_verificaCorreo').innerHTML=peticion.responseText;//se recoje el numero de pacientes
                } 
                else{
                    alert('Hubo problemas con la petición.');
                }
            }
        }

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
        function llamar_verificaCedula(){//Es llamada desde registro.php
            A=document.getElementById("Cedula").value;//se inserta el ID_Especialidad desde Citas.php
            var url="../modelo/VerificarCedula.php?val_1=" + A;
            http_request.open('GET',url,true);     
            peticion.onreadystatechange = respuesta_verificaCedula;
            peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
            peticion.send("null");
        }                                                           
        function respuesta_verificaCedula(){
            if (peticion.readyState == 4){
                if (peticion.status == 200){
                   document.getElementById('Mostrar_verificaCedula').innerHTML=peticion.responseText;//se recoje el numero de pacientes
                } 
                else{
                    alert('Hubo problemas con la petición.');
                }
            }
        }

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
        function llamar_verificaClave(){//Es llamada desde registro.php
            A=document.getElementById("Clave").value;//se inserta el ID_Especialidad desde Citas.php
            var url="../modelo/VerificarClave.php?val_1=" + A;
            http_request.open('GET',url,true);     
            peticion.onreadystatechange = respuesta_verificaClave;
            peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
            peticion.send("null");
        }                                                           
        function respuesta_verificaClave(){
            if (peticion.readyState == 4){
                if (peticion.status == 200){
                   document.getElementById('Mostrar_verificaClave').innerHTML=peticion.responseText;//se recoje el numero de pacientes
                } 
                else{
                    alert('Hubo problemas con la petición.');
                }
            }
        }

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
    function llamar_sombrear(){//Es llamada desde pregunta.php

        var aleatorio = parseInt(Math.random()*999999999);
        E=document.getElementById("ID_Participante").value;//se toma el ID_Participante desde este mismo archivo.
        F=document.getElementById("Tema").value;//se toma el nombre del tema desde este mismo archivo.
        G=document.getElementById("Pregunta_Num").value;//se toma el numero de la pregunta desde este mismo archivo.
        H=document.getElementById("ID_PP").value;//se toma el ID de la prueba.   

        var url="../controlador/respuesta.php?val_1=" + E  + "&val_2=" + F + "&val_3=" + G + "&val_4=" + H  + "&r=" + aleatorio;
        http_request.open('GET',url,false);     
        peticion.onreadystatechange = respuesta_sombrear;
        peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
        peticion.send("null");
    }                                           

function respuesta_sombrear(){
    if (peticion.readyState == 4){
         if (peticion.status == 200){
           document.getElementById('RespuestaPreguntas').innerHTML=peticion.responseText;//se recoje el numero de pacientes
        } 
        else{
            alert('Hubo problemas con la petición.');
        }
    }
}//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
    function llamar_grafico(){//Es llamada desde pregunta.php

        var aleatorio = parseInt(Math.random()*999999999);
        Z=document.getElementById("ID_Participante").value;//se toma el ID_Participante desde este mismo archivo.

        var url="../grafico/Grafico_Respuestas.php?val_1=" + Z  + "&r=" + aleatorio;
        http_request.open('GET',url,false);     
        peticion.onreadystatechange = respuesta_grafico;
        peticion.setRequestHeader("content-type","application/x-www-form-urlencoded");
        peticion.send("null");
    }                                           

function respuesta_grafico(){
    if (peticion.readyState == 4){
         if (peticion.status == 200){
           document.getElementById('RespuestaGrafico').innerHTML=peticion.responseText;//se recoje el numero de pacientes
        } 
        else{
            alert('Hubo problemas con la petición.');
        }
    }
}