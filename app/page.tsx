export default function Home() {
  const whatsappLink =
    "https://wa.me/254706696404?text=Hello%20Lily%2C%20I%20came%20across%20your%20video%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20editing%20or%20social%20media%20content%20opportunity.";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07111f] text-[#f5f7fa]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#"
            className="text-lg font-black uppercase tracking-[-0.04em] sm:text-xl"
          >
            Lily Wahu<span className="text-[#4da3ff]">.</span>
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden items-center gap-7 text-sm font-semibold text-[#b8c7d9] md:flex">
              <a
                href="#work"
                className="transition-colors hover:text-[#4da3ff]"
              >
                Work
              </a>

              <a
                href="#about"
                className="transition-colors hover:text-[#4da3ff]"
              >
                About
              </a>

              <a
                href="#services"
                className="transition-colors hover:text-[#4da3ff]"
              >
                Services
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-[#4da3ff]"
              >
                Contact
              </a>
            </div>

            <a
              href="/documents/Lily-Wahu-Ngugi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white/30 px-5 py-2.5 text-xs font-bold uppercase transition duration-300 hover:border-[#4da3ff] hover:bg-[#4da3ff] hover:text-[#07111f] sm:block"
            >
              CV
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#4da3ff] px-4 py-2.5 text-xs font-bold uppercase text-[#07111f] transition duration-300 hover:scale-105 hover:bg-[#7cc4ff] sm:px-5"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#10243a] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8d6e5] sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#4da3ff]" />
                Video Editor · Social Media Content
              </div>

              <h1 className="max-w-4xl text-[3.5rem] font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[6.8rem]">
                I make
                <span className="block">content</span>

                <span className="block text-[#6f8aa6]">
                  people stop
                </span>

                <span className="block">
                  to watch<span className="text-[#4da3ff]">.</span>
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-[#91a4b8] md:text-lg md:leading-8">
                Short-form video editing and social-media content for
                properties, businesses, and brands that want to stand
                out online.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-[#4da3ff] px-6 py-4 text-xs font-bold uppercase tracking-wide text-[#07111f] transition duration-300 hover:-translate-y-1 hover:bg-[#7cc4ff]"
                >
                  View My Work →
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:border-[#4da3ff] hover:bg-[#4da3ff] hover:text-[#07111f]"
                >
                  Hire Me
                </a>
              </div>
            </div>

            {/* Hero Video */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -right-3 -top-3 z-10 hidden rounded-full bg-[#4da3ff] px-5 py-3 text-[10px] font-black uppercase tracking-widest text-[#07111f] shadow-lg sm:block">
                Creative
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-[#31506e] bg-[#050b14] shadow-[10px_10px_0px_#10243a]">
                <video
                  className="aspect-[9/13] w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/videos/property-tour.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[#050b14]/85 px-5 py-4 text-white backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8c7d9]">
                    Featured Work
                  </span>

                  <span className="text-[#4da3ff]">01</span>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Strip */}
          <div className="mt-20 overflow-hidden border-y border-[#31506e] py-5">
            <div className="flex min-w-max items-center gap-8 text-sm font-black uppercase tracking-[0.15em] text-[#dbe7f2]">
              <span>Video Editing</span>
              <span className="text-[#4da3ff]">✦</span>
              <span>Social Media</span>
              <span className="text-[#4da3ff]">✦</span>
              <span>Property Content</span>
              <span className="text-[#4da3ff]">✦</span>
              <span>Short-form Video</span>
              <span className="text-[#4da3ff]">✦</span>
              <span>Video Editing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="bg-[#050b14] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">
                01 / Selected Work
              </p>

              <h2 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-6xl md:text-7xl">
                My Work<span className="text-[#4da3ff]">.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#71869c] md:text-right">
              Portfolio practice projects exploring property
              marketing, social-media storytelling, and short-form
              content.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Video 1 */}
            <article className="group">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#1c354d] bg-[#07111f]">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#4da3ff] px-3 py-2 text-[9px] font-black uppercase tracking-widest text-[#07111f]">
                  Property
                </span>

                <video
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/videos/property-tour.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    Property Apartment Tour
                  </h3>

                  <span className="text-sm text-[#526b83]">01</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#71869c]">
                  A short-form apartment tour using clean pacing,
                  transitions, text overlays, and visual adjustments.
                </p>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#4da3ff]">
                  CapCut · PowerDirector
                </p>
              </div>
            </article>

            {/* Video 2 */}
            <article className="group">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#1c354d] bg-[#07111f]">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#e7f2ff] px-3 py-2 text-[9px] font-black uppercase tracking-widest text-[#07111f]">
                  Social Reel
                </span>

                <video
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/videos/Property Reel.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    Fast Property Reel
                  </h3>

                  <span className="text-sm text-[#526b83]">02</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#71869c]">
                  A fast-paced property reel designed for TikTok and
                  Instagram using quick cuts, keyframe movement, and
                  concise on-screen text.
                </p>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#4da3ff]">
                  CapCut · PowerDirector · InShot
                </p>
              </div>
            </article>

            {/* Video 3 */}
            <article className="group">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#1c354d] bg-[#07111f]">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#4da3ff] px-3 py-2 text-[9px] font-black uppercase tracking-widest text-[#07111f]">
                  Education
                </span>

                <video
                  className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/videos/rental-tips.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    Rental Tips
                  </h3>

                  <span className="text-sm text-[#526b83]">03</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#71869c]">
                  An educational social-media video combining
                  property visuals, a strong hook, text overlays, and
                  a clear call-to-action.
                </p>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#4da3ff]">
                  CapCut · InShot
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-[#07111f] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#71869c]">
                02 / About Me
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                Creative
                <span className="block text-[#617990]">mind.</span>
                Technical
                <span className="block text-[#4da3ff]">edge.</span>
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="max-w-2xl text-xl font-medium leading-8 text-[#e5edf5] md:text-2xl md:leading-9">
                I am an ICT graduate focused on video editing,
                short-form content creation, and social-media
                content.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#91a4b8]">
                I use CapCut, PowerDirector, and InShot to create
                engaging visual content. My technical background in
                web development also gives me an understanding of
                digital platforms, problem-solving, and the way
                people interact with online products.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Video Editing",
                  "Short-form Content",
                  "Social Media",
                  "Property Content",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#31506e] px-4 py-2 text-xs font-bold uppercase text-[#c8d6e5] transition hover:border-[#4da3ff] hover:text-[#4da3ff]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-[#0d1b2a] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#4da3ff]">
            03 / What I Do
          </p>

          <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl">
            Content that has
            <span className="block text-[#4da3ff]">a purpose.</span>
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {/* Service 1 */}
            <div className="rounded-[1.5rem] border border-[#31506e] bg-[#10243a] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#4da3ff]">
              <span className="text-sm font-black text-[#4da3ff]">
                01
              </span>

              <h3 className="mt-12 text-2xl font-black uppercase">
                Video Editing
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#91a4b8]">
                Short-form edits with clean cuts, transitions,
                keyframes, text overlays, pacing, and visual
                adjustments.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-[1.5rem] border border-[#31506e] bg-[#10243a] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#4da3ff]">
              <span className="text-sm font-black text-[#4da3ff]">
                02
              </span>

              <h3 className="mt-12 text-2xl font-black uppercase">
                Social Media
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#91a4b8]">
                Content designed for platforms such as TikTok,
                Instagram, and Facebook.
              </p>
            </div>

            {/* Service 3 */}
            <div className="rounded-[1.5rem] border border-[#31506e] bg-[#10243a] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#4da3ff]">
              <span className="text-sm font-black text-[#4da3ff]">
                03
              </span>

              <h3 className="mt-12 text-2xl font-black uppercase">
                Property Content
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#91a4b8]">
                Apartment tours, property reels, promotional videos,
                and visual content built to showcase spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-y border-[#1c354d] bg-[#050b14] px-5 py-16 text-white sm:px-8 md:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#617990]">
              Tools
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight">
              I work with
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {["CapCut", "PowerDirector", "InShot"].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#31506e] px-5 py-3 text-xs font-bold uppercase text-[#c8d6e5] transition hover:border-[#4da3ff] hover:text-[#4da3ff]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#07111f] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#31506e] bg-[#10243a] p-8 text-white shadow-[10px_10px_0px_#4da3ff] sm:p-12 md:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">
              04 / Contact
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                  Got a project?

                  <span className="block text-[#617990]">
                    Let's make it
                  </span>

                  <span className="block text-[#4da3ff]">
                    worth watching.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-base leading-7 text-[#91a4b8] md:text-lg">
                  Available for video editing, social-media content,
                  and property-focused content opportunities.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#4da3ff] px-6 py-4 text-xs font-black uppercase text-[#07111f] transition duration-300 hover:scale-105 hover:bg-[#7cc4ff]"
                >
                  WhatsApp →
                </a>

                <a
                  href="mailto:lilywahu1@gmail.com"
                  className="rounded-full border border-white/30 px-6 py-4 text-xs font-black uppercase transition duration-300 hover:border-[#4da3ff] hover:bg-[#4da3ff] hover:text-[#07111f]"
                >
                  Email Me
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#617990]">
                  Email
                </p>

                <a
                  href="mailto:lilywahu1@gmail.com"
                  className="mt-2 block text-sm transition hover:text-[#4da3ff]"
                >
                  lilywahu1@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#617990]">
                  Phone
                </p>

                <a
                  href="tel:+254706696404"
                  className="mt-2 block text-sm transition hover:text-[#4da3ff]"
                >
                  +254 706 696 404
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#617990]">
                  Location
                </p>

                <p className="mt-2 text-sm text-[#c8d6e5]">
                  Juja, Kiambu County, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1c354d] bg-[#050b14] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs font-semibold uppercase text-[#71869c] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lily Wahu Ngugi</p>

          <div className="flex gap-5">
            <a
              href="#work"
              className="transition hover:text-[#4da3ff]"
            >
              Work
            </a>

            <a
              href="#about"
              className="transition hover:text-[#4da3ff]"
            >
              About
            </a>

            <a
              href="#services"
              className="transition hover:text-[#4da3ff]"
            >
              Services
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#4da3ff]"
            >
              Contact
            </a>
          </div>

          <a
            href="mailto:lilywahu1@gmail.com"
            className="transition hover:text-[#4da3ff]"
          >
            Get in touch →
          </a>
        </div>
      </footer>
    </main>
  );
}