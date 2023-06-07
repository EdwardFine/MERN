import React from 'react'

const StyledMain = {
    flex:'4',
    background: '#e06666',
    margin:'20px 0 0 0',
    padding: '20px',
}

const Main = (props) => {
  return (
    <div style={StyledMain}>{props.children}</div>
  )
}

export default Main