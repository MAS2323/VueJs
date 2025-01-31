import * as yup from "yup";

// dentro de este archivo se define el esquema de validación para el formulario de registro. En este caso, se define que el campo nombre es requerido.
export const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  email: yup.string().email("El email no es válido").required("El email es requerido"),
});

// export default schema;
