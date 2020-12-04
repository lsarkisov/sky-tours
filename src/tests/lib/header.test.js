import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, click } from 'react-router-dom'
import { SkyHeader } from 'lib'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('Render and check SkyHeader', () => {
  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={['/person']}>
        <SkyHeader />
      </MemoryRouter>,
      container,
    )
  })

  const nav = document.querySelector('a')
  expect(nav.textContent).toBe('Sky Tours')

})
