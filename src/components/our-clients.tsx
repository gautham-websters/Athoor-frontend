// components/OurClients.jsx
import Image from "next/image";
import { motion } from "framer-motion";

// Sample client data
const clients = [
  { name: "Hotel Atlantis", img: "/uploads/hotel_atlantis.png" },
  { name: "Hotel Waldorf", img: "/uploads/hotel_waldorf.png" },
  { name: "Corporate Mubadala", img: "/uploads/corporate_mubadala.png" },
  { name: "Real Estate Meydan", img: "/uploads/real_estate_meydan.png" },
  { name: "Event Company Linkviva", img: "/uploads/event_company_linkviva.png" },
  { name: "Corporate DWTC", img: "/uploads/corporate_dwtc.png" },
  { name: "Corporate ICC", img: "/uploads/corporate_icc.png" },
  { name: "Real Estate Sobha Realty", img: "/uploads/real_estate_sobha_realty.png" },
];

const OurClients = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Clients
        </h3>

        {/* Continuous scrolling row */}
        {[1, 2].map((row) => (
          <motion.div
            key={row}
            className="flex gap-12 mb-8"
            animate={{ x: [-50, -800] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {clients.map((client, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 md:w-40">
                <Image
                  src={client.img}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;