export default function ContactForm() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-16"
    >
      <h1 className="text-5xl font-bold mb-10">
        Contact Me
      </h1>

      <form
        className="w-full max-w-lg "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-3 rounded-lg border"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full p-3 rounded-lg border"
          />
        </div>

        <button
          type="submit"
          className="w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
