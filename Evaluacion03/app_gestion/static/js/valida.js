function validar()
{
    nombre = document.formulario.txt_nombre.value;

    if (nombre.lenght<=2)
    {
        alert("Nombre debe tener mas de 2 caracteres");
        document.formulario.txt_nombre.focus();
        return false; 
    }
    document.formulario.action= "/ingreso_persona/"
    document.formulario.submit() = true
    alert("Ingreso correcto");
}