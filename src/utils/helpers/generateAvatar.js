import tinycolor from 'tinycolor2'

export default  (hash) =>{
    const r = hash.substring(0,1).charCodeAt(0)
    const g = Math.floor((Math.random()*200)*2)
    const b = Math.floor((Math.random()*200)*2)
    const color = tinycolor({r,g,b}).toHexString()
    const colorLighten = tinycolor({r,g,b}).lighten().toHexString()
    return {color,colorLighten}
}