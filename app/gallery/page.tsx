import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryItems = [
  {
    title: "Art & Craft",
    description:
      "Young artists explore color, texture, and creativity through guided projects.",
    icon: "🎨",
  },
  {
    title: "Sports Day",
    description:
      "Students enjoy teamwork, fitness, and friendly competition in every event.",
    icon: "🏆",
  },
  {
    title: "Library Time",
    description:
      "A calm reading space filled with books, stories, and learning adventures.",
    icon: "📚",
  },
  {
    title: "Science Lab",
    description:
      "Hands-on experiments bring curiosity and discovery to life for every learner.",
    icon: "🔬",
  },
  {
    title: "Music & Dance",
    description:
      "Creative expression through songs, rhythms, and movement is part of daily life.",
    icon: "🎶",
  },
  {
    title: "Nature Walk",
    description:
      "Outdoor learning connects children with nature, safety, and exploration.",
    icon: "🌿",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-gradient-to-br from-sky-50 via-white to-rose-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Gallery
            </p>
            <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
              Moments from Universal Kids Zone
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Explore bright classrooms, lively events, and happy students thriving across our campus.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-100 text-3xl">
                    {item.icon}
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="rounded-3xl bg-rose-50 p-6 text-slate-900">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">
                  See campus life
                </p>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Every picture tells the story of learning, friendship, and growth.
                </h2>
              </div>
              <div className="space-y-4 text-slate-700">
                <p>
                  Our gallery highlights the joyful experiences that shape student life at UKZ.
                  From classroom learning to school celebrations, every memory is captured with care.
                </p>
                <p>
                  Use this page to share with parents and visitors the energy and values that make our school special.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
