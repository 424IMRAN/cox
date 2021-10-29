import {render,fireEvent,screen, queryByPlaceholderText} from '@testing-library/react';
import SearchAppBar from './index'

describe('Searchbar test',()=>{
    const handleChange=jest.fn();
    const component=(<SearchAppBar  />);

    it('Should match the snapshot',()=>{
        const {container}=render(component);
        expect(container.firstChild).toMatchSnapshot();
    });

})