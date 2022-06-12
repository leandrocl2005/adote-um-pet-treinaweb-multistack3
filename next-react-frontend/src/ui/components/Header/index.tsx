import { 
  Container,
  Logo
} from './styles';

const Header = () => {
   return(
       <Container>
           <Logo src="/images/logo.svg" alt="Adote um Pet" />
       </Container>
   )
}

export default Header;