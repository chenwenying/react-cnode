import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestApi from '../views/test/api-test'

export default () => (
  <Switch>
    <Route path="/" render={() => <Redirect to="/list" />} exact />
    <Route path="/list" component={TopicList} />
    <Route path="/detail" component={TopicDetail} />
    <Route path="/test" component={TestApi} />
  </Switch>
)
