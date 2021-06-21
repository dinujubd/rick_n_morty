import * as React from 'react';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import { connect } from 'react-redux';
import { ApplicationState } from '../../Store/store';
import { CharacterChunk } from '../../Store/characters';

interface StateProps {
    currentCharacter?: CharacterChunk;
}

const useStyles = (img: string) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: `url("${img}") no-repeat center center fixed`,
            backgroundSize: 'cover',
            filter: 'blur(70px)',
            zIndex: -2,
            position: 'absolute'
        }
    }),
);

export const AcrylicBackgroud: React.FC<StateProps> = (props) => {
    const classes = useStyles(props.currentCharacter?.image ?? '')();
    return (
        <Box>
            <Box className={classes.root}></Box>
        </Box>
    );

}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    currentCharacter: state.characters.currentCharacter
})

AcrylicBackgroud.displayName = 'AcrylicBackgroud'

export default connect(mapStateToProps)(AcrylicBackgroud);