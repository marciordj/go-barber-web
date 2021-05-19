import styled from 'styled-components';

import signInBackground from '../../assets/sigin.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  > div {
    margin: 80px 0;
    display: flex;
    justify-content: space-around;
    width: 340px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  form {
    /* margin: 57px 0; */
    width: 340px;
    text-align: center;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-top: 68px;
    text-decoration: none;

    svg {
      margin-right: 25px;
    }
  }
`;

export const BackgroundSide = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
