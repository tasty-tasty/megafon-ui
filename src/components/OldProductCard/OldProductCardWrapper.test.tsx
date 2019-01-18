import * as React from 'react';
import { shallow } from 'enzyme';
import OldProductCardWrapper from './OldProductCardWrapper';

const props: {
    hint: {
        title: string;
        color: 'green' | 'orange' | 'black';
    };
} = {
    hint: { title: 'Рекоммендуем', color: 'green' },
};

describe('<OldProductCardWrapper />', () => {
    it('it renders OldProductCardWrapper', () => {
        const wrapper = shallow(<OldProductCardWrapper {...props}><div /></OldProductCardWrapper>);
        expect(wrapper).toMatchSnapshot();
    });

    it('it renders without hint', () => {
        const wrapper = shallow(<OldProductCardWrapper border={{ right: false }}><div /></OldProductCardWrapper>);
        expect(wrapper).toMatchSnapshot();
    });

    it('it click on wrapper', () => {
        const wrapper = shallow(<OldProductCardWrapper border={{ right: false }}><div /></OldProductCardWrapper>);
        const instance = wrapper.instance() as OldProductCardWrapper;
        const result = instance.handleClick({ target: {} } as React.SyntheticEvent<EventTarget>);
        expect(result).toBe(true);
    });
});
