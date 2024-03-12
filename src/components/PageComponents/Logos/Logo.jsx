import circleLogo from '../../../images/logos/circle-logo.png'
import kdcLogo from '../../../images/logos/kdc-logo.png'
import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
      src={kdcLogo}
      className="h-12 w-12"
      alt="Kiwi Dragon Creations Logo"
    ></Image>
  )
}
