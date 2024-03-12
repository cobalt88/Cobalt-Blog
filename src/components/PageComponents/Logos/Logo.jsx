import circleLogo from '../../../images/logos/circle-logo.png'
import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
      src={circleLogo}
      className="h-12 w-12"
      alt="Circle Logistics Logo"
    ></Image>
  )
}
