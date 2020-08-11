import React, { Component } from 'react'
import { ListGroup, ListGroupItem, } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions'
import * as todoActions from '../../redux/actions/todoActions'

class CategoryList extends Component {

    componentDidMount() {
        this.props.actions.getCategories()
    }
    selectCategory = (cat) => {
        this.props.actions.changeCategory(cat)
        this.props.actions.getTodos(cat.id)
    }


    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem onClick={() => this.props.actions.getTodos()}>
                        All Categories
                    </ListGroupItem>
                    {
                        this.props.categories.map(c => (
                            <ListGroupItem
                                key={c.id}
                                className="justify-content-between"
                                active={c.id === this.props.currentCategory.id}
                                onClick={() => this.selectCategory(c)}
                            >{c.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    categories: state.categoryListReducer,
    currentCategory: state.changeCategoryReducer,

});
const mapDispatchToProps = (dispatch) => ({
    actions: {
        getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
        changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),

        getTodos: bindActionCreators(todoActions.getTodos, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)