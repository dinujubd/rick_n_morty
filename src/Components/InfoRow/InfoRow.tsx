import React from "react";
import { Box, Grid, Typography } from "@material-ui/core"
import { useStyles } from "./InforRow.styles"

interface Props {
    name: string;
    value: string | number | React.ReactNode;
}

export const InfoRow: React.FC<Props> = React.memo(({ name, value }) => {
    const classes = useStyles();

    if (!value || value === 'unknown') return null;

    return (
        <Box width="100%">
            <Box  className={classes.dataTitle} mt={1}>
                {name}
            </Box>
            <Box>
                {value}
            </Box>
        </Box>
    )
});

InfoRow.displayName = 'InfoRow';