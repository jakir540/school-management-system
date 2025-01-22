import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are dedicated to providing a seamless school management
            experience, connecting students, teachers, parents, and
            administrators in one unified platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-purple-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-400 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-purple-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-purple-400 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">123 School St, Education City</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@schoolmanagement.com</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank">
              <Image
                src="/facebook-icon.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Image
                src="/twitter-icon.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} School Management System. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
