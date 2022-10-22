import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  max-height: 480px;
  position: relative;
  left: -3.5rem;
  background: var(--Pink-700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
    left: 0;
    flex-direction: column;
  }
  img {
    position: relative;
    top: 3.8rem;
    left: 8rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      top: 0;
      left: 0;
    }
  }
`;

export const Description = styled.span`
  position: absolute;
  top: 2rem;
  right: -2rem;
  color: var(--Gray-300);
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    font-size: 1rem;
    margin: 1rem 0;
  }
`;
export const Title = styled.div`
  position: absolute;
  top: 5rem;
  right: -12rem;
  font-size: 1.9rem;
  z-index: 55;

  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 0;
    right: 0;
    font-size: 1.2rem;
    text-align: center;
  }
  span {
    color: var(--White-900);
  }
`;
