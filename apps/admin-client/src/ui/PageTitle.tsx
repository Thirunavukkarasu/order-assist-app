function PageTitle({ title = "Default Title" }: any) {
  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
      </div>
    </div>
  )
}

export default PageTitle;