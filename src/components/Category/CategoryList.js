/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as todoActions from "../../redux/actions/todoActions";
import { useSelector } from "react-redux";

function CategoryList(props) {
  const theme = useSelector((state) => state.themeReducer);

  const selectCategory = (cat) => {
    props.actions.changeCategory(cat);
    props.actions.getTodos(cat.id);
  };

  useEffect(() => {
    props.actions.getCategories();
  }, []);

  return (
    <div>
      <ListGroup>
        <ListGroupItem
          style={{
            backgroundColor: theme.primaryButtonColor,
            color: theme.primaryButtonTextColor,
          }}
          onClick={() => props.actions.getTodos()}
        >
          All Categories
        </ListGroupItem>
        {props.categories.map((c) => (
          <ListGroupItem
            style={{
              backgroundColor: theme.primaryButtonColor,
              color: theme.primaryButtonTextColor,
            }}
            key={c.id}
            className="justify-content-between"
            active={c.id === props.currentCategory.id}
            onClick={() => selectCategory(c)}
          >
            {c.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categoryListReducer,
  currentCategory: state.changeCategoryReducer,
});
const mapDispatchToProps = (dispatch) => ({
  actions: {
    getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
    changeCategory: bindActionCreators(
      categoryActions.changeCategory,
      dispatch
    ),

    getTodos: bindActionCreators(todoActions.getTodos, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
