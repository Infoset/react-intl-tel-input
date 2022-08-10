import '@babel/polyfill'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'
import { JSDOM } from 'jsdom'
import sinon from 'sinon'
import { TextDecoder, TextEncoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

Enzyme.configure({ adapter: new Adapter() })

// Define some html to be our basic document
// JSDOM will consume this and act as if we were in a browser
const DEFAULT_HTML = '<!doctype html><html><body></body></html>'

// Define some variables to make it look like we're a browser
// First, use JSDOM's fake DOM as the document
const dom = new JSDOM(DEFAULT_HTML)
global.document = dom.window.document

// Set up a mock window
global.window = dom.window

// Allow for things like window.location
global.navigator = dom.navigator

global.XMLHttpRequest = sinon.useFakeXMLHttpRequest()

// global.window.localStorage = new LocalStorageMock()
// global.window.__SERVER__ = false
// global.window.__DEVELOPMENT__ = false
