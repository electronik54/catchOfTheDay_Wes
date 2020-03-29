import React from 'react';

class AddFishForm extends React.Component {

    textRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    creatFish = (evt) => {
        evt.preventDefault();

        const fish = {
            textRef: this.textRef.current.value,
            priceRef: parseFloat(this.priceRef.current.value),
            statusRef: this.statusRef.current.value,
            descRef: this.descRef.current.value,
            imageRef: this.priceRef.current.value
        }
        this.props.addFish(fish);
    }

    render() {

        return (
            <form className="fish-edit" onSubmit={this.creatFish}>

                <input type="text" ref={this.textRef} name="name" placeholder="Name" />
                <input type="price" ref={this.priceRef} name="price" placeholder="Price" />

                <select name="status" ref={this.statusRef} >
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
                <input type="text" ref={this.imageRef} name="image" placeholder="Image" />
                <button type="submit">ADD FISH</button>

            </form>
        );
    }

}

export default AddFishForm;