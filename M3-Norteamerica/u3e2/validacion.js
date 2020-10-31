window.onload=iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener('click',validar,false);
}
function validar(){
    validaIdentificador();
    validaNombre();
}
function validaIdentificador(){
    let elemento = document.getElementById("identificador");
}
function validaNombre(){
    let elemento = document.getElementById("identificador");
}
/**     
    <input type="text" name="nombre" id="nombre"
    maxlength="50" required/>

    <input type="text" name="fechaNacimiento" id="fechaNacimiento"
    maxlength="10" pattern="(\d){2}/(\d){2}/(\d){4}"required/>

    <input type="text" name="correo" id="correo"
    maxlength="20" 
    pattern="[A-Za-z0-9\._\-]{1,20}@[A-Za-z]{1,20}\.[A-Za-z]{2,3}" 

    <input type="text" name="telefono" id="telefono"
    maxlength="20" 
    pattern="\+[0-9]{2,3}\-[0-9]{9}" 
    />

    <select name="edad" id="edad">
        <option value="niño">Niño</option>
        <option value="adulto">Adulto</option>
        <option value="jubilado">Jubilado</option>
    </select>

    <input type="checkbox" name="club" id="club">

    <input type="text" name="socio" id="socio"
    maxlength="5" 
    pattern="[1-9]{1}[0-9]{4}" 
    disabled />
</td>                
</tr> 
<tr>
<td>Categoría</td>
<td >
    <input type="radio" name="categoria" id="categoria" value="infantil"  disabled checked/>  Infantil
    <input type="radio" name="categoria" id="categoria" value="juvenil" disabled /> Juvenil
    <input type="radio" name="categoria" id="categoria" value="senior" disabled /> Senior           
</td>                
</tr> 
*/