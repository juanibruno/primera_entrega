
function acceso() {
    if (codigoDeAcceso === clave) {
        alert(' *** Bienvenido!!! Disfrutá los descuentos que tenemos para vos! *** ');
        ingresar = true;
    } else {
        alert('Código de Descuento inválido');
    }
    return ingresar;
}


let codigoDeAcceso = 9640;
let clave = parseInt(prompt('Ingresá el codigo de Acceso'));
let ingresar = false;

if (acceso()) {
    let usuario = prompt('Ingresa tu nombre por favor:');
    alert('Bienvenido ' + usuario);

    let opcion = prompt('Elegí una opción de acuerdo a tu interés: \n1 - Riego Automático \n2 - Riego por Goteo \n3 - Tuberías \n4 - Paisajismo y Decoración');

    switch (opcion) {
        case "1":
            alert('**** Bienvenido a los descuentos en RIEGOS AUTOMATICOS ****');
            let descuento = prompt('Elegí una opción: \n1 - Aspersores \n2 - Mangueras subterraneas');

            switch (descuento) {
                case "1":
                    alert('¡Tenes hasta 30% de DESCUENTO en compras de ASPERSORES!');
                    break;
                case "2":
                    alert('¡Tenes hasta 30% de DESCUENTO en MANGUERAS!');
                    break;
                default:
                    alert('Opcion Inválida');

                    break;
            }

            break;
        case "2":
            alert('****Bienvenido a los descuentos en RIEGO POR GOTEO****');
            let descuento2 = prompt('Elegí una opción: \n1 - FILTROS \n2 - BOMBAS');
            switch (descuento2) {
                case "1":
                    alert('¡Tenes hasta 20% de DESCUENTO en compras de FILTROS!');
                    break;
                case "2":
                    alert('¡Tenes hasta 15% de DESCUENTO en BOMBAS HIDRAULICAS!');
                    break;
                default:
                    alert('Opcion Inválida');
                    break;
            }
            break;
        case "3":
            alert('**** Bienvenido a los descuentos en TUBERIAS ****');
            let descuento3 = prompt('Elegí una opción: \n1 - TUBERIAS PRINCIPALES \n2 - TUBERIAS LATERALES');
            switch (descuento3) {
                case "1":
                    alert('¡Tenes hasta 25% de DESCUENTO en compras de TUBERIAS PRINCIPALES!');
                    break;
                case "2":
                    alert('¡Tenes hasta 10% de DESCUENTO en TUBERIAS LATERALES!');
                    break;
                default:
                    alert('Opcion Inválida');

                    break;
            }
            break;
        case "4":
            alert('**** Bienvenido a los descuentos en PAISAJIMSO Y DECO ****');
            let descuento4 = prompt('Elegí una opción: \n1 - Proyectos \n2 - Productos');
            switch (descuento4) {
                case "1":
                    alert('¡Tenes hasta 30% de DESCUENTO en tu proximo proyecto! ¡Mejorá tu jardin con los mejores!');
                    break;
                case "2":
                    alert('¡Tenes hasta 30% de DESCUENTO en elementos de jardinería!');
                    break;
                default:
                    alert('Opcion Inválida');
                    break;
            }
            break;
    }
    let sorteo = prompt('¡¡probá suerte!! ¡Elegí un numero del 1 al 20 y ganá mas descuentos!');
    if (sorteo < 5) {
        alert('**** SEGUI PARTICIPANDO ****');
    } else if (sorteo >= 6 && sorteo <= 10) {
        alert('**** FELICITACIONES!! GANASTE UN 10% De DESCUENTO ****');

    } else if (sorteo > 10 && sorteo <= 15) {
        alert('**** FELICITACIONES!! GANASTE UN 40% De DESCUENTO ****');

    } else if (sorteo > 15 && sorteo <= 20) {

        alert('**** FELICITACIONES!! GANASTE UN 15% De DESCUENTO  ****');

    } else {
        alert('Elegiste un numero inválido')
    }



} else {
    alert('***Conseguí mas codigos de descuento en nuestras redes!***');
}




alert("Hasta prontos");





















