import renderer from 'react-test-renderer';
import { InfoRow } from './InfoRow';
describe('<InfoRow />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<InfoRow name="Hi" value="Hello" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});