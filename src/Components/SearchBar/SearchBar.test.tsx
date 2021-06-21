import * as React from 'react';
import renderer from 'react-test-renderer';
import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<SearchBar search={jest.fn()}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});