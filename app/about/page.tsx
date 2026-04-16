import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              Universal Kids Zone School
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We build strong foundations through joyful learning, disciplined values,
              and personal attention for every child.
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To nurture confident, curious, and responsible learners who are
                prepared for future challenges and opportunities.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To provide safe, engaging, and inclusive learning experiences with a
                balance of academics, creativity, and character building.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Our Promise</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every child receives care, guidance, and opportunities to grow in
                confidence, communication, and critical thinking.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#f5f5f5] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <article className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-3xl font-bold text-slate-800">Dear Parents and Students,</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                Creating a safe, fearless, and secure environment is the foremost
                priority for any institution that strives for excellence in education.
                Our students are the true assets of our nation, and it is our
                responsibility to nurture them with care, knowledge, and strong values.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                At our school, we are fully committed to providing quality education
                along with the overall development of every child. We believe that
                education is not just about academics, but also about building
                character, confidence, and responsibility.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                To turn our shared vision into reality, we seek your sincere
                cooperation, dedication, and discipline. Discipline is the foundation
                of success. It shapes personality, strengthens character, and helps
                individuals achieve their goals in life.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Let us work together with unity, respect, and determination to create
                a bright future for our children.
              </p>
              <p className="mt-8 text-xl font-bold text-slate-900">
                With best wishes,
              </p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                Mr. Jaison Joseph (M.A., B.Ed., MBA)
              </p>
              <p className="mt-1 text-lg italic text-slate-600">Principal</p>
            </article>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="Principal portrait"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Why Parents Choose Us</h2>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li>Experienced teachers with child-first approach</li>
              <li>Interactive learning with activities and projects</li>
              <li>Strong focus on discipline and values</li>
              <li>Safe campus with supportive environment</li>
              <li>Regular communication with parents</li>
              <li>Balanced academics, sports, and arts</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
