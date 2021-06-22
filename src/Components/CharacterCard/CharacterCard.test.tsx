import renderer from 'react-test-renderer';
import { CharacterCard } from './CharacterCard';
import mockCharacter from '../../Mocks/mockCharacter';
import { withMockStore } from '../../Hooks/withMockStore';

describe('<CharacterCard />', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(withMockStore(<CharacterCard character={mockCharacter}/>))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});