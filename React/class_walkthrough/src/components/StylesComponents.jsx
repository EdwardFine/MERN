import React from 'react'
//1. Direct Import
import '../css/styles.css'
//3. CSS Module
import styles from './StylesComponents.module.css'

const StylesComponent = () => {

  const inlineStyle2= {
    backgroundColor:'navy',
    color:'white'
  }

  return (
    <div>
        <h1>Styles Components</h1>
        <p className='directImport'>1. Direct Import</p>
        <p style={{backgroundColor:'orange', color:'white'}}>2.1 Inline Style</p>
        <p style={inlineStyle2}>2.2 Inline Style</p>
        <p className={styles.cssmodule}>3. CSS Module</p>
    </div>
  )
}

export default StylesComponent