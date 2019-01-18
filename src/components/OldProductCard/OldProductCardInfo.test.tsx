import * as React from 'react';
import { shallow } from 'enzyme';
import OldProductCardInfo from './OldProductCardInfo';
import Checked from 'icons/checked_24.svg';

const props = {
    title: 'Включайся!',
    link: 'https://www.google.com/',
    description: 'Амедиатека',
    descriptionIcon: <Checked style={{ width: '40px', height: '40px' }} />,
    additionalParams: [
        {
            value: '300',
            unit: 'минут',
            title: 'Звонки на все номера России',
        }, {
            value: '300',
            unit: 'SMS',
            title: 'SMS на номера Домашнего региона',
        }, {
            value: '4',
            unit: 'ГБ',
            title: 'На любые сервисы',
        },
    ],
    badges: [{
        title: 'title',
        code: 'code',
        hint: 'hint',
    },
    {
        title: 'title',
        code: 'code',
    }],
};

describe('<OldProductCardInfo />', () => {
    it('it renders OldProductCardInfo', () => {
        const wrapper = shallow(<OldProductCardInfo {...props}><div /></OldProductCardInfo>);
        expect(wrapper).toMatchSnapshot();
    });
});
