import { Country } from '@/modules/interface/user-module';
import { formatDate } from '@/utils/format';
type CountryProp = {
  country: Country
}
export function Location({ country }: CountryProp) {
  return (
    <div className='tracking-normal font-sans'>
      <div>Capital: {country.capital}</div>
      <div>Date since:  {formatDate.format(new Date(country.created_at))}</div>
      <div>Currency: {country.currency}</div>
      <div>Currency symbol: {country.currency_symbol}</div>
      <div>Emoji: {country.emoji}</div>
      <div>Emoji U: {country.emojiU}</div>
      <div>ISO2: {country.iso2}</div>
      <div>ISO3: {country.iso3}</div>
      <div>Latitude: {country.latitude}</div>
      <div>Longitude: {country.longitude}</div>
      <div>Name: {country.name}</div>
      <div>Natuve: {country.native}</div>
      <div>Numeric code: {country.numeric_code}</div>
      <div>Phone code: {country.phone_code}</div>
      <div>Region: {country.region}</div>
      <div>TLD: {country.tld}</div>
      <div>Last updated: {formatDate.format(new Date(country.updated_at))}</div>
    </div>
  )
}
