"use client";
import {
  useState,
  useRef,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

type ColorOption = {
  src: string;
  alt: string;
};

type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

interface ProductMediaProps {
  mediaItems: MediaItem[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const ProductMedia = ({
  mediaItems,
  activeIndex,
  setActiveIndex,
}: ProductMediaProps) => {
  const mainImageRef = useRef<HTMLImageElement | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  const isVideoItem = (item: MediaItem) => item.type === "video" && !!item.src;

  const renderMainMedia = (item: MediaItem) => {
    if (isVideoItem(item)) {
      return (
        <video
          ref={mainVideoRef}
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          className="w-full h-auto"
        />
      );
    } else {
      return (
        <img
          ref={mainImageRef}
          src={item.src}
          alt={item.alt}
          className="w-full h-auto"
        />
      );
    }
  };

  const selectedItem = mediaItems[activeIndex] || mediaItems[0];

  return (
    <div className="product-media-column">
      <div className="product-media-main relative">
        <div className="product-media-stage">
          {selectedItem ? (
            renderMainMedia(selectedItem)
          ) : (
            <div className="p-20 text-center text-gray-500">
              No media available
            </div>
          )}
        </div>
        <button
          onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
          className="media-nav media-nav-prev absolute left-2 top-1/2 transform -translate-y-1/2"
        >
          Prev
        </button>
        <button
          onClick={() =>
            setActiveIndex((prev) => Math.min(mediaItems.length - 1, prev + 1))
          }
          className="media-nav media-nav-next absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          Next
        </button>
      </div>

      <div className="product-media-thumbnails flex gap-2 mt-2">
        {mediaItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`thumbnail ${index === activeIndex ? "border-2 border-blue-600" : ""}`}
          >
            {isVideoItem(item) ? (
              <div className="relative">
                <img
                  src={item.poster}
                  alt={item.alt}
                  className="w-16 h-16 object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  ▶️
                </span>
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-16 h-16 object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

interface ColorSelectorProps {
  colors: ColorOption[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  mediaItems: MediaItem[];
}

const ColorSelector = ({
  colors,
  setActiveIndex,
  activeIndex,
  mediaItems,
}: ColorSelectorProps) => {
  const isVideoItem = (item: MediaItem) => item.type === "video";

  return (
    <div className="product-color-selector flex gap-2 mt-2">
      {colors.map((color, idx) => (
        <button
          key={idx}
          onClick={() => {
            const matchIndex = mediaItems.findIndex(
              (item) => !isVideoItem(item) && item.src === color.src,
            );
            if (matchIndex >= 0) setActiveIndex(matchIndex);
          }}
          className={`color-thumb border p-1 ${activeIndex === idx ? "border-blue-600" : ""}`}
        >
          <img
            src={color.src}
            alt={color.alt}
            className="w-10 h-10 object-cover"
          />
        </button>
      ))}
    </div>
  );
};

const QuantityStepper = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
        className="px-2 py-1 border"
      >
        -
      </button>
      <input
        type="number"
        value={qty}
        min={1}
        onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
        className="w-12 text-center border"
      />
      <button onClick={() => setQty(qty + 1)} className="px-2 py-1 border">
        +
      </button>
      <button className="ml-2">
        <img src="/assets/icons/bookmark.svg" alt="Bookmark" />
      </button>
    </div>
  );
};

interface ProductInfoTabsProps {
  tabs: TabItem[];
}

const ProductInfoTabs = ({ tabs }: ProductInfoTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || "");
  return (
    <div className="mt-4">
      <div className="flex gap-2 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? "border-b-2 border-blue-600" : ""} pb-2`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-2">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && <div key={tab.id}>{tab.content}</div>,
        )}
      </div>
    </div>
  );
};

export default function ProductDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const mediaItems: MediaItem[] = [
    {
      type: "image",
      src: "/assets/images/img_baker_golden_leg.png",
      alt: "Baker Golden Leg Chair",
    },
    {
      type: "image",
      src: "/assets/images/img_a7406501_1.png",
      alt: "Alternate Image",
    },
    {
      type: "video",
      src: "/uploads/243ca376-4c8f-4018-ba46-740787a9953a.mp4",
      poster: "/assets/images/img_9746_1.png",
      alt: "Video Preview",
    },
    {
      type: "image",
      src: "/assets/images/img_a7406730_1.png",
      alt: "Angle Image",
    },
  ];

  const colors = [
    { src: "/assets/images/img_baker_golden_leg.png", alt: "Blue" },
    { src: "/assets/images/img_a7406501_1.png", alt: "Navy" },
    { src: "/assets/images/img_a7406730_1.png", alt: "Royal Blue" },
    { src: "/assets/images/img_a7403286_1.png", alt: "Cobalt Blue" },
  ];

  const tabs = [
    {
      id: "notes",
      label: "Notes",
      content: (
        <ul className="list-disc pl-4">
          <li>Delivery may vary.</li>
        </ul>
      ),
    },
    {
      id: "details",
      label: "Details",
      content: (
        <ul className="list-disc pl-4">
          <li>Dimensions: 52x61x85 cm</li>
        </ul>
      ),
    },
    {
      id: "rent",
      label: "Rent",
      content: (
        <ul className="list-disc pl-4">
          <li>Daily AED 45</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row gap-6">
      <ProductMedia
        mediaItems={mediaItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <div className="product-info-column flex-1">
        <h1 className="text-2xl font-bold">Baker Golden Leg Chair</h1>
        <p className="text-gray-500">SKU/Cod: ATH-SKU-000001</p>
        <p className="mt-2 text-xl font-semibold text-blue-600">
          AED 450 / day
        </p>
        <p className="mt-4 text-slate-700">
          Luxuriously designed Baker Golden Leg Chair with premium upholstery
          and a durable yet elegant silhouette, perfect for weddings and
          high-end events.
        </p>
        <h3 className="mt-5 text-lg font-semibold">Key specifications</h3>
        <ul className="list-disc pl-5 text-slate-600">
          <li>Dimensions: 52 x 61 x 85 cm</li>
          <li>Weight capacity: 120 kg</li>
          <li>Material: Solid wood frame with velvet padding</li>
          <li>Availability: In stock</li>
        </ul>
        <ColorSelector
          colors={colors}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          mediaItems={mediaItems}
        />
        <QuantityStepper />
        <div className="flex gap-2 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
            Call
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2">
            Chat
          </button>
        </div>
        <ProductInfoTabs tabs={tabs} />
      </div>
    </div>
  );
}
