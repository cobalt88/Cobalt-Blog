
export function LoadingCircle() {
  return (
    <div className="place-content-center flex justify-center content-center">
      <div className="mt-96 flex">
        <div
          className="flex h-11 w-11 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          {/* <span className="absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span> */}
        </div>
      </div>

    </div>
  )
}
