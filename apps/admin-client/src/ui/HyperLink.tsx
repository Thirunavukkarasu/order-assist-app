import { Link } from "react-router-dom";

export default function HyperLink(props: any) {
  return (
    <Link className="text-sky-500" to={props.to}>
      {props.children}
    </Link>
  )
}

