/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top banner with benefits */}
      <div className="w-full bg-amber-400 py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                <path d="M12 5.83V4"></path>
              </svg>
            </div>
            <h3 className="font-bold text-sm">Amazing Customer Service</h3>
            <p className="text-xs">100% Satisfaction</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="font-bold text-sm">Customized quotes by the experts</h3>
            <p className="text-xs">Designed to suit your needs</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-bold text-sm">Family owned</h3>
            <p className="text-xs">and operated</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 className="font-bold text-sm">10+ Years of operation</h3>
            <p className="text-xs">Est. 2012</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="font-bold text-sm">Fully Licensed & Insured</h3>
            <p className="text-xs">Peace of mind service</p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider">The Solar Planet Australia</h2>
            <p className="text-sm">
              The Solar Planet Australia is a fully owned and operated Australian company that employs well-trained
              and licensed technicians and installers.
            </p>
            <p className="text-sm">
              We keep you, the customer, at the centre of everything we do. We offer the highest quality work and use
              some of the best quality products on the market.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <Image
                  src="/images/approvedSeller.png"
                  alt="Approved Seller"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-blue-500"
                />
              </div>
              <div>
                <Image
                  src="/images/accredential.png"
                  alt="Clean Energy Council Accredited Installer"
                  width={150}
                  height={100}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <Image src="/images/Winiaco.png" height={60 } width={40} alt={"Winico"}/>
              <Image src="/images/solarcouncal.png" height={60 } width={40} alt={"solar"}/>
              <Image src="/images/fronus.png"height={60 } width={40} alt={"fronus"} />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/Residentialsolar" className="text-sm hover:underline">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="/commercialsolar" className="text-sm hover:underline">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/WINAICOsolar" className="text-sm hover:underline">
                  WINAICO Solar
                </Link>
              </li>
              <li>
                <Link href="/Heatpump" className="text-sm hover:underline">
                  Heat pumps
                </Link>
              </li>
              <li>
                <Link href="/electrify-home" className="text-sm hover:underline">
                  Electrify My Home
                </Link>
              </li>
              <li>
                <Link href="/ev-charger" className="text-sm hover:underline">
                  EV Charger
                </Link>
              </li>
              <li>
                <Link href="/Teslapowerwall" className="text-sm hover:underline">
                  Tesla Wall Connector
                </Link>
              </li>
              <li>
                <Link href="/BatteryStorage" className="text-sm hover:underline">
                  Fronius Wallbox Charger
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - More Info */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4">More Info</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="Faq" className="text-sm hover:underline">
                  Solar Energy FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="text-sm hover:underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Refer A Friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-sm">04 33866320</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-sm">thesolarPlanet@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span className="text-sm">178a the blvd Thomastown 3074 Melbourne</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer with payment methods and copyright */}
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image src="/images/paypal.png "height={30} width={60} alt="PayPal" />
            <Image src="/images/mastercard.jpeg"height={30} width={60} alt="Mastercard"  />
            <Image src="/images/visa.png"height={30} width={60} alt="Visa"  />
          </div>

          <div className="text-xs text-gray-500">
            <p>Copyright © 2025 The Solar Planet Australia</p>
            <p className="flex gap-2 justify-center md:justify-end mt-1">
              <Link href="#" className="hover:underline">
                Use of Site
              </Link>
              <span>|</span>
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>

          <div className="hidden md:block">
            <p className="text-xs flex items-center">
               website made by
              <span className="text-yellow-500 mx-1">Faaiz Ahmed</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

