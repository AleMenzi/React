//programación sincrónica y asincrónica

//La programación sincrónica ejecuta una tarea a la vez, en orden secuencial.

//La programación asincrónica ejecuta varias tareas al mismo tiempo, en orden no secuencial.
//Como practucamos la programación asincrónica: setTimeOut()

//Promesas: es un objeto de JS que representa un evento a futuro
//En general representa el resultado eventual de una petición asíncrona
//Las promesas tienen tres estados: pendiente, cumplida o rechazada. (pending, fullfilled, rejected)


const Promesas = () => {
    //programación sincrónica:
    console.log("tarea 1");
    console.log("tarea 2");

    //programación asincrónica:
    setTimeout ( () => {
        console.log("Tarea A");
    },2000)
    setTimeout ( () => {
        console.log("Tarea B");
    },1000)

    //Promesa:

    const tusFalsasPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if (estado){
                resolve("Promesa cumplida, te llegó el regalo que querías");
            } else {
                reject("Y se marchó...")
            }
        })
    }

    console.log(tusFalsasPromesas(true));

    //Then y Catch: Podemos concatenar 2 métodos que me permiten ejecutar una función cuando la promesa se cumple o se rechaza.
    //Then se ejecuta cuando la promesa se cumple.
    //Catch se ejecuta cuando la promesa se rechaza.
    //Finally se ejecuta.

    tusFalsasPromesas(true)
        .then(respuesta => console.log("Si, se cumple...", respuesta))
        .catch(error => console.log("Todo mal, vamos a morir", error))


    //Ahora practiquemos con un array de datos:

    const array = ["Tinky Winky", "Lala", "Dipsy", "Po"];

    const solicitarTeletubbies = (estado) => {
        return new Promise((resuelto, rechazado) => {
            if(estado){
                resuelto(array);
            }else{
                rechazado("No hay telettubies en la TV hoy")
            }
        })
    }

    solicitarTeletubbies(true)
        .then(respuesta => {
            console.table(respuesta);
        })
        .catch(error => console.log(error))


    return(
        <div>Promesas</div>
    )
}

export default Promesas