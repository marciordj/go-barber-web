import styled from 'styled-components';
import { shade } from 'polished';

import logInBackground from '../../assets/loginImage.png';

export const Container = styled.div`
  height: 100vh; /*View Height, vai pegar toda a view da tela do usuário */
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* place-content: center; isso aqui serviria pra deixar no centro sem usar o justify e o align; */
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      background: #ff9000;
      color: #312e38;
      width: 100%;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      margin-top: 16px;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ff9000;
    margin-top: 40px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#FF9000')};
    }
  }
`;

export const BackgroundSide = styled.div`
  flex: 1;
  background: url(${logInBackground}) no-repeat center;
  background-size: cover;
`;
