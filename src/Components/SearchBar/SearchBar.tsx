import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { debounce, IconButton, InputBase, Paper } from '@material-ui/core';
import { useStyles } from './SearchBar.styles';
import { ApplicationDispatch } from '../../Store/store';
import { searchAction } from '../../Store/actions';

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
    const [searchConfig, setSearchConfig] = useState<SearchConfig>({});

    useEffect(() => searchConfig && props.search(searchConfig), [props, searchConfig])

    const changeHandler = useCallback((event: any) => {

        const textValue = `${event.target.value}`.trim();
        let tempSearch: SearchConfig = {};

        if (!textValue || textValue.indexOf(':') === -1) {
            tempSearch.name = textValue;
        } else {
            // comma separated search tags
            tempSearch = {};
            ('' + event.target.value).split(',').map((x) => x.trim())
                .forEach(item => {
                    const [key, val] = item.split(':')
                    if(val) tempSearch = { ...tempSearch, [key]: val.trim() }
                })
        }
        setSearchConfig({...tempSearch})
    }, [setSearchConfig]);

    const debouncedChangeHandler = debounce(changeHandler, 300);

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

SearchBar.displayName = 'SearchBar';

const mapDispatchToProps = (dispatch: ApplicationDispatch): DispatchProps => {
    return {
        search: (searchConfig: SearchConfig) => dispatch(searchAction(searchConfig))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);