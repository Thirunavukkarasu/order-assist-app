function PageTitle({ title = "Default Title" }: any) {
  return (
    <div className="max-w-7xl py-6">
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
        {title}
      </h1>
    </div>
  )
}

export default PageTitle;