import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BankPage from "./pages/BankPage";
import AdminPage from "./pages/AdminPage";
import DealsPage from "./pages/DealsPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import BankDashboard from "./components/Bank/BankDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import DealList from "./components/Deals/DealList";
import DealDetail from "./components/Deals/DealDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/bank" component={BankPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/deals" component={DealsPage} />
        <Route path="/deals/:id" component={DealDetail} />
      </Switch>
    </Router>
  );
}

export default App;
