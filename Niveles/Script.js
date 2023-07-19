// Obtenemos los elementos h1 y p
var Encabezado = document.getElementById('contenido');
var Parrafo = document.getElementById('contenido2');

// Arrays con los nuevos contenidos para h1 y p
var CambioDeContenido = [
    "Protección de datos",
    "Prevención de brechas de seguridad",
    "Cumplimiento normativo",
    "Continuidad del negocio",
    "Confianza del cliente",
    "Mitigación de riesgos",
    "Protección de la reputación",



    
];

var CambioDeContenidoP = [
    "Los niveles de seguridad ayudan a proteger los datos sensibles y confidenciales de una organización, evitando su acceso no autorizado, modificación o eliminación. Esto es especialmente crítico en el caso de información personal, financiera o estratégica, se refiere a la implementación de medidas y controles para garantizar la confidencialidad, integridad y disponibilidad de los datos de una organización. Incluye el uso de cifrado, políticas de acceso y permisos, copias de seguridad regulares, sistemas de detección de intrusos y prevención de pérdida de datos.",
    "Al tener diferentes niveles de seguridad en su lugar, las organizaciones pueden establecer barreras adicionales para prevenir y detectar posibles brechas de seguridad. Esto incluye el monitoreo de actividades sospechosas, la detección de intrusiones y la implementación de políticas de control de acceso,Consiste en la adopción de medidas para evitar que se produzcan brechas de seguridad, como ataques cibernéticos o acceso no autorizado a sistemas y datos. Implica la implementación de firewalls, sistemas de detección y prevención de intrusiones, monitoreo de actividad sospechosa, auditorías de seguridad y capacitación del personal en buenas prácticas de seguridad.",
    "Muchas industrias y jurisdicciones tienen regulaciones específicas sobre la seguridad de la información. La implementación de niveles de seguridad adecuados ayuda a garantizar el cumplimiento de estas normativas, evitando posibles sanciones legales y daños a la reputación de la organización,se refiere al cumplimiento de las regulaciones y estándares relacionados con la seguridad informática. Dependiendo del país y la industria, puede incluir normativas como la Ley de Protección de Datos, regulaciones específicas para sectores como salud o finanzas, y estándares de seguridad como ISO 27001. Cumplir con estas normas ayuda a garantizar la seguridad de los datos y proteger la organización de sanciones legales.",
    "Los niveles de seguridad informática contribuyen a garantizar la continuidad de las operaciones de una organización. Al proteger los sistemas y recursos críticos, se minimiza el riesgo de interrupciones no planificadas debido a ciberataques, fallos técnicos o desastres naturales,Se refiere a la capacidad de una organización para mantener sus operaciones en caso de interrupciones o desastres, ya sea por fallas técnicas, desastres naturales o ataques cibernéticos. Implica la implementación de planes de continuidad del negocio, copias de seguridad y recuperación de datos, sistemas redundantes y pruebas periódicas para garantizar la disponibilidad y la recuperación rápida de los servicios.",
    "La implementación efectiva de niveles de seguridad informática inspira confianza en los clientes y socios comerciales. Demuestra el compromiso de la organización con la protección de la información y la privacidad, lo que puede ser un factor determinante en la elección de proveedores o socios estratégicos, La seguridad informática es fundamental para generar confianza en los clientes y usuarios. Al implementar medidas de seguridad adecuadas, una organización demuestra su compromiso con la protección de los datos y la privacidad de sus clientes. Esto puede incluir la adopción de políticas claras de privacidad, notificaciones de brechas de seguridad, transparencia en el manejo de datos y la implementación de medidas de seguridad visibles, como el uso de certificados SSL en sitios web.",
    "La seguridad informática se trata de identificar y gestionar los riesgos asociados con las amenazas y vulnerabilidades. Esto implica la realización de evaluaciones de riesgos, análisis de vulnerabilidades, implementación de controles de seguridad, monitoreo constante y actualización de las medidas de seguridad en función de las nuevas amenazas y tecnologías.",
    "La seguridad informática adecuada es crucial para preservar la reputación de una organización. Un incidente de seguridad puede tener repercusiones negativas significativas, como la pérdida de confianza de los clientes, daño a la imagen de la marca y pérdida de oportunidades comerciales. Los niveles de seguridad ayudan a evitar estos riesgos y mantener una reputación sólida,La seguridad informática desempeña un papel crucial en la protección de la reputación de una organización. Una brecha de seguridad o una pérdida de datos pueden tener un impacto negativo significativo en la imagen y la confianza de los clientes. Al implementar medidas sólidas de seguridad, una organización puede salvaguardar su reputación y la confianza de sus clientes, demostrando un compromiso con la protección de la información y la privacidad.",
];

// Cambiamos el contenido de h1 y p con animación, desvanecimiento y movimiento
function cambiarContenidoConAnimacion() {
    var index = 0;
    var totalCambios2 = CambioDeContenido.length;

    function cambiarContenido() {
        Encabezado.classList.add('fade-out');
        Parrafo.classList.add('fade-out');
        setTimeout(function () {
            Encabezado.style.transform = 'translatey(-450%)';
            Parrafo.style.transform = 'translatey(260%)';
            setTimeout(function () {
                Encabezado.textContent = CambioDeContenido[index];
                Parrafo.textContent = CambioDeContenidoP[index];
                Encabezado.style.transform = 'translateY(-0)';
                Parrafo.style.transform = 'translateY(0)';
                Encabezado.classList.remove('fade-out');
                Parrafo.classList.remove('fade-out');
                index++;
                if (index === totalCambios2) {
                    reiniciarAnimacion();
                } else {
                    setTimeout(cambiarContenido, 6000);
                }
            }, 2000);
        }, 1000);
    }

    cambiarContenido();
}

// Reiniciar la animación
function reiniciarAnimacion() {
    setTimeout(function () {
        Encabezado.style.opacity = '1';
        Parrafo.style.opacity = '1';
        Encabezado.style.transform = 'translateY(2)';
        Parrafo.style.transform = 'translateY(0)';
        cambiarContenidoConAnimacion();
    }, 5000);
}

// Llamamos a la función para iniciar la animación
cambiarContenidoConAnimacion();

































// Obtenemos los elementos h1 y p
var Encabezado2 = document.getElementById('contenido3');
var Parrafo2 = document.getElementById('contenido4');

// Arrays con los nuevos contenidos para h1 y p
var CambioDeContenido2 = [
    "Protección de datos",
    "Prevención de brechas de seguridad",
    "Cumplimiento normativo",
    "Continuidad del negocio",
    "Confianza del cliente",
    "Mitigación de riesgos",
    "Protección de la reputación",



    
];

var CambioDeContenidoP2 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
];

// Cambiamos el contenido de h1 y p con animación, desvanecimiento y movimiento
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
                    reiniciarAnimacion();
                } else {
                    setTimeout(cambiarContenido2, 6000);
                }
            }, 2000);
        }, 1000);
    }

    cambiarContenido2();
}

// Reiniciar la animación
function reiniciarAnimacion() {
    setTimeout(function () {
        Encabezado2.style.opacity = '1';
        Parrafo2.style.opacity = '1';
        Encabezado2.style.transform = 'translateY(0)';
        Parrafo2.style.transform = 'translateY(0)';
        cambiarContenidoConAnimacion2();
    }, 5000);
}

// Llamamos a la función para iniciar la animación
cambiarContenidoConAnimacion2();
