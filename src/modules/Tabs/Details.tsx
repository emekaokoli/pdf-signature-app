import { Userprofile } from '@/modules/interface/user-module'
import { formatDate } from '@/utils/format'

type DetailsProp = {
  data: Userprofile
}
export default function DetailsTab({ data }: DetailsProp) {
  return (
    <div className='tracking-normal font-sans'>
      <div>City: {data.city}</div>
      <div>Name Initials: {data.initials}</div>
      <div>Avatar: {data.avatar === null ? 'Not available' : data.avatar}</div>
      <div>BVN: {data.bvn}</div>
      <div>Date of birth: {data.dob}</div>
      <div>D.lincense number: {data.drivers_license_no}</div>
      <div>Gender: {data.gender}</div>
      <div>Identity number: {data.identity_number}</div>
      <div>Identity Type: {data.identity_type}</div>
      <div>Account since: {formatDate.format(new Date(data.created_at))}</div>
      <div>Ip address: {data.ip_address}</div>
      <div>Business Account: {data.is_business}</div>
      <div>Is {data.first_name} online: {data.is_online}</div>
      <div>Complete: {data.is_complete === null ? 'Not available' : data.is_complete}</div>
      <div>National verification: {data.national_verification}</div>

    </div>
  )
}
