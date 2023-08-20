import { State } from '@/modules/interface/user-module'
import { formatDate } from '@/utils/format'

type StateProp = {
  state: State
}
export function StateComponent({ state }: StateProp) {
  return (
    <div className='tracking-normal font-sans'>
      <div>Date since:  {formatDate.format(new Date(state.created_at))}</div>
      <div>Latitude {state.latitude}</div>
      <div>Longitude {state.longitude}</div>
      <div>name {state.name}</div>
      <div>State Code {state.state_code}</div>
      <div>Type {state.type}</div>
      <div>Last update {formatDate.format(new Date(state.updated_at))} </div>
    </div>
  )
}
