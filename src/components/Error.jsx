import React from 'react'

function Error({className,msg}) {
  return (
    <div className={className}>{msg}</div>
  )
}

export default Error