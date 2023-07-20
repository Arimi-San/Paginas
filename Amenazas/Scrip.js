
var Encabezado = document.getElementById('contenido');
var Parrafo = document.getElementById('contenido2');


var CambioDeContenido = [
    "¿Que Son?",
    "¿Como Evitarlos?",
    "Consejo 1: Utiliza contraseñas seguras",
    "Consejo 2: Activa la autenticación de múltiples factores",
    "Consejo 3: Mantén el software actualizado",
    "Consejo 4: Cuida tus correos electrónicos y enlaces sospechosos",
    "Consejo 5: Realiza copias de seguridad periódicas",

];

var CambioDeContenidoP = [
    "Los niveles de seguridad informática se refieren a diferentes capas o niveles de protección que se implementan en un sistema o infraestructura para salvaguardar la integridad, confidencialidad y disponibilidad de la información y recursos frente a amenazas y vulnerabilidades. Estos niveles están diseñados para trabajar en conjunto y proporcionar una defensa en profundidad, lo que significa que, si un nivel se ve comprometido, otros niveles pueden seguir brindando protección",
    "Para evitar las amenazas cibernéticas y proteger la seguridad de los sistemas, datos y usuarios, es fundamental implementar una serie de medidas de seguridad y buenas prácticas. ",
    "Crea contraseñas únicas y robustas para cada una de tus cuentas en línea. Asegúrate de que sean lo suficientemente largas y contengan una combinación de letras (mayúsculas y minúsculas), números y caracteres especiales. Evita el uso de información personal obvia y nunca reutilices contraseñas en diferentes sitios.",
    "Habilita la autenticación de múltiples factores siempre que sea posible. Esta medida añade una capa adicional de seguridad al requerir una segunda forma de autenticación, como un código enviado a tu teléfono móvil o una aplicación de autenticación, además de la contraseña.",
    "Asegúrate de mantener todos tus dispositivos y aplicaciones actualizados con las últimas versiones y parches de seguridad. Las actualizaciones periódicas corrigen vulnerabilidades conocidas y ayudan a protegerte contra amenazas comunes.",
    "Desconfía de correos electrónicos no solicitados o de remitentes desconocidos. No hagas clic en enlaces o descargues archivos adjuntos sospechosos. Los ciberdelincuentes a menudo utilizan técnicas de phishing para obtener información personal o infectar tu dispositivo con malware.",
    "Respalda tus datos importantes de forma regular en un dispositivo externo o en la nube. Esto te permitirá restaurar tus archivos en caso de pérdida de datos debido a un ataque cibernético o a un fallo del sistema.",
];

function cambiarContenidoConAnimacion() {
    var index = 0;
    var totalCambios = CambioDeContenido.length;

    function cambiarContenido() {
        Encabezado.classList.add('fade-out');
        Parrafo.classList.add('fade-out');
        setTimeout(function () {
            Encabezado.style.transform = 'translatex(-360%)';
            Parrafo.style.transform = 'translatex(-360%)';
            setTimeout(function () {
                Encabezado.textContent = CambioDeContenido[index];
                Parrafo.textContent = CambioDeContenidoP[index];
                Encabezado.style.transform = 'translateY(0)';
                Parrafo.style.transform = 'translateY(0)';
                Encabezado.classList.remove('fade-out');
                Parrafo.classList.remove('fade-out');
                index++;
                if (index === totalCambios) {
                    reiniciarAnimacion();
                } else {
                    setTimeout(cambiarContenido, 6000);
                }
            }, 2000);
        }, 6000);
    }

    cambiarContenido();
}


function reiniciarAnimacion() {
    setTimeout(function () {
        Encabezado.style.opacity = '1';
        Parrafo.style.opacity = '1';
        Encabezado.style.transform = 'translateY(2)';
        Parrafo.style.transform = 'translateY(0)';
        cambiarContenidoConAnimacion();
    }, 5000);
}

cambiarContenidoConAnimacion();






var Encabezado2 = document.getElementById('Seccion2Titulo');
var Parrafo2 = document.getElementById('Seccion2Parrafo');


var CambioDeContenido2 = [

    "Amenazas Internas: Acceso no autorizado",
    "Amenazas Internas: Negligencia",
    "Amenazas Internas: Robo de datos",
    "Amenazas Internas: Sabotaje",
    "Amenazas Externas: Malware",
    "Amenazas Externas: Ataques DDoS",
    "Amenazas Externas: Phishing",
    "Amenazas Externas: Ingeniería social",
];


var CambioDeContenidoP2 = [
    "Cuando un empleado o persona con acceso privilegiado utiliza esta ventaja para acceder a datos o recursos sin permiso o para fines maliciosos.",
    "Acciones no intencionales pero descuidadas por parte de empleados que pueden provocar vulnerabilidades o pérdida de datos.",
    "La apropiación indebida de información confidencial por parte de empleados, ya sea para beneficio propio o para venderla a terceros.",
    "Acciones deliberadas por parte de empleados descontentos o desleales para dañar la infraestructura, los datos o la reputación de una organización.",
    "Software malicioso diseñado para dañar sistemas o robar información. Esto incluye virus, troyanos, ransomware y spyware.",
    "Intentos de abrumar un sistema o red con tráfico excesivo para que no pueda responder a solicitudes legítimas.",
    "Correos electrónicos o mensajes fraudulentos que intentan engañar a los usuarios para que revelen información personal o credenciales.",
    "Manipulación psicológica de personas para obtener información confidencial o acceso no autorizado.",
];


function cambiarContenidoConAnimacion2() {
    var index2 = 0;
    var totalCambios2 = CambioDeContenido2.length;

    function cambiarContenido2() {
        Encabezado2.classList.add('fade-out');
        Parrafo2.classList.add('fade-out');
        setTimeout(function () {
            Encabezado2.style.transform = 'translatex(-450%)';
            Parrafo2.style.transform = 'translatex(260%)';
            setTimeout(function () {
                Encabezado2.textContent = CambioDeContenido2[index2];
                Parrafo2.textContent = CambioDeContenidoP2[index2];
                Encabezado2.style.transform = 'translateY(-0)';
                Parrafo2.style.transform = 'translateY(0)';
                Encabezado2.classList.remove('fade-out2');
                Parrafo2.classList.remove('fade-out2');
                index2++;
                if (index2 === totalCambios2) {
                    reiniciarAnimacion2();
                } else {
                    setTimeout(cambiarContenido2, 6000);
                }
            },);
        }, 6000);
    }

    cambiarContenido2();
}


function reiniciarAnimacion2() {
    setTimeout(function () {
        Encabezado2.style.opacity = '1';
        Parrafo2.style.opacity = '1';
        Encabezado2.style.transform = 'translateY(0)';
        Parrafo2.style.transform = 'translateY(0)';

        cambiarContenidoConAnimacion2();
    }, 5000);
}


cambiarContenidoConAnimacion2();





















