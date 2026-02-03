import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Check, Play, ArrowRight, Smartphone, Car, Clock, TrendingUp, Shield, Zap, Users, BarChart3, MapPin, QrCode, Camera } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('prebooking');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Toggle blurred-ball accent when user scrolls down/up (smooth, minimal)
  useEffect(() => {
    const el = document.querySelector('.decor-balls');
    if (!el) return;
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // threshold to avoid jitter
          if (currentY > lastY + 8) {
            el.classList.add('scrolled');
          } else if (currentY < lastY - 8) {
            el.classList.remove('scrolled');
          }
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  

  const stats = [
    { value: '2-3 min', label: 'Entry Time', icon: Clock },
    { value: '99.9%', label: 'Reliability', icon: Shield },
    { value: '500+', label: 'Malls in India', icon: MapPin },
    { value: '₹2000+ Cr', label: 'Market Size', icon: TrendingUp }
  ];

  const features = [
    {
      id: 'prebooking',
      title: 'Pre-Booking',
      description: 'Select basement and time via app to receive secure QR ticket instantly',
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'qr',
      title: 'QR Entry',
      description: 'Show QR code at entrance. Auto-validation triggers boom barriers in 2-3 mins',
      icon: QrCode,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'anpr',
      title: 'ANPR Exit',
      description: 'Camera reads plate at exit, auto-updates backend for slot release & payment',
      icon: Camera,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const advantages = [
    { title: 'India-First Design', desc: 'Tailored for Tier-1 malls with 99.9% reliability', icon: Shield },
    { title: 'Proven Integration', desc: 'Seamless ANPR + QR with existing hardware', icon: Zap },
    { title: 'Revenue-Positive', desc: 'Per-user fees + coupon commissions', icon: TrendingUp },
    { title: 'Market Ready MVP', desc: 'Approved IP with successful live demo', icon: Check },
  ];

  const timeline = [
    { quarter: 'Q1 2026', title: 'Launch Phase', desc: '5 pilot malls in Pune & Gurugram' },
    { quarter: 'Q2-Q3 2026', title: 'Expansion Phase', desc: '15 malls, 50K+ monthly users' },
    { quarter: 'Q4 2026+', title: 'Dominance Phase', desc: '₹15-20 Cr ARR, National expansion' }
  ];

  return (
    <div className="min-h-screen bg-main text-main overflow-x-hidden">
      {/* Decorative background balls (subtle floating blur) */}
      <div className="decor-balls" aria-hidden="true">
        <div className="ball one" />
        <div className="ball two" />
        <div className="ball three" />
      </div>
      {/* Navigation */}
      <nav aria-label="Main navigation" className={`navbar fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 logo">
              <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center font-bold text-lg border-subtle">
                <span className="text-accent"><img src="/images/logo.jpg" alt="EZE Park Logo" className="max-w-48" /> </span>
              </div>
              
            </div>

            <div className="hidden md:flex items-center space-x-8 nav-links">
              <a href="#problem" className="hover:text-accent transition">Problem</a>
              <a href="#solution" className="hover:text-accent transition">Solution</a>
              <a href="#tech" className="hover:text-accent transition">Technology</a>
              <a href="#market" className="hover:text-accent transition">Market</a>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" role="menu" className="md:hidden bg-main border-subtle">
            <div className="px-6 py-4 space-y-4">
              <a href="#problem" className="block hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Problem</a>
              <a href="#solution" className="block hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Solution</a>
              <a href="#tech" className="block hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Technology</a>
              <a href="#market" className="block hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Market</a>
              <a href="#contact" className="btn-primary block text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-amber-200 relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 noise"></div>
        
        {/* Subtle background shapes (neutral) */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-surface rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-surface rounded-full opacity-16"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-surface rounded-full opacity-12"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-surface border-subtle rounded-full text-accent text-2xl font-mono">
             Automated Parking Management System
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" >
            <span className="hero-headline">Smart Parking</span>
            <br />
            <span className="text-main">Made Seamless</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto" >
            Eliminating congestion. Enhancing experience. Revolutionizing India's ₹2,000+ Cr parking market with QR + ANPR automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#solution" className="btn-primary flex items-center gap-2">
              See How It Works
              <ArrowRight className="text-main" size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Request Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="card text-center">
                <stat.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                <div className="text-3xl font-bold text-main mb-1">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative cars removed per request (kept subtle blurred balls) */}
      </section>

      {/* Walkthrough Video Section */}
      <section id="walkthrough" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Product Walkthrough</h2>
            <p className="text-muted">Watch a quick UI walkthrough demonstrating core flows.*Actual product may vary from demo*</p>
          </div>

          <div className="max-w-[280px] md:max-w-[320px] mx-auto  aspect-[9/19] relative">
            <video
              className="video-player mx-auto"
              controls
              playsInline
              preload="metadata"
              aria-label="Product walkthrough video"
            >
              <source src="/videos/walkthrough.mp4" type="video/mp4" />
              Your browser does not support the video tag. You can <a href="/videos/walkthrough.mp4">download the walkthrough video</a>.
            </video>
            <div className="video-caption my-2 mx-10">Tip: use fullscreen for best viewing..</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 relative bg-amber-200">
        <div className="absolute inset-0" style={{pointerEvents: 'none'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              The <span className="text-main">Problem</span>
            </h2>
            <p className="text-xl text-muted">Parking congestion is eroding mall value</p>
          </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: '6-8 MIN Search Time', desc: 'Average time wasted per vehicle searching for a spot during peak weekends' },
              { icon: Car, title: 'Queueing Bottlenecks', desc: 'Manual ticketing and physical barriers create massive entry/exit delays' },
              { icon: BarChart3, title: 'Blind Operations', desc: 'Mall operations teams lack real-time occupancy data for effective management' },
              { icon: TrendingUp, title: 'Revenue Leakage', desc: 'High cash leakage and audit gaps inherent in manual ticketing systems' }
            ].map((problem, idx) => (
              <div key={idx} className="card">
                <div className={`w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-4 border-subtle`}>
                  <problem.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-main">{problem.title}</h3>
                <p className="text-muted">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              The <span className="text-main">Solution</span>
            </h2>
            <p className="text-xl text-muted">EZE PARK: Seamless SaaS Parking Platform</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`cursor-pointer card transition-all ${activeTab === feature.id ? '' : ''}`}
              >
                <div className={`w-16 h-16 bg-surface rounded-xl flex items-center justify-center mb-6 border-subtle`}>
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="font-mono text-accent text-sm mb-2">PHASE 0{idx + 1}</div>
                <h3 className="text-2xl font-bold mb-3 text-main">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="flex flex-wrap gap-4 justify-center text-sm font-mono text-muted">
              <span className="px-4 py-2 rounded-lg">Automated Exit Verification</span>
              <span className="px-4 py-2 rounded-lg">Real-Time Dashboard</span>
              <span className="px-4 py-2 rounded-lg">Revenue Analytics</span>
              <span className="px-4 py-2 rounded-lg">Coupon Campaigns</span>
              <span className="px-4 py-2 rounded-lg">SaaS Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section id="tech" className="py-24 relative bg-amber-200">
        <div className="absolute inset-0" style={{pointerEvents: 'none'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Competitive <span className="text-main">Advantage</span>
            </h2>
            <p className="text-xl text-muted">Why EZE PARK dominates the competition</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center flex-shrink-0 border-subtle">
                    <adv.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-main">{adv.title}</h3>
                    <p className="text-muted">{adv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card text-center">
            <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-main">Defensible IP Position</h3>
            <p className="text-muted max-w-2xl mx-auto">
              Strong legal backing with <span className="text-accent font-semibold">filed patents</span> under Patents Act, 1970. 
              Registered <span className="text-accent font-semibold">EZEpark™ trademark</span> ensures long-term market exclusivity and investor protection.
            </p>
          </div>
        </div>
      </section>

      {/* Market & Roadmap */}
      <section id="market" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Market <span className="text-main">Opportunity</span>
            </h2>
            <p className="text-xl text-muted">Tapping into India's ₹2,000+ Cr market</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="text-4xl font-bold text-main mb-2">₹2,000+ Cr</div>
              <div className="text-muted mb-2">TAM - Annual Revenue</div>
              <div className="text-sm text-muted">500+ organized malls across India</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-main mb-2">200+</div>
              <div className="text-muted mb-2">SAM - Tier-1 Malls</div>
              <div className="text-sm text-muted">Delhi, Mumbai, Bangalore, Pune, Hyderabad</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-main mb-2">₹15-20 Cr</div>
              <div className="text-muted mb-2">SOM - ARR Target</div>
              <div className="text-sm text-muted">30 malls in 18 months</div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="card p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">18-Month Strategic Roadmap</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((phase, idx) => (
                <div key={idx} className="relative">
                  {idx < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5" style={{background: 'linear-gradient(90deg, var(--brand-primary), transparent)'}}></div>
                  )}
                  <div className="bg-surface w-16 h-16 rounded-xl flex items-center justify-center mb-4 font-bold text-xl border-subtle">
                    {idx + 1}
                  </div>
                  <div className="font-mono text-accent text-sm mb-2">{phase.quarter}</div>
                  <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                  <p className="text-muted">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative bg-amber-200 border-t border-subtle  ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              The <span className="text-main ">Team</span>
            </h2>
            <p className="text-xl text-muted">Institutional-grade leadership and advisory</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Tarun Prasad', role: 'Founder & CEO', desc: 'SIBM Pune MBA I&E student with C.S B.Tech background. IP Creator holding patented EZEpark™ technology.', photo: '/images/tarun.jpg' },
              { name: 'Kunal Sarpal', role: 'Legal & IP Advisor', desc: 'Chartered Secretary with 15+ years in corporate law, overseeing patent prosecution and IP strategy.', photo: '/images/kunal.jpg' },
              { name: 'Raman Bhatia', role: 'External CFO', desc: 'Founder & Lead CA at Anubha Raman CA (Est. 1990) with 25+ years ensuring audit-ready financials.', photo: '/images/raman.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="card">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="w-20 h-20 rounded-full mb-4 object-cover border-subtle"
                  />
                ) : (
                  <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center text-3xl font-bold mb-4 border-subtle text-main">
                    {member.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1 text-main">{member.name}</h3>
                <div className="text-accent text-sm mb-3 font-mono">{member.role}</div>
                <p className="text-muted text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 container">
          <div className="card rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-main">Transform Parking?</span>
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Raising ₹1 Crore to revolutionize Indian parking. Join us in building the future of urban mobility.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="card p-4 text-center">
                <div className="font-bold text-main mb-1">6 Months</div>
                <div className="text-muted">5 Malls Live</div>
              </div>
              <div className="card p-4 text-center">
                <div className="font-bold text-main mb-1">12 Months</div>
                <div className="text-muted">₹50L ARR</div>
              </div>
              <div className="card p-4 text-center">
                <div className="font-bold text-main mb-1">18-24 Months</div>
                <div className="text-muted">Series A Ready</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:tarun.prasad.mbaie27@sibmpune.edu.in" className="btn-primary">
                Contact Founder
              </a>
              <a href="tel:+919643824159" className="btn-secondary">
                +91-96438241589
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-subtle py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-6 container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center font-bold text-lg border-subtle text-main">
                <span className="text-accent"><img src="/images/logo.jpg" alt="EZE Park Logo" className="max-w-48" /> </span>
              </div>
            </div>
            <div className="text-muted text-sm">
              © 2026 EZE PARK   |  All rights reserved
            </div>
            <div className="flex gap-4 text-sm text-muted">
              <a href="mailto:tarun.prasad.mbaie27@sibmpune.edu.in" className="hover:text-accent transition">Email</a>
              <a href="tel:+919643824159" className="hover:text-accent transition">Call</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
