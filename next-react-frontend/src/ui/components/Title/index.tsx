import { StyledTitle, StyledSubtitle } from "./styles";

interface TituloProps {
    titulo: string;
    subtitulo?: string | JSX.Element;
}

const Title = (props: TituloProps) => {
    return (
        <>
            <StyledTitle>{props.titulo}</StyledTitle>
            <StyledSubtitle>{props.subtitulo}</StyledSubtitle>
        </>
    )
}

export default Title;