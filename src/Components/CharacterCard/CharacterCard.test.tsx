import * as React from 'react';
import renderer from 'react-test-renderer';
import { Character } from '../../Models/characters';
import { CharacterCard } from './CharacterCard';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import mockCharacter from '../../Mocks/mockCharacter';
import { withMockStore } from '../../Hooks/withMockStore';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<CharacterCard />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(withMockStore(<CharacterCard character={mockCharacter}/>))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});