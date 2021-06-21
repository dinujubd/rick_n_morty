import * as React from 'react';
import { Card, CardContent, CardMedia, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Character } from '../../models/characters';
import { ApplicationState } from '../../store/store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '0',
            boxShadow: 'none'
        },
        cover: {
            height: 300,
        }
    }),
);


interface StateProps {
    character?: Character,
}

const CharacterCard: React.FC<StateProps> = ({ character }) => {
    const classes = useStyles();

    return character ? (
        <Card className={classes.root}>

            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={character.image}
                title="Contemplative Reptile"
                className={classes.cover}
            />
            <CardContent>
                <Grid
                    container
                    justify={'space-between'}
                >
                    <Typography gutterBottom variant="h5" component="h2">
                        {character.name}
                    </Typography>

                    <div></div>
                    <Typography color="inherit" variant="h6" gutterBottom>
                        {character.status}
                    </Typography>
                </Grid>
            </CardContent>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    {character.gender}
                </Typography>


                <Typography variant="h6" gutterBottom>
                    {character.species}
                </Typography>

                <Typography variant="h6" gutterBottom>
                    {character.location.name}
                </Typography>
            </CardContent>

        </Card>
    ) : <></>
}

CharacterCard.displayName = 'CharacterCard';



const mapStateToProps = (state: ApplicationState): StateProps => {
    return {
        character: state.characters.currentCharacter
    }
}

export default connect(mapStateToProps)(CharacterCard);