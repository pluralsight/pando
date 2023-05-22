import camelize from '../utils/camelize.mjs'
import sanitize from '../utils/sanitize.mjs'

const keyframes = (rule) => {
  const keyFrameObj = {}
  rule.keyframes.forEach((keyframe) => {
    keyframe.declarations.forEach((decl) => {
      keyFrameObj[keyframe.values[0]] = {
        ...keyFrameObj[keyframe.values[0]],
        [camelize(decl.property)]: decl.value,
      }
    })
  })
  let name = camelize(`keyframes-${rule.name}`)
  const obj = {}
  obj[`@keyframes ${rule.name}`] = keyFrameObj

  name = sanitize(name)

  return [name, obj]
}

export default keyframes
