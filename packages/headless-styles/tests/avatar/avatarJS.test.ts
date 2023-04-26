import {
  psBackground,
  psActionBackground,
} from '@pluralsight/design-tokens/meta/cssProperties'
import { getJSAvatarProps } from '../../src'

describe('Avatar JS', () => {
  const defaultOptions = {
    label: '',
    src: '',
  }

  test('should allow no props to be passed in', () => {
    const props = getJSAvatarProps()
    expect(props.wrapper.cssProps).toContain('border-radius: 50%')
    expect(props.wrapper.styles.borderRadius).toEqual('50%')
    expect(props.image.cssProps).toContain('position: absolute')
    expect(props.image.styles.position).toEqual('absolute')
  })

  test('should accept a default sentiment type', () => {
    const bg = psBackground
    const defaultProps = getJSAvatarProps({
      sentiment: 'default',
    })
    expect(defaultProps.wrapper.cssProps).toContain(`background-color: ${bg}`)
    expect(defaultProps.wrapper.styles.backgroundColor).toEqual(bg)
  })

  test('should accept a action sentiment type', () => {
    const bg = psActionBackground
    const actionProps = getJSAvatarProps({
      ...defaultOptions,
      sentiment: 'action',
    })
    expect(actionProps.wrapper.cssProps).toContain(`background-color: ${bg}`)
    expect(actionProps.wrapper.styles.backgroundColor).toEqual(bg)
  })

  test('should accept an xs size type', () => {
    const xsProps = getJSAvatarProps({ ...defaultOptions, size: 'xs' })
    expect(xsProps.wrapper.styles.width).toEqual('2rem')
    expect(xsProps.wrapper.cssProps).toContain('width: 2rem')
  })

  test('should accept an s size type', () => {
    const sProps = getJSAvatarProps({ ...defaultOptions, size: 's' })
    expect(sProps.wrapper.styles.width).toEqual('3rem')
    expect(sProps.wrapper.cssProps).toContain('width: 3rem')
  })

  test('should accept an m size type', () => {
    const mProps = getJSAvatarProps({ ...defaultOptions, size: 'm' })
    expect(mProps.wrapper.styles.width).toEqual('5rem')
    expect(mProps.wrapper.cssProps).toContain('width: 5rem')
  })

  test('should accept an l size type', () => {
    const lProps = getJSAvatarProps({ ...defaultOptions, size: 'l' })
    expect(lProps.wrapper.styles.width).toEqual('7.5rem')
    expect(lProps.wrapper.cssProps).toContain('width: 7.5rem')
  })

  test('should accept an xl size type', () => {
    const xlProps = getJSAvatarProps({ ...defaultOptions, size: 'xl' })
    expect(xlProps.wrapper.styles.width).toEqual('10rem')
    expect(xlProps.wrapper.cssProps).toContain('width: 10rem')
  })
})
