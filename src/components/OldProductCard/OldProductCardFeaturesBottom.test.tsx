import * as React from 'react';
import { shallow } from 'enzyme';
import OldProductCardFeaturesBottom from './OldProductCardFeaturesBottom';
import Checked from 'icons/checked_24.svg';

const props = {
    title: 'test',
    params: [
        {
            svgIcon: <Checked />,
            title: 'test',
            caption: 'test',
            value: 'test',
        },
    ],
};

describe('<OldProductCardFeaturesBottom />', () => {
    it('it renders OldProductCardFeaturesBottom', () => {
        const wrapper = shallow(<OldProductCardFeaturesBottom {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
