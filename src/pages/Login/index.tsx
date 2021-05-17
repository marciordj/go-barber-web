import { BehindBackground, Container, Content } from './styles';

import logoGobarber from '../../assets/Logo.svg';

const Login = () => {
  return (
    <Container>
      <Content>
        <img src={logoGobarber} alt="GoBarber" />

        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgt">Esqueci minha senha</a>
        </form>

        <a href="forgt">Criar conta</a>
      </Content>
      <BehindBackground />
    </Container>
  );
};

export default Login;
