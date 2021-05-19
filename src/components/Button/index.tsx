import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: IProps) => {
  return (
    <Container type='button' {...rest}>
      {children}
    </Container>
  );
};

export default Button;
