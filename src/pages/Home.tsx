export default function Home() {
  return (
    <div id="bgWrap" className="mix-h-screen w-full flex-grow">
      <section>
        <div
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="h-screen"
        >
          <div className="flex justify-center pt-80">
            <h1 className="text-2xl front-bold animate-pulse animate-colorfade text-blue-500 transition-colors hover:text-blue-500 cursor-pointer py-5 px-10 rounded-full mt-0 hover">
              Hi I'm Isaac Lee
            </h1>
          </div>
          <div className="text-center text-5xl font-bold p-10">
            <h1 className="pb-5">I code for fun</h1>
            <h1 className="text-xs mt-10">Last Update: 12/27/2025</h1>
            <h1 className="pb-5"></h1>
          </div>
        </div>
        <div id="about" className="pb-10" />
        <div className="justify-center flex items-center flex-col ">
          <div className="px-10 max-w-250 text-center">
            <h1 className="pt-25 mb-20 text-7xl font-bold text-left">
              About me
            </h1>
            <h2 className="text-left mb-5 font-space-grotesk text-lg">
              1st year Undergraduate Student at the University of Virginia
            </h2>
            <div className="flex flex-col">
              <p className="mb-10 ml-4 font-space-grotesk leading-relaxed text-left text-lg">
                {'Hi I\'m Isaac, I go to the University of Virginia still unsure of what I\'m trying to major in but hopefully soon. I enjoy a lot of my free time playing video games like Minecraft, Rainbow Six Siege, and Rocket League while listening to music (my spotify is in the nav). If you play any of these games feel free to reach out so we can play together (I play by myself alot). I\'m kind of a loser so I don\'t go outside much but I fantasize about summiting mountains in washington and alaska so hopefully one day lol. Some other hobbies is playing the piano (currently working on Ballade No. 4 and Fantasie in B minor op 28.) and I just picked up an electric guitar so hopefully I don\'t drop it in like a month. Anyways feel free to reach out if you want to play minecraft or work on something cool.'}
              </p>
            </div>
          </div>
        </div>
        <div
          id="experience"
          className="w-full text-lg leading-relaxed flex items-center flex-col mb-20"
        >
        </div>
      </section>
      <section>
        <div
          id="experience"
          className="w-full text-lg leading-relaxed flex items-center flex-col mb-25"
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
                  UX/UI Intern — PrimeAcademy NOVA
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
          id="projects"
          className="w-full text-lg leading-relaxed flex items-center flex-col mb-20"
        >
          <div className="justify-center flex items-center flex-col">
            <div className="px-10 max-w-250">
              <h1 className="pt-25 mb-20 text-7xl font-bold text-left">
                Favorite Projects
              </h1>
              <div className="flex flex-wrap">
                <h2 className="mb-5">
                  Completed Project -- Error State Kalman Filter
                </h2>
                <p className="mb-10 ml-4 font-space-grotesk">
                  Developed a sensor fusion framework that integrates a Kalman Filter with quaternion-based orientation tracking for high-accuracy flight state estimation. The system fuses IMU inputs—angular velocity, acceleration, and magnetic field data—to improve real-time attitude and trajectory stability. Using quaternions ensures smooth rotation representation without singularities, while the Kalman Filter’s probabilistic state estimation and noise modeling minimize drift and uncertainty for robust dynamic tracking.
                </p>
              </div>
            </div>
            <div className="px-10 max-w-250">
              <div className="flex flex-wrap">
                <h1 className="mb-5">
                  Completed Project -- Fake News Detector
                </h1>
                <p className="mb-10 ml-4">
                  Developed a fake news detection system using TensorFlow and Keras with LSTM recurrent neural networks to classify news articles as real or fake. The text data was preprocessed using NLTK for tokenization, stopword removal, and lemmatization to enhance feature quality. Model performance was rigorously evaluated using accuracy, precision, recall, and F1-score metrics to ensure balanced and reliable classification results.
                </p>
              </div>
            </div>
            <div className="px-10 max-w-250">
              <div className="flex flex-wrap">
                <h1 className="mb-5">On-Going Project -- Autonomous Drone Navigation</h1>
                <p className="ml-4">
                  This project is an autonomous drone-based object search system controlled through a macOS application. An LLM interprets user intent, plans the search, and converts high-level instructions into discrete flight commands while providing real-time verbal feedback. Using onboard vision with YOLOv11-Nano, ORB-SLAM3, optical flow, and an Error-State Kalman Filter, the drone localizes, maps, and navigates indoor spaces while maintaining memory to avoid redundant searches. The system is extensible to building-scale mapping and spatial reconstruction applications.
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
                  Next.js/Vite
                </div>
              </a>
              <a href="https://vite.dev/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Computer Vision
                </div>
              </a>
              <a href="https://tailwindcss.com/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Natural Language
                </div>
              </a>
              <a href="https://pytorch.org/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  C++
                </div>
              </a>
              <a href="https://tensorflow.org">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Rust
                </div>
              </a>
              <a href="https://ui.shadcn.com/">
                <div className="w-80 h-60 border-1 border-black dark:border-white flex items-center justify-center hover:text-white hover:bg-black transition-colors duration-600 text-3xl font-bold dark:text-white dark:hover:text-black dark:hover:bg-white drop-shadow-[0_0_90px_#4f46e5]">
                  Java
                </div>
              </a>
            </div>
            <div className="">
              <div id="contact" className="flex flex-col justify-center items-center pb-50">
                <h1 className="text-7xl font-bold mt-40 mb-20">Contacts & Socials</h1>
                <div className="flex flex-grid gap-40">
                  <div className="flex flex-col gap-10">
                    <div>
                      <p className="xs">Primary Email</p>
                      <p className="text-3xl">Hyunlee537@gmail.com</p>
                    </div>
                    <div>
                      <p className="xs">Secondary Email</p>
                      <p className="text-3xl">legoae86@gmail.com</p>
                    </div>
                    <div>
                      <p className="xs">Mobile</p>
                      <p className="text-3xl">+1 (703) 477 3200</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <div>
                      <p className="xs">Github</p>
                      <p className="text-3xl">Hyunlee8</p>
                    </div>
                    <div>
                      <p className="xs">Spotify</p>
                      <p className="text-3xl">Igack</p>
                    </div>
                    <div>
                      <p className="xs">Discord</p>
                      <p className="text-3xl">Igack_</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
