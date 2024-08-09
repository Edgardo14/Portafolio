document.getElementById("botonCorreo").addEventListener("click", () => {
    let correo = document.getElementById("correoContacto").value;
    navigator.clipboard.writeText(correo);
});



document.getElementById("formularioContacto").addEventListener("submit",() => {
    let nombre = document.getElementById("name-field").value;
    let correo = document.getElementById("email-field").value;
    let asunto = document.getElementById("subject-field").value;
    let mensaje = document.getElementById("message-field").value;
    if (nombre != "" && correo != "" && asunto!= "" && mensaje!=""){
        console.log(nombre);
        console.log(correo);
        console.log(asunto);
        console.log(mensaje);
        document.getElementById("formularioContacto").innerHTML += `
        <div class="alert alert-success" role="alert">
            Datos enviados correctamente.
        </div>
        `;
    }
    setTimeout(2000);
    location.reload();
});