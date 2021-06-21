import React from "react";
import { createStyles, debounce, IconButton, InputBase, makeStyles, Modal, Paper, Theme, Box, Grid, Select, MenuItem, Button, NativeSelect } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux"
import { searchAction } from '../../Store/actions'
import { ApplicationDispatch } from "../../Store/store";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            margin: '5px',
            display: 'flex'
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        fiterSelect: {
            width: '100%'
        },
    }),
);

interface DispatchProps {
    search: (searchConfig: SearchConfig) => void
}

interface SearchConfig {
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
}

export const SearchBar: React.FC<DispatchProps> = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [searchConfig, setSearchConfig] = React.useState<SearchConfig>({});

    const changeHandler = (event: any) => {
        setSearchConfig({...searchConfig, name: event.target.value})
        props.search({ name: event.target.value })
    };

    const debouncedChangeHandler = React.useCallback(
        debounce(changeHandler, 300)
        , []);

    const handleClose = React.useCallback(() => {
        setOpen(false)
    }, [])


    const changeSearchFilterHandler = (key: keyof SearchConfig) => (e: any) => {
        const value = e.nativeEvent.target.value;
        if (value && value === '*')
            setSearchConfig({ ...searchConfig, [key]: null });
        else
            setSearchConfig({ ...searchConfig, [key]: value });
    }

    const handleSearchFilter = React.useCallback(() => {
        props.search(searchConfig);
        setOpen(false);
    }, [searchConfig])

    return (
        <Paper component="form" className={classes.root}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h2 >Search Filter</h2>
                    <Grid
                        container
                        justify="flex-start"
                    >
                        <Grid xs={6}>Status</Grid>
                        <Grid xs={6}>
                            <NativeSelect onChange={changeSearchFilterHandler('status')} value={searchConfig.status || '*'} className={classes.fiterSelect}>
                                <option value="*">Any</option>
                                <option value="Alive">Alive</option>
                                <option value="Dead">Dead</option>
                                <option value="unknown">unknown</option>
                            </NativeSelect>
                        </Grid>
                        <Grid xs={6}>Species</Grid>
                        <Grid xs={6}>
                            <Select onChange={changeSearchFilterHandler('species')} value={searchConfig.species || '*'} className={classes.fiterSelect}>
                                <option value="*">Any</option>
                                <option value="Human">Human</option>
                                <option value="Alien">Alien</option>
                                <option value="Humanoid">Humanoid</option>
                                <option value="Mythological Creature">Mythological Creature</option>
                                <option value="Poopybutthole">Poopybutthole</option>
                                <option value="Robot">Robot</option>
                                <option value="Cronenberg">Cronenberg</option>
                                <option value="Disease">Disease</option>
                                <option value="unknown">unknown</option>
                            </Select>
                        </Grid>
                        <Grid xs={6}>Type</Grid>
                        <Grid xs={6}>
                            <Select onChange={changeSearchFilterHandler('type')} value={searchConfig.type || '*'} className={classes.fiterSelect}>
                                <option value="*">Any</option>
                                <option value="Genetic experiment">Genetic experiment</option>
                                <option value="Superhuman (Ghost trains summoner)">Superhuman (Ghost trains summoner)</option>
                                <option value="Parasite">Parasite</option>
                                <option value="Human with antennae">Human with antennae</option>
                                <option value="Human with ants in his eyes">Human with ants in his eyes</option>
                            </Select>
                        </Grid>
                        <Grid xs={6}>Gender</Grid>
                        <Grid xs={6}>
                            <Select onChange={changeSearchFilterHandler('gender')} value={searchConfig.gender || '*'} className={classes.fiterSelect}>
                                <option value="*">Any</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="unknown">Unknown</option>

                            </Select>


                        </Grid>
                        <Button onClick={handleSearchFilter} variant="contained" color="secondary">Search</Button>
                    </Grid>
                </div>
            </Modal>
            <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search Character"
                inputProps={{ 'aria-label': 'Search Character' }}
                onChange={debouncedChangeHandler}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>

    )
}

const mapDispatchToProps = (dispatch: ApplicationDispatch): DispatchProps => {
    return {
        search: (searchConfig: SearchConfig) => dispatch(searchAction(searchConfig))
    }
}

export default connect(_ => _, mapDispatchToProps)(SearchBar)