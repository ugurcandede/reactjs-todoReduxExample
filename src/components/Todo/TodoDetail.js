import React from "react";
import { Col, Row, Button, Form, FormGroup } from "reactstrap";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import { useSelector } from "react-redux";

const TodoDetail = ({ todo, categories, onSave, onChange, errors }) => {
  const theme = useSelector((state) => state.themeReducer);
  return (
    <Form
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.primaryTextColor,
      }}
      onSubmit={onSave}
    >
      <h4>{todo.id ? "Update Todo" : "Add Todo"}</h4>
      <Row>
        <Col md={6}>
          <FormGroup>
            <TextInput
              name="todoName"
              label="Todo Name"
              type="text"
              value={todo.todoName}
              onChange={onChange}
              error={errors.todoName}
            />
          </FormGroup>
          <SelectInput
            name="categoryId"
            label="Category"
            value={todo.categoryId || ""}
            defaultOption="Choose a Category in Below"
            options={categories.map((category) => ({
              value: category.id,
              text: category.categoryName,
            }))}
            onChange={onChange}
            error={errors.categoryId}
          />
        </Col>
        <Col md={6}>
          <FormGroup>
            <TextInput
              name="todoDate"
              label="Date"
              type="date"
              value={todo.todoDate}
              onChange={onChange}
              error={errors.todoDate}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup row>
        <Col>
          <TextInput
            name="todoDesc"
            label="Description"
            type="textarea"
            value={todo.todoDesc}
            onChange={onChange}
            error={errors.todoDesc}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Button
          style={{
            color: theme.primaryButtonTextColor,
            backgroundColor: theme.primaryButtonColor,
            border: "none",
          }}
          type="submit"
          onClick={onSave}
        >
          Save!
        </Button>
      </FormGroup>
    </Form>
  );
};

export default TodoDetail;
