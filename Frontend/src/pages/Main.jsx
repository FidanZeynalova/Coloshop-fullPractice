import React from 'react'
import Home from '../companents/Home'
import Feature from '../companents/Feature'
import Products from '../companents/Products'
import Deal from '../companents/Deal'
import Blog from '../companents/Blog'
import { Helmet } from 'react-helmet'


function Main() {
  return (
    <div>
      <Helmet>
    <link rel="icon" type="image/svg+xml" href="https://is.gd/qIi3mo" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Coloshop Page</title>
    </Helmet>
      <Home/>
      <Feature/>
      <Products/>
      <Deal/>
      <Blog/>
    </div>
  )
}

export default Main
