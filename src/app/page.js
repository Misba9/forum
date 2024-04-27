import Link from "next/link";
export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-6 rounded-lg w-[80%] max-w-md shadow-lg">
        <h3 className="text-black font-bold text-xl mb-4 text-center">
          Sign in to your account
        </h3>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
            <div className="absolute top-0 right-0 mb-2">
              <Link href="/forgot">
              <span className="text-sm font-bold text-indigo-600 hover:text-indigo-400 cursor-pointer">
                Forgot password?
              </span>
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div
        className="text-center mt-9"
        >
         <span className="text-black">Not a member? </span>
         <Link href="/signup">
          <span
          className="text-indigo-600 hover:text-indigo-400 font-semibold cursor-pointer"
          > Sign Up Here
          </span>
         </Link>
           
        </div>
      </div>
    </main>
  );
}
