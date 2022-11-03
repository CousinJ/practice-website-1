import React from 'react' 

function Dropdown(props) {
    const menuItems = props.content.map((el, i) => {return(<div className='menu-items'>{el}</div>)})
    return(<div style={props.styleObject} className='drop-down-menu'>
         {menuItems}
    </div>
    )
}

export default Dropdown;