
export const formValidate = () => {
  return {
    required: {
      value: true,
      message: "Campo obligatorio...",
    },
    patternEmail: {
      value:
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      message: "Formato de email incorrecto",
    },
    minLength: {
      value: 6,
      message: "Minimo 6 carácteres",
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) return "No dejes espacios en blanco";
        true;
      },
    },
    validateEquals(values) {
      return {
        equals: 
          (v) => v === values || "No coinciden las contraseñas",
      };
    },
  };
}

