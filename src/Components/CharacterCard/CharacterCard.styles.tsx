import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = (isMobile: boolean) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '0',
            boxShadow: 'none'
        },
        container: {
            height: isMobile ? 'auto': '90vh'
        },
        cover: {
            objectFit: 'cover',
            maxHeight: isMobile ? 'auto': '45%'
        },
        name: {
            fontWeight: 900
        },
        dataTitle: {
            fontWeight: 'bold'
        },
        nameBlock: {
            display: 'flex',
        },
        genderIcon: {
            marginLeft: 5,
            height: 20
        },
        details: {
            padding: theme.spacing(2)
        },
        lifeStatus: {
            height:
                40
        }
    }),
);