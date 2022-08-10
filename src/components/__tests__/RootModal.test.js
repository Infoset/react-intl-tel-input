import { mount } from 'enzyme'
import React from 'react'
import RootModal from '../RootModal'

// eslint-disable-next-line func-names
describe('RootModal', function () {
  let getRootElement
  let makeSubject

  beforeEach(() => {
    jest.resetModules()

    const rootElement = document.createElement('div')
    document.body.appendChild(rootElement)

    getRootElement = () => {
      return rootElement
    }

    makeSubject = () => {
      return mount(
        <RootModal>
          <div className="content">foo</div>
        </RootModal>,
        {
          attachTo: rootElement,
        },
      )
    }
  })

  it('should has a div.content tag', () => {
    const subject = makeSubject()

    expect(subject.find('div.content').length).toBeTruthy()
  })

  it('should has parent element which has specific className', () => {
    const subject = makeSubject()

    expect(subject.instance().modalTarget.classList[0]).toBe('intl-tel-input')
    expect(subject.instance().modalTarget.classList[1]).toBe('iti-container')
  })

  it('should has a modalTarget in body', () => {
    const subject = makeSubject()

    subject.setState({
      foo: 'foo',
    })
    expect(subject.instance().modalTarget.classList[0]).toBe('intl-tel-input')
    expect(subject.instance().modalTarget.classList[1]).toBe('iti-container')
  })

  it('should not has a modalTarget in body', () => {
    const subject = makeSubject()

    subject.unmount()
    expect(getRootElement().querySelector('.iti-container')).toBeNull()
  })
})
