import React from 'react';
import { connect } from 'react-redux';
import { Box, Card, Grid, Typography } from '@material-ui/core';
import { Character } from '../../Models/characters';
import { ApplicationState } from '../../Store/store';
import Male from '../../Assets/male.png'
import Female from '../../Assets/female.png'
import Dead from '../../Assets/dead.png'
import Alive from '../../Assets/alive.png'
import Unknown from '../../Assets/unknown.png'
import { useStyles } from './CharacterCard.styles';

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
            <Grid container direction="column" className={classes.container}>
                <img className={classes.cover} alt={character.name} src={character.image} />
                <Grid container justify="space-between" className={classes.details}>
                    <Box className={classes.nameBlock}>
                        <Typography color="textSecondary" className={classes.name} variant="h5" component="h2">
                            {character.name.toUpperCase()}
                        </Typography>
                        <img alt={character.name} className={classes.genderIcon} src={getGenderImage()} />
                    </Box>
                    <img  alt={character.name} className={classes.lifeStatus} src={getLifeStatus()} />
                </Grid>

                <Grid container alignItems="stretch" className={classes.details}>
                    <Grid container justify="space-between">
                        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
                            Species
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {character.species}
                        </Typography>
                    </Grid>

                    <Grid container justify="space-between">
                        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
                            Location
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {character.location.name}
                        </Typography>
                    </Grid>

                    <Grid container justify="space-between">
                        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
                            Origin
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {character.origin.name}
                        </Typography>
                    </Grid>

                    {character.type && <Grid container justify="space-between">
                        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
                            Type
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {character.type}
                        </Typography>
                    </Grid>}
                </Grid>
            </Grid>
        </Card>
    )
}

CharacterCard.displayName = 'CharacterCard';

const mapStateToProps = (state: ApplicationState): StateProps => ({
    character: state.characters.currentCharacter
})

export default connect(mapStateToProps)(React.memo(CharacterCard));