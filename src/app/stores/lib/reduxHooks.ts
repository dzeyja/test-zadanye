import { useSelector, useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { AppDispath, RootState } from '../mainStore'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispath>()
