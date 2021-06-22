import React from "react";
import { createStyles, debounce, IconButton, InputBase, makeStyles, Paper, Theme } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux"
import { searchAction } from '../../Store/actions'
import { ApplicationDispatch } from "../../Store/store";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '90%',
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
    const [searchConfig, setSearchConfig] = React.useState<SearchConfig>({});

    const changeHandler = React.useCallback((event: any) => {
        let tempSearch: Partial<SearchConfig> = {};
        ('' + event.target.value).split(',')
            .map((x) => x.trim())
            .forEach(item => {
                if (item.indexOf(':') === -1) {
                    tempSearch.name = item.trim();
                } else {
                    const [key, val] = item.split(':')
                    tempSearch = { ...tempSearch, [key]: val.trim() }
                }
            })
        setSearchConfig({ ...searchConfig, ...tempSearch })
    }, []);

    React.useEffect(() => {
        if (searchConfig) props.search(searchConfig);
    }, [searchConfig])

    const debouncedChangeHandler = React.useCallback(
        debounce(changeHandler, 300)
        , []);



    return (
        <Paper component="form" className={classes.root}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="name: rick, status: alive, species: human"
                inputProps={{ 'aria-label': 'Search Character' }}
                onChange={debouncedChangeHandler}
            />
            
        </Paper>

    )
}

const mapDispatchToProps = (dispatch: ApplicationDispatch): DispatchProps => {
    return {
        search: (searchConfig: SearchConfig) => dispatch(searchAction(searchConfig))
    }
}

export default connect(_ => _, mapDispatchToProps)(SearchBar)