import { jest } from '@jest/globals'

async function moduleMock(module: string, mockedFns: Record<string, unknown>) {
  const mockModule = await import(module)

  return jest.unstable_mockModule(module, () => ({
    ...mockModule,
    ...mockedFns,
  }))
}

export default moduleMock
