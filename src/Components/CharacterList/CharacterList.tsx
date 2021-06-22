import { Button, Grid, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Avatar, List } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCurretCharacterAction, loadMoreAction } from '../../Store/actions';
import { CharacterChunk } from '../../Store/characters';
import { ApplicationDispatch, ApplicationState } from '../../Store/store';

interface StateProps {
    characters: CharacterChunk[],
    nextUrl?: string,
}

interface DispatchProps {
    selectCharacter: (id: number) => void,
    loadMore: (url: string) => void
}

export const CharacterList: React.FC<StateProps & DispatchProps> = (props) => {

    const [selectedIndex, selectItem] = useState(1);

    const onClickHandler = (id: number) => () => {
        selectItem(id);
        props.selectCharacter(id);
    }

    const onLoadMoreHandler = () => {
        if (props.nextUrl)
            props.loadMore(props.nextUrl);
    }

    return (
        <List>
            {props.characters && props.characters.length > 0 ? props.characters.map(x => <ListItem key={x.id + x.name} button selected={selectedIndex === x.id} onClick={onClickHandler(x.id)}>
                <ListItemAvatar>
                    <Avatar src={x.image} />
                </ListItemAvatar>
                <ListItemText  primary={x.name} />
            </ListItem>) : <ListItem> <Grid container justify="center">No characters found</Grid></ListItem>}
            {props.nextUrl && <ListItem>
                <Grid container justify="center">
                    <Button color="secondary" onClick={onLoadMoreHandler}>
                        Load More
                    </Button>
                </Grid>
            </ListItem>}
        </List>
    )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
    return {
        characters: state.characters.characters,
        nextUrl: state.characters.nextUrl,
    }
}


const mapDispatchToProps = (dispatch: ApplicationDispatch): DispatchProps => {
    return {
        selectCharacter: (id: number) => dispatch(setCurretCharacterAction(id)),
        loadMore: (url: string) => dispatch(loadMoreAction(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);