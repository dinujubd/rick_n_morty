import renderer from 'react-test-renderer';
import { withMockStore } from '../../Hooks/withMockStore';
import { Container } from './Container';

describe('<Container />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(withMockStore(<Container />))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});