import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { API_ROOT } from '../shared/constants'

const useTests = () => {
  const [tests, setTests] = useState({})

  useEffect(async () => {
    try {
      const response = await axios.get(`${API_ROOT}/cogtests`)
      setTests(response.data)
    } catch (err) {
      console.log('=============== REQUEST ERROR =========================== ')
      console.log(err)
      return null
    }
  }, [setTests])

  return {
    tests
  }
}

export default useTests
