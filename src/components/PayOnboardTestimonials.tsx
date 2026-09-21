import React from 'react';

export const PayOnboardTestimonials: React.FC = () => {
  const testimonials = [
    {
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      quote: '"My Razorpay application got rejected twice. These guys guided me step by step and now my payments are live!"',
      author: 'Priya Sharma',
      role: 'Small Business Owner',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: '"Excellent support! They handled all the documentation and technical stuff. Highly recommend them to anyone facing rejection."',
      author: 'Rohit Verma',
      role: 'E-commerce Store Owner',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      quote: '"Very professional and responsive team. My NGO got onboarded easily after their support."',
      author: 'Neha Gupta',
      role: 'NGO Founder',
    },
  ];

  return (
    <section id="testimonials-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
            SUCCESS STORIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real people. Real businesses. Real results.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow"
            >
              {/* Circular Avatar */}
              <img
                src={t.avatar}
                alt={t.author}
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-200"
                referrerPolicy="no-referrer"
              />

              {/* Quote and Author Info */}
              <div className="space-y-2 text-left">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {t.quote}
                </p>
                <div className="pt-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    — {t.author}
                  </span>
                  <span className="text-xs text-slate-500 font-medium block">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
