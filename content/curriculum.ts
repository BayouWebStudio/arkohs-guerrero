export type Lesson = {
  title: string;
  minutes: number;
  format: "talking-head" | "overhead" | "screen" | "session" | "documentary";
};

export type Module = {
  number: number;
  title: string;
  tagline: string;
  lessons: Lesson[];
};

export const COURSE = {
  title: "Sacred Geometry Masterclass",
  subtitle: "Geometric tattooing from first construction to healed skin",
  instructor: "Raúl Wesche",
  foundingPrice: 297,
  regularPrice: 397,
};

export const MODULES: Module[] = [
  {
    number: 0,
    title: "Welcome",
    tagline: "How the course works and what you need",
    lessons: [
      { title: "Course trailer", minutes: 2, format: "documentary" },
      { title: "How to get the most from this course", minutes: 4, format: "talking-head" },
      { title: "Tools & materials: analog, digital, machine", minutes: 8, format: "overhead" },
    ],
  },
  {
    number: 1,
    title: "The Language of Sacred Geometry",
    tagline: "Compass-and-straightedge foundations every pattern is built on",
    lessons: [
      { title: "Why geometry? History, meaning, and precision as practice", minutes: 8, format: "talking-head" },
      { title: "Compass & straightedge: your first constructions", minutes: 12, format: "overhead" },
      { title: "Vesica piscis → seed of life → flower of life", minutes: 15, format: "overhead" },
      { title: "The golden ratio in composition", minutes: 10, format: "overhead" },
      { title: "Platonic solids & Metatron's cube", minutes: 12, format: "overhead" },
    ],
  },
  {
    number: 2,
    title: "Digital Construction Workflow",
    tagline: "Procreate and Vesica Studio, from rough idea to clean linework",
    lessons: [
      { title: "Analog vs digital: when I use each", minutes: 6, format: "talking-head" },
      { title: "Procreate setup: canvases, guides, symmetry", minutes: 12, format: "screen" },
      { title: "Building patterns in Vesica Studio", minutes: 15, format: "screen" },
      { title: "From rough sketch to clean, tattooable linework", minutes: 15, format: "screen" },
      { title: "My brush setup and why", minutes: 8, format: "screen" },
      { title: "Speed run: a full design in 20 minutes, narrated", minutes: 15, format: "screen" },
    ],
  },
  {
    number: 3,
    title: "Mandala Composition",
    tagline: "Rhythm, negative space, and complexity without clutter",
    lessons: [
      { title: "Anatomy of a mandala: rings, rhythm, radial balance", minutes: 12, format: "screen" },
      { title: "Positive & negative space", minutes: 10, format: "screen" },
      { title: "Layering complexity without clutter", minutes: 12, format: "screen" },
      { title: "Designing shading before you tattoo: the dotwork map", minutes: 12, format: "screen" },
      { title: "Critique: five mandalas, what works and what doesn't", minutes: 15, format: "screen" },
    ],
  },
  {
    number: 4,
    title: "Designing for the Body",
    tagline: "Skin is not paper — flow, placement, and large-scale work",
    lessons: [
      { title: "Skin is not paper: curvature, stretch, aging", minutes: 10, format: "talking-head" },
      { title: "Flow & placement: reading the body", minutes: 12, format: "session" },
      { title: "Small pieces: forearm, sternum, hand", minutes: 12, format: "screen" },
      { title: "Large scale: sleeves & back pieces", minutes: 18, format: "screen" },
      { title: "Wrapping geometry: distortion techniques", minutes: 12, format: "screen" },
      { title: "The consultation: a real client walkthrough", minutes: 12, format: "documentary" },
    ],
  },
  {
    number: 5,
    title: "Stencils & Application",
    tagline: "Getting a perfect design onto imperfect skin",
    lessons: [
      { title: "Stencil vs freehand: my decision framework", minutes: 8, format: "talking-head" },
      { title: "Printing & applying large multi-part stencils", minutes: 15, format: "session" },
      { title: "Freehand grid construction on skin", minutes: 15, format: "session" },
      { title: "Fixing placement mistakes before the needle", minutes: 7, format: "session" },
    ],
  },
  {
    number: 6,
    title: "Linework Execution",
    tagline: "Machine setup, body mechanics, and pulling perfect lines",
    lessons: [
      { title: "Machine, needles & voltage for precision linework", minutes: 12, format: "overhead" },
      { title: "Body mechanics: hand position & long lines", minutes: 12, format: "session" },
      { title: "Pulling straight lines on curved surfaces", minutes: 15, format: "session" },
      { title: "Line weights and when to vary them", minutes: 10, format: "session" },
      { title: "Real session: lining a mandala start to finish", minutes: 20, format: "session" },
    ],
  },
  {
    number: 7,
    title: "Dotwork & Shading",
    tagline: "Stipple gradients, whip shading, and even black packing",
    lessons: [
      { title: "Stipple density & gradients", minutes: 12, format: "session" },
      { title: "Whip shading vs pepper shading", minutes: 12, format: "session" },
      { title: "Solid blackwork: packing evenly", minutes: 12, format: "session" },
      { title: "Real session: shading the mandala", minutes: 18, format: "session" },
    ],
  },
  {
    number: 8,
    title: "Healing, Aging & Touch-ups",
    tagline: "Work that still looks sharp in ten years",
    lessons: [
      { title: "How geometric tattoos age", minutes: 10, format: "talking-head" },
      { title: "Aftercare that protects your lines", minutes: 8, format: "talking-head" },
      { title: "Touch-up policy & fixing healed work", minutes: 12, format: "session" },
    ],
  },
  {
    number: 9,
    title: "The Business of Geometric Tattooing",
    tagline: "Portfolio, social growth, pricing, and filling your books",
    lessons: [
      { title: "Building a specialized portfolio", minutes: 10, format: "talking-head" },
      { title: "Instagram that books clients: how I grew to 297K", minutes: 15, format: "talking-head" },
      { title: "Pricing multi-session work & deposits", minutes: 12, format: "talking-head" },
      { title: "Waitlists, books open/closed, and the client pipeline", minutes: 8, format: "talking-head" },
      { title: "Community: guest spots, conventions & OMF Geometry", minutes: 10, format: "talking-head" },
    ],
  },
  {
    number: 10,
    title: "Capstone: Full Project Documentary",
    tagline: "One piece, start to finish — consultation to healed result",
    lessons: [
      { title: "Documentary: a full project from consultation to healed photos", minutes: 35, format: "documentary" },
    ],
  },
];

export function totalMinutes(): number {
  return MODULES.flatMap((m) => m.lessons).reduce((sum, l) => sum + l.minutes, 0);
}

export function totalLessons(): number {
  return MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
}
