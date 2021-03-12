import React, {PureComponent} from 'react';
import './Tag.scss'
import PropTypes from "prop-types";

class Tags extends PureComponent {

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

Tags.propTypes = {
    tags: PropTypes.string,
}
Tags.defaultProps = {
    tags: 'tagi,domyślnej, notatki',
};

export default Tags;