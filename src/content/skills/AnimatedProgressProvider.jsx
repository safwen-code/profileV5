import React, { useState, useEffect, useRef } from 'react'

const AnimatedProgressProvider = ({ interval = 1000, values, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setValuesIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % values.length
        if (values[nextIndex] === 80) {
          clearInterval(intervalRef.current)
        }
        return nextIndex
      })
    }, interval)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [interval, values])

  return children(values[valuesIndex])
}

export default AnimatedProgressProvider
