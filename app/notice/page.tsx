import React from "react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
  {
    tag: "Exam",
    tagClass: "bg-violet-100 text-violet-700",
    title: "Unit Test Schedule — May 2025",
    desc: "Unit tests for Classes 1-5 will be conducted from May 5-10, 2025. Syllabus sent via parent app.",
    posted: "April 2025",
  },
  {
    tag: "Notice",
    tagClass: "bg-amber-100 text-amber-700",
    title: "Parent-Teacher Meeting — April 30",
    desc: "PTM scheduled for Saturday, April 30. All parents are requested to attend for their child's progress report.",
    posted: "April 2025",
  },
]

export default function NoticePage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Notice <span className="text-red-600">Board</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Stay updated with the latest announcements, events, and important notices from Universal Kids Zone.
          </p>
        </div>
      </section>

      {/* Notice Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Pin Icon */}
                <div className="absolute right-4 top-4 text-red-400 opacity-0 transition-opacity group-hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z" />
                  </svg>
                </div>

                {/* Tag */}
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${notice.tagClass}`}
                >
                  {notice.tag}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-red-600">
                  {notice.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {notice.desc}
                </p>

                {/* Date */}
                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium text-slate-500">Posted: {notice.posted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Have Questions?
          </h2>
          <p className="mb-6 text-slate-400">
            Contact us for any queries regarding notices or school matters.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Contact Us
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}