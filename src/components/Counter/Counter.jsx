import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../store/slice/counterSlice';

const Counter = ({ setIsChangedColor }) => {
  const { changed } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onChangedColor = () => setIsChangedColor((prev) => !prev)
  const onChangedClick = () => dispatch(setTitle(!changed))
  return (
    <div>

      <div>Counter</div>
      <button onClick={onChangedColor}> Change title color</button>
      <button onClick={onChangedClick}> Change title color</button>

    </div>
  );
}

export default Counter;
