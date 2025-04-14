export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">Feel free to reach out for collaboration or opportunities!</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:amarpreetbhatia@gmail.com" className="text-blue-900 hover:underline">Email</a>
            <a href="https://linkedin.com/in/amarpreetbhatia" className="text-blue-900 hover:underline">LinkedIn</a>
            <a href="https://github.com/amarpreetbhatia" className="text-blue-900 hover:underline">GitHub</a>
          </div>
        </div>
      </section>
    )
  }