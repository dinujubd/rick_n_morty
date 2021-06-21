import * as React from 'react';
import { Box, Card, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Character } from '../../Models/characters';
import { ApplicationState } from '../../Store/store';
import Male from '../../Assets/male.png'
import Female from '../../Assets/female.png'
import Dead from '../../Assets/dead.png'
import Alive from '../../Assets/alive.png'
import Unknown from '../../Assets/unknown.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '0',
            boxShadow: 'none'
        },
        container: {
            height: '90vh'
        },
        cover: {
            objectFit: 'cover',
            height: '65%'
        },
        name: {
            fontWeight: 900
        },
        dataTitle: {
            fontWeight: 'bold'
        },
        nameBlock: {
            display: 'flex',
            borderRadius: '50px'
        },
        genderIcon: {
            marginLeft: 5,
            height: 20
        },
        details: {
            padding: '1em'
        },
        lifeStatus: {
            height:
                40
        }
    }),
);


interface StateProps {
    character?: Character,
}

export const CharacterCard: React.FC<StateProps> = ({ character }) => {
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

    return (
        <Card className={classes.root}>
            <Grid container
                direction="column"
                className={classes.container}
            >
                <img className={classes.cover} alt={character.name} src={character.image} />
                <Grid
                    container
                    justify="space-between"
                    className={classes.details}
                >
                    <Box className={classes.nameBlock}>
                        <Typography className={classes.name} variant="h5" component="h2">
                            {character.name}
                        </Typography>

                        <img className={classes.genderIcon} src={getGenderImage()} />
                    </Box>
                    <img className={classes.lifeStatus} src={getLifeStatus()} />

                </Grid>

                <Grid
                    container
                    alignItems="stretch"
                    className={classes.details}
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

            </Grid>
        </Card>
    )
}

CharacterCard.displayName = 'CharacterCard';

const mapStateToProps = (state: ApplicationState): StateProps => ({
    character: state.characters.currentCharacter
})

export default connect(mapStateToProps)(CharacterCard);