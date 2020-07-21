import React from 'react'
import classes from './button.module.scss'

export default function Button(props) {
    return (
    <button type="button" className={classes.btnDefault}>{props.name}</button>
    )
}
