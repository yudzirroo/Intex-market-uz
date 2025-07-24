import { ReactNode } from "react"

const Heading = ({tag, children, classList}: {tag: 'h1' | 'h2', children: ReactNode, classList?: string}) => {
  return (
    <>
    {tag == "h1" && <h1 className={`font-bold text-[50px] ${classList}`}>{children}</h1>}
    {tag == "h2" && <h2 className={`font-bold text-[22px] ${classList}`}>{children}</h2>}
    </>
  )
}

export default Heading