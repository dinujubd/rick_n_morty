import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { ApplicationState } from '../../Store/store';
import { useStyles } from './AcrylicBackground.styles';

interface StateProps {
    background: string;
}

export const AcrylicBackgroud: React.FC<StateProps> = ({ background }) => {
    const classes = useStyles(background)();
    return (
        <Box>
            <Box className={classes.root}></Box>
        </Box>
    );
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    background: state.characters?.currentCharacter?.image ?? ''
})

AcrylicBackgroud.displayName = 'AcrylicBackgroud'

export default connect(mapStateToProps)(React.memo(AcrylicBackgroud));