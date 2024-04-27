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
      </div>
    </main>
  );
}
