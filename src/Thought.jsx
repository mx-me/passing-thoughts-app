import React, { useEffect } from 'react'

export function Thought(props) {
  const { thought, removeThought } = props
  const timeRemaining = thought.expiresAt - Date.now()

  const handleRemoveClick = () => {
    removeThought(thought.id)
  }

  useEffect(() => {
    setTimeout(() => {
      props.removeThought(thought.id)
    }, timeRemaining)
  }, [props, thought, timeRemaining])

  return (
    <li className='Thought'>
      <button
        aria-label='Remove thought'
        className='remove-button'
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className='text'>{thought.text}</div>
    </li>
  )
}
