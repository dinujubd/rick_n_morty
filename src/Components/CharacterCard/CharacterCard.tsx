import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Typography } from '@material-ui/core';
import { Character } from '../../Models/characters';
import { ApplicationState } from '../../Store/store';
import Male from '../../Assets/male.png'
import Female from '../../Assets/female.png'
import Unknown from '../../Assets/unknown.png'
import { useStyles } from './CharacterCard.styles';
import { Status } from '../Status/Status';
import { InfoRow } from '../InfoRow/InfoRow';

interface StateProps {
    character?: Character,
}

export const CharacterCard: React.FC<StateProps> = ({ character }) => {
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
        <Box display="flex" flexBasis="100%" flexGrow="0" flexShrink="1" height="100%" width="100%" flexWrap="wrap" alignItems="flex-start" className={classes.root}>
            <Box flexGrow="0" flexShrink="1" flexBasis="100%" minWidth="100%" height="65%" className={classes.cover}>
            </Box>
            <Box flexGrow="0" flexShrink="1" flexBasis="100%" minWidth="100%" height="35%" pb={2}>
                <Grid container justify="space-between" className={classes.details}>
                    <Typography color="textSecondary" className={classes.name} variant="h5" component="h2">
                        {character.name.toUpperCase()}
                    </Typography>
                    <img alt={character.name} className={classes.genderIcon} src={gender} />
                </Grid>
                <Grid container alignItems="stretch" className={classes.details}>
                    <InfoRow name="Status" value={<Status status={character.status} />} />
                    <InfoRow name="Location" value={character.location.name} />
                    <InfoRow name="Origin" value={character.origin.name} />
                    <InfoRow name="Type" value={character.type} />
                </Grid>
            </Box>
        </Box>
    )
}

CharacterCard.displayName = 'CharacterCard';

const mapStateToProps = (state: ApplicationState): StateProps => ({
    character: state.characters.currentCharacter
})

export default connect(mapStateToProps)(React.memo(CharacterCard));