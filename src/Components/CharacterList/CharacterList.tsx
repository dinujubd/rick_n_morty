import { Button, Grid, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Avatar, List } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCurretCharacter, loadMore } from '../../store/actions';


interface Character {
    id: number,
    name: string,
    image: string
}

interface StateProps {
    characters: { id: number; name: string; image: string }[],
    nextUrl: string | null,
}

interface DispatchProps {
    selectCharacter: (id: number) => void,
    loadMore: (url: string) => void
}

const CharacterGrid: React.FC<StateProps & DispatchProps> = (props) => {

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
            {props.characters && props.characters.length && props.characters.map(x => <ListItem button selected={selectedIndex === x.id} onClick={onClickHandler(x.id)}>
                <ListItemAvatar>
                    <Avatar src={x.image} />
                </ListItemAvatar>
                <ListItemText primary={x.name} />
            </ListItem>)}
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

const mapStateToProps = (state: any): StateProps => {
    return {
        characters: state.characters.characters,
        nextUrl: state.characters.nextUrl,
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        selectCharacter: (id: number) => dispatch(setCurretCharacter(id)),
        loadMore: (url: string) => dispatch(loadMore(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterGrid);