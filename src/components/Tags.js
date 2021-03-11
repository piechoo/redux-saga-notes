import React, {Component} from 'react';
import './Tag.scss'

class Tags extends Component {

    constructor(props) {
        super(props);
        this.state ={
            tags : []
        }
    }

    split = () => {
        let splited = this.props.tags.split(',');
        this.setState({
            tags: splited
        });
    }

    componentDidMount() {
        this.split();
    }
    render() {
        return (
            <div className='tagContainer'>
                {this.state.tags.map((tag) => (
                    <div key={tag} className='tagContainer__tag'>{tag}</div>
                ))}
            </div>
        );
    }
}

export default Tags;