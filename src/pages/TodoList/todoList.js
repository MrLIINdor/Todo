import React, { useState, useEffect} from 'react'
import List from '../../components/List/List'
import Modal from '../../components/Modal/Modal'



// ToDo List with checkbox

export default function TodoList() {

  const getLocal = () => {
    let list = localStorage.getItem('id')
    if(list){
      return (list = JSON.parse(localStorage.getItem('id')))
    } else{
      return []
    }
  }

  const [modalActive, setModalActive] = useState(false)

  const [titleTodo, setTitleTodo] = useState('')
  const [list, setList] = useState(getLocal)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const input = document.querySelector('.form-todo__input');

  

  useEffect(()=> {
    localStorage.setItem('id', JSON.stringify(list))
  }, [list])


 
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id)
    setModalActive(true)
    setIsEditing(true)
    setEditID(id)
    setTitleTodo(editItem.title)
    input.value = ''
  }


  const hendleClick = () => {
    if(titleTodo && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editID){
            return{ ...item, title: titleTodo}
          }
          return item
        })
      )
      setEditID(null)
      setModalActive(false)
      setIsEditing(false)
      input.value = ''
    }else{
      const newItem = {id: new Date().getTime().toString(), title: titleTodo}
      setList([...list, newItem])
      setTitleTodo('')
      setModalActive(false)
      setIsEditing(false)
      input.value = ''
    }
  }


  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }


  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className='form-todo'>
          <h3 className='form-todo__title'>Edit Title</h3>
          <div className='form-todo__form-container'>
            <input className='form-todo__input' type="text" onChange={(e)=> setTitleTodo(e.target.value)} placeholder='Name todo'/>
            <button className='form-todo__button' onClick={hendleClick}>Edit</button>
          </div>
        </div>
      </Modal> 


      <div className='todo-list-container'>
        {list.length > 0 && (
          <div className='todo-list-card__item'>
             <List items={list} deleteItem={deleteItem} editItem={editItem}/> 
          </div>
        )}
      </div>
    </>
  )
}
