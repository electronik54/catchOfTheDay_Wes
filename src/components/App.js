import React from 'react';
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base' 

class App extends React.Component {

    state = {
        fishes: {}
        , order: {}
    }

    componentDidMount() {

        // this.ref is not the same as this.refs ise for referencing inputs
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {context: this, state: "fishes"});
    }

    //unlisten to changes to DB
    componentWillUnmount() {
        base.remove(this.ref);
    }

    addFish = (fish) => {
        console.log("adding Fish", fish);
        const fishes = { ...this.state.fishes };
        fishes[Date.now()] = fish;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={`Welcome to store -store name here-`}></Header>

                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            ></Fish>
                        )}
                    </ul>

                </div>
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                ></Order>
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                ></Inventory>
            </div>
        )
    }
}

export default App;