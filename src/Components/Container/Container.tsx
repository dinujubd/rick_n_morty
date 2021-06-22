import { Box, Grid } from "@material-ui/core";
import AcrylicBackgroud from "../AcrylicBackground/AcrylicBackgroud";
import CharacterCard from "../CharacterCard/CharacterCard";
import SearchBar from "../SearchBar/SearchBar";
import CharacterList from '../CharacterList/CharacterList';
import { useStyles } from "./Container.styles";

export const Container: React.FC = () => {
    const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg";
    const classes = useStyles();

    return (
        <>
            <AcrylicBackgroud />
            <img alt="logo" className={classes.logo} src={logoUrl} />
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
                    <Grid container direction="column" className={classes.leftCol} xs={12} sm={4} lg={4} >
                        <Grid container justify="center">
                            <SearchBar />
                        </Grid>
                        <Box className={classes.charList}>
                            <CharacterList />
                        </Box>
                    </Grid>
                    <Grid className={classes.charDetails} xs={12} sm={5} lg={5} >
                        <CharacterCard />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};


Container.displayName = 'Conitaner';

export default Container;