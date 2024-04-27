import Link from "next/link";
export default function Signup() {
  return (
    <main className="h-screen flex items-center justify-center bg-slate-50">
      <div className="p-6 rounded-lg w-[80%] max-w-md">
        <h3 className="text-black font-bold text-xl mb-4 text-center font-serif">
          Sign Up
        </h3>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-serif mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-black rounded focus:outline-none font-serif focus:border-indigo-500"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-serif mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border font-serif border-black rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password-2" className="block text-sm font-serif mb-1">
              Password
            </label>
            <input
              type="password"
              id="password-2"
              placeholder="Confirm password"
              className="w-full px-3 py-2 border font-serif border-black rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full font-serif bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-black font-serif">Already a member? </span>
          <Link href="/">
            <span className="text-indigo-600 hover:text-indigo-400 font-serif cursor-pointer">
              Sign in Here
            </span>
          </Link>
        </div>
        <div 
        className="font-serif text-center m-2"
        >OR</div>
        <button type="button" className="text-white bg-red-500 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-full flex items-center justify-center mr-2 mb-2"><svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19"><path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"></path></svg>Sign Up with Google</button>
      </div>
    </main>
  );
}
