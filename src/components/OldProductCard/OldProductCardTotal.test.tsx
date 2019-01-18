import * as React from 'react';
import { shallow } from 'enzyme';
import OldProductCardTotal from './OldProductCardTotal';

const props = {
    payment: {
        value: '600 ₽',
        oldValue: '750 ₽',
        unit: 'в месяц',
    },
};

describe('<OldProductCardTotal />', () => {
    it('it renders OldProductCardTotal', () => {
        const wrapper = shallow(<OldProductCardTotal {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<OldProductCardTotal />', () => {
    it('it handle handleSubmit prop', () => {
        const handleSubmit = jest.fn();
        const wrapper = shallow(<OldProductCardTotal {...props} onSubmit={handleSubmit} />);

        wrapper.find('.old-product-card-total__button').simulate('click', {} as React.SyntheticEvent);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});
