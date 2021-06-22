import renderer from 'react-test-renderer';
import { Status } from './Status';
describe('<Status />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<Status status="success"  />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});