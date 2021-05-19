import { FiArrowLeft } from 'react-icons/fi';

import { BackgroundSide, Container, Content } from './styles';

import logoBarber from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
  return (
    <Container>
      <BackgroundSide />
      <Content>
        <img src={logoBarber} alt='GoBarberLogo' />

        <div>
          <a href='dsa'>Sou cliente</a>
          <a href='dsa'>Sou cabeleleiro</a>
        </div>

        <form>
          <Input name='name' placeholder='Nome' />
          <Input name='email' placeholder='E-mail' />
          <Input name='password' placeholder='Senha' />

          <Button type='button'> Cadastrar </Button>
        </form>

        <a href='dsa'>
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
