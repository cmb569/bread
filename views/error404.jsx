const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
      <img src="/images/error-cat.jpg" alt="error cat" height="100px" width="100px"/>
      </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404