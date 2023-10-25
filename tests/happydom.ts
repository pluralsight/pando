import { GlobalRegistrator } from '@happy-dom/global-registrator'
import { afterEach } from 'bun:test'
// eslint-disable-next-line testing-library/no-manual-cleanup
import { cleanup } from '@testing-library/react'

GlobalRegistrator.register()

afterEach(cleanup)
