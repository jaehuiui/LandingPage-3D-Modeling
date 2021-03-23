import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
  justify-content: center;
`;

export const RowGrid = styled.div`
  flex: ${(props) => props.size};
  flex-direction: column;
  justify-content: center;
`;
