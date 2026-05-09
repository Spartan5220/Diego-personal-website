import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import travelData from '../data/travel.json';
import { useTheme } from '../context/ThemeContext';

// Fix Leaflet's default icon path issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// A component to draw lines between points on the map
const JourneyPath = ({ isPlaying }) => {
  const map = useMap();
  const [path, setPath] = useState('');
  
  useEffect(() => {
    if (!map) return;
    
    const updatePath = () => {
      // Convert lat/lng to pixel coordinates
      const points = travelData.map(t => map.latLngToLayerPoint([t.coordinates[0], t.coordinates[1]]));
      
      if (points.length < 2) return;
      
      const d = `M ${points[0].x} ${points[0].y} ` + 
                points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
      
      setPath(d);
    };

    updatePath();
    map.on('zoomend', updatePath);
    map.on('moveend', updatePath);
    
    return () => {
      map.off('zoomend', updatePath);
      map.off('moveend', updatePath);
    };
  }, [map]);

  if (!isPlaying || !path) return null;

  return (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 400, pointerEvents: 'none' }}>
      <motion.path
        d={path}
        fill="transparent"
        stroke="#3b82f6"
        strokeWidth="3"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
    </svg>
  );
};

const CarouselModal = ({ location, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!location) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev === location.images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? location.images.length - 1 : prev - 1));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-w-4xl w-full relative border border-slate-200 dark:border-slate-800">
          <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition">
            <FaTimes size={24} />
          </button>
          
          <div className="relative aspect-video bg-slate-100 flex items-center justify-center group">
            <img 
              src={location.images[currentIndex]} 
              alt={`${location.location} - ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            <button onClick={prevSlide} className="absolute left-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-black/70">
              <FaChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-black/70">
              <FaChevronRight size={24} />
            </button>
          </div>
          
          <div className="p-6 text-slate-900 dark:text-white">
            <h3 className="text-2xl font-bold mb-2">{location.location}</h3>
            <p className="text-slate-600 dark:text-slate-400">{location.timeline}</p>
            <p className="text-slate-800 dark:text-slate-300 mt-2">{location.details}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const TravelMap = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { theme } = useTheme();

  const handlePlayJourney = () => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <motion.section 
      id="travel" 
      className="py-24 bg-white dark:bg-slate-900 relative text-slate-900 dark:text-slate-50 transition-colors duration-300"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Global Adventures</h2>
            <div className="w-24 h-1 bg-brand-500 rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Exploring the world, one city at a time. Hover to see details, click for photos.
            </p>
          </div>
          <button 
            onClick={handlePlayJourney}
            className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 transition shadow-lg shadow-brand-500/30"
          >
            <FaPlay size={20} />
            Play Journey
          </button>
        </div>

        <div className="h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 relative z-0">
          <MapContainer 
            center={[20, 0]} 
            zoom={2} 
            scrollWheelZoom={false}
            className="w-full h-full"
            style={{ background: theme === 'dark' ? '#0f172a' : '#f8fafc' }}
          >
            <TileLayer
              key={theme} // Force re-render of TileLayer when theme changes
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={theme === 'dark' 
                ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              }
            />
            
            <JourneyPath isPlaying={isPlaying} />

            {travelData.map((dest) => (
              <Marker 
                key={dest.id} 
                position={dest.coordinates}
                eventHandlers={{
                  click: () => setSelectedLocation(dest),
                }}
              >
                <Popup>
                  <div className="p-1">
                    <strong className="text-lg block mb-1 text-slate-900">{dest.location}</strong>
                    <span className="text-brand-600 font-semibold block text-sm mb-2">{dest.timeline}</span>
                    <p className="text-slate-600 m-0">{dest.details}</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedLocation(dest); }}
                      className="mt-3 w-full py-1 bg-brand-50 text-brand-600 rounded text-sm font-semibold hover:bg-brand-100 transition"
                    >
                      View Photos
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {selectedLocation && (
        <CarouselModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
      )}
    </motion.section>
  );
};

export default TravelMap;
