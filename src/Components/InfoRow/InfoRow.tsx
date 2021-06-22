import React from "react";
import { Grid, Typography } from "@material-ui/core"
import { useStyles } from "./InforRow.styles"

interface Props {
    name: string;
    value: string | number | React.ReactNode;
}

export const InfoRow: React.FC<Props> = React.memo(({ name, value }) => {
    const classes = useStyles();

    if(!value) return null;

    return (
        <Grid container justify="space-between">
        <Typography className={classes.dataTitle} variant="body1" gutterBottom>
            {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
            {value}
        </Typography>
    </Grid>
    )
});

InfoRow.displayName = 'InfoRow';