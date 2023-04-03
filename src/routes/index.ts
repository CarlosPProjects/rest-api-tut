import { Router } from "express";
import { readdirSync } from "fs";

{
  /* __dirname nos devuelve la ruta `src/routes` */
}
const PATH_ROUTES = `${__dirname}`;
const router = Router();

{
  /* 
    La función divide el nombre del archivo en una matriz utilizando el carácter punto "." 
    como separador, y luego toma el primer elemento de esa matriz utilizando el método shift()
  */
}
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

{
  /* readdirSync nos devuelve un array con los nombres de los archivos  */
}
{
  /*
    Para cada archivo restante, se llama a la función cleanFileName para limpiar el 
    nombre del archivo, y se importa dinámicamente el módulo correspondiente usando 
    la función import de JavaScript.

    Una vez que se ha importado el módulo, se utiliza el objeto router de Express 
    para agregar una nueva ruta al servidor para cada módulo. La ruta se establece 
    en /${cleanName}, donde cleanName es el nombre del archivo limpio.
  */
}
readdirSync(PATH_ROUTES).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta.... /${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
