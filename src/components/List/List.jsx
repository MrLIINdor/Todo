import React from 'react'
import './List.css'
import editLogo from '../../img/edit.svg'
import deleteLogo from '../../img/trash.svg'



// Components of the card in ToDo

export default function List({items, deleteItem, editItem, displayValue, chacked, setChacked}) {
  return (
    <div className='todo-list'>
        {items.map((item)=> {
            const {id, title} = item
            return(
                <ul className='todo-list__table' key={id}>
                    {/* <li className='todo-list__item'> */}
                        <input type="checkbox" style={{display: displayValue}} id={id} checked={chacked} onChange={()=>{setChacked(false)}}/>
                        <label for={id}> {title}</label>
                        
                        <div className='todo-list__menu'>
                            <button className='todo-list__button todo-list__button_edit' onClick={()=> editItem(id)}>
                                <img src={editLogo} alt="Edit" />
                            </button>
                            <button className='todo-list__button todo-list__button_delete' onClick={()=> deleteItem(id)}>
                                <img src={deleteLogo} alt="Delete"/>
                            </button>
                        </div>
                    {/* </li> */}
                </ul>
            )
        })}
    </div> 
  )
}
