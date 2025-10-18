
export interface Student {
  readonly id: string;
  name: string;
  email?: string; 
  progress: number; 
}

export interface Course {
  readonly id: string;
  title: string;
  units: number; 
}

const stdnt1: Student = {
  id: 'stu-001',
  name: 'Alan',
  progress: 82,
};
console.log(stdnt1);



export interface Enrollment {
  readonly studentId: string;
  readonly courseId: string;
  status: 'active' | 'completed' | 'dropped';
}

export const students: ReadonlyArray<Student> = [
  { id: 'stu-001', name: 'Alan', progress: 82, email:'kevin9abel5@gmail.com'},
];

export const courses: ReadonlyArray<Course> = [
  { id: 'c-101', title: 'JS/TS Basics', units: 20 },
  { id: 'c-102', title: 'Frontend Foundations', units: 24 },
];



export interface WithTimestamps {
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface EnrolledStudent extends Student, WithTimestamps {
  courseId: string;
}

const stdnt2: EnrolledStudent = {
  id: 'stu-003',
  name: 'Mia',
  progress: 90,
  courseId: 'c-101',
  createdAt: new Date(),
  updatedAt: new Date(),
};
console.log(stdnt2);


export function formatStudent (s: Student): string {
  const p = Math.max(0, Math.min(100, s.progress));
  return `${s.name} - ${p}%`;
}
export function findCourseById(
  list: ReadonlyArray<Course>, id: string): Course | undefined {
  return list.find(c => c.id === id);
}
export function computeWorkload (list: ReadonlyArray<Course>): number {
  return list.reduce((acc, c) => acc + c.units, 0);
}

export interface Success<T> { ok: true; data: T; }
export interface Failure { ok: false; error: string; }
export type Result<T> = Success<T> | Failure;

export function getStudent(id: string): Result<Student> {
  const found = students.find(s => s.id === id);
  return found ? { ok: true, data: found } : { ok: false, error: 'Student not found' };
}

export function renderResult<T>(r: Result<T>, onok: (v: T) => string): string {
  switch (r.ok) {
    case true:
      return onok(r.data);
    case false: return `${r.error}`;
  }
}

const findStudent = getStudent('stu-002');
console.log(findStudent);
console.log(renderResult (findStudent, s => `Seleccionado: ${s.name} (${s.progress}%)`));

function renderList(title: string, items: ReadonlyArray<string>): string {
  return `
    <section class="card">
      <h2>${title}</h2>
      <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
    </section>
  `;
}

export function renderActivity5(): string {
  const lista = students.map(formatStudent);
  const workload = computeWorkload(courses);

  const studentBlock = renderList('Students', lista);
  const courseBlock = renderList('Courses', courses.map(c => `${c.title} - ${c.units}h`));

  const studentData = getStudent('stu-002');
  const details = renderResult(studentData, v => `Selecionado: ${v.name} (${v.progress}%)`);

  return `
    ${studentBlock}
    ${courseBlock}
    <section class="card"><p>${details}</p><p>Total carga: ${workload}h</p></section>
  `;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${renderActivity5()}
  </div>
`;
