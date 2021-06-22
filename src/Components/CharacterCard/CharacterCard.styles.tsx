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
            height: '90%',
            borderRadius: '50%',
        },
        name: {
            fontWeight: 900,
            color: theme.palette.warning.dark
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
        avatar: {
            height: theme.spacing(20),
            width: theme.spacing(20)
        },
        castedCount: {
            height: theme.spacing(3),
            width: theme.spacing(3),
            borderRadius: '50%',
            padding: theme.spacing(1),
        }
        
    }),
);