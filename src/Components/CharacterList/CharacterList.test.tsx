import * as React from 'react';
import renderer from 'react-test-renderer';
import { CharacterList } from './CharacterList';

describe('<CharacterList />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<CharacterList characters={[]} selectCharacter={jest.fn()}  loadMore={jest.fn()}   />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});