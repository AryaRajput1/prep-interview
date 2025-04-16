function loading() {
  return (
    <div>
        <div className="flex flex-col justify-center items-center h-screen">
            <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"

                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4.93 4.93a10 10 0 0114.14 14.14l1.41 1.41a12 12 0 00-16.97-16.97l1.41 1.41z"
            ></path>
            </svg>
            <p className="text-lg text-white">Please wait...</p>
        </div>
    </div>
  )
}
export default loading