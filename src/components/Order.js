import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

    renderOrder = key => {
        const fish = this.props.fishes[key];

        //check is fish exists in fishes
        if (!fish) return <li key={key}>#20200329.1417</li>
        
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';

        if (!isAvailable)
            return <li key={key}>Sorry, {fish.name} is sold out </li>
        return <li key={key}>{count} lbs: {fish.name}{formatPrice(count * fish.price)} </li>

    }

    render() {

        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];

            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;


        }, 0);

        return (
            <div className="order-wrap">

                <h2>Order Comp</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>

                <div className="total">
                    TOTAL:
                    <strong>{formatPrice(total)}</strong>
                </div>

            </div>

        );
    }

}

export default Order; 