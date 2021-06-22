import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Grid, ListItem, ListItemAvatar, ListItemText, Avatar, List, Link } from '@material-ui/core';
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

    const onClickHandler = useCallback((id: number) => () => {
        selectItem(id);
        props.selectCharacter(id);
    }, [selectItem, props])

    const onLoadMoreHandler = useCallback(() => {
        if (props.nextUrl)
            props.loadMore(props.nextUrl);
    }, [props])

    return (
        <List>
            {props.characters && props.characters.length > 0 ? props.characters.map(x => <ListItem key={x.id + x.name} button selected={selectedIndex === x.id} onClick={onClickHandler(x.id)}>
                <ListItemAvatar>
                    <Avatar src={x.image} />
                </ListItemAvatar>
                <ListItemText primary={x.name} />
            </ListItem>) : <ListItem> <Grid container justify="center">No characters found</Grid></ListItem>}
            {props.nextUrl && <ListItem>
                <Grid container justify="center">
                <Link
                    component="button"
                    variant="body1"
                    onClick={onLoadMoreHandler}
                    color="secondary"
                    >
                    Load More
                    </Link>

                </Grid>
            </ListItem>}
        </List>
    )
}

CharacterList.displayName = 'CharacterList';

const mapStateToProps = (state: ApplicationState): StateProps => ({
    characters: state.characters.characters,
    nextUrl: state.characters.nextUrl,
})

const mapDispatchToProps = (dispatch: ApplicationDispatch): DispatchProps => ({
    selectCharacter: (id: number) => dispatch(setCurretCharacterAction(id)),
    loadMore: (url: string) => dispatch(loadMoreAction(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);