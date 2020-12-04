import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Card, Alert } from 'react-bootstrap'
import { SkyPage } from 'lib'

export default function Person(props) {
  const { info } = useSelector((state) => state.person)
  return (
    <SkyPage>
      <Container className="p-0 person">
        {!info && <Alert variant="danger">No person's info exists</Alert>}
        {info && (
          <Card>
            <dl>
              <dt>
                <b>name</b> {info.name}
              </dt>
              <dd>
                <b>height</b> {info.height}
              </dd>
              <dd>
                <b>mass</b> {info.mass}
              </dd>
              <dd>
                <b>hair_color</b> {info.hair_color}
              </dd>
              <dd>
                <b>skin_color</b> {info.skin_color}
              </dd>
              <dd>
                <b>eye_color</b> {info.eye_color}
              </dd>
              <dd>
                <b>birth_year</b> {info.birth_year}
              </dd>
              <dd>
                <b>gender</b> {info.gender}
              </dd>
            </dl>
          </Card>
        )}
      </Container>
    </SkyPage>
  )
}
