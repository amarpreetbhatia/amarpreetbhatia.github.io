export default function Header() {
    return (
      <header className="bg-blue-900 text-white sticky top-0 z-10">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">Amarpreet Bhatia</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            <li><a href="#certifications" className="hover:text-blue-300">Certifications</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }