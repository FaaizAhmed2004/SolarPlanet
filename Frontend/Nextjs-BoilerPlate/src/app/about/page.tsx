"use client"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/navbar"
import QuoteRequestForm from "@/components/Qoute/Qoute"
import Link from "next/link"

export default function AboutUsPage() {
  // Team members data - you can replace with actual team data
  const teamMembers = [
    {
      name: "Reece Kennedy",
      position: "Founder & Director",
      description: "Electrician with over 15 years of experience in the industry.",
    },
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      description: "Oversees day-to-day operations and ensures customer satisfaction.",
    },
    {
      name: "Michael Thompson",
      position: "Lead Solar Installer",
      description: "Certified solar installer with expertise in residential and commercial systems.",
    },
    {
      name: "Emma Wilson",
      position: "Customer Service Manager",
      description: "Dedicated to providing exceptional customer support and communication.",
    },
  ]

  return (
    <>
    <Navbar/>
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/group_pic_banner2.jpg')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">About Us</h1>
        </div>
      </div>

      {/* Personal Approach Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 text-center mb-12">
          LOOKING FOR A COMPANY THAT KNOWS YOU BY NAME?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Total Solar Solutions was established by electrician Reece Kennedy when he recognized the growing need for
              quality solar installations in Victoria. With a background in electrical work and a passion for renewable
              energy, Reece built a team of dedicated professionals committed to providing exceptional service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since our founding, we've grown from a small operation to a full-service solar and electrical company,
              serving residential and commercial clients throughout Victoria. Our growth has been built on our
              reputation for quality workmanship, honest advice, and personalized service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Despite our growth, we've maintained our commitment to knowing each customer by name and treating every
              project with the same care and attention to detail that we would for our own homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              What is the Total Solar Solutions experience?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Personal Consultation</h4>
                  <p className="text-gray-600">
                    We take the time to understand your energy needs and goals before recommending solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Custom Design</h4>
                  <p className="text-gray-600">
                    Our team designs a system specifically for your property and energy requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Quality Installation</h4>
                  <p className="text-gray-600">
                    Our certified installers ensure your system is installed to the highest standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ongoing Support</h4>
                  <p className="text-gray-600">
                    We're here for you long after installation with maintenance and support services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Quality</h3>
              <p className="text-gray-600 text-center">
                We never compromise on the quality of our products, installations, or service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Personal Service</h3>
              <p className="text-gray-600 text-center">
                We treat every customer as an individual with unique needs and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We're committed to promoting renewable energy and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Meet Our Team</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our dedicated team of professionals is committed to providing you with the best solar solutions and customer
          service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium text-sm mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full transition-colors shadow-md"
          >
            Contact Our Team
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Total Solar Solutions made the entire process so easy. From the initial consultation to the
                installation, everything was handled professionally. Our energy bills have been cut in half!"
              </p>
              <p className="font-semibold text-gray-800">- David & Sarah M., Bayswater</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "We had solar installed for our business by Total Solar Solutions. The team was knowledgeable and
                efficient. The system has been performing excellently and has significantly reduced our operating
                costs."
              </p>
              <p className="font-semibold text-gray-800">- John T., Melbourne Business Owner</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "What impressed me most was how they took the time to explain everything. They weren't just trying to
                sell me the biggest system, but the right system for my needs. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-800">- Lisa K., Ringwood</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}

        </div>
        <QuoteRequestForm/>
        <Footer/>
    </>
  )
}

