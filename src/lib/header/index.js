import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SkyHeader(props) {
  return (
    <Navbar className="navbar navbar-dark bg-dark shadow-sm logo">
      <Link to="/">Sky Tours</Link>
    </Navbar>
  )
}
