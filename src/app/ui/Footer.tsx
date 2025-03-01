import Link from 'next/link'
// import { Facebook, Twitter, Linkedin, Github, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12  bottom-0 w-full left-0">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">CoriusDev</h3>
          <p className="text-gray-400 text-sm">
            Innovative solutions for modern challenges. 
            Transforming ideas into powerful digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Visit our Website</h4>
          <nav className="space-y-2">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Corius-dev.com
            </Link>
           
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li className="text-gray-300 hover:text-white transition-colors">
              {/* Web Development */}
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        {/* <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <Link 
              href="https://facebook.com/coriusdev" 
              target="_blank" 
              className="text-gray-300 hover:text-white"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link 
              href="https://twitter.com/coriusdev" 
              target="_blank" 
              className="text-gray-300 hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link 
              href="https://linkedin.com/company/coriusdev" 
              target="_blank" 
              className="text-gray-300 hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="https://github.com/coriusdev" 
              target="_blank" 
              className="text-gray-300 hover:text-white"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>contact@coriusdev.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Globe className="w-4 h-4 mr-2" />
              <span>www.coriusdev.com</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} CoriusDev. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

