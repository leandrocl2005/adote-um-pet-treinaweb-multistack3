import { Link, Box } from '@mui/material';
import NextLink from 'next/link';
import {
    Container,
    Logo,
    LinksContainer
} from './styles';

export default function CabecalhoAdmin(){
    return (
        <Container>
            <div>
                <Link component={NextLink} href={'/'}>
                    <Logo src={'/images/logo.svg'} alt={'Adote um Pet'} />
                </Link>
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'} >
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'} >
                        <a>
                            Relatório{' '}
                            <Box
                                component={'span'}
                                sx={{display: { sm: 'initial', xs: 'none'}}}
                            >
                            de Adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </Container>
    )
}