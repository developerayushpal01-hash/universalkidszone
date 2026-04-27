"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import { useEffect, useState } from "react"

const slides = [
  {
    src: "/assets/slider.png",
    alt: "Universal Kids Zone slider image 1",
  },
   {
    src: "/assets/slider.png",
    alt: "Universal Kids Zone slider image 1",
  },
]

const featureItems = [
  {
    title: "Smart Classrooms",
    desc: "Interactive digital boards and modern tech keep learning engaging and effective.",
    icon: "\u{1F5A5}\uFE0F",
  },
  {
    title: "Safe Environment",
    desc: "CCTV, child-safe spaces, and trained staff ensure security at all times.",
    icon: "\u{1F6E1}\uFE0F",
  },
  {
    title: "Expert Teachers",
    desc: "Experienced educators dedicated to bringing out the best in every child.",
    icon: "\u{1F469}\u200D\u{1F3EB}",
  },
  {
    title: "Fun Learning",
    desc: "Activity-based curriculum with games, crafts, and projects every day.",
    icon: "\u{1F3AE}",
  },
]

const galleryItems = [
  {
    title: "Art Class",
    icon: "\u{1F3A8}",
    gradient: "from-rose-100 to-red-50",
    image: "/assets/slider.png", // Replace with actual image for Art Class
  },
  {
    title: "Sports Day",
    icon: "\u{1F3C6}",
    gradient: "from-lime-100 to-green-50",
    image: "/assets/slider.png", // Replace with actual image for Sports Day
  },
  {
    title: "Library Hour",
    icon: "\u{1F4DA}",
    gradient: "from-amber-100 to-yellow-50",
    image: "/assets/slider.png", // Replace with actual image for Library Hour
  },
  {
    title: "Annual Function",
    icon: "\u{1F3AD}",
    gradient: "from-lime-100 to-emerald-50",
    image: "/assets/slider.png", // Replace with actual image for Annual Function
  },
  {
    title: "Science Lab",
    icon: "\u{1F52C}",
    gradient: "from-pink-100 to-rose-50",
    image: "/assets/slider.png", // Replace with actual image for Science Lab
  },
  {
    title: "Nature Walk",
    icon: "\u{1F331}",
    gradient: "from-sky-100 to-blue-50",
    image: "/assets/slider.png", // Replace with actual image for Nature Walk
  },
]

const notices = [
  {
    tag: "Admission",
    tagClass: "bg-rose-100 text-rose-700",
    title: "Admissions Open for Session 2025-26",
    desc: "Nursery to Class 5 seats available. Limited seats - apply now to secure your child's future with UKZ.",
    posted: "April 2025",
  },
  {
    tag: "Event",
    tagClass: "bg-lime-100 text-emerald-700",
    title: "Annual Sports Day - May 15, 2025",
    desc: "Get ready for a day of fun, fitness, and friendly competition. All students and parents are warmly invited!",
    posted: "April 2025",
  },
  {
    tag: "Holiday",
    tagClass: "bg-sky-100 text-sky-700",
    title: "Summer Break - June 1 to July 15",
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

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")

    if (!cards.length) {
      return
    }

    cards.forEach((card) => card.classList.add("scroll-reveal-ready"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-active")
          } else {
            entry.target.classList.remove("scroll-reveal-active")
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      },
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const goToPrev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActive((prev) => (prev + 1) % slides.length)
  }

  return (
    <main className="min-h-screen w-full bg-white ">
      <section id="home" className="relative -mt-px w-full">
        <div className="relative mx-auto aspect-[21/9] w-full max-w-[1920px] overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={`${slide.src}-${idx}`}
                className="relative h-full min-w-full shrink-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={idx === 0}
                  className="h-full w-full object-contain"
                />
                <div className="absolute inset-0 " />
                <div className="absolute inset-0 " />
              </div>
            ))}
          </div>


          {slides.length > 1 && (
            <>
              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-white shadow-xl backdrop-blur">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActive(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === active ? "w-9 bg-rose-500" : "w-2.5 bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <button
                aria-label="Previous slide"
                onClick={goToPrev}
                className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white shadow-lg backdrop-blur transition hover:bg-black/55 md:left-6"
              >
                {"<"}
              </button>
              <button
                aria-label="Next slide"
                onClick={goToNext}
                className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white shadow-lg backdrop-blur transition hover:bg-black/55 md:right-6"
              >
                {">"}
              </button>
            </>
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
           Universal kids zone, one of the best schools in Pithampur, has a vibrant
            atmosphere for teaching and learning and a faculty rich in talent and
            experience. With enterprise and endeavour as its watchwords, the school
            keeps an eye on new educational initiatives so the road to excellence
            becomes smoother, more navigable, and more accessible. Quality
            enhancement is its mission-creating a win-win for students with a
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
                  {"\u2713"}
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
              src="/assets/aboutimage.png"
              alt="School building exterior"
              width={800}
              height={520}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/0" />
           
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
          {featureItems.map((item, index) => (
            <div
              key={item.title}
              data-scroll-reveal
              style={{ transitionDelay: `${index * 120}ms` }}
              className="feature-card-reveal flex h-full flex-col items-center gap-4 rounded-3xl bg-white px-6 py-8 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.12)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.16)] hover:ring-emerald-100"
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
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              data-scroll-reveal
              className={`gallery-card-reveal relative flex min-h-[220px] w-full max-w-[370px] flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br ${item.gradient} px-6 pt-6 pb-8 text-center shadow-[0_18px_40px_-22px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_-18px_rgba(0,0,0,0.16)] hover:ring-rose-100`}
              style={
                {
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transitionDelay: `${index * 140}ms`,
                  "--gallery-rotate": `${index % 2 === 0 ? "-7deg" : "7deg"}`,
                  "--gallery-shift": `${index % 3 === 0 ? "-54px" : "54px"}`,
                } as CSSProperties
              }
            >
              <div className="gallery-card-overlay absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-xs"></div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="gallery-card-icon mb-2 text-4xl">{item.icon}</div>
                <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Replace placeholders with real school photos -{" "}
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
                  <span className="text-lg">{"\u{1F5D3}\uFE0F"}</span>
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
                  Send Message {"\u2709"}
                </button>
              </form>
            </div>

            <div className="rounded-[28px] border-2 border-dashed border-rose-200 bg-[#f3f2eb] p-6 sm:p-10">
              <div className="flex h-full min-h-[560px] flex-col items-center justify-center text-center">
                <div className="text-6xl">{"\u{1F4CD}"}</div>
                <h4 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
                  UKZ Universal Kids Zone School
                </h4>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                  Universal Colony
                  <br />
                  Pithampur, Dist - Dhar M.P. - 454775
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-lg font-bold text-rose-600 sm:text-xl">{"\u{1F4DE}"} +91 88396 47920</p>
                  <p className="text-lg font-semibold text-emerald-700 sm:text-xl">{"\u2709"} info@ukzschool.com</p>
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


