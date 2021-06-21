import * as React from 'react';
import renderer from 'react-test-renderer';
import { AcrylicBackgroud } from './AcrylicBackgroud';

describe('<AcrylicBackgroud />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<AcrylicBackgroud currentCharacter={{id: 1, name: "test", image: "http://test.image.url"}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});