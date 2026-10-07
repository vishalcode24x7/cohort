import React, { useRef } from 'react'
import { useForm } from "react-hook-form"

// function App() {

//   const inputRef = useRef({})


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputRef);
//   }


//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

//         <h1 className="text-2xl font-bold text-gray-800 text-center">
//           Create Account
//         </h1>

//         <p className="text-sm text-gray-500 text-center mt-2">
//           Fill in your details to create your account
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="mt-8 space-y-5">

//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name
//             </label>

//             <input
//               ref = {(e) => inputRef.current.name = e}
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email
//             </label>

//             <input
//               ref={(e) => inputRef.current.email = e}
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>

//             <input
//             ref = {(e) => inputRef.current.password = e}
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Confirm Password
//             </label>

//             <input
//               ref = {(e) => inputRef.current.confirmPassword = e}
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Create Account
//           </button>

//         </form>

//         <p className="text-sm text-gray-500 text-center mt-6">
//           Already have an account?{" "}
//           <span className="text-blue-600 font-medium cursor-pointer">
//             Login
//           </span>
//         </p>

//       </div>
//     </div>
//   );
// }

const App = () => {
  console.log("App rendering");

  const {register, handleSubmit} = useForm();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create Account
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2">
          Fill in your details to create your account
        </p>

        <form
          onSubmit={handleSubmit((e)=> console.log(e))}
          className="mt-8 space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              {...register('name')}
              // ref={(e) => inputRef.current.name = e}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              // ref={(e) => inputRef.current.email = e}
              {...register('email')}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              // ref={(e) => inputRef.current.password = e}
              {...register('password')}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              // ref={(e) => inputRef.current.confirmPassword = e}
              {...register('Confirmpassword')}
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer">
            Login
          </span>
        </p>

      </div>
    </div>
  )
}



export default App;


