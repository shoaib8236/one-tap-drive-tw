import Image from "next/image"
import Container from "../Container/Container"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-dark px-6 py-28">
            <div className="max-w-[1300px] m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="">
                <Image priority className="object-contain" src="/logo.png" alt="logo" width={300} height={80} />
                    <p className="text-light mt-4">
                        Find the best deals for budget and luxury / sports car rentals, chauffeur service and driver on hire service. Headquartered in Dubai, our services are available in select cities across the globe.
                    </p>
                </div>
                <div>
                    <ul>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/car-rental-faqs">Dubai Car Rental FAQs</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/car-rental-blog">Car Rental Blog</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/list-your-rental-cars">List your rental cars</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/rent-by-brand">Rent by Brand</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/yacht-rental">Yacht Rental</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/desert-safari-dubai">Desert Safari Dubai</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/car-with-driver">Car with Driver</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/car-rental-app">Car Rental App</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/ramadan-car-rental-offers">Ramadan Car Rental Offers</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/about-us">About Us</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/terms-and-conditions">Terms & Conditions</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/privacy-policy">Privacy Policy</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/terms-of-use">Terms of Use</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/contact-us">Contact Us</Link></li>
                        <li className="mb-1"><Link className="text-gray-300 hover:text-primary duration-300" href="/sitemap.xml">Sitemap XML</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-primary mb-2">For Inquiries And Support</li>
                        <li className="mb-1">
                            <a className="text-gray-300 hover:text-primary duration-300" href="tel:+971 55 345 1555">+971 55 345 1555</a>
                        </li>
                        <li className="mb-1">
                            <a className="text-gray-300 hover:text-primary duration-300" href="mailto:example@gmail.com">example@gmail.com</a>
                        </li>

                        <li className="text-primary mb-2">For Car with Driver</li>
                        <li className="mb-1">
                            <a className="text-gray-300 hover:text-primary duration-300" href="tel:+971 55 345 1555">+971 55 345 1555</a>
                        </li>
                        <li className="text-primary mb-2">Advertise With Us</li>
                        <li className="mb-1">
                            <a className="text-gray-300 hover:text-primary duration-300" href="tel:+971 55 345 1555">+971 55 345 1555</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-primary mb-2">Address</li>
                        <li className="text-gray-300">1501, Bayswater Tower, Marasi Drive, Business Bay, Dubai, UAE</li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer