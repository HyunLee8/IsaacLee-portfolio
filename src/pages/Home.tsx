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
          <div className="flex justify-center pt-80">
            <h1 className="text-2xl front-bold animate-pulse animate-colorfade text-blue-500 transition-colors hover:text-blue-500 cursor-pointer py-5 px-10 rounded-full mt-0 hover">
              Greetings, I'm Isaac Lee
            </h1>
          </div>
          <div className="text-center text-5xl font-bold p-10">
            <h1 className="pb-5">ML/AI and SWE Developer</h1>
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
                  Computer Vision/Machine Learning Engineer — ML@UVA
                </h2>
                <p className="mb-10 ml-4 font-space-grotesk">
                  As a Machine Learning Engineer, I am contributing to the UVA Recreation x ML@UVA Facility Analytics & Capacity Intelligence project to develop data-driven systems that enhance operational efficiency and strategic planning. I’m integrating computer vision–based occupancy tracking with predictive analytics for facility usage forecasting. This involves deploying real-time capacity monitoring systems using overhead cameras, optimizing detection algorithms for indoor environments, and building models that leverage historical and live data. The work combines computer vision, machine learning, and data engineering to deliver real-time, actionable insights for campus recreation management.
                </p>
              </div>
            </div>
            <div className="px-10 max-w-250">
              <div className="flex flex-wrap">
                <h1 className="mb-5">
                  UX/UI Intern — PrimeAcademy Inc.
                </h1>
                <p className="ml-4">
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
                Projects
              </h1>
              <div className="flex flex-wrap">
                <h2 className="mb-5">
                  Independent Project -- ESKF for Quaternion Orientation
                </h2>
                <p className="mb-10 ml-4 font-space-grotesk">
                  Developed a sensor fusion framework that integrates a Kalman Filter with quaternion-based orientation tracking for high-accuracy flight state estimation. The system fuses IMU inputs—angular velocity, acceleration, and magnetic field data—to improve real-time attitude and trajectory stability. Using quaternions ensures smooth rotation representation without singularities, while the Kalman Filter’s probabilistic state estimation and noise modeling minimize drift and uncertainty for robust dynamic tracking.
                </p>
              </div>
            </div>
            <div className="px-10 max-w-250">
              <div className="flex flex-wrap">
                <h1 className="mb-5">
                  Independent Project -- Fake News Detector
                </h1>
                <p className="mb-10 ml-4">
                  Developed a fake news detection system using TensorFlow and Keras with LSTM recurrent neural networks to classify news articles as real or fake. The text data was preprocessed using NLTK for tokenization, stopword removal, and lemmatization to enhance feature quality. Model performance was rigorously evaluated using accuracy, precision, recall, and F1-score metrics to ensure balanced and reliable classification results.
                </p>
              </div>
            </div>
            <div className="px-10 max-w-250">
              <div className="flex flex-wrap">
                <h1 className="mb-5">Independent Project -- Sea Wall Meditation App</h1>
                <p className="ml-4">
                  Web application for users who seek sounds for meditation, sleep, and focus.
                  SupaBase, Hono, and Drizzle are used to oraganize and construct the backend
                  of the application. Next.js, UI shadcn, magic UI, tailwind, and other similar
                  frameworks were used in order the create the  user end.
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
                  React
                </div>
              </a>
              <a href="https://vite.dev/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Next.js/Vite
                </div>
              </a>
              <a href="https://tailwindcss.com/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Tensorflow
                </div>
              </a>
              <a href="https://pytorch.org/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Tailwind CSS
                </div>
              </a>
              <a href="https://tensorflow.org">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Open CV
                </div>
              </a>
              <a href="https://ui.shadcn.com/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Supabase
                </div>
              </a>
            </div>
            <div className="">
              <div id="contact" className="">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
