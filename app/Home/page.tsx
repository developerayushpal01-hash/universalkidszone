"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  {
    src: "/assets/slider.jpg",
    alt: "Universal Kids Zone slider image 1",
  },
  // {
  //   src: "/assets/slider1.avif",
  //   alt: "Universal Kids Zone slider image 2",
  // },
]

const featureItems = [
  {
    title: "Smart Classrooms",
    desc: "Interactive digital boards and modern tech keep learning engaging and effective.",
    icon: "🖥️",
  },
  {
    title: "Safe Environment",
    desc: "CCTV, child-safe spaces, and trained staff ensure security at all times.",
    icon: "🛡️",
  },
  {
    title: "Expert Teachers",
    desc: "Experienced educators dedicated to bringing out the best in every child.",
    icon: "👩‍🏫",
  },
  {
    title: "Fun Learning",
    desc: "Activity-based curriculum with games, crafts, and projects every day.",
    icon: "🎮",
  },
]

const galleryItems = [
  {
    title: "Art Class",
    icon: "🎨",
    gradient: "from-rose-100 to-red-50",
    image: "/assets/slider.jpg", // Replace with actual image for Art Class
  },
  {
    title: "Sports Day",
    icon: "🏆",
    gradient: "from-lime-100 to-green-50",
    image: "/assets/slider1.avif", // Replace with actual image for Sports Day
  },
  {
    title: "Library Hour",
    icon: "📚",
    gradient: "from-amber-100 to-yellow-50",
    image: "/assets/slider.avif", // Replace with actual image for Library Hour
  },
  {
    title: "Annual Function",
    icon: "🎭",
    gradient: "from-lime-100 to-emerald-50",
    image: "/assets/slider.jpg", // Replace with actual image for Annual Function
  },
  {
    title: "Science Lab",
    icon: "🔬",
    gradient: "from-pink-100 to-rose-50",
    image: "/assets/slider1.avif", // Replace with actual image for Science Lab
  },
  {
    title: "Nature Walk",
    icon: "🌱",
    gradient: "from-sky-100 to-blue-50",
    image: "/assets/slider.avif", // Replace with actual image for Nature Walk
  },
]

const notices = [
  {
    tag: "Admission",
    tagClass: "bg-rose-100 text-rose-700",
    title: "Admissions Open for Session 2025–26",
    desc: "Nursery to Class 5 seats available. Limited seats — apply now to secure your child's future with UKZ.",
    posted: "April 2025",
  },
  {
    tag: "Event",
    tagClass: "bg-lime-100 text-emerald-700",
    title: "Annual Sports Day — May 15, 2025",
    desc: "Get ready for a day of fun, fitness, and friendly competition. All students and parents are warmly invited!",
    posted: "April 2025",
  },
  {
    tag: "Holiday",
    tagClass: "bg-sky-100 text-sky-700",
    title: "Summer Break — June 1 to July 15",
    desc: "School will remain closed for summer holidays. Extra classes and summer camps available on request.",
    posted: "March 2025",
  },
]

export default function HomePage() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length > 1) {
      const id = setInterval(
        () => setActive((prev) => (prev + 1) % slides.length),
        5200,
      )
      return () => clearInterval(id)
    }
  }, [])

  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      <section id="home" className="relative w-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
          {slides.map((slide, idx) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={idx === 0}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                idx === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {slides.length > 1 && (
            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-slate-900 shadow-xl backdrop-blur">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setActive(idx)}
                  suppressHydrationWarning={true}
                  className={`h-3 w-3 rounded-full transition duration-300 ${
                    idx === active
                      ? "bg-rose-700 shadow-[0_0_0_3px_rgba(244,63,94,0.35)]"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        id="about"
        className="relative isolate mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center"
      >
        <div className="flex-1 space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            About Our School
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Vibrant campus, personal attention, and a future-ready outlook.
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Jaison&apos;s Academy, one of the best schools in MHOW, has a vibrant
            atmosphere for teaching and learning and a faculty rich in talent and
            experience. With enterprise and endeavour as its watchwords, the school
            keeps an eye on new educational initiatives so the road to excellence
            becomes smoother, more navigable, and more accessible. Quality
            enhancement is its mission—creating a win-win for students with a
            personalized and positive approach to education.
          </p>
          <ul className="grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
            {[
              "Active Learning",
              "Safe Environment",
              "Expert Teachers",
              "Sports Section",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white shadow">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex-1">
          <div className="absolute -left-6 top-6 h-20 w-20 rounded-full bg-amber-400 blur-xl" />
          <div className="absolute -right-6 bottom-8 h-16 w-16 rounded-full bg-rose-200/70 blur-2xl" />
          <div className="relative overflow-hidden [border-radius:38%_62%_46%_54%/58%_42%_58%_42%]">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
              alt="School building exterior"
              width={800}
              height={520}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/0" />
            <button
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-rose-600 shadow-lg transition hover:scale-105"
              aria-label="Play campus video"
              suppressHydrationWarning={true}
            >
              ►
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-6 pb-16 text-center text-slate-900">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
          Why choose us
        </p>
        <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
          What Makes <span className="text-rose-600">UKZ</span> Special
        </h3>
        <p className="mt-3 text-base text-slate-600">
          We go beyond textbooks to create confident, well-rounded learners.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col items-center gap-4 rounded-3xl bg-white px-6 py-8 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.12)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.16)] hover:ring-emerald-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-300 bg-emerald-50 text-3xl">
                <span className="translate-y-[1px]">{item.icon}</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="mx-auto w-full max-w-7xl px-6 pb-20 text-center text-slate-900"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
          Gallery
        </p>
        <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
          School <span className="text-rose-600">Memories</span>
        </h3>
        <p className="mt-3 text-base text-slate-600">
          Glimpses of joy, learning, and growth from our campus.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`relative flex min-h-[220px] w-full max-w-[370px] flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br ${item.gradient} px-6 pt-6 pb-8 text-center shadow-[0_18px_40px_-22px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.16)] hover:ring-rose-100`}
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-xs"></div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Replace placeholders with real school photos —{" "}
          <span className="font-semibold text-rose-600">recommended size: 800×600px</span>
        </p>
      </section>

      <section
        id="notice"
        className="border-t border-slate-100 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Notice Board
          </p>
          <div className="mt-2 text-center">
            <h3 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Latest <span className="text-rose-600">Updates</span>
            </h3>
            <div className="mx-auto mt-1 h-1 w-24 rounded-full bg-rose-500" />
          </div>
          <p className="mt-3 text-center text-base text-slate-600">
            Stay informed about important school news, events, and announcements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {notices.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl bg-white px-7 py-8 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.15)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_-26px_rgba(0,0,0,0.2)]"
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide ${item.tagClass}`}
                >
                  {item.tag}
                </span>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-700">{item.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-slate-500">
                  <span className="text-lg">🗓️</span>
                  <span>Posted: {item.posted}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f7f7f7] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <h3 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Contact <span className="text-rose-600">Us</span>
            </h3>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-rose-500" />
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-600 sm:text-lg">
              We&apos;re here to answer all your questions about admissions, fees, and curriculum.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] bg-[#efefef] p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.22)] sm:p-10">
              <h4 className="text-xl font-bold text-slate-900 sm:text-2xl">Send Us a Message</h4>

              <form className="mt-7 space-y-5">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm">
                    Parent / Student Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    suppressHydrationWarning={true}
                    className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    suppressHydrationWarning={true}
                    className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm">
                    Class Interested In
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Nursery, Class 1, Class 3..."
                    suppressHydrationWarning={true}
                    className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm">
                    Your Message
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Ask about admissions, fees, curriculum, timings..."
                    suppressHydrationWarning={true}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                  />
                </label>

                <button
                  type="button"
                  suppressHydrationWarning={true}
                  className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-full bg-rose-600 px-6 text-base font-semibold text-white shadow-[0_20px_50px_-30px_rgba(239,68,68,0.8)] transition hover:bg-rose-700 sm:text-lg"
                >
                  Send Message ✉
                </button>
              </form>
            </div>

            <div className="rounded-[28px] border-2 border-dashed border-rose-200 bg-[#f3f2eb] p-6 sm:p-10">
              <div className="flex h-full min-h-[560px] flex-col items-center justify-center text-center">
                <div className="text-6xl">📍</div>
                <h4 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
                  UKZ Universal Kids Zone School
                </h4>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                  Universal Colony
                  <br />
                  Pithampur, Dist - Dhar M.P. — 454775
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-lg font-bold text-rose-600 sm:text-xl">📞 +91 88396 47920</p>
                  <p className="text-lg font-semibold text-emerald-700 sm:text-xl">✉ info@ukzschool.com</p>
                </div>

                <a
                  href="https://maps.app.goo.gl/TeMDVHwKPxhY6AVb9"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-rose-600 px-10 text-sm font-semibold text-white transition hover:bg-rose-700 sm:text-base"
                >
                  Get Directions on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
