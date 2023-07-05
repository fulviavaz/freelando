import { Global } from "@emotion/react";

const estilos = (tema) => {
  return {
    html: {
      fontFamily: tema.fontFamily,
    },
    body: {
      margin: 0,
      // padding: 0,
      // backgroundColor: tema.cores.neutras.a,
      // color: tema.cores.neutras.d,
    },
  };
};

export const Estilos = () => {
  return <Global styles={estilos} />;
};
