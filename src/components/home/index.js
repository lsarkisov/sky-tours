import React from 'react'
import { Container } from 'react-bootstrap'
import { SkyPage } from 'lib'
import People from 'components/people'

export default function Home(props) {
  return (
    <SkyPage>
      <Container fluid className="home">
        <People />
      </Container>
    </SkyPage>
  )
}
