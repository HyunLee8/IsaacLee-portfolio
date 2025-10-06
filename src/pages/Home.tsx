import ContactForm from "../components/contact-form";

export default function Home() {
  return (
    <div id="bgWrap" className="mix-h-screen w-full flex-grow">
      <section>
        <div
          onClick={() =>
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="h-220"
        >
          <div className="flex justify-center pt-70">
            <h1 className="text-2xl front-bold animate-pulse animate-colorfade text-blue-500 transition-colors hover:text-blue-500 cursor-pointer py-5 px-10 rounded-full mt-0">
              Greetings, I'm Isaac Lee
            </h1>
          </div>
          <div className="text-center text-6xl">
            <h1>React/Vite Developer</h1>
          </div>
        </div>
      </section>
      <section>
        <div
          id="experience"
          className="w-full text-lg leading-relaxed flex items-center flex-col mb-20"
        >
          <div className="justify-center flex items-center flex-col">
            <div className="px-10 max-w-250">
              <h1 className="pt-25 mb-20 text-7xl font-bold text-left">
                Experience
              </h1>
              <div className="flex flex-wrap">
                <h2 className="mb-5">
                  Independent Project -- Audio Gesture CV Project
                </h2>
                <p className="mb-10 ml-4">
                  I developed a computer vision project that combined gesture
                  recognition with audio analysis. Using Python, OpenCV, and
                  signal processing libraries, I created a system that measured
                  speed, pitch, and volume of .wav files by interpreting hand
                  movements as input. This project demonstrated my ability to
                  integrate machine learning concepts, audio processing, and
                  real-time user interaction, while showcasing my creativity in
                  designing unique technical solutions.
                </p>
              </div>
            </div>
            <div className="px-10 max-w-250">
              <div className="flex flex-wrap">
                <h1 className="mb-5">UX/UI Intern — PrimeAcademy Inc.</h1>
                <p className="mb-10 ml-4">
                  During my time at PrimeAcademy Inc., I worked on designing and
                  refining user interfaces to improve both usability and
                  accessibility for end-users. I collaborated closely with
                  developers to ensure that design solutions were technically
                  feasible, while also contributing to the creation of
                  interactive wireframes and prototypes. My role allowed me to
                  practice user-centered design, conduct usability testing, and
                  integrate feedback into iterations that improved the overall
                  product experience.
                </p>
              </div>
            </div>
            <div className="px-10 max-w-250">
              <div className="flex flex-wrap">
                <h1 className="mb-5">
                  Founder & Organizer — Life of Giving (Nonprofit Startup)
                </h1>
                <p className="ml-4">
                  I founded Life of Giving across 7 different school and 40
                  students to promote community-driven fundraising and support
                  for underserved groups. Through events, outreach, and
                  campaigns, I successfully raised over $6,000, all of which was
                  donated to charitable causes. Beyond fundraising, I
                  coordinated a team of volunteers and built partnerships that
                  expanded the reach of our mission. This experience
                  strengthened my leadership, project management, and
                  communication skills, while reinforcing my passion for using
                  technology and collaboration for social good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div id="skills" className="h-200 max-w-300 mx-auto">
            <h1 className="font-bold text-7xl mb-10 flex justify-center pt-25">
              Skills
            </h1>
            <div className="flex flex-wrap gap-4 justify-center ">
              <a href="https://react.dev/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  React.ts
                </div>
              </a>
              <a href="https://vite.dev/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Vite
                </div>
              </a>
              <a href="https://tailwindcss.com/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Tailwind
                </div>
              </a>
              <a href="https://pytorch.org/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Pytorch
                </div>
              </a>
              <a href="https://tensorflow.org">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Tensor Flow
                </div>
              </a>
              <a href="https://ui.shadcn.com/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  UI.Shadcn
                </div>

                
              </a>
            </div>
            <div className="">
              <div id="contact">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
