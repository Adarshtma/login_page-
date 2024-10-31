
import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-customPink font-sans px-4">
      <div className="w-full max-w-md sm:max-w-5xl p-8 bg-white rounded-2xl shadow-lg flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
        
      
        <div className="w-full flex justify-center p-1 sm:w-3/6 sm:order-2">
          <img
            src="https://i.postimg.cc/28YNSPyG/background.jpg"
            alt="Illustration"
            className="rounded-lg object-cover w-full h-48 sm:h-full"
          />
        </div>

         {/* Form Section   */}

        <div className="flex-1 p-6 sm:p-12 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 text-center sm:text-left">Welcome Back 👋</h2>
          <p className="mt-2 text-gray-600 text-center sm:text-left">
            Today is a new day. It’s your day. You shape it. Sign in to start managing your projects.
          </p>
          
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="At least 8 characters"
              />
            </div>
            <div className="flex justify-end text-sm text-indigo-600">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Sign in
            </button>
          </form>

         
          <div className="flex items-center my-6 sm:hidden">
            <div className="flex-grow border-t border-indigo-500" />
            <span className="mx-4 text-gray-500">Or Sign in with</span>
            <div className="flex-grow border-t border-indigo-500" />
          </div>

        
          <div className="hidden sm:flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

        
          <div className="flex space-x-4 sm:space-x-0 sm:flex-col sm:space-y-4">
            
            <button className="flex-1 flex items-center justify-center bg-white border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100 sm:hidden">
              <img src="https://i.postimg.cc/x8RxCppp/google.jpg" width={24} height={24} className="mr-2" alt="Google logo" />
              <span>Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center bg-white border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100 sm:hidden">
              <img src="https://i.postimg.cc/BvrwwK1p/facebook.png" width={24} height={24} className="mr-2" alt="Facebook logo" />
              <span>Facebook</span>
            </button>
            
            
            <button className="hidden sm:flex flex-1 items-center justify-center bg-white border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100">
              <img src="https://i.postimg.cc/x8RxCppp/google.jpg" width={24} height={24} className="mr-2" alt="Google logo" />
              Sign in with Google
            </button>
            <button className="hidden sm:flex flex-1 items-center justify-center bg-white border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100">
              <img src="https://i.postimg.cc/BvrwwK1p/facebook.png" width={24} height={24} className="mr-2" alt="Facebook logo" />
              Sign in with Facebook
            </button>
          </div>

          
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
          </p>

        
          <p className="text-center text-xs text-gray-500 mt-auto pt-8">
            © 2023 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
