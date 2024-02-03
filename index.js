const displayvalorANT = document.getElementById('valorANT');
const displayvalorACT = document.getElementById('valorACT');
const botonesNUMEROS = document.querySelectorAll('.numeros');
const botonesOPERADORES = document.querySelectorAll('.operaciones');

const display = new Display(displayvalorANT, displayvalorACT);

botonesNUMEROS.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOPERADORES.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});