import React, { useState } from 'react';
import { IlluminatEBrand } from '../effects/IlluminatEBrand';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Sparkles, X, ZoomIn, ArrowRight } from 'lucide-react';
import { SectionBadge } from '../effects/SectionBadge';
import { IlluminateText } from '../effects/IlluminateText';
import { galleryItems, galleryCategories } from '../../data/galleryData';
import { GalleryItem } from '../../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-8 lg:py-12 border-t border-slate-100/60 overflow-hidden select-none">
      {/* Ambient background accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-8 gap-6">
          <div>
            <SectionBadge icon={<ImageIcon size={13} />}>
              MOMENTS & ARCHIVES
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              THE <IlluminatEBrand size="lg" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-600">GALLERY</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Capturing the intensity, breakthrough presentations, and vibrant networking moments across past conclave cohorts.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white font-bold shadow-md border border-teal-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid of Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setActiveItem(item)}
              className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 hover:border-teal-500 transition-all shadow-md bg-slate-100"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge & Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-teal-300 tracking-widest uppercase block mb-1">
                    <IlluminateText>ILLUMINATE 2026</IlluminateText>
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 mb-2">
                    {item.subtitle}
                  </p>
                  <span className="text-xs font-mono text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore moment →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-900/70 hover:bg-slate-900 text-white cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="relative h-96 w-full bg-slate-900">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-mono text-teal-700 font-bold uppercase tracking-wider">
                  <IlluminatEBrand size="sm" /> ARCHIVE • {activeItem.category}
                </span>
                <h3 className="text-2xl font-display font-extrabold text-slate-900 mt-1">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {activeItem.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
