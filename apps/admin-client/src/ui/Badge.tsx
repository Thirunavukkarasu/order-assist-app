export default function Badge(props: any) {
  return (
    <div className="bg-indigo-500 text-white px-4 py-1 rounded-lg w-20">
      {props.children}
    </div>
  )
}

