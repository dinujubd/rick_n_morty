import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = (backgrounImage: string) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '0',
            minHeight: theme.breakpoints.down('xs') ? '500px' :'auto'
        },
        container: {
            height: theme.breakpoints.down('xs') ? 'auto': '90vh'
        },
        cover: {
            background: `url(${backgrounImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },
        name: {
            fontWeight: 900
        },
        dataTitle: {
            fontWeight: 'bold'
        },
        genderIcon: {
            marginLeft: 5,
            height: 20
        },
        details: {
            padding: theme.spacing(2)
        },
        
    }),
);