import { Button } from '@mui/material'
import {
    StyledList,
    StyledItemList,
    StyledPic,
    StyledInformation,
    StyledName,
    StyledDescription
} from './styles'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService';

interface PetListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function PetList(props: PetListProps){
    const textMaxSize = 200;

    return (
        <StyledList>
            {props.pets.map(pet => (
                <StyledItemList key={pet.id} >
                    <StyledPic src={pet.foto} alt={pet.nome} />
                    <StyledInformation>
                        <StyledName>{pet.nome}</StyledName>
                        <StyledDescription>
                            {TextService.limitTextSize(pet.historia, textMaxSize)}
                        </StyledDescription>
                        <Button
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.nome}
                        </Button>
                    </StyledInformation>
                </StyledItemList>
            ))}
        </StyledList>
    )
}