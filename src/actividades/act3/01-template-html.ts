const nombre: string = 'Alan';
const curso: string = 'JS/TS';
const msg: string = `Hola ${nombre}, bienvenido al curso de ${curso}`;
const msg2: string = `Hoy es ${new Date().toDateString()}`;

console.log(msg, msg2);

const a = 7, b = 5;
const etiqueta = (n) => (n % 2 === 0 ? 'par' : 'impar');
console.log(`${a} es ${etiqueta(a)}, ${b} es ${etiqueta(b)}; total -> ${a} + ${b} = ${a + b}`);

const ayuda = `
Comandos utiles:
 - npm run dev
 - npm run build
 - npm run preview
`;
console.log(ayuda.trim());

export function renderFase4TemplateHTML(): string {
    
    const alumno = { nombre: 'Alan', avance: 45, tema: 'Template Strings' };

    const tarjeta = `
    <article class="card">
        <h2>Alumno: ${alumno.nombre}</h2>
        <p>Tema: <strong>${alumno.tema}</strong></p>
        <p>Avance: <strong>${alumno.avance}%</strong></p>
    </article>
    `

    return tarjeta;
}

const precio = 1234.5;
const mxn = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(precio);
const hoy = new Intl.DateTimeFormat('es-MX', { dateStyle: 'medium' }).format(new Date());

const reporte = { curso: 'JS/TS Bases', unidad: 1, temas: ['Variables', 'Template, Strings', 'Funciones'], completado: 0.4 }

console.log(`Precio: ${mxn}, Fecha: ${hoy}`);
const templateHtmlReporte = `
<section>
    <h3>Curso de ${reporte.curso}</h3>
    <p>Unidad ${reporte.unidad}</p>
    <p>Temas: ${reporte.temas.join(', ')}</p>
    <p>Completado: ${ (reporte.completado * 100).toFixed(2) }%</p>
</section>
`

export function renderReporte(): string {
    return templateHtmlReporte;
}