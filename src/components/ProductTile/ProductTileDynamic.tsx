import * as React from 'react';
import * as PropTypes from 'prop-types';
import { cnCreate } from '../../utils/cn';
import './style/ProductTileDynamic.less';
import ProductSwitcher from '../ProductSwitcher/ProductSwitcher';
import { IServicePack, ISwitcher } from './ProductTile';

interface IProductTileDynamicProps {
    /** Current pack */
    currentPack: Partial<IServicePack>;
    /** Switcher */
    switcher: ISwitcher;
    /** Change calls */
    onChangeCalls(e: React.SyntheticEvent<EventTarget>, value: string): false | void;
    /** Change Traffic */
    onChangeTraffic(e: React.SyntheticEvent<EventTarget>, value: string): false | void;
}

const cn = cnCreate('mfui-product-tile-dynamic');
class ProductTileDynamic extends React.Component<IProductTileDynamicProps, {}> {
    static propTypes = {
        currentPack: PropTypes.shape({
            calls: PropTypes.shape({
                value: PropTypes.number,
                unit: PropTypes.string,
            }),
            traffic: PropTypes.shape({
                value: PropTypes.number,
                unit: PropTypes.string,
            }),
        }),
        switcher: PropTypes.shape({
            calls: PropTypes.arrayOf(PropTypes.string),
            traffic: PropTypes.arrayOf(PropTypes.string),
        }),
        onChangeCalls: PropTypes.func,
        onChangeTraffic: PropTypes.func,
    };

    render() {
        const { currentPack, switcher, onChangeTraffic, onChangeCalls } = this.props;

        return (
            <div className={cn('')}>
                <div className={cn('constructor-pack')}>
                    {`${currentPack.calls!.value} ${currentPack.calls!.unit}`}
                </div>
                <ProductSwitcher
                    className={cn('constructor-range')}
                    theme="tariff-showcase"
                    items={switcher.calls.map(value => ({ title: value, value }))}
                    onChange={onChangeCalls}
                />
                <ProductSwitcher
                    className={cn('constructor-range')}
                    theme="tariff-showcase"
                    items={switcher.traffic.map(value => ({ title: value, value }))}
                    onChange={onChangeTraffic}
                />
                <div className={cn('constructor-pack')}>
                    {` ${currentPack.traffic!.value} ${currentPack.traffic!.unit}`}
                </div>
            </div>
        );
    }
}

export default ProductTileDynamic;
