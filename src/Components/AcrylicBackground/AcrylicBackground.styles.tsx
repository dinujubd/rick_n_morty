import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = (img: string) => makeStyles(() =>
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