import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-[1562px] mx-auto px-6 md:px-16 py-10 bg-[#003366] text-white flex flex-col-reverse md:flex-row items-center justify-between gap-10 ml-[-200px]">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 ml-10">
            Empower Your Professional
            <br />
            Journey With <span className="text-yellow-300">Industry-Ready Skills</span>
          </h1>

          <ul className="space-y-3 text-lg ml-10">
            <li className="flex items-start gap-2">
              <span className="text-green-400 text-xl">✔</span>
              Build Real-world projects with in-person collaboration.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 text-xl">✔</span>
              Individual tailored learning approach
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 text-xl">✔</span>
              Mentored by industry experts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 text-xl">✔</span>
              Get intensive placement assistance
            </li>
          </ul>

          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition ml-[-460px]">
            Enroll Now
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/ec60/8e3b/8f846a78804f1dd74d1b73467a34325c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B515FWVyai7GeWSc9Kvhw55kP9MXYCG~SpiTu8b94NojXg-H3aG9vHl7rZZM1oioDfq~Ys8Kzli7o--s3iaaN6-V35539nXk8ZluHu9x8A8U4jZayIw4M4WbOVe8qhmWIKFhiO41cZ6BweLvNO0wPmm4wxQBFMhNB~0IvV5Ieqg5eUuufRI4Y1Lc3AMz-ugmxX7IO7klr2fVu~vo5afwwvbYFuoqewx9pr9kxnc4R9uyZhLm4b7mHnRQbEiTPk1HmtMVD~NOXpa4X0AmNUoxViXr8XAnSGZJ6SpELwesoSttZ3oXnyOIa5BKvP5skNiEjRK2bDv1nJGytfkuRImMHQ__"
            alt="Students working on projects"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Secondary Section */}
      <div className="w-full bg-gradient-to-b from-white via-gray-100 to-white py-12 px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Text Section */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Learn with effective<br />
              <span className="text-gray-900">classroom based training</span><br />
              <span className="text-blue-600">for real-world success</span>
            </h2>
          </div>

          {/* Card Section */}
          <div className="bg-gray-100 rounded-2xl shadow-md p-8 w-full max-w-md relative">
            {/* NLITE Logo */}
            <div className="mb-4 text-left">
              <h3 className="text-blue-500 text-xl font-bold tracking-widest">NLITE</h3>
              <p className="text-xs text-blue-400 tracking-widest leading-tight">
                LEARN INNOVATE THRIVE
              </p>
            </div>

            {/* Title */}
            <h4 className="text-2xl font-medium text-gray-800 mb-2 leading-snug text-left">
              Full Stack Web Development
            </h4>
            <h5 className="text-xl font-bold text-blue-600 mb-6 leading-snug text-left">
              Java and <br /> React
            </h5>

            {/* Enroll Button */}
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Enroll Now
            </button>

            {/* Illustration */}
            <div className="absolute bottom-4 right-4 w-28 md:w-32">
              <img
                src="https://s3-alpha-sig.figma.com/img/9b50/7774/098b10524194063953373cff624156b8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nZb6uJxSnDyPufJuMlhGwcki9CKPVANle9eRR-R3j4QlHOe22GjEm0YJ5WiuBQ6xadnTMLXCnrEnuyO3Ef9935bCJl6bmIiROeDSpzS2Ol3TW6LCBALKI-kqEQR71r296Tkast8hpkcIFogVTAlB7YSIw-qRlE3zarxBa1HCrEVif6NYricwrIuYhQ4FECgfNCnzbTStfkV9eaFUsj22rq2oftBVMV0yEFaNWbB4ka2w0OtJZEJnWAg9zAoB5WJV5pCgJkBNPaoiWPK1WtY-lMAcwq1fy3QItdJYpIe8XTBdYKxr33jFszO1MR1j8MQqr6ezZKlmLsQmdMJKpS8oxA__"
                alt="Course Illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-4 mt-12">
          <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
          <span className="w-6 h-1 bg-gray-300 rounded-full"></span>
          <span className="w-6 h-1 bg-gray-300 rounded-full"></span>
        </div>

        {/* Recognition Card */}
        <div className="bg-white p-6 max-w-3xl mx-auto text-center mt-8">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">
            Recognized <span className="text-blue-500">by</span>
          </h1>

          <div className="flex items-start justify-center p-4 border border-gray-300 rounded-lg max-w-4xl mx-auto gap-6">
  {/* Logo and Ministry Text */}
  <div className="flex items-start gap-4">
    {/* Logo */}
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_iJUajtQMR6w_jl_rhLtkF3W6OdBHPitAA&s"
      alt="Indian Emblem"
      className="w-12 h-12 object-contain"
    />

    {/* Ministry Text */}
    <div className="text-left">
      <div className="text-xl font-bold tracking-wider text-gray-800">MINISTRY OF</div>
      <div className="text-2xl font-bold uppercase text-blue-800 mt-1">CORPORATE</div>
      <div className="text-2xl font-bold uppercase text-blue-800">AFFAIRS</div>
      <div className="text-sm font-medium text-gray-600 mt-2">GOVERNMENT OF INDIA</div>
    </div>
  </div>

  {/* Right side text */}
  <div className="flex flex-col justify-start ml-auto">
    <p className="text-sm font-medium italic text-gray-600">
      EMPOWERING BUSINESS, PROTECTING INVESTORS
    </p>
    <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700 mt-1">
      <span>REGULATOR •</span>
      <span>INTEGRATOR •</span>
      <span>FACILITATOR •</span>
      <span>EDUCATOR</span>
    </div>
  </div>
</div>
          
        </div>
      </div>
      <footer className="bg-blue-900 p-8 text-gray-800 ml-[-150px] mr-[-150px] mb-[-50px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Name */}
          <div>
            <h1 className="text-2xl font-bold text-blue-300 mb-4">NLITE Technologies LLP</h1>
          </div>

          {/* Popular Course */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Popular Course</h2>
            <ul className="space-y-2">
              <li className="text-white">JAVA & REACT</li>
              <li className="text-white">Net and react</li>
              <li className="text-white">Java and Angular</li>
              <li className="text-white">Python</li>
              <li className="text-white">DEVOPS</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li className="text-white">FAQ's</li>
              <li className="text-white">Terms & Conditions</li>
              <li className="text-white">Privacy Policy</li>
              <li className="text-white">Refunds Policy</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Our Location */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-white">Our Location</h2>
              <p className="text-white">
                Ist Floor, Plot no 434, Nandankanan Rd, Raghuhatthpur, Bhubaneswar, Odisha 751024
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-white">Contact Us</h2>
              <ul className="space-y-1 text-white">
                <li>contact@nite.in</li>
                <li>+91 8428448903</li>
                <li>+91 9475484959</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright or additional info can go here */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} NLITE Technologies LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default HomePage;

