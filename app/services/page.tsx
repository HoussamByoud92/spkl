"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const mainServices = [
    {
      id: "nails",
      title: "Signature Nail Art",
      description: "Personalized nail treatments that combine creativity and precision for stunning results.",
      image: "/nail-art-service.jpg",
      features: [
        "Custom nail designs",
        "Premium gel polish",
        "Nail extensions",
        "Nail art with gems and embellishments",
        "Manicure and pedicure",
      ],
      price: "From 250 DH",
    },
    {
      id: "spa",
      title: "Luxurious Spa Treatments",
      description: "Rejuvenating spa experiences designed to relax your mind and body with premium treatments.",
      image: "/spa-massage-treatment.jpg",
      features: [
        "Full body massage",
        "Facial treatments",
        "Body scrubs and wraps",
        "Aromatherapy sessions",
        "Relaxation packages",
      ],
      price: "From 400 DH",
    },
    {
      id: "hair",
      title: "Professional Hairdressing",
      description: "Expert hair styling and treatments that enhance your natural beauty and confidence.",
      image: "/hair-styling-service.jpg",
      features: [
        "Hair cutting and styling",
        "Hair coloring and highlights",
        "Hair treatments and care",
        "Bridal hair styling",
        "Hair extensions",
      ],
      price: "From 300 DH",
    },
    {
      id: "lashes",
      title: "Lash Extensions",
      description: "Custom lash applications that add volume and length, accentuating your eyes beautifully.",
      image: "/lash-extensions-service.jpg",
      features: [
        "Classic lash extensions",
        "Volume lash extensions",
        "Hybrid lash extensions",
        "Lash lift and tint",
        "Lash maintenance and refills",
      ],
      price: "From 350 DH",
    },
    {
      id: "makeup",
      title: "Professional Makeup",
      description: "Expert makeup services tailored to highlight your unique features for any occasion.",
      image: "/makeup-artistry-service.jpg",
      features: ["Bridal makeup", "Event makeup", "Everyday makeup", "Makeup consultation", "Makeup lessons"],
      price: "From 300 DH",
    },
    {
      id: "aesthetic",
      title: "Aesthetic Services",
      description: "Advanced aesthetic treatments designed to enhance your natural beauty and skin health.",
      image: "/aesthetic-skincare-treatment.jpg",
      features: [
        "Skin rejuvenation",
        "Anti-aging treatments",
        "Skin tightening",
        "Facial contouring",
        "Personalized skincare plans",
      ],
      price: "From 500 DH",
    },
  ]

  const additionalServices = [
    {
      title: "Elegant Nail Design",
      description: "Custom nail designs and manicures crafted to suit your unique style.",
      icon: "✨",
    },
    {
      title: "Flawless Makeup Application",
      description: "Professional makeup services for any occasion, highlighting your natural beauty.",
      icon: "💄",
    },
    {
      title: "Relaxing Spa Treatments",
      description: "Pampering sessions designed to rejuvenate and relax your mind and body.",
      icon: "🧖",
    },
    {
      title: "Luxe Lash Extensions",
      description: "Long-lasting lash extensions that enhance your eyes effortlessly.",
      icon: "👁️",
    },
    {
      title: "Personalized Beauty Consultations",
      description: "Tailored advice to help you achieve the look you desire confidently.",
      icon: "💬",
    },
    {
      title: "Premium Beauty Packages",
      description: "Exclusive packages combining multiple services for the ultimate beauty experience.",
      icon: "🎁",
    },
  ]

  const testimonials = [
    {
      text: "The team's attention to detail and flawless results truly made me feel radiant and pampered.",
      author: "Sara L.",
      role: "Fashion Blogger",
    },
    {
      text: "Professional service with meticulous care; my lashes and nails have never looked better.",
      author: "Nadia K.",
      role: "Event Coordinator",
    },
    {
      text: "Velvet Beauty's makeup artistry boosted my confidence for a special occasion. Impeccable and long-lasting.",
      author: "Omar B.",
      role: "Graphic Designer",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-10 pb-30 bg-cover bg-center bg-no-repeat md:pb-20 md:pt-10"
        style={{ backgroundImage: "url('/nail-art-service.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#dbc08f]/70 via-[#dbc08f]/50 to-[#dbc08f]/30" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-lightest via-pink-lighter to-transparent rounded-full blur-3xl opacity-60 animate-float" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-light via-pink-lighter to-transparent rounded-full blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-pink-lightest rounded-full border border-pink-light/50 animate-fade-in">
              <span className="text-xl animate-shimmer">✨</span>
              <span className="text-sm font-medium font-serif text-card">Premium Beauty Services</span>
            </div>

            {/* Headline */}
            <h1 className="luxury-text md:text-6xl leading-tight text-white text-3xl lg:text-6xl">
              Elevate Your Style
              <span className="block text-chart-5">with Velvet Beauty</span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light text-background">
              Explore our expert nail, spa, hair, lash, makeup, and aesthetic services designed to enhance your natural
              beauty and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-6 text-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{service.title}</h2>
                    <p className="text-lg text-foreground">{service.description}</p>
                  </div>

                  <div className="space-y-3 text-left">
                    <h3 className="font-semibold text-foreground">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground">
                          <span className="text-primary text-lg">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Link
                      href="/booking"
                      className="px-6 py-3 bg-[#dbc08f] text-black rounded-full font-semibold hover:bg-[#c5ab7a] transition-all flex md:inline-flex items-center gap-2 group w-full md:w-auto justify-center md:justify-start"
                    >
                      Book Service
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-secondary/50 md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">
              Expert Beauty, Spa, Hair & Aesthetic Artistry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our signature services designed to elevate your natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">
              Expert Beauty Services Tailored for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover heartfelt reviews from our clients who love their transformed looks and the confidence Velvet
              Beauty brings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg">
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 text-primary-foreground bg-chart-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Velvet Beauty difference.
          </p>
          <Link
            href="/booking"
            className="flex md:inline-flex items-center gap-2 px-8 py-3 bg-[#dbc08f] rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 w-full md:w-auto justify-center text-foreground bg-card"
          >
            Book Now
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
