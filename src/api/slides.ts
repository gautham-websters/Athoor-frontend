import slidesData from "../data/slides.json";

export type Slide = {
  id: number;
  bgImage: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
};

export const slides = slidesData as Slide[];

const useMock = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

function normalizeSlides(payload: unknown): Slide[] {
  if (Array.isArray(payload)) return payload as Slide[];
  if (
    payload &&
    typeof payload === "object" &&
    Array.isArray((payload as { slides?: unknown }).slides)
  ) {
    return (payload as { slides: Slide[] }).slides;
  }
  if (
    payload &&
    typeof payload === "object" &&
    Array.isArray((payload as { data?: unknown }).data)
  ) {
    return (payload as { data: Slide[] }).data;
  }
  return [];
}

export async function getSlides(): Promise<Slide[]> {
  if (useMock) return slides;

  // On Windows: $Env:NODE_EXTRA_CA_CERTS='D:\repos\Athoor-frontend\localhost.crt' npm run dev
    // On macOS/Linux: export NODE_EXTRA_CA_CERTS='D:\repos\Athoor-frontend\localhost.crt'
  const res = await fetch("https://localhost:7067/api/home/index", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to load slides");

  const payload = await res.json();
  return normalizeSlides(payload);
}
