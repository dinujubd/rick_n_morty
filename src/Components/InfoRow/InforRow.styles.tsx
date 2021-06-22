import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

export const useStyles = makeStyles(() =>
    createStyles({
        dataTitle: {
            fontWeight: 'bold'
        },
    }),
);