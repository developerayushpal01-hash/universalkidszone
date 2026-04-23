"use client"

import React, { useState } from "react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const classes = [
  { value: "", label: "Select Class" },
  { value: "nursery", label: "Nursery" },
  { value: "lkg", label: "LKG" },
  { value: "ukg", label: "UKG" },
  { value: "class1", label: "Class 1" },
  { value: "class2", label: "Class 2" },
  { value: "class3", label: "Class 3" },
  { value: "class4", label: "Class 4" },
  { value: "class5", label: "Class 5" },
  { value: "class6", label: "Class 6" },
  { value: "class7", label: "Class 7" },
  { value: "class8", label: "Class 8" },
]

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    mobileNo: "",
    class: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send data to backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-b from-red-50 to-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Admission <span className="text-red-600">Form</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Fill the form below to apply for admission at Universal Kids Zone School.
          </p>
        </div>
      </section> */}

      {/* Form Section with Transparent Blur Background */}
      <section className="relative min-h-[600px] overflow-hidden py-12">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/slider.png')",
          }}
        >
          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/70"></div>
        </div>

        {/* Form Container */}
        <div className="relative mx-auto max-w-2xl px-6">
          <div className="rounded-2xl border border-white/30 bg-white/80 p-8 shadow-2xl backdrop-blur-sm">
            {/* Close Button - Inside Form, Top Right */}
            <Link
              href="/"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
              aria-label="Close form"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
            
            {submitted ? (
              // Success Message
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mb-2 text-2xl font-bold text-slate-900">
                  Thank You!
                </h2>
                <p className="mb-6 text-slate-600">
                  Your admission form has been submitted successfully. We will contact you soon.
                </p>
                <Link
                  href="/"
                  className="inline-flex rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              // Admission Form
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="mb-6 text-center text-xl font-bold text-slate-900">
                  Student Admission Form
                </h2>

                {/* Student Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    placeholder="Enter student name"
                  />
                </div>

                {/* Father Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Father Name *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    placeholder="Enter father name"
                  />
                </div>

                {/* Mobile No */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                {/* Class Select Dropdown */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Select Class *
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  >
                    {classes.map((cls) => (
                      <option key={cls.value} value={cls.value}>
                        {cls.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Box */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700 hover:shadow-lg"
                >
                  Submit Admission Form
                </button>

                <p className="text-center text-sm text-slate-500">
                  * Required fields
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

