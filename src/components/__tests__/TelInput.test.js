/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-eval, no-restricted-properties */
import { mount } from 'enzyme'
import React from 'react'
import FlagDropDown from '../FlagDropDown'
import IntlTelInput from '../IntlTelInput'
import TelInput from '../TelInput'

// eslint-disable-next-line func-names
describe('TelInput', function () {
  let params
  let makeSubject

  beforeEach(() => {
    jest.resetModules()

    document.body.innerHTML = '<div id="root"></div>'

    params = {
      containerClassName: 'intl-tel-input',
      inputClassName: 'form-control phoneNumber',
      fieldName: 'telephone',
      fieldId: 'telephone-id',
      defaultCountry: 'tw',
      defaultValue: '0999 123 456',
    }
    makeSubject = () => {
      return mount(<IntlTelInput {...params} />, {
        attachTo: document.querySelector('#root'),
      })
    }
  })

  it('should set fieldName as "telephone"', () => {
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    expect(inputComponent.props().fieldName).toBe('telephone')
  })

  it('should set fieldId as "telephone-id"', () => {
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    expect(inputComponent.props().fieldId).toBe('telephone-id')
  })

  it('onPhoneNumberChange without libphonenumber', () => {
    let expected = ''
    const onPhoneNumberChange = (
      isValid,
      newNumber,
      countryData,
      fullNumber,
      ext,
    ) => {
      expected = `${isValid},${newNumber},${countryData.iso2},${fullNumber},${ext}`
    }

    window.intlTelInputUtils = undefined

    params.onPhoneNumberChange = onPhoneNumberChange
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('change', { target: { value: '+886911222333' } })
    expect(expected).toBe('false,+886911222333,tw,+886911222333,')
  })

  it('should set value as "0999 123 456"', async () => {
    const subject = await makeSubject()
    const inputComponent = subject.find(TelInput)

    expect(inputComponent.props().value).toBe('0999 123 456')
  })

  it('should set className', () => {
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    expect(inputComponent.find('.form-control.phoneNumber').length).toBeTruthy()
  })

  it('should not focused on render', () => {
    const initialSelectFlag = IntlTelInput.prototype.selectFlag

    let focused = false

    IntlTelInput.prototype.selectFlag = function selectFlag(
      countryCode,
      setFocus = true,
    ) {
      focused = focused || setFocus
      initialSelectFlag.call(this, countryCode, setFocus)
    }

    params = {
      ...params,
      value: '+886901234567',
      preferredCountries: ['kr', 'jp', 'tw'],
    }
    makeSubject()

    IntlTelInput.prototype.selectFlag = initialSelectFlag
    expect(focused).toBeFalsy()
  })

  it('should has "kr" in preferred countries state', () => {
    params = {
      ...params,
      defaultCountry: 'zz',
      preferredCountries: ['kr', 'jp', 'tw'],
    }
    const subject = makeSubject()

    expect(subject.state().countryCode).toBe('kr')
  })

  it('should set countryCode as "af" in state, when giving an invalid default country', () => {
    params = {
      ...params,
      preferredCountries: [],
      defaultValue: '',
      defaultCountry: 'zz',
    }
    const subject = makeSubject()

    expect(subject.state().countryCode).toBe('af')
  })

  it('getNumber without libphonenumber', () => {
    window.intlTelInputUtils = undefined

    params = {
      ...params,
    }
    const subject = makeSubject()

    expect(subject.instance().getNumber(1)).toBe('')
  })

  it('setNumber', () => {
    const subject = makeSubject()

    subject.instance().setNumber('+810258310015')
    expect(subject.state().countryCode).toBe('jp')
  })

  it('handleKeyUp', () => {
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('focus')
    inputComponent.simulate('keyDown', { keyCode: 35 })
    inputComponent.simulate('keyUp', {
      key: 'Backspace',
      keyCode: 8,
      which: 8,
    })
    inputComponent.simulate('change', {
      target: { value: '0999 123 45' },
    })

    const changedInputComponent = subject.find(TelInput)

    expect(changedInputComponent.props().value).toBe('0999 123 45')
  })

  it('ensurePlus', () => {
    params = {
      ...params,
      nationalMode: false,
      defaultValue: '+886999111222345',
    }
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('focus')
    inputComponent.simulate('keyDown', { keyCode: 35 })
    const bspaceKey = {
      key: 'Backspace',
      keyCode: 8,
      which: 8,
    }

    inputComponent.simulate('keyUp', bspaceKey)
    inputComponent.simulate('keyUp', bspaceKey)
    inputComponent.simulate('keyUp', bspaceKey)
    inputComponent.simulate('change', {
      target: { value: '+886 999 111 222' },
    })
    expect(subject.state().value).toBe('+886 999 111 222')
  })

  it('Disabled nationalMode and input phone number', () => {
    params.nationalMode = false
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('change', { target: { value: '+886901234567' } })

    const changedInputComponent = subject.find(TelInput)

    expect(changedInputComponent.props().value).toBe('+886901234567')
  })

  it('utils loaded', () => {
    makeSubject()

    expect(typeof window.intlTelInputUtils === 'object')
    expect(typeof window.intlTelInputUtils.isValidNumber === 'function')
  })

  it('onPhoneNumberChange', () => {
    let expected = ''
    const onPhoneNumberChange = (
      isValid,
      newNumber,
      countryData,
      fullNumber,
      ext,
    ) => {
      expected = `${isValid},${newNumber},${countryData.iso2},${fullNumber},${ext}`
    }

    params.onPhoneNumberChange = onPhoneNumberChange
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('change', { target: { value: '+886911222333' } })
    expect(expected).toBe('true,+886911222333,tw,+886 911 222 333,null')
  })

  it('Blur and cleaning the empty dialcode', () => {
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('change', { target: { value: '+886' } })
    subject.instance().handleOnBlur()
    expect(subject.state().value).toBe('')
  })

  const testOnPhoneNumberEvent = ({ property, eventType }) =>
    it(`${property}`, () => {
      let expected = ''
      const onPhoneNumberEvent = (
        isValid,
        newNumber,
        countryData,
        fullNumber,
        ext,
        event,
      ) => {
        const { type } = event

        expected = `${isValid},${newNumber},${countryData.iso2},${fullNumber},${ext},${type}`
      }

      params[property] = onPhoneNumberEvent
      const subject = makeSubject()
      const inputComponent = subject.find(TelInput)

      inputComponent.simulate('change', { target: { value: '+886911222333' } })
      inputComponent.simulate(eventType)
      expect(expected).toBe(
        `true,+886911222333,tw,+886 911 222 333,null,${eventType}`,
      )
    })

  ;[
    { property: 'onPhoneNumberBlur', eventType: 'blur' },
    { property: 'onPhoneNumberFocus', eventType: 'focus' },
  ].forEach(testOnPhoneNumberEvent)

  it('should has empty value with false nationalMode, false autoHideDialCode and false separateDialCode', () => {
    params = {
      ...params,
      defaultValue: '',
      nationalMode: false,
      autoHideDialCode: false,
      separateDialCode: false,
    }
    const subject = makeSubject()

    expect(subject.state().value).toBe('+886')
  })

  it('updateFlagFromNumber', () => {
    params = {
      defaultCountry: 'us',
      nationalMode: true,
    }
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('change', { target: { value: '9183319436' } })
    expect(subject.state().countryCode).toBe('us')

    inputComponent.simulate('change', { target: { value: '+' } })
    expect(subject.state().countryCode).toBe('us')
  })

  it('isValidNumber', () => {
    const subject = makeSubject()

    expect(subject.instance().isValidNumber('0910123456')).toBeTruthy()
    expect(subject.instance().isValidNumber('091012345')).toBeFalsy()
  })

  it('getFullNumber', () => {
    params = {
      ...params,
      separateDialCode: true,
    }
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    inputComponent.simulate('change', { target: { value: '910123456' } })
    expect(subject.instance().getFullNumber(910123456)).toBe('+886910123456')
  })

  it('should render custom placeholder', () => {
    params.placeholder = 'foo'
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    expect(inputComponent.props().placeholder).toBe('foo')
  })

  // FIXME: Enzyme not support :focus in current time
  xit('should focus input when autoFocus set to true', () => {
    params.autoFocus = true
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    expect(inputComponent.is(':focus')).toBeTruthy()
  })

  it('should not focus input when autoFocus set to false', () => {
    params.autoFocus = false
    const subject = makeSubject()
    const inputComponent = subject.find(TelInput)

    expect(document.activeElement).not.toBe(inputComponent)
  })

  describe('when mobile useragent', () => {
    let defaultUserAgent

    beforeEach(() => {
      defaultUserAgent = navigator.userAgent
      window.navigator.__defineGetter__('userAgent', () => 'iPhone')
    })

    afterEach(() => {
      window.navigator.__defineGetter__('userAgent', () => defaultUserAgent)
    })

    it('sets FlagDropDown "dropdowncontainer" prop to "body"', () => {
      const subject = makeSubject()
      const flagDropdownComponent = subject.find(FlagDropDown)

      expect(flagDropdownComponent.props().dropdownContainer).toBe('body')
    })

    it('sets FlagDropDown "isMobile" prop to true', () => {
      const subject = makeSubject()
      const flagDropdownComponent = subject.find(FlagDropDown)

      expect(flagDropdownComponent.props().isMobile).toBeTruthy()
    })

    it('sets "iti-mobile" class to "body"', () => {
      expect(document.body.className).toBe('iti-mobile')
    })

    it(`does not set FlagDropDown "dropdowncontainer" to "body"
       when "useMobileFullscreenDropdown" set to false`, () => {
      params.useMobileFullscreenDropdown = false
      const subject = makeSubject()
      const flagDropdownComponent = subject.find(FlagDropDown)

      expect(flagDropdownComponent.props().dropdownContainer).toBe('')
    })
  })

  describe('controlled', () => {
    it('should set the value', () => {
      const subject = makeSubject()

      expect(subject.state().value).toBe('0999 123 456')
    })

    it('should not change input value if value is constrained by parent', () => {
      params.value = '0999 123 456'
      const subject = makeSubject()
      const inputComponent = subject.find(TelInput)

      inputComponent.simulate('change', { target: { value: '12345' } })
      expect(subject.state().value).toBe('0999 123 456')
    })

    it('should change input value on value prop change', () => {
      const subject = makeSubject()

      subject.setProps({ value: '+447598455159' })
      subject.update()

      expect(subject.find(FlagDropDown).props().highlightedCountry).toBe(1)

      subject.setProps({ value: '+1(201) 555-0129' })
      subject.update()

      expect(subject.find(FlagDropDown).props().highlightedCountry).toBe(0)
    })

    it('should update country flag when value updates', () => {
      const subject = makeSubject()

      subject.setProps({ value: 'foo bar' })
      subject.update()

      expect(subject.find(TelInput).props().value).toBe('foo bar')
    })

    it('should be able to delete country code after input field has been populated with number', () => {
      const subject = makeSubject()

      subject.setProps({ value: '+447598455159' })

      subject.setProps({ value: '+' })

      expect(subject.state().value).toBe('+')
    })

    it('should change input placeholder on placeholder prop change', () => {
      const subject = makeSubject()

      subject.setProps({ placeholder: 'Phone number' })
      subject.update()

      expect(subject.find(TelInput).props().placeholder).toBe('Phone number')

      subject.setProps({ placeholder: 'Your phone' })
      subject.update()

      expect(subject.find(TelInput).props().placeholder).toBe('Your phone')
    })

    it('should change input placeholder on customPlaceholder prop change', () => {
      const subject = makeSubject()

      subject.setProps({ customPlaceholder: () => 'Phone number' })
      subject.update()

      expect(subject.find(TelInput).props().placeholder).toBe('Phone number')

      subject.setProps({ customPlaceholder: () => 'Your phone' })
      subject.update()

      expect(subject.find(TelInput).props().placeholder).toBe('Your phone')
    })

    it('should set "expanded" class to wrapper only when flags are open', () => {
      const subject = makeSubject()
      const flagComponent = subject
        .find(FlagDropDown)
        .find('.selected-flag')
        .last()

      flagComponent.simulate('click')
      expect(subject.instance().wrapperClass.expanded).toBe(true)

      const taiwanOption = subject
        .find(FlagDropDown)
        .find('[data-country-code="tw"]')

      taiwanOption.simulate('click')
      expect(subject.instance().wrapperClass.expanded).toBe(false)
    })
  })

  describe('uncontrolled', () => {
    it('should initialize state with defaultValue', () => {
      params.defaultValue = '54321'
      const subject = makeSubject()
      const inputComponent = subject.find(TelInput)

      expect(inputComponent.props().value).toBe('54321')
      expect(subject.state().value).toBe('54321')
    })

    it('should change value', () => {
      params.defaultValue = ''
      const subject = makeSubject()
      const inputComponent = subject.find(TelInput)

      inputComponent.simulate('change', { target: { value: '12345' } })

      const changedInputComponent = subject.find(TelInput)

      expect(changedInputComponent.props().value).toBe('12345')
      expect(subject.state().value).toBe('12345')
    })

    it('should change props value', () => {
      const subject = makeSubject()

      subject.setState({
        value: '+886912345678',
      })

      const changedInputComponent = subject.find(TelInput)

      expect(changedInputComponent.props().value).toBe('+886912345678')
    })
  })
})
