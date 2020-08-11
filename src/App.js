import React from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import AddOrUpdateTodo from './components/Todo/AddOrUpdateTodo';
import NotFound from './Route/NotFound';

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/todos" component={Dashboard} />
        <Route path="/savetodo/:todoId" component={AddOrUpdateTodo} />
        <Route path="/savetodo" component={AddOrUpdateTodo} />
        <Route component={NotFound} />
      </Switch>

    </Container>
  );
}

export default App;
