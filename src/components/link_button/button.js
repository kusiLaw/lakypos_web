import Link from "next/link"


const button = ({url, text}) => {
  return (
    <>
      <Link href='${url}'>{text}</Link>
    </>
  )
}

export default button
