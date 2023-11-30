import React from 'react'

export default function Button(props) {
  return (
    <>
      <button type='button' className={`${props.class}`}>{props.text}</button>
    </>
  )
}
