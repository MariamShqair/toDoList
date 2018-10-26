import React, { Component } from 'react';
import '../style.css';

class ShowList extends Component {

    render() {
        //  console.log(this.props.itemsmar);
        return (
            <ul className="list-group">
                {
                    this.props.items.map(item => <li className="list-group-item" key={item.id}>
                        <div className="titleStyle marginlistElement">
                            <span className={{ fontsize: 15 }} style={{ textDecorationLine: this.props.titleStyle(item.checked) }}>{item.title}</span>
                        </div>
                        <div className="checkedChange marginlistElement">


                            <input
                                className="form-check-input "
                                name="done"
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => this.props.handleCheckBoxChange(item)} />
                            <span>is Done ?</span>
                        </div>

                        <div className="deleteItem marginlistElement">
                            <button className="btn btn-outline-secondary"
                                type="submit"
                                id="button-addon1" onClick={() => this.props.handleDelete(item.id)}>Delete</button>

                        </div>



                    </li>)}
            </ul>
        );
    }
}

export default ShowList;