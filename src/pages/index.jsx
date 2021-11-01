import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Hero from './Hero'
import HeroDetail from './HeroDetail'
import Home from './Home'
import GTA from './GTA'
import Dota from './Dota'

import View from '../layout/View'



const RouterApp = () => {
  return (
    <BrowserRouter>
      <View>
        <Switch>
          <Route path="/hero/:id">
            <HeroDetail />
          </Route>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/GTA">
            <GTA />
          </Route>
          <Route path="/Dota">
            <Dota />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </View>
    </BrowserRouter>
  )
}

export default RouterApp
