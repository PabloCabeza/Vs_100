<?php
// session_start();//se inicia sesion para llamar las variables $_SESSION creadas en otros archivos, o para crear una.

	if(!isset($_SESSION["ID_Participante"])){//sino hay nada almacenado en la variable superglobal devuelve a la pagina de inicio
    	//con esto se garantiza que el usuario entro por login

  		header("location:../../index.php");			
	}
	else{  ?>
		<div>
			<p class="pregunta">En una oportunidad, Aarón levanto su vara y golpeó las aguas del Rio Nilo. En ese momento, por el poder de Dios el agua del río se convirtio en:</p>
		</div>
		<div class="Quinto">
			<div class="Quinto_2">
				<p id="principiantes_03a" class="efecto" onclick="llamar_sombrear(); setTimeout(llamar_puntaje,200);">Sangre.</p>
				<p id="principiantes_03b" class="efecto" onclick="llamar_bloqueo()">Vino.</p>
			</div>
			<div class="Quinto_2">
				<p id="principiantes_03c" class="efecto" onclick="llamar_bloqueo()">Agua salada.</p>
				<p id="principiantes_03d" class="efecto" onclick="llamar_bloqueo()">Hielo.</p>
			</div>
		</div>	
		<?php
	}  ?>