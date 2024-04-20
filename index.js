function products() {
    
}


function redirecToIndex() {
    window.location.href = "/"
}


function revisarHorarioDisponible() {
    const now = new Date();
    const hours = now.getHours();

    const alert = document.querySelector(".alerta-container")
    const alertText = document.querySelector(".alerta-texto")

    switch (new Date().getDay()) {
        case 0:
            isOpenDay = true;
            break;
        case 1:
            isOpenDay = false;
            break;
        case 2:
            isOpenDay = false;
            break;
        case 3:
            isOpenDay = false;
            break;
        case 4:
            isOpenDay = false;
            break;
        case 5:
            isOpenDay = true;
            break;
        case 6:
            isOpenDay = true;
    }

    switch (hours) {
        case 0:
            isOpenHour = false;
            break;
        case 1:
            isOpenHour = false;
            break;
        case 2:
            isOpenHour = false;
            break;
        case 3:
            isOpenHour = false;
            break;
        case 4:
            isOpenHour = false;
            break;
        case 5:
            isOpenHour = false;
            break;
        case 6:
            isOpenHour = false;
        case 7:
            isOpenHour = false;
            break;
        case 8:
            isOpenHour = true;
            break;
        case 9:
            isOpenHour = true;
            break;
        case 10:
            isOpenHour = true;
            break;
        case 11:
            isOpenHour = true;
            break;
        case 12:
            isOpenHour = true;
            break;
        case 13:
            isOpenHour = true;
        case 14:
            isOpenHour = true;
            break;
        case 15:
            isOpenHour = true;
        case 16:
            isOpenHour = true;
            break;
        case 17:
            isOpenHour = true;
            break;
        case 18:
            isOpenHour = true;
            break;
        case 19:
            isOpenHour = true;
            break;
        case 20:
            isOpenHour = false;
            break;
        case 21:
            isOpenHour = false;
            break;
        case 22:
            isOpenHour = false;
        case 23:
            isOpenHour = false;
            break;
    } 
    
    if(isOpenDay && isOpenHour)
    {
        alertText.innerHTML = "ESTAMOS ATENDIENDO";
        document.getElementById("color-container").style.backgroundColor = "#70e289";

        alert.classList.add("mostrar-alerta");
        setTimeout(() => {
            alert.classList.remove("mostrar-alerta")
        }, 8000);
    }
    else {
        alertText.innerHTML = "NO ESTAMOS ATENDIENDO";
        document.getElementById("color-container").style.backgroundColor = "#e75757";

        alert.classList.add("mostrar-alerta");
        setTimeout(() => {
            alert.classList.remove("mostrar-alerta")
        }, 8000);
    }
}