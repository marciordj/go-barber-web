import { BackgroundSide, Container, Content } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoGobarber from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
      <Content>
        <img src={logoGobarber} alt='GoBarber' />

        <form>
          <h1>Faça seu Logon</h1>

          <Input name='email' icon={FiMail} placeholder='E-mail' />
          <Input name='Password' icon={FiLock} type='password' placeholder='Password' />

          <Button type='submit'>Entrar</Button>

          <a href='forgt'>Esqueci minha senha</a>
        </form>

        <a href='forgt'>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <BackgroundSide />
    </Container>
  );
};

export default Login;
