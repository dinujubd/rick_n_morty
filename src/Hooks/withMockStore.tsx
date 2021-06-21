import * as React from 'react';

import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import mockCharacter from '../Mocks/mockCharacter';


export const withMockStore = (component: React.ReactElement) => {

    const mockStore = configureMockStore();
    const store = mockStore({characters: {
        characters: [{mockCharacter}],
        currentCharacter: mockCharacter
    }});

    return (
        <Provider store={store}>
            {component}
        </Provider>
    );

}