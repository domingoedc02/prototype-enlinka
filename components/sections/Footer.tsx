import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { FOOTER_DATA } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-2xl font-bold">
              Enlink<span className="text-electric">a</span>
            </a>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              {FOOTER_DATA.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {FOOTER_DATA.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {FOOTER_DATA.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${FOOTER_DATA.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-electric transition-colors"
                >
                  <Mail size={14} />
                  {FOOTER_DATA.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER_DATA.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-electric transition-colors"
                >
                  <Phone size={14} />
                  {FOOTER_DATA.contact.phone}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="text-white/40 hover:text-electric transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-electric transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Enlinka. All rights reserved. Built by ejdomingo.dev
        </div>
      </div>
    </footer>
  );
}
