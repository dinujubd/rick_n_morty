import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import { Character, Location } from '../../Models/characters';
import { ApplicationState } from '../../Store/store';
import Male from '../../Assets/male.png'
import Female from '../../Assets/female.png'
import Unknown from '../../Assets/unknown.png'
import { useStyles } from './CharacterCard.styles';
import { Status } from '../Status/Status';
import { InfoRow } from '../InfoRow/InfoRow';

interface StateProps {
    character?: Character,
    location?: Location,
    origin?: Location,
}

export const CharacterCard: React.FC<StateProps> = ({ character, origin, location }) => {
    const classes = useStyles(character?.image ?? '')();
    const gender = useMemo(() => {
        switch (character?.gender) {
            case 'Male': return Male;
            case 'Female': return Female;
            default: return Unknown;
        }
    }, [character])

    if (!character) return null;

    return (
        <Box display="flex" flexBasis="100%" flexGrow="0" flexShrink="1" height="100%" width="100%" flexWrap="wrap" alignItems="flex-start" padding={2} className={classes.root}>
            <Box flexGrow="0" flexShrink="1" flexBasis="100%" minWidth="100%" height="30%">
                <Box display="flex" justifyContent="center" alignItems="center" p={1} >
                    <Avatar src={character.image} className={classes.avatar} />
                </Box>
            </Box>
            <Box flexGrow="0" flexShrink="1" flexBasis="100%" minWidth="100%" height="70%" pb={2}>
                <Grid container justify="space-between" className={classes.details}>
                    <Typography className={classes.name} variant="h5" component="h2">
                        {character.name.toUpperCase()}
                    </Typography>
                    <img alt={character.name} className={classes.genderIcon} src={gender} />
                </Grid>
                <Grid container alignItems="stretch" className={classes.details}>
                    <Grid container justify="space-between">
                        <Box className={classes.dataTitle} mt={1}>
                            <Box component="span">Featured Episodes:</Box>
                            <Box ml={2} className={classes.castedCount} component="span">{`[${character.episode.length}]`}</Box>
                        </Box>
                        <Status status={character.status} />
                    </Grid>
                    <InfoRow name="Location" value={<span>{character.location.name}, Dimension: {location?.dimension}, Residents: {location?.residents.length}</span>} />
                    <InfoRow name="Origin" value={<span>{character.origin.name}, Dimension: {origin?.dimension}, Residents: {origin?.residents.length}</span>} />
                    <InfoRow name="Type" value={character.type} />
                </Grid>
            </Box>
        </Box>
    )
}

CharacterCard.displayName = 'CharacterCard';

const mapStateToProps = (state: ApplicationState): StateProps => ({
    character: state.characters.currentCharacter?.character,
    location: state.characters.currentCharacter?.location,
    origin: state.characters.currentCharacter?.origin,
})

export default connect(mapStateToProps)(React.memo(CharacterCard));