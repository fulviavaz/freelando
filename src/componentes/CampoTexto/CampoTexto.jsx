import styled from "@emotion/styled";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;
const InputEstilizado = styled.input`
  display: block;
  width: 100%;
  background-color: ${(props) => props.theme.cores.branco};
  margin-top: ${(props) => props.theme.espacamentos.xs};
  margin-bottom: ${(props) => props.theme.espacamentos.s};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.neutras.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

export const CampoTexto = ({ titulo }) => {
  return (
    <LabelEstilizada>
      {titulo}
      <InputEstilizado />
    </LabelEstilizada>
  );
};
