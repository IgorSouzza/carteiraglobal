import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'

function createWrapperAndAppendToBody (wrapperId) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

export default function Portal ({ children, wrapperId = 'portal-wrapper' }) {
  const [wrapperElement, setWrapperElement] = useState(null)

  useEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false

    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }

    setWrapperElement(element)

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}
