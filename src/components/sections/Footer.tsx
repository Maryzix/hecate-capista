"use client";

import { Instagram, MessageCircle } from "lucide-react";

const HECA_WHATS = "5551991090199"; 
const DESIGNER_WHATS = "5551991090199"; 
const MARY_WHATS = "5551985503101"; 

export default function Footer() {
  return (
    <footer className="bg-[#080A0F] border-t border-[#1E222D] text-white">
      <div className="container mx-auto px-6 lg:px-20 py-14">

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-[#C6A343] text-lg font-serif mb-6 tracking-wider">
              Hécate 
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <a
                href="https://instagram.com/hecatecapista"
                target="_blank"
                className="flex items-center gap-3 hover:text-[#C6A343] transition"
              >
                <Instagram size={18} />
                @hecatecapista
              </a>

              <a
                href={`https://wa.me/${HECA_WHATS}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-[#C6A343] transition"
              >
                <MessageCircle size={18} />
                WhatsApp Hécate
              </a>
            </div>
          </div>

          {/* Designer */}
          <div>
            <h3 className="text-[#C6A343] text-lg font-serif mb-6 tracking-wider">
              Designer
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <a
                href="https://instagram.com/carolinaluizdesigner"
                target="_blank"
                className="flex items-center gap-3 hover:text-[#C6A343] transition"
              >
                <Instagram size={18} />
                @carolinaluizdesigner
              </a>

              <a
                href={`https://wa.me/${DESIGNER_WHATS}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-[#C6A343] transition"
              >
                <MessageCircle size={18} />
                WhatsApp Designer
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-[#C6A343] text-lg font-serif mb-6 tracking-wider">
              Desenvolvido por
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <a
                href="https://instagram.com/marynotjane_"
                target="_blank"
                className="flex items-center gap-3 hover:text-[#C6A343] transition"
              >
                <Instagram size={18} />
                @marynotjane_
              </a>

              <a
                href={`https://wa.me/${MARY_WHATS}`}
                target="_blank"
                className="flex items-center gap-3 hover:text-[#C6A343] transition"
              >
                <MessageCircle size={18} />
                WhatsApp Mary
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-[#1E222D] text-center text-xs text-gray-500 tracking-wider">
          © {new Date().getFullYear()} Mary Lindsen - Hécate. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
