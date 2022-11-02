import React from 'react'
import { connect } from 'react-redux'
import { Increment, Decrement, Reset } from '../store/actions/countActions'

const Count = (props) => {
  console.log(props.count)
  const count = props.count
  return (
    <div className='text-center'>
      <p>
        count --
        <span className='text-red-500 text-3xl font-bold'> {count} </span>
      </p>

      <div className='mt-2'>
        <button
          onClick={() => props.addToCount()}
          className='text-white bg-indigo-500 text-sm font-bold px-2 mx-2'
        >
          +
        </button>
        <button
          onClick={() => props.subFromCount()}
          className='text-white bg-red-500 text-sm font-bold px-2 mx-2'
        >
          -
        </button>
        <button
          onClick={() => props.resetCount()}
          className='text-white bg-green-500 text-sm font-bold px-2 mx-2'
        >
          reset
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCount: () => dispatch(Increment()),
    subFromCount: () => dispatch(Decrement()),
    resetCount: () => dispatch(Reset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
