const horarios = [
    { dia: 0, abre: true, horaApertura: 10, horaCierre: 24 }, // Domingo
    { dia: 1, abre: false, horaApertura: 0, horaCierre: 0 }, // Lunes
    { dia: 2, abre: false, horaApertura: 0, horaCierre: 0 }, // Martes
    { dia: 3, abre: false, horaApertura: 0, horaCierre: 0 }, // Miércoles
    { dia: 4, abre: false, horaApertura: 0, horaCierre: 0 }, // Jueves
    { dia: 5, abre: true, horaApertura: 21, horaCierre: 24 }, // Viernes
    { dia: 6, abre: true, horaApertura: 10, horaCierre: 24 }, // Sábado
];


checkIcon = '../assets/icons/check-circle-svgrepo-com.svg'
errorIcon = '../assets/icons/error-filled-svgrepo-com.svg'

function revisarHorarioDisponible() {
    const now = new Date();
    const diaActual = now.getDay();
    const horaActual = now.getHours();
    
    const alerta = document.querySelector(".alerta-container");
    const textoAlerta = document.querySelector(".alerta-texto");

    const diaHorario = horarios.find(item => item.dia === diaActual);
    if (!diaHorario) {
        textoAlerta.innerHTML = `NO ESTAMOS ATENDIENDO <img src="${errorIcon}" alt="">`;
        document.getElementById("color-container").style.backgroundColor = "#e75757";
    } else {
        const horaApertura = diaHorario.horaApertura;
        const horaCierre = diaHorario.horaCierre;

        if (horaApertura <= horaCierre) {
            // Si la hora de apertura es menor o igual a la hora de cierre, se verifica el horario normalmente
            const isOpenHour = horaActual >= horaApertura && horaActual < horaCierre;
            if (diaHorario.abre && isOpenHour) {
                textoAlerta.innerHTML = `ESTAMOS ATENDIENDO <img src="${checkIcon}" alt="">`;
                document.getElementById("color-container").style.backgroundColor = "#70e289";
            } else {
                textoAlerta.innerHTML = `NO ESTAMOS ATENDIENDO <img src="${errorIcon}" alt="">`;
                document.getElementById("color-container").style.backgroundColor = "#e75757";
            }
        } else {
            // Si la hora de apertura es mayor a la hora de cierre, se verifica si la hora actual está dentro del horario invertido
            const isOpenHour = horaActual >= horaApertura || horaActual < horaCierre;
            if (diaHorario.abre && isOpenHour) {
                textoAlerta.innerHTML = `ESTAMOS ATENDIENDO <img src="${checkIcon}" alt="">`;
                document.getElementById("color-container").style.backgroundColor = "#70e289";
            } else {
                textoAlerta.innerHTML = `NO ESTAMOS ATENDIENDO <img src="${errorIcon}" alt="">`;
                document.getElementById("color-container").style.backgroundColor = "#e75757";
            }
        }
    }

    alerta.classList.add("mostrar-alerta");
    setTimeout(() => {
        alerta.classList.remove("mostrar-alerta");
    }, 5000);
}