export default function Badge(props: any) {
  return (
    <div className="bg-indigo-500 text-white px-2 py-1 rounded-lg text-center">
      {props.children}
    </div>
  )
}

