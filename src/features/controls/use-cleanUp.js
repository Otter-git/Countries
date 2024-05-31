import { clearControls } from './controls-slice';
import { useDispatch } from 'react-redux';

export const useCleanUp = () => {
  const dispatch = useDispatch();

  const cleanUp = () => dispatch(clearControls());

  return () => dispatch(cleanUp());
}