import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "Smart Classrooms",
    description:
      "Digital tools, interactive lessons, and modern classrooms help every child stay engaged.",
    icon: "🖥️",
  },
  {
    title: "Holistic Growth",
    description:
      "Balanced academics, sports, arts, and value-building activities support full development.",
    icon: "🌱",
  },
  {
    title: "Experienced Teachers",
    description:
      "Dedicated educators guide students with empathy, discipline, and personalized attention.",
    icon: "👩‍🏫",
  },
  {
    title: "Safe Campus",
    description:
      "A secure, caring environment with strong safety practices gives parents peace of mind.",
    icon: "🛡️",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-gradient-to-br from-rose-50 via-white to-sky-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Our Features
            </p>
            <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
              Learn why Universal Kids Zone is the best choice.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From modern classrooms to a caring campus, our school brings together
              safety, creativity, and strong values to help every child thrive.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
                  {feature.icon}
                </div>
                <h2 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-600">
                  Why this matters
                </p>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Built for confident learners and supported by parents.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-700">
                  Our programs combine strong academics with outdoor learning,
                  technology-enabled classrooms, and close mentoring. Every child is
                  encouraged to discover their voice, build self-belief, and enjoy the
                  learning journey.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl bg-rose-50 p-6 text-slate-900">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                    Supportive teachers
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Personalized guidance helps each student progress at their own pace.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                    Creative activities
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Hands-on learning encourages curiosity, teamwork, and confidence.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                    Parent communication
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Regular updates keep families connected with every step of progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
