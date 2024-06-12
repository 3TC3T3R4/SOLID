(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate

  //Before
  /*const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];
  */
  //After
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  //Before
  // Archivos marcados para borrar - files to delete

  //const files = filesToEvaluate.map((f) => f.f);

  //After
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  //Bad names
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const timeInDaysElapsed: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const firstLastName = "Herrera";

  // días desde la última modificación - days since modification
  const daysOfLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maximumNumberOfClassesPerStudent = 6;
})();
