import tinycolor from 'tinycolor2'

export default  (hash) =>{
    const color = tinycolor(hash.substring(0,6))
    const colorLighten = tinycolor(hash.substring(0,6)).lighten(20)
    console.log(color)
    return {color,colorLighten}
}