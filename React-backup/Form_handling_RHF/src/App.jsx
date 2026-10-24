import { useRef } from 'react'
import './app.css'

const App = () => {

  console.log('app rendering')

  const inputRef = useRef();
  const inputRef2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("render")
    console.log(inputRef.current.value)
    console.log(inputRef2.current.value)
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <main className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Get started
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Contact details
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Enter your information below to get in touch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              // ref={inputRef}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              // ref={inputRef2}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default App
