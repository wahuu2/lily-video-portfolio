export default function Home() {
  const skills = [
    "Video Editing",
    "Short-form Content",
    "Property Videos",
    "Social Media Content",
    "TikTok",
    "Instagram",
    "Facebook",
    "CapCut",
    "PowerDirector",
    "InShot",
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur-md md:px-12">
  <div className="flex items-center justify-between">
    <a
      href="#"
      className="text-xl font-bold tracking-tight"
    >
      LILY WAHU
    </a>

    <div className="flex items-center gap-5 md:gap-8">
  <div className="hidden gap-8 text-sm font-medium md:flex">
    <a
      href="#work"
      className="transition hover:text-gray-500"
    >
      Work
    </a>

    <a
      href="#about"
      className="transition hover:text-gray-500"
    >
      About
    </a>

    <a
      href="#contact"
      className="transition hover:text-gray-500"
    >
      Contact
    </a>
  </div>

  <a
    href="/documents/Lily-Wahu-Ngugi-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden rounded-full border border-black px-5 py-2.5 text-xs font-semibold transition duration-300 hover:bg-black hover:text-white md:block"
  >
    View CV
  </a>

  <a
    href="https://wa.me/254706696404?text=Hello%20Lily%2C%20I%20came%20across%20your%20video%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20editing%20or%20social%20media%20content%20opportunity."
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white transition duration-300 hover:scale-105 hover:bg-gray-800"
  >
    WhatsApp
  </a>
</div>
  </div>
</nav>

     {/* Hero Section */}
<section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-6 md:px-12">
  <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
    Video Editor · Social Media Content
  </p>

  <h2 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
    Creating visual content
    <span className="block text-gray-400">
      that gets people to stop and watch.
    </span>
  </h2>

  <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
    I create short-form videos and social-media content designed to
    showcase properties, promote businesses, and capture attention
    across digital platforms.
  </p>

  <div className="mt-9 flex flex-wrap gap-4">
  <a
    href="#work"
    className="rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-gray-800"
  >
    View My Work
  </a>

  <a
    href="/documents/Lily-Wahu-Ngugi-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-black px-7 py-3.5 text-sm font-semibold transition duration-300 hover:scale-105 hover:bg-black hover:text-white"
  >
    View CV
  </a>

  <a
    href="https://wa.me/254706696404?text=Hello%20Lily%2C%20I%20came%20across%20your%20video%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20editing%20or%20social%20media%20content%20opportunity."
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold transition duration-300 hover:scale-105 hover:border-black"
  >
    WhatsApp
  </a>
</div>
</section>

      {/* Work Section */}
      <section
        id="work"
        className="px-6 py-20 md:px-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Selected Work
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Featured Videos
        </h2>

        <p className="max-w-md text-sm leading-6 text-gray-500">
          Portfolio practice projects exploring property marketing,
      short-form storytelling, and social-media content.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Video 1 */}
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <video
              className="aspect-[9/16] w-full object-cover"
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

            <div className="p-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400">
                Property Video
              </p>

              <h3 className="text-xl font-semibold">
                Property Apartment Tour
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                A short-form apartment tour designed to showcase key
                property spaces through clean pacing, transitions,
                text overlays and visual adjustments.
              </p>

              <p className="mt-4 text-xs font-medium text-gray-400">
                CapCut · PowerDirector
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <video
              className="aspect-[9/16] w-full object-cover"
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

            <div className="p-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400">
                Social Media Reel
              </p>

              <h3 className="text-xl font-semibold">
                Fast Property Reel
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                A fast-paced property reel designed for TikTok and
                Instagram, using quick cuts, keyframe movement and
                concise on-screen text.
              </p>

              <p className="mt-4 text-xs font-medium text-gray-400">
                CapCut · PowerDirector · Inshot
              </p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <video
              className="aspect-[9/16] w-full object-cover"
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

            <div className="p-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400">
                Educational Content
              </p>

              <h3 className="text-xl font-semibold">
                Rental Tips
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                An educational social-media video combining property
                visuals, a strong hook, text overlays and a clear
                call-to-action.
              </p>

              <p className="mt-4 text-xs font-medium text-gray-400">
                CapCut · InShot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
<section
  id="about"
  className="border-y border-gray-100 bg-gray-50 px-6 py-24 md:px-12"
>
  <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        About Me
      </p>

      <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        Creative content.
        <span className="block text-gray-400">
          Technical mindset.
        </span>
      </h2>
    </div>

    <div>
      <p className="text-lg leading-8 text-gray-600">
        I am an ICT graduate with practical experience in video
        editing, short-form content creation, and digital platforms.
        I use CapCut, PowerDirector, and InShot to create engaging
        visual content for social media.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        My technical background in web development gives me an
        understanding of digital products and online platforms,
        allowing me to combine creativity with problem-solving,
        attention to detail, and adaptability.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
          Video Editing
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
          Short-form Content
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
          Social Media
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm">
          Property Content
        </span>
      </div>
    </div>
  </div>
</section>

     {/* Skills Section */}
<section className="px-6 py-24 md:px-12">
  <div className="max-w-3xl">
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
      Skills & Tools
    </p>

    <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
      What I Work With
    </h2>

    <p className="mt-5 text-lg leading-8 text-gray-600">
      Tools and skills I use to create, edit, and prepare short-form
      content for digital platforms.
    </p>
  </div>

  <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        Editing
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        Video Editing
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        Cutting, sequencing, transitions, keyframes, text overlays,
        visual adjustments, and mobile-friendly formatting.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        Content
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        Short-form Content
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        Creating concise visual stories designed for TikTok,
        Instagram, and other social platforms.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        Platforms
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        Social Media
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        Content publishing and presentation for TikTok, Instagram,
        and Facebook.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        Tools
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        Editing Software
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        CapCut, PowerDirector, and InShot for creating and editing
        short-form visual content.
      </p>
    </div>
  </div>
</section>

     {/* Contact Section */}
<section
  id="contact"
  className="bg-black px-6 py-24 text-white md:px-12"
>
  <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        Contact
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
        Let's create something
        <span className="block text-gray-500">
          worth watching.
        </span>
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
        Available for video editing, social-media content, and
        property-focused content opportunities.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="https://wa.me/254706696404?text=Hello%20Lily%2C%20I%20came%20across%20your%20video%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20editing%20or%20social%20media%20content%20opportunity."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-gray-200"
        >
          Message on WhatsApp
        </a>

        <a
          href="mailto:lilywahu1@gmail.com"
          className="rounded-full border border-gray-700 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-white"
        >
          Send an Email
        </a>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Email
          </p>

          <a
            href="mailto:lilywahu1@gmail.com"
            className="mt-2 block text-base transition hover:text-gray-400"
          >
            lilywahu1@gmail.com
          </a>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Phone
          </p>

          <a
            href="tel:+254706696404"
            className="mt-2 block text-base transition hover:text-gray-400"
          >
            +254 706 696 404
          </a>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Location
          </p>

          <p className="mt-2 text-base text-gray-300">
            Juja, Kiambu County, Kenya
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="border-t border-gray-800 bg-black px-6 py-8 text-gray-500 md:px-12">
  <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
    <p>
      © {new Date().getFullYear()} Lily Wahu Ngugi
    </p>

    <div className="flex gap-6">
      <a
        href="#work"
        className="transition hover:text-white"
      >
        Work
      </a>

      <a
        href="#about"
        className="transition hover:text-white"
      >
        About
      </a>

      <a
        href="#contact"
        className="transition hover:text-white"
      >
        Contact
      </a>
    </div>

    <a
      href="mailto:lilywahu1@gmail.com"
      className="transition hover:text-white"
    >
      Get in touch →
    </a>
  </div>
</footer>
    </main>
  );
}