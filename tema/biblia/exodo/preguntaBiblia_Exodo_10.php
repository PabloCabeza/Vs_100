<?php
// session_start();//se inicia sesion para llamar las variables $_SESSION creadas en otros archivos, o para crear una.

	if(!isset($_SESSION["ID_Participante"])){//sino hay nada almacenado en la variable superglobal devuelve a la pagina de inicio
    	//con esto se garantiza que el usuario entro por login

  		header("location:../../index.php");			
	}
	else{  ?>
		<div>
			<p class="pregunta">Moises subio por segunda vez a la cumbre del Monte Sinaí con dos tablas de piedra; en esta oportunidad Moises fue acompañado por: </p>
		</div>
		<div class="Quinto">
			<div class="Quinto_2">
				<p id="principiantes_10a" class="efecto" onclick="llamar_bloqueo()">Josue.</p>
				<p id="principiantes_10b" class="efecto" onclick="llamar_bloqueo()">Aaron.</p>
			</div>
			<div class="Quinto_2">
				<p id="principiantes_10c" class="efecto" onclick="llamar_sombrear(); setTimeout(llamar_puntaje,200);">Ninguno de los anteriores.</p>
				<p id="principiantes_10d" class="efecto" onclick="llamar_bloqueo()">Sefora.</p>
			</div>
		</div>
		<?php
	}  ?>