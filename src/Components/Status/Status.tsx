import React from 'react';
import { Box, Theme, useTheme } from '@material-ui/core';
import { useStyles } from './Status.styles';

interface Props {
    status: string;
}

export const Status: React.FC<Props> = ({ status }) => {

    const getVariant = (status: string, theme: Theme) => {
        switch (status) {
            case 'Alive': return theme.palette.success;
            case 'Dead': return theme.palette.error;
            default: return theme.palette.secondary;
        }
    }
    const theme = useTheme();
    const classes = useStyles(getVariant(status, theme))();

    return (
        <Box component="span">
            <Box component="span" mr={1}>{status}</Box>
            <Box component="span" className={classes.root}></Box>
        </Box>
    );
}

Status.displayName = 'Status'