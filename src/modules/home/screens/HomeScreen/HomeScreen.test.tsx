import { HomeScreen } from "./HomeScreen";
import { render } from '@testing-library/react';

const setup = () => render(<HomeScreen/>);

describe('HomeScreen', () => {

    beforeEach(() => setup);

    test('Should render component', () => {
        expect(screen).toBeTruthy();
    });
});