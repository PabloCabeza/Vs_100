<fieldset class="Afiliacion_4">
    <legend>Fotografia de perfil</legend>
    <label class="etiqueta_3">Inserte una imagen no mayor de 700 Kb</label><br><br>
    <input type="file" name="imagen" value="Seleccione un fotografia"  />
    <img class="imagen_8" alt="Fotografia del usuario" src="../images/<?php echo $Usuario['Fotografia'];?>">
    <!-- <a href="../controlador/EliminarFotoPerfil.php?FotoPerfil=<?php// echo $Usuario['fotografia'];?>" onclick="return Confirmacion()">Eliminar</a> es necesario mandar el nombre de la categoria para saber a que tipo de erfil redireccionar despues de eliminar la fotografia--> 
</fieldset>