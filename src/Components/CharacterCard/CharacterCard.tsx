import * as React from 'react';
import { Box, Card, CardContent, CardMedia, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Character } from '../../models/characters';
import { ApplicationState } from '../../store/store';
import Male from '../../assets/male.png'
import Female from '../../assets/female.png'
import Dead from '../../assets/dead.png'
import Alive from '../../assets/alive.png'
import Unknown from '../../assets/unknown.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '0',
            boxShadow: 'none'
        },
        cover: {
            height: 300,
        },
        name: {
            fontWeight: 900
        },
        dataTitle:  {
            fontWeight: 'bold'
        },
        nameBlock: {
            display: 'flex'
        },
        genderIcon: {
            marginLeft: 5
        }
    }),
);


interface StateProps {
    character?: Character,
}

const CharacterCard: React.FC<StateProps> = ({ character }) => {
    const classes = useStyles();

    if (!character) return null;

    const getGenderImage = () => {
        switch (character.gender) {
            case 'Male': return Male;
            case 'Female': return Female;
            case 'Unknown': return Unknown;
        }
    }

    const getLifeStatus = () => {
        switch (character.status) {
            case 'Dead': return Dead;
            case 'Alive': return Alive;
        }
    }

    return character ? (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt={character.name}
                image={character.image}
                title={character.name}
                className={classes.cover}
            />
            <CardContent>
                <Grid
                    container
                    justify={'space-between'}
                >
                    <Box className={classes.nameBlock}>
                        <Typography className={classes.name} variant="h5" component="h2">
                            {character.name}
                        </Typography>

                        <img className={classes.genderIcon} style={{ height: 20 }} src={getGenderImage()} />
                    </Box>
                    <img style={{ height: 40 }} src={getLifeStatus()} />

                </Grid>
            </CardContent>
            <CardContent>

                <Grid
                    container
                    alignItems="stretch"
                >
                    <Grid
                        container
                        justify="space-between"
                    >
                        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
                            Species
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {character.species}
                        </Typography>

                    </Grid>

                    <Grid
                        container
                        justify="space-between"
                    >
                        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
                            Location
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {character.location.name}
                        </Typography>

                    </Grid>

                    <Grid
                        container
                        justify="space-between"
                    >
                        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
                            Origin
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {character.origin.name}
                        </Typography>

                    </Grid>

                </Grid>

            </CardContent>

        </Card>
    ) : <></>
}

CharacterCard.displayName = 'CharacterCard';

const mapStateToProps = (state: ApplicationState): StateProps => ({
    character: state.characters.currentCharacter
})

export default connect(mapStateToProps)(CharacterCard);