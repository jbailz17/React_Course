import React from 'react';
import { Route, Switch } from 'react-router-dom';

import css from './App.module.css';
import Layout from '../../components/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../checkout/checkout';
import Orders from '../Orders/Orders';

function App() {
  return (
    <div className={css.App}>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/" component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
