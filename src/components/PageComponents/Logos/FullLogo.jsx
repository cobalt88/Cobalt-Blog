import circleFullLogo from '../../../images/logos/Circle-Full-Logo.png'
import Image from 'next/image'

export function FullLogo(props) {
  return (
    <Image
      src={circleFullLogo}
      width={props.width}
      className={props.classes}
      alt="Circle Logistics Logo"
    ></Image>
  )
}
