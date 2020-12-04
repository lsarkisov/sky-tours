import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter, Route } from 'react-router-dom'
import { act, isDOMComponent } from 'react-dom/test-utils'
import { SkyPage } from 'lib'

let container, testHistory, testLocation

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)

  act(() => {
    act(() => {
      ReactDOM.render(
        <MemoryRouter initialEntries={['/some/path']}>
          <SkyPage />
          <Route
            path="*"
            render={({ history, location }) => {
              testHistory = history
              testLocation = location
              return null
            }}
          />
        </MemoryRouter>,
        container,
      )
    })
  })
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})


it('has a class page', () => {
  const pageClass = document.body.querySelector('.page')
  expect(isDOMComponent(pageClass)).toBe(true)
})

it('has header as a child', () => {
  const hasNavbar = document.body.querySelector('.navbar')
  expect(isDOMComponent(hasNavbar)).toBe(true)
})
