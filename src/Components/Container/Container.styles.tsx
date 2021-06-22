import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = (isMobile: boolean) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: isMobile ? 'auto': '100vh'
        },
        appContainer: {
            height: isMobile ? 'auto': '90vh'
        },
        leftCol: {
            backgroundColor: `${theme.palette.background.paper}7`,
            padding: theme.spacing(2),
            borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
            boxShadow: theme.shadows[5]
        },
        charList: { height: '70vh', overflowY: 'auto' },
        charDetails: {
            height: isMobile ? 'auto': '90vh',
            background: theme.palette.background.paper,
            overflow: 'hidden',
            borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
            boxShadow: theme.shadows[5]
        },
        genderIcon: {
            marginLeft: theme.spacing(2)
        },
        details: {
            padding: theme.spacing(2)
        },
        logo: {
            position: 'absolute',
            left: '20px',
            top: '20px',
            height: '50px',
            zIndex: -1,
        }
    }),
);