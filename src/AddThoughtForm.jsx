import React, { useState } from 'react'
import { generateId, getNewExpirationTime } from './utilities'

export function AddThoughtForm(props) {
  const [text, setText] = useState('')

  const handleTextChange = (evt) => {
    setText(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (text.length > 0) {
      const newThoughObject = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      }

      props.addThought(newThoughObject)

      setText('')
    }
  }

  return (
    <form className='AddThoughtForm' onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        value={text}
        type='text'
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type='submit' />
    </form>
  )
}
