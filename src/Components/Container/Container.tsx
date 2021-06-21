import { Box, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import AcrylicBackgroud from "../AcrylicBackground/AcrylicBackgroud";
import CharacterCard from "../CharacterCard/CharacterCard";
import SearchBar from "../SearchBar/SearchBar";
import CharacterList from '../CharacterList/CharacterList';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100vh'
        },
        appContainer: {
            height: '90vh'
        },
        leftCol: {
            background: 'rgba(255,255,255, 0.6)',
            padding: 10,
            borderRadius: '10px 0 0 10px'
        },
        charList: { height: '70vh', overflowY: 'auto' },
        charDetails: { background: 'white', overflow: 'hidden', borderRadius: '0 10px 10px 0' },
        genderIcon: {
            marginLeft: 5
        },
        details: {
            padding: '1em'
        }
    }),
);

const Container: React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <AcrylicBackgroud />
            <Grid
                container
                className={classes.root}
                justify="center"
                alignItems="center"
            >
                <Grid
                    className={classes.appContainer}
                    container
                    justify="center"
                >
                    <Grid container direction="column" className={classes.leftCol} xs={12} sm={6} lg={4} >
                        <Grid container justify="center">
                            <SearchBar />
                        </Grid>
                        <Box className={classes.charList}>
                            <CharacterList />
                        </Box>
                    </Grid>
                    <Grid className={classes.charDetails} xs={12} sm={6} lg={5} >
                        <CharacterCard />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};


Container.displayName = 'Conitaner';

export default Container;