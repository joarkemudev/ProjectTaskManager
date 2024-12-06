

//Funciones de la tabla Tareas
$(document).ready(function (){
    traerInformacionTask();
});

//Funcione que trae la informacion de Tareas
function traerInformacionTask(){
    $.ajax({
        url:"http://localhost:8080/api/tasks",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaTask){
            console.log(respuestaTask);
            pintarRespuestaTask(respuestaTask);
        }
    });
}

//Funcione que pinta en cards la informacion de games
function pintarRespuestaTask(respuestaTask){
    let myTable= '<div class="container"><div class="row">';
    for(i=0; i<respuestaTask.length; i++){
        myTable+=`
        <div class="card text-white bg-primary mb-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${respuestaTask[i].title}</h5>
            <p class="card-text">${respuestaTask[i].description}</p>
            <button class="btn btn-danger" onclick="borrarElementoTask(${respuestaTask[i].id})">Borrar</button>
        </div>
        </div>`
    }
    myTable+='</div></div>';
    $("#resultadoTask").append(myTable);
}

// Función que guarda un nuevo juego
function guardarElementoTask() {
    // Obtener los valores de los campos
    let title = $("#title").val().trim();
    let description = $("#description").val().trim();

    // Validar que los campos no estén vacíos
    if (!title || !description) {
        alert("Por favor, completa todos los campos antes de agregar la tarea.");
        return;
    }

    // Crear el objeto con los datos
    let myData = {
        title: title,
        description: description,
    };
    
    console.log(myData);

    // Hacer la solicitud AJAX
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        url: "http://localhost:8080/api/tasks",
        success: function(response) {
            console.log(response);
            console.log("La Tarea se Guardó Correctamente");
            alert("La Tarea se Guardó Correctamente");
            window.location.reload();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload();
            alert("La Tarea no se Guardó Correctamente");
        }
    });
}
//Funcion que actualiza un Juego
function actualizarElementoTask(idElemento){
    let myData={
        id:idElemento,
        title:$("#title").val(),
        description:$("#description").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/tasks", //colocar la http del modulo de la tabla CLIENT
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoTask").empty();
            $("#id").val("");
            $("#title").val("");
            $("#description").val("");
            traerInformacionTask();
            alert("Tarea Actualizada con Exito")            
        }
    });
}
//Funcion que borra un Juego
function borrarElementoTask(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://localhost:8080/api/tasks/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoTask").empty();
            traerInformacionTask();
            alert("Tarea Eliminada con Exito.")
        }
    });
}

