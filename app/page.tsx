"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { InteractiveGallery } from "@/components/interactive-gallery"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      title: "Signature Nail Art",
      description: "Bespoke nail designs crafted with precision and artistry. Each nail tells a story of elegance.",
      icon: "✨",
      image: "/nail-art-service.jpg",
    },
    {
      title: "Luxurious Spa Treatments",
      description: "Rejuvenating spa experiences designed to relax your mind and body with premium treatments.",
      icon: "🧖",
      image: "/spa-massage-treatment.jpg",
    },
    {
      title: "Professional Hairdressing",
      description: "Expert hair styling and treatments that enhance your natural beauty and confidence.",
      icon: "💇",
      image: "/hair-styling-service.jpg",
    },
  ]

  const testimonials = [
    {
      text: "Velvet Beauty is where luxury meets artistry. Every detail is perfection.",
      author: "Sara M.",
      role: "Fashion Blogger",
      image: "/client-testimonial-1.jpg",
      rating: 5,
    },
    {
      text: "The epitome of elegance. My experience was nothing short of transformative.",
      author: "Nadia B.",
      role: "Event Coordinator",
      image: "/client-testimonial-2.jpg",
      rating: 5,
    },
    {
      text: "Pure sophistication. I feel like royalty every time I visit.",
      author: "Youssef L.",
      role: "Graphic Designer",
      image: "/client-testimonial-3.jpg",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden md:pt-10 md:pb-10 pt-5 text-center pb-10">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 animate-float h-96 my-1.5 text-center" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div
              className={`transition-all duration-1000 space-y-2.5 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 animate-fade-in text-justify bg-secondary">
                <span className="text-xl animate-shimmer">✨</span>
                <span className="text-sm font-medium text-primary font-serif">Luxury Beauty Redefined</span>
              </div>

              {/* Main headline */}
              <div className="space-y-4">
                <h1 className="luxury-text md:text-7xl leading-tight text-5xl text-center lg:text-7xl">
                  Elevate Your
                  <span className="block bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse text-chart-4">
                    Radiance
                  </span>
                </h1>
                <p className="text-lg md:text-xl max-w-lg leading-relaxed text-foreground text-center font-medium">
                  Experience the pinnacle of luxury beauty. Where artistry meets sophistication, and every moment
                  becomes unforgettable.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/booking"
                  className="group px-8 py-4 bg-[#dbc08f] rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 luxury-shadow text-card"
                >
                  Book Your Experience
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center"
                >
                  Discover Services
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right image */}
            <div
              className={`relative h-96 md:h-96 lg:h-full flex items-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl" />
              <img
                src="/hero-beauty-salon.jpg"
                alt="Luxury beauty services at Velvet Beauty"
                className="relative w-full h-full object-cover rounded-3xl luxury-shadow-lg hover:shadow-2xl transition-all duration-500 leading-7"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white md:py-10 text-center pt-5 pb-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left image */}
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden luxury-shadow-lg hidden md:block">
              <img
                src="/hero-beauty-salon.jpg"
                alt="Velvet Beauty salon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right content */}
            <ScrollAnimation className="space-y-6">
              <div>
                <p className="text-primary font-serif text-lg mb-3">About Velvet Beauty</p>
                <h2 className="luxury-text text-4xl md:text-5xl mb-4">Luxury Beauty Redefined</h2>
                <p className="leading-relaxed text-foreground text-sm">
                  At Velvet Beauty, we believe beauty is an art form. For over a decade, we've been crafting
                  transformative experiences that celebrate individuality and elegance. Our team of expert artisans is
                  dedicated to delivering unparalleled luxury and sophistication in nail art, spa treatments,
                  hairdressing, and aesthetic services.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">98%</p>
                  <p className="text-sm text-muted-foreground">5-Star Reviews</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#dbc08f] rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 group text-card"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-secondary/30 to-background md:py-10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <p className="text-primary font-serif text-lg mb-4">Our Expertise</p>
              <h2 className="luxury-text md:text-6xl mb-6 text-4xl">Curated Beauty Experiences</h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed text-foreground">
                Each service is a masterpiece, designed to enhance your natural beauty and celebrate your individuality.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} className="h-full">
                <div
                  className="group relative h-full bg-white rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:-translate-y-3"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image container */}
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="luxury-text text-2xl">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      Explore
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <InteractiveGallery />

      <section className="bg-white md:py-10 py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <p className="text-primary font-serif text-lg mb-4">Client Stories</p>
              <h2 className="luxury-text md:text-6xl mb-6 text-4xl">Celebrated by Our Guests</h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed text-foreground">
                Discover the transformations and joy our clients experience at Velvet Beauty.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index}>
                <div
                  className="group relative bg-gradient-to-br from-white to-secondary/50 rounded-2xl p-8 luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border/30"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Star rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground mb-8 italic leading-relaxed font-light text-xl">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-serif text-foreground font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 luxury-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fillRule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fillOpacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollAnimation>
            <h2 className="luxury-text md:text-6xl mb-6 font-serif tracking-tight text-background text-3xl">
              Your Transformation Awaits
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Step into a world of luxury and elegance. Book your appointment today and discover the Velvet Beauty
              difference.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#dbc08f] text-black rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-background"
            >
              Reserve Your Slot
              <span>→</span>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}
