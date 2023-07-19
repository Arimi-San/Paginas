// Obtenemos los elementos h1 y p
var heading = document.getElementById('contenido');
var paragraph = document.getElementById('contenido2');

// Arrays con los nuevos contenidos para h1 y p
var nuevosContenidosH1 = [
    "¿Cómo incrementar la seguridad informática?",
    "Actualiza y parchea tus sistemas",
    "Utiliza contraseñas fuertes",
    "Implementa autenticación de múltiples factores",
    "Protege tu red y conexiones",
    "Implementa firewalls y software de seguridad",
    "Realiza copias de seguridad regularmente",



    // Añade aquí los otros 7 nuevos textos para h1
];

var nuevosContenidosP = [
    "La importancia de mejorar la seguridad informática radica en proteger la información y los sistemas de posibles amenazas y ataques cibernéticos. Al fortalecer la seguridad, se reduce el riesgo de robo de datos, interrupciones en el funcionamiento de los sistemas y daños a la reputación de una organización. Además, mejora la confianza de los clientes y usuarios al demostrar un compromiso con la protección de su información personal. En un entorno digital cada vez más complejo y sofisticado, mejorar la seguridad informática es esencial para garantizar la integridad, confidencialidad y disponibilidad de los datos y sistemas.",
    " Mantén tus sistemas operativos, aplicaciones y software de seguridad actualizados con los últimos parches y actualizaciones. Esto ayuda a remediar vulnerabilidades conocidas y proteger contra amenazas conocidas.",
    "Elige contraseñas únicas y robustas para tus cuentas, evitando contraseñas obvias o fáciles de adivinar. Utiliza una combinación de letras mayúsculas y minúsculas, números y caracteres especiales. Además, considera el uso de un administrador de contraseñas para gestionar de forma segura tus contraseñas.",
    "Habilita la autenticación de múltiples factores siempre que sea posible. Esto agrega una capa adicional de seguridad al requerir una verificación adicional, como un código enviado a tu teléfono móvil, además de la contraseña.",
    "Asegura tu red inalámbrica Wi-Fi utilizando un cifrado fuerte (WPA2 o superior). Evita el uso de redes Wi-Fi públicas no seguras y considera el uso de una red privada virtual (VPN) al conectarte a través de redes públicas.",
    "Utiliza firewalls en tu red y en los dispositivos individuales para filtrar el tráfico no autorizado. Además, instala y mantén actualizado el software de seguridad, como programas antivirus y antimalware.",
    "Haz copias de seguridad periódicas de tus datos importantes y asegúrate de almacenar esas copias de seguridad en un lugar seguro y fuera del alcance de posibles amenazas.",
    
];

// Cambiamos el contenido de h1 y p con animación, desvanecimiento y movimiento
function cambiarContenidoConAnimacion() {
    var index = 0;
    var totalCambios = nuevosContenidosH1.length;

    function cambiarContenido() {
        heading.classList.add('fade-out');
        paragraph.classList.add('fade-out');
        setTimeout(function () {
            heading.style.transform = 'translatex(-110%)';
            paragraph.style.transform = 'translatex(-120%)';
            setTimeout(function () {
                heading.textContent = nuevosContenidosH1[index];
                paragraph.textContent = nuevosContenidosP[index];
                heading.style.transform = 'translateY(0)';
                paragraph.style.transform = 'translateY(0)';
                heading.classList.remove('fade-out');
                paragraph.classList.remove('fade-out');
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

// Reiniciar la animación
function reiniciarAnimacion() {
    setTimeout(function () {
        heading.style.opacity = '1';
        paragraph.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
        paragraph.style.transform = 'translateY(0)';
        cambiarContenidoConAnimacion();
    }, 5000);
}

// Llamamos a la función para iniciar la animación
cambiarContenidoConAnimacion();
