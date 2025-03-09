import { Disc, Mic, Music, Award, Radio, Headphones } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center glitch-text">
          <span className="text-neon-yellow">ABOUT</span> <span className="text-white">THE</span>{" "}
          <span className="text-white">ARTIST</span>
        </h1>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="vhs-effect rounded-lg overflow-hidden mb-8">
            <img src="/placeholder.svg?height=600&width=1200" alt="Artist portrait" className="w-full h-auto" />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-6">
              Born in the golden era of R&B, I grew up surrounded by the iconic sounds of the 90s. My music journey
              began at an early age, influenced by legends like Boyz II Men, TLC, Janet Jackson, and Aaliyah.
            </p>

            <p className="text-xl leading-relaxed mb-6">
              With a passion for blending nostalgic 90s vibes with contemporary production, I've created a signature
              sound that pays homage to the classics while pushing the boundaries of modern R&B.
            </p>

            <p className="text-xl leading-relaxed mb-6">
              My debut album "Retro Rhythms" received critical acclaim for its authentic recreation of the 90s sound,
              complete with smooth vocals, rich harmonies, and infectious beats that transport listeners back to the
              golden age of R&B.
            </p>

            <p className="text-xl leading-relaxed">
              When I'm not in the studio crafting new tracks, I'm performing live shows that capture the energy and
              emotion of 90s concert experiences, complete with choreography and visual aesthetics that celebrate this
              influential era in music history.
            </p>
          </div>
        </div>

        {/* Influences */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-neon-yellow">INFLUENCES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-neon-yellow/30">
              <h3 className="text-xl font-bold mb-4 text-white">Early Years</h3>
              <p className="text-gray-400">
                Growing up in the 90s, I was surrounded by the sounds of New Jack Swing, R&B ballads, and the emerging
                neo-soul movement. Artists like Jodeci, SWV, and Mary J. Blige shaped my early musical sensibilities.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-white/30">
              <h3 className="text-xl font-bold mb-4 text-white">Musical Training</h3>
              <p className="text-gray-400">
                I studied vocal performance and music production, diving deep into the techniques that made 90s R&B so
                distinctive – from the layered vocal harmonies to the signature drum patterns and synth sounds.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-neon-yellow/30">
              <h3 className="text-xl font-bold mb-4 text-white">Modern Fusion</h3>
              <p className="text-gray-400">
                Today, I blend classic 90s R&B elements with contemporary production techniques, creating a sound that's
                both nostalgic and fresh. My work bridges generations while maintaining the soulful essence of 90s
                rhythm and blues.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20 retro-grid p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-neon-yellow">ACHIEVEMENTS</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Award className="text-neon-yellow" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Best New Artist</h3>
                <p className="text-gray-400">
                  Recognized for outstanding contribution to the revival of 90s R&B sound in the modern music landscape.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Disc className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Gold Record</h3>
                <p className="text-gray-400">
                  Debut album "Retro Rhythms" achieved gold status with over 500,000 units sold worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Mic className="text-neon-yellow" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Sold-Out Tour</h3>
                <p className="text-gray-400">
                  First national tour sold out in all 15 cities, bringing the authentic 90s R&B experience to fans
                  across the country.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Music className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Streaming Success</h3>
                <p className="text-gray-400">
                  Over 10 million streams across all platforms, with a dedicated following of 90s R&B enthusiasts.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Radio className="text-neon-yellow" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Radio Play</h3>
                <p className="text-gray-400">
                  Singles featured on major radio stations specializing in both throwback and contemporary R&B formats.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Headphones className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Critical Acclaim</h3>
                <p className="text-gray-400">
                  Received 5-star reviews from major music publications for authentic recreation of the 90s R&B sound.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="text-5xl text-neon-yellow mb-6">"</div>
          <blockquote className="text-2xl italic mb-6">
            My mission is to bring back the authentic sound and feel of 90s R&B while adding my own contemporary twist.
            It's about honoring the legacy while creating something new.
          </blockquote>
          <div className="text-5xl text-neon-yellow">"</div>
        </div>
      </div>
    </div>
  )
}

