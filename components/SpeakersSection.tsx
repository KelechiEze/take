
import React from 'react';
import { Twitter, Linkedin, Mail, ChevronDown } from 'lucide-react';

const speakers = [
  {
    name: 'Andy Walker',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
  {
    name: 'Diana Green',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
  {
    name: 'Nathan Jones',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
  {
    name: 'Natalie Carter',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
  {
    name: 'Bobby Reeve',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
  {
    name: 'David Matthews',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
  {
    name: 'Linda Grant',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
  {
    name: 'Nick Lewis',
    title: 'Speaker',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    social: { twitter: '#', linkedin: '#', mail: '#' },
  },
];

const SpeakersSection: React.FC = () => {
  return (
    <section className="bg-gray-100 text-black py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Speakers</h2>
          <ChevronDown className="h-8 w-8 mx-auto mt-4 text-orange-500 animate-bounce" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="group text-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src={speaker.img} alt={speaker.name} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/70 flex justify-center items-center gap-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <a href={speaker.social.twitter} aria-label={`${speaker.name}'s Twitter`} className="text-white hover:text-orange-400 transition-colors p-2">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href={speaker.social.linkedin} aria-label={`${speaker.name}'s LinkedIn`} className="text-white hover:text-orange-400 transition-colors p-2">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={`mailto:${speaker.social.mail}`} aria-label={`Email ${speaker.name}`} className="text-white hover:text-orange-400 transition-colors p-2">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-xl">{speaker.name}</h4>
                <p className="text-gray-600">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
