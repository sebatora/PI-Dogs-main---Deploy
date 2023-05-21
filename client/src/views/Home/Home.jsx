import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getTemperaments } from '../../redux/actions'
import { Dogs } from '../../components'
import { Loading } from '../index'


function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments())
  }, [dispatch])

  const { allDogs } = useSelector((state) => state);

  return (
    <div>
      {
      allDogs.length !== 0
        ? ( <Dogs /> )
        : ( <Loading /> )
      }
    </div>
  )
}

export default Home