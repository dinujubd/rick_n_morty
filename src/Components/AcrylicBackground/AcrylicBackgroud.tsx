import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { connect } from 'react-redux';

interface Character {
    id: number,
    name: string,
    image: string
}


interface StateProps {
    currentCharacter?: Character;
}

const useStyles = (img:string) => makeStyles((theme: Theme) =>
    createStyles({
        root: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: `url("${img}") no-repeat center center fixed`,
            backgroundSize: 'cover',
            filter: 'blur(70px)',
            zIndex: -2,
            position: 'absolute'
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

const AcrylicBackgroud: React.FC<StateProps> = (props) => {

    const classes = useStyles(props.currentCharacter?.image ?? 'https://rickandmortyapi.com/api/character/avatar/1.jpeg')();

    return (
        <div>
            <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />
            <div className={classes.root}></div>
        </div>
    );

}

const mapStateToProps = (state:any):StateProps => {
    return {
        currentCharacter: state.characters.currentCharacter
    }
}

export default connect(mapStateToProps)(AcrylicBackgroud);