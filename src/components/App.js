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

        //update order with local storage w.r.t the the dtore name
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) })
        }

        // this.ref is not the same as this.refs ise for referencing inputs. store reference to DB to unlisten when we leave the app
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, { context: this, state: "fishes" });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
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

    updateFish = (key, updatedFish) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = updatedFish;
        this.setState({ fishes });
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
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                ></Inventory>
            </div>
        )
    }
}

export default App;