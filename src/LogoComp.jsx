import React from 'react'

const LogoComp = (props) => {
  return (
    <div>
      <img src={props.logo} className={`App-logo${props.loading ? 'App-logo-spinning' : ''}`} alt='logo' />
      {console.log('props.loading', props.loading)}
    </div>
  )
}

export default LogoComp
