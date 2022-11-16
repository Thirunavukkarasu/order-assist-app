export default function Badge(props: any) {
  return (
    <div className="bg-sky-500 text-white px-2 py-1 rounded-lg">
      {props.children}
    </div>
  )
}

