import Link from "next/link";
export default function Signup() {
  return (
    <main className="h-screen flex items-center justify-center bg-indigo-600">
      <div className="bg-white p-6 rounded-lg w-[80%] max-w-md shadow-lg">
        <h3 className="text-black font-bold text-xl mb-4 text-center">
          Sign Up
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
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password-2" className="block text-sm font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password-2"
              placeholder="Confirm password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-9">
          <span className="text-black">Already a member? </span>
          <Link href="/">
            <span className="text-indigo-600 hover:text-indigo-400 font-semibold cursor-pointer">
              Sign in Here
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
