// components/EventCategoriesBar.jsx
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Corporate Event",
    icon: "/assets/icons/cases.svg",
    alt: "Corporate Event Icon",
  },
  {
    id: 2,
    name: "Wedding Event",
    icon: "/assets/icons/castle.svg",
    alt: "Wedding Event Icon",
  },
  {
    id: 3,
    name: "Social Event",
    icon: "/assets/icons/celebration.svg",
    alt: "Social Event Icon",
  },
  {
    id: 4,
    name: "Awards Event",
    icon: "/assets/icons/trophy.svg",
    alt: "Awards Event Icon",
  },
  {
    id: 5,
    name: "Music Event",
    icon: "/assets/icons/headphones.svg",
    alt: "Music Event Icon",
  },
];

const EventCategoriesBar = ({ categoriesData = categories }) => {
  return (
    <div className="w-full bg-gray-50 py-3 md:py-6">
      <div className="container mx-auto px-0">
        <div className="flex flex-wrap gap-3 py-4">
          {categoriesData.map((category) => (
            <button
              key={category.id}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <Image
                  src={category.icon}
                  alt={category.alt}
                  width={24}
                  height={24}
                />
              </span>
              <span className="font-medium text-gray-800">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategoriesBar;
