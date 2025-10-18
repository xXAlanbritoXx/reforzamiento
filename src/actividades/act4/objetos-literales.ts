// Fase 1
console.log('\n\n Crear un objeto \n\n\n');
const student = {
  name: 'Alan',
  age: 20,
  active: true,
  major: 'Software Engineering',
};
console.log('Student:', student);
// Fase 2
console.log('\n\n- Acceso, actualización y propiedades inexistentes\n\n\n');
// Acceso
console.log(student.name); // dot access
console.log(student['major']); // bracket access

// Modificación
student.age = 21; // update
student.semester = 3; // add new property

// Tratar con propiedades inexistentes
console.log(student.notExists); // undefined

// Encadenamiento opcional + nullish coalescing (opcional)
console.log(student.tutor?.name ?? 'No tutor');
// Fase 3
console.log('\n\n Métodos y this-\n\n\n');
const course = {
  title: 'JS/TS Basics',
  enrolled: 25,
  add(n) { this.enrolled += n; },
  summary() { return `${this.title} (${this.enrolled} enrolled)`; }
};
course.add(5);
console.log(course.summary());
// Fase 4
console.log('\n\n Atajos y propiedades computadas \n\n\n');
const name = 'Alan';
const group = 'IS-301';

// shorthand
const profile = { name, group };
console.log(profile);

// Propiedad computada
const fieldKey = 'average';
const record = { [fieldKey]: 89, status: 'regular' };
console.log(record);
// Fase 5
console.log('\n\n- Copias superficiales y fusión (spread) \n\n\n');
const base = { x: 1, nested: { z: 2 }};

// Copias superficiales
const shallowCopy = {...base, x: 9};
console.log('shallowCopy:', shallowCopy);

// Fusión
const preferences = { theme: 'dark' };
const user = { id: 7, name: 'Ana' };
const userProfile = {...user, ...preferences };
console.log('userProfile:', userProfile);

// Warning: copia superficial -> referencias compartidas
shallowCopy.nested.z = 100;
console.log(base.nested.z);
// Fase 6
console.log('\n\n- Arreglos de objetos + render en DOM---\n\n\n');
// Crear un arreglo de objetos.
const students = [
  { name: 'Ana', progress: 85, topic: 'Objects' },
  { name: 'Luis', progress: 91, topic: 'Spread' },
  { name: 'Mia', progress: 72, topic: 'Destructuring'},
];

// Render en DOM del Objeto students
const listHTML = `
  <section>
    <h2>Students</h2>
    <ul>
      ${students.map(s => `<li>${s.name} - ${s.topic} (${s.progress}%)</li>`).join('')}
    </ul>
  </section>
`;

export function renderListHTML() {
  return listHTML;
}

// Fase 7
console.log('\n\n Destructuración con valores por defecto \n\n\n');
const config = { port: 5173, mode: 'dev' };

// Destructuración de config
const { port, mode, host = 'localhost' } = config;
console.log(`Server: http://${host}:${port} | mode: ${mode}`);

// Fase 8
console.log('\n\n- JSON: serializar y recuperar  \n\n\n');
// Convertir a string un objeto
const jsonText = JSON.stringify(students);
console.log('JSON:', jsonText);

// Recuperar objeto convierte de string a objeto
const studentsParsed = JSON.parse(jsonText);
console.log('Parsed:', studentsParsed);