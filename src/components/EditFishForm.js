import React from 'react';

class EditFishForm extends React.Component {

    handleChange = (evt) => {
        const updatedFish = {
            ...this.props.fish,
            [evt.target.name]: evt.target.value
        }
        this.props.updateFish(this.props.index, updatedFish);
    }

    render() {
        return (


            <div className="fish-edit">

                <input type="text" name="name" onChange={this.handleChange} placeholder="Name" value={this.props.fish.name} />
                <input type="price" name="price" onChange={this.handleChange} placeholder="Price" value={this.props.fish.price} />

                <select name="status" onChange={this.handleChange} value={this.props.fish.status} >
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>

                <textarea name="desc" onChange={this.handleChange} placeholder="Desc" value={this.props.fish.desc} ></textarea>
                <input type="text" name="image" onChange={this.handleChange} placeholder="Image" value={this.props.fish.image} />

            </div>




        )
    }

}

export default EditFishForm;