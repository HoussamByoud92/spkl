"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Sara El Haffid",
      role: "Nail Artistry Specialist",
      bio: "With extensive experience, Sara crafts timeless nail designs that captivate.",
      image: "/team-member-1.jpg",
    },
    {
      name: "Laila Bourid",
      role: "Lash Extension Expert",
      bio: "Expert in creating stunning looks tailored for every occasion.",
      image: "/team-member-2.jpg",
    },
    {
      name: "Youssef Benali",
      role: "Makeup Artist",
      bio: "Passionate for innovative nail techniques that highlight natural beauty.",
      image: "/team-member-3.jpg",
    },
    {
      name: "Karimi Aziz",
      role: "Beauty Consultant",
      bio: "Skilled in customizing operations and creating exceptional client experiences.",
      image: "/team-member-4.jpg",
    },
  ]

  const testimonials = [
    {
      text: "The team transformed my nails and lashes beautifully, and the makeup was flawless—truly a luxurious experience!",
      author: "Sara M.",
      role: "Fashion Blogger",
    },
    {
      text: "Every visit feels like a pampering session. Their attention to detail is unmatched and always leaves me glowing.",
      author: "Nadia K.",
      role: "Event Coordinator",
    },
    {
      text: "Professionalism and care define Velvet Beauty. My lashes and nails have never looked better, thanks to their skilled team.",
      author: "Leila K.",
      role: "Event Planner",
    },
    {
      text: "From start to finish, the service was impeccable—boosting my confidence with every detail perfected.",
      author: "Hasan T.",
      role: "Photographer",
    },
  ]

  const stats = [
    { icon: "👥", label: "Happy Clients", value: "500+" },
    { icon: "🏆", label: "Years Experience", value: "10+" },
    { icon: "⭐", label: "5-Star Reviews", value: "98%" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden md:pt-10 md:pb-10 bg-cover bg-center bg-no-repeat pb-10 pt-10"
        style={{
          backgroundImage: "url('/hero-beauty-salon.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#dbc08f]/70 via-[#dbc08f]/50 to-[#dbc08f]/30" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-lightest via-pink-lighter to-transparent rounded-full blur-3xl opacity-60 animate-float my-14" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-light via-pink-lighter to-transparent rounded-full blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-pink-lightest rounded-full border border-pink-light/50 animate-fade-in">
              <span className="text-xl animate-shimmer">✨</span>
              <span className="text-sm font-medium font-serif text-background">Our Story</span>
            </div>

            {/* Headline */}
            <h1 className="luxury-text md:text-6xl lg:text-7xl leading-tight text-white text-4xl">
              Discover Your
              <span className="block text-popover">Radiance</span>
            </h1>

            <p className="md:text-xl max-w-2xl mx-auto leading-relaxed text-primary-foreground font-semibold text-sm">
              At Velvet Beauty, we are dedicated to empowering confidence through beauty. Our mission is to
              provide expert nail, spa, hair, lash, makeup, and aesthetic services that elevate your style while
              embracing elegance and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img src="/hero-beauty-salon.jpg" alt="Our salon" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="md:text-4xl font-bold text-foreground text-2xl">
                Beauty Services That Elevate Your Confidence
              </h2>
              <p className="text-lg text-foreground">
                Meet the skilled professionals dedicated to enhancing your style and beauty.
              </p>
              <p className="text-muted-foreground">
                At Velvet Beauty, we believe that beauty is more than just appearance—it&#39;s about feeling
                confident and empowered. Our team of expert professionals is committed to providing personalized
                services that bring out your best self.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary/50 md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">
              Beauty Services That Elevate Your Confidence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the skilled professionals dedicated to enhancing your style and beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">
              Expert Beauty Care Tailored Just for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover heartfelt testimonials from our clients sharing their joy and confidence gained through our
              expert beauty treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
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
      <section className="py-20 md:py-32 text-primary-foreground bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="md:text-4xl font-bold mb-6 text-2xl">Ready to Experience Velvet Beauty?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover the Velvet Beauty difference.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#dbc08f] text-black rounded-full font-semibold hover:bg-[#c5ab7a] hover:shadow-lg transition-all hover:scale-105 bg-background"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
