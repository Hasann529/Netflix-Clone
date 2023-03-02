import React from 'react'
import {useSelector} from 'react-redux'
import { Row } from '../components/Netflix/Row'


const MyList = () => {

  const list = useSelector(state => state.lists.list)

  return (
    <div className='mylist'>
      <Row title={"My List"} arr={list} />
    </div>
  )
}

export default MyList
