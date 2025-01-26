// import Link from "next/link";



// export default function Home() {
//   return (
//     <div>
//       {/* Navigation Section */}
//       <header className="bg-green-600 text-white py-4">
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Saylani Microfinance</h1>
//           <nav>
//             <Link href="/" className="px-4 py-2 hover:text-blue-200">
//               Home
//             </Link>
//             <Link href="/about" className="px-4 py-2 hover:text-blue-200">
//               About Us
//             </Link>
           
            
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-600 to-blue-500 text-white">
//         <div className="container mx-auto px-6 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Welcome to Saylani Microfinance
//           </h1>
//           <p className="text-lg md:text-xl mb-8">
//             Empowering communities through interest-free Qarze Hasana loans for
//             weddings, home construction, businesses, and education.
//           </p>
//           <Link href={"/login"} className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
//             login
//           </Link>
//         </div>
//       </section>

//       {/* Loan Categories Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-green-600">
//             Loan Categories
//           </h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {/* Wedding Loans */}
//             <Link href={'/weading'}  className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
//               <h3 className="text-xl font-bold mb-2 text-blue-500">
//                 Wedding Loans
//               </h3>
//               <p className="text-gray-600">Max Loan: PKR 5 Lakh</p>
//               <p className="text-gray-600">Loan Period: 3 Years</p>
//             </Link>
//             {/* Home Construction Loans */}
//             <Link href={'/counstraction'}  className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
//               <h3 className="text-xl font-bold mb-2 text-blue-500">
//                 Home Construction Loans
//               </h3>
//               <p className="text-gray-600">Max Loan: PKR 10 Lakh</p>
//               <p className="text-gray-600">Loan Period: 5 Years</p>
//             </Link>
//             {/* Business Startup Loans */}
//             <Link href={'/businessloan'} className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
//               <h3 className="text-xl font-bold mb-2 text-blue-500">
//                 Business Startup Loans
//               </h3>
//               <p className="text-gray-600">Max Loan: PKR 10 Lakh</p>
//               <p className="text-gray-600">Loan Period: 5 Years</p>
//             </Link>
//             {/* Education Loans */}
//             <Link href={'/education'} className="bg-white shadow-md rounded-lg p-6 text-center hover:bg-green-100">
//               <h3 className="text-xl font-bold mb-2 text-blue-500">
//                 Education Loans
//               </h3>
//               <p className="text-gray-600">Based on Requirement</p>
//               <p className="text-gray-600">Loan Period: 4 Years</p>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-green-600 text-white py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2025 Saylani Welfare. All rights reserved.</p>
//           <div className="flex justify-center mt-4 space-x-4">
//             <a href="#" className="hover:text-blue-200">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-blue-200">
//               Terms of Service
//             </a>
//             <a href="#" className="hover:text-blue-200">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }













import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation Section */}
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saylani Microfinance</h1>
          <nav>
            <Link href="/" className="px-4 py-2 hover:text-yellow-300">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 hover:text-yellow-300">
              About Us
            </Link>
            <Link href="/register" className="px-4 py-2 hover:text-yellow-300">
               Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Saylani Microfinance
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Empowering communities through interest-free Qarze Hasana loans for
            weddings, home construction, businesses, and education.
          </p>
          <Link href={"/login"} className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
            Login
          </Link>
        </div>
      </section>

      {/* Loan Categories Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">
            Loan Categories
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Wedding Loans */}
            <Link href={'/weading'} className="bg-white shadow-xl rounded-lg p-6 text-center hover:bg-purple-100 transition-all">
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                Wedding Loans
              </h3>
              <p className="text-gray-600">Max Loan: PKR 5 Lakh</p>
              <p className="text-gray-600">Loan Period: 3 Years</p>
            </Link>
            {/* Home Construction Loans */}
            <Link href={'/counstraction'} className="bg-white shadow-xl rounded-lg p-6 text-center hover:bg-purple-100 transition-all">
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                Home Construction Loans
              </h3>
              <p className="text-gray-600">Max Loan: PKR 10 Lakh</p>
              <p className="text-gray-600">Loan Period: 5 Years</p>
            </Link>
            {/* Business Startup Loans */}
            <Link href={'/businessloan'} className="bg-white shadow-xl rounded-lg p-6 text-center hover:bg-purple-100 transition-all">
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                Business Startup Loans
              </h3>
              <p className="text-gray-600">Max Loan: PKR 10 Lakh</p>
              <p className="text-gray-600">Loan Period: 5 Years</p>
            </Link>
            {/* Education Loans */}
            <Link href={'/education'} className="bg-white shadow-xl rounded-lg p-6 text-center hover:bg-purple-100 transition-all">
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                Education Loans
              </h3>
              <p className="text-gray-600">Based on Requirement</p>
              <p className="text-gray-600">Loan Period: 4 Years</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Saylani Welfare. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-yellow-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
