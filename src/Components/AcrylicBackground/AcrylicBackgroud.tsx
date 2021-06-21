import * as React from 'react';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/store';
import { CharacterChunk } from '../../store/characters';

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
        },
        logo: {
            position: 'absolute',
            left: '20px',
            top: '20px',
            height: '50px',
            zIndex: -1,
        }
    }),
);

const AcrylicBackgroud: React.FC<StateProps> = (props) => {
    const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg";

    const classes = useStyles(props.currentCharacter?.image ?? '')();

    return (
        <Box>
            <img className={classes.logo} src={logoUrl} />
            <Box className={classes.root}></Box>
        </Box>
    );

}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    currentCharacter: state.characters.currentCharacter
})

export default connect(mapStateToProps)(AcrylicBackgroud);