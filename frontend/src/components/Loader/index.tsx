type LoaderProps = {
  children?: string
}

export default function Loader({ children }: LoaderProps) {
  console.log("loader")
  return (
    <div className="flex size-full flex-wrap content-center justify-center gap-16">
      <div className="animate-spinner size-48 rounded-full border-8 border-solid border-zinc-300 border-t-gray-900"></div>
      <p className="w-full text-center">{children}</p>
    </div>
  )
}
