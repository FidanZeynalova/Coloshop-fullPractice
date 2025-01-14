import React from 'react'
import { Helmet } from 'react-helmet'

function NotPage() {
  return (
 <>
    <Helmet>
    <link rel="icon" type="image/svg+xml" href="https://is.gd/Dqbe0e" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>NotFound Page</title>
    </Helmet>
    <div className='NotFound'>
     <h1>Error!😔</h1>
    </div>
 </>
  )
}

export default NotPage
