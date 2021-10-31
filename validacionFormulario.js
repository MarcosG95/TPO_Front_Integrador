function validacionFormulario() {
    var text;
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        text= "Nombre obligatorio";
        document.getElementById("ErrorViewer").innerHTML = text;
        return false;
    }
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
        text = "Apellido obligatorio"; 
        document.getElementById("ErrorViewer").innerHTML = text;
        return false;
    }
    var telefono = document.getElementById('telefono').value;
    if(telefono.length !==0 && (telefono.length < 10 || telefono.length > 10)){
        text = "Teléfono incorrecto";
        document.getElementById("ErrorViewer").innerHTML = text;
        return false;
    }
    var mail = document.getElementById("mail").value;
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(mail)){
        text = "Mail incorrecto";
        document.getElementById("ErrorViewer").innerHTML = text;
        return false;
    }
    var consulta = document.getElementById('consultas').value;
    if(consulta.length == 0){
        text = "Escriba una consulta";
        document.getElementById("ErrorViewer").innerHTML = text;
        return false;
    }
    return true;
}
