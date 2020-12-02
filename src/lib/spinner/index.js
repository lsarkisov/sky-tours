import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function SkySpinner(props) {
  return (
    <div className="sky-spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}
