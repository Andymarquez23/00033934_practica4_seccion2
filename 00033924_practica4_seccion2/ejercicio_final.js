const actividades = {
    lunes: 'atender un cliente específico.',
    martes: 'visitar una agencia fuera de la ciudad.',
    miércoles: 'llevar a mi hija al ballet.',
    jueves: 'priorizar entregas de desarrollo.',
    viernes: 'atender problemas de manera remota.',
    sábado: 'hacer lo que mi esposa quiera.',
     domingo: 'no hay ninguna actividad para hoy.'
};

function mostrarRecordatorio() {
   const input = document.getElementById('diaSemana');
    const output = document.getElementById('output');
    const dia = input.value.trim().toLowerCase();

    if (!dia) {
        output.innerHTML = '<p class="no-activity">Por favor, escribe un día.</p>';
        return;
    }

    if (actividades[dia]) {
        let mensaje = `<p class="activity">${dia.charAt(0).toUpperCase() + dia.slice(1)}: ${actividades[dia]}</p>`;
        output.innerHTML = mensaje;
    } else {
        output.innerHTML = `<p class="no-activity">"${dia}" no es un día válido. Intenta de nuevo.</p>`;
    }
}

document.getElementById('mostrarBtn').addEventListener('click', mostrarRecordatorio);

