import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Dialogs as BaseDialogs} from 'components'

const Dialogs =({items, userId}) =>{

    const [inputValue,setInputValue]=useState('')
    const [filtered,setFiltered] = useState(Array.from(items))

    const onSerchChange = value=>{
        setFiltered(
            items.filter(dialog=>
                dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase())>=0)
        )
        setInputValue(value)
    }
   
        return(
            <BaseDialogs
                userId={userId}
                inputValue={inputValue}
                items={filtered}
                onSearch={onSerchChange}
            />
        )
}

Dialogs.propTypes={
    items : PropTypes.any,
    userId: PropTypes.any
}
export default Dialogs