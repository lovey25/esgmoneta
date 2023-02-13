import styled from "styled-components";

const St = {
  Container: styled.div`
    background-color: #3e3983;
    padding: 1.5em;
  `,
  CoName: styled.div`
    font-size: 2em;
    color: #e4cfcf;
  `,
};

export const Header = () => {
  return (
    <>
      <St.Container>
        <St.CoName>EVERYMONETA</St.CoName>
      </St.Container>
    </>
  );
};
