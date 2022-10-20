import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  aside {
    width: 25%;
    border-left: 1px solid var(--Cyan-300);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    div {
      width: 85%;
      height: 125px;
      background-color: red;
      margin: 0 auto;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Circle = styled.div`
  width: 480px;
  height: 480px;
  position: relative;
  left: -3.5rem;
  background: #ff0066;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: relative;
    top: 3.8rem;
    left: 8rem;
  }
`;

export const Description = styled.span`
  position: absolute;
  top: 2rem;
  right: -2rem;
  color: var(--Gray-300);
  font-size: 1.2rem;
`;
export const Title = styled.div`
  position: absolute;
  top: 5rem;
  right: -12rem;
  font-size: 1.9rem;
  z-index: 55;

  span {
    color: var(--White-900);
  }
`;
