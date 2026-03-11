"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, title: "Nail Art Design", image: "/gallery-nail-design-1.jpg" },
    { id: 2, title: "Lash Extensions", image: "/lash-extensions-service.jpg" },
    { id: 3, title: "Professional Makeup", image: "/makeup-artistry-service.jpg" },
    { id: 4, title: "Beauty Services", image: "/hero-beauty-salon.jpg" },
    { id: 5, title: "Nail Art Design", image: "/gallery-nail-design-2.jpg" },
    { id: 6, title: "Lash Extensions", image: "/lash-extensions-service.jpg" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden md:pb-20 md:pt-10 bg-cover bg-center bg-no-repeat pt-5 pb-10"
        style={{ backgroundImage: "url('/nail-art-service.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#dbc08f]/70 via-[#dbc08f]/50 to-[#dbc08f]/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 animate-fade-in">
              <span className="text-xl text-white animate-shimmer">✨</span>
              <span className="text-sm font-medium text-white font-serif">Our Portfolio</span>
            </div>

            {/* Headline */}
            <h1 className="luxury-text md:text-6xl leading-tight text-white text-4xl lg:text-6xl">
              Gallery of
              <span className="block text-secondary">Transformations</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our stunning portfolio of nail art, lash extensions, and makeup transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-2.5 md:pb-10 md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
