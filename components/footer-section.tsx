"use client"

import { Zap } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="border-t border-primary/20 bg-gradient-to-b from-background to-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/20">
                <Zap size={24} className="text-primary" />
              </div>
              <span className="font-bold text-xl">NeuraFit</span>
            </div>
            <p className="text-sm text-muted-foreground">Transform your health while you work.</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Blog", "Changelog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {["About", "Contact", "Careers", "Privacy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/40 smooth-transition flex items-center justify-center text-primary text-sm font-semibold"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 NeuraFit. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
