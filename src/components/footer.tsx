// components/Footer.jsx
import Image from "next/image";

const quickLinks = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "Blog", href: "#" },
  { id: 3, label: "About us", href: "#" },
  { id: 4, label: "Services", href: "#" },
  { id: 5, label: "Products", href: "#" },
  { id: 6, label: "FAQ", href: "#" },
  { id: 7, label: "T&C", href: "#" },
];

const categories = [
  { id: 1, label: "Seating", href: "#" },
  { id: 2, label: "Table", href: "#" },
  { id: 3, label: "Arabic & Majlis Setup", href: "#" },
  { id: 4, label: "Outdoor Furniture", href: "#" },
  { id: 5, label: "Corporate / Meeting Essentials", href: "#" },
  { id: 6, label: "LED Collection", href: "#" },
  { id: 7, label: "Bar Furniture", href: "#" },
];

const contacts = [
  { id: 1, label: "+971 507644472", icon: "/assets/images/call.svg" },
  { id: 2, label: "+971 042736357", icon: "/assets/images/call.svg" },
  { id: 3, label: "+971 566080777", icon: "/assets/images/whatsapp.png" },
  { id: 4, label: "info@athoor-rentals.com", icon: "/assets/images/notification_multiple.svg" },
  { id: 5, label: "Athoor Party & Entertainment Services Warehouse 21-24 Street 72 - Dubai Investments Park - Dubai" },
];

const socialLinks = [
  { id: 1, icon: "/assets/images/facebook.svg", href: "#" },
  { id: 2, icon: "/assets/images/twitter.svg", href: "#" },
  { id: 3, icon: "/assets/images/instagram.svg", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Section */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start gap-4">
            <div className="relative w-52 h-16 -ml-4">
              <Image
                src="/assets/images/athoor-rentals-white.svg"
                alt="Athoor"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center md:text-left text-sm md:text-base">
              Athoor Party & Services has been serving in the Middle East for years and its growing, building a credible reputation as a Rental Company for Hotels, Commercial Companies, Events Companies, Villas, Horse Stud farms, and Restaurants. Best Event Furniture Rental Company in Dubai.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-4 py-2 rounded-md shadow mt-4"
            >
              <Image src="/assets/images/download.svg" width={16} height={16} alt="Download catalog" />
              Download catalog
            </a>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 flex flex-col justify-between gap-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <ul className="flex flex-col gap-2 text-sm">
                  {contacts.map((c) => (
                    <li key={c.id} className="flex items-center gap-2">
                      {c.icon && (
                        <Image
                          src={c.icon}
                          width={16}
                          height={16}
                          alt={c.label}
                          className={c.icon === "/assets/images/call.svg" ? "invert" : ""}
                        />
                      )}
                      <span>{c.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="flex flex-col gap-2 text-sm">
                  {quickLinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.href} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Categories</h3>
                <ul className="flex flex-col gap-2 text-sm">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <a href={cat.href} className="hover:underline">
                        {cat.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Socials and Catalog Image */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.id} href={social.href} className="bg-white rounded shadow p-2">
                    <Image src={social.icon} width={16} height={16} alt="Social" />
                  </a>
                ))}
              </div>
              <div className="hidden md:block">
                <Image
                  src="/assets/images/6f963253687aa5f5564723d37d65814a99092d8a.png"
                  width={450}
                  height={120}
                  alt="Save"
                  className="rounded-2xl"
                />
              </div>
              {/* Mobile catalog image */}
              <div className="md:hidden">
                <Image
                  src="/assets/images/6f963253687aa5f5564723d37d65814a99092d8a.png"
                  width={190}
                  height={60}
                  alt="Save"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;