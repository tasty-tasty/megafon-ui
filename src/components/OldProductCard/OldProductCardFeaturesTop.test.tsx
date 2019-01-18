import * as React from 'react';
import { shallow } from 'enzyme';
import OldProductCardFeaturesTop from './OldProductCardFeaturesTop';
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
    socialIcons: [{
        svgIcon: <Checked />,
        title: 'test',
    }],
};

describe('<OldProductCardFeaturesTop />', () => {
    it('it renders OldProductCardFeaturesTop', () => {
        const wrapper = shallow(<OldProductCardFeaturesTop {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
