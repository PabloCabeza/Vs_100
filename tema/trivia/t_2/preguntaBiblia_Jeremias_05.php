<?php
// session_start();//se inicia sesion para llamar las variables $_SESSION creadas en otros archivos, o para crear una.

	if(!isset($_SESSION["ID_Participante"])){//sino hay nada almacenado en la variable superglobal devuelve a la pagina de inicio
    	//con esto se garantiza que el usuario entro por login

  		header("location:../../index.php");			
	}
	else{  ?>
		<div>
			<p class="pregunta">El sacerdote Pasur, mando a golpear a Jeremías por lo que profetizába; despues de eso el Señor llamó a Pasur:</p>
		</div>
		<div class="Quinto">
			<div class="Quinto_2">
				<p id="principiantes_01d" class="efecto" onclick="llamar_bloqueo()">El imperdonable</p>
				<p id="principiantes_01b" class="efecto" onclick="llamar_bloqueo()">El abominable</p>
			</div>
			<div class="Quinto_2">
				<p id="principiantes_01c" class="efecto" onclick="llamar_bloqueo()">El terror de Jerusalén</p>
				<p id="principiantes_01a" class="efecto" onclick="llamar_sombrear(); setTimeout(llamar_puntaje,200)";>Terror por todas partes</p>
			</div>
		</div>
		<?php
	}  ?>

	<!-- Jeremías 17:19-21 -->