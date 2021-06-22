import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

export const useStyles = (variant: PaletteColor) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: `${variant.dark}`,
            height: '0.7em',
            width: '0.7em',
            borderRadius: '50%',
            display: 'inline-block'
        }
    }),
);