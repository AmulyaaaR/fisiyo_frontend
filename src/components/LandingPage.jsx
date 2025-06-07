import { useAuth0 } from "@auth0/auth0-react";
import TopBar from "./TopBar";
import { useState } from "react";

import {
  Star,
  Award,
  Trophy,
  Users,
  Beaker,
  Atom,
  Cpu,
  Globe,
  CheckCircle,
} from "lucide-react";

import "./CustomFonts.css";
import "./animations.css";

const LandingPage = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isExploded, setIsExploded] = useState(false);

  const handleGetStarted = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect({
        appState: { returnTo: "/post-login-check" },
      });
    }
  };

  const handlePlanetClick = () => {
    setIsExploded(true);
    // Reset after animation completes
    setTimeout(() => {
      setIsExploded(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
     
      <div className="absolute top-7 left-7 italic font-semibold text-6xl select-none">
        FISIYO
      </div>

      {/* Hero Section */}
      <section className="text-center px-8 py-24 max-w-6xl mx-auto relative min-h-screen flex flex-col justify-center">
  {/* Precise Floating Images */}
  <img
    src="/svg1.jpg"
    alt="Planet Icon"
    className="absolute top-[7rem] left-[10%] w-66 h-44 opacity-90 object-contain"
  />
  <img
    src="/svg3.jpg"
    alt="Atom Icon"
    className="absolute top-[6rem] left-1/2 transform -translate-x-1/2 w-25 h-25 opacity-90 object-contain"
  />
  <img
    src="/svg2.jpg"
    alt="Brain Icon"
    className="absolute top-[5.5rem] right-[7%] w-54 h-44 opacity-90 object-contain"
  />
  <img
    src="/svg4.jpg"
    alt="Bulb Icon"
    className="absolute top-[14rem] right-[5%] w-28 h-28 opacity-90 object-contain"
  />
  <img
    src="/svg5.jpg"
    alt="Atom Icon"
    className="absolute top-[18rem] left-[43%] transform -translate-x-1/2 w-29 h-29 opacity-90 object-contain"
  />

  {/* Main Content */}
  <div className="relative z-10 mt-20">
    <h1 className="font-serif text-4xl md:text-4xl lg:text-5xl xl:text-7xl mb-8 leading-[1.1] italic font-light tracking-wide">
      Where <em className="font-medium">Curious Minds</em><br />
      <em className="font-medium">Meets, Shares & Innovate.</em>
    </h1>

    <div className="max-w-4xl mx-auto mb-16">
      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light italic tracking-wide text-gray-600">
        Whether you're testing a theory, starting a project, or just exploring ideas<br />
        this is your space to think, share, and grow with like-minded thinkers
      </p>
    </div>
          {/* Get Started Button */}
          <div className="mb-7">
           <button
  onClick={handleGetStarted}
  className="font-serif italic text-xl px-18 py-5 border rounded-xl bg-white text-black relative"
  style={{
    borderColor: '#222', // dark gray border
    boxShadow: '4px 4px 0 #4b4b4b', // bottom-right drop shadow
    transition: 'transform 0.2s ease',
  }}
>
  Get Started
</button>
          </div>
    
          {/* Down Arrow */}
          <div className="arrow-bounce">
            <svg
  className="w-15 h-38 opacity-60 mx-auto"
  viewBox="0 0 24 48"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
>
  <line x1="12" y1="0" x2="12" y2="34" />
  <polyline points="5,28 12,35 19,28" />
</svg>
          </div>
        </div>
      </section>


    
      {/* Enhanced Unlock Your Potential Section with Interactive Solar System */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10">
        {/* Interactive Solar System */}
        <div className="relative md:w-2/3 w-full h-[700px] rounded-xl flex items-center justify-center overflow-hidden">
          
          {/* Central Sun - Clickable */}
          <div 
            className="absolute w-24 h-24 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-2xl z-20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={handlePlanetClick}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400 rounded-full animate-pulse">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100 via-orange-200 to-red-300 rounded-full animate-spin-slow opacity-80" />
            </div>
            {/* Sun's glow effect */}
            <div className="absolute inset-0 w-32 h-32 -m-4 bg-gradient-to-br from-yellow-300/30 via-orange-400/20 to-red-500/10 rounded-full blur-xl animate-pulse" />
          </div>

          {/* Orbital Paths - Only these move */}
          <div className="absolute w-[300px] h-[220px] border border-blue-300/30 rounded-[50%] animate-spin-slow" style={{ animationDuration: '40s' }} />
          <div className="absolute w-[420px] h-[300px] border border-purple-300/30 rounded-[50%] animate-spin-reverse" style={{ animationDuration: '60s' }} />
          <div className="absolute w-[550px] h-[400px] border border-cyan-300/30 rounded-[50%] animate-spin-slow" style={{ animationDuration: '80s' }} />
          <div className="absolute w-[680px] h-[500px] border border-green-300/30 rounded-[50%] animate-spin-reverse" style={{ animationDuration: '100s' }} />

          {/* Static Feature Cards with Pop-out Animation */}
          {/* Card 1 - XP & Levels */}
          <div className={`absolute top-[8%] left-[20%] transition-all duration-1000 ease-out ${
            isExploded ? 'transform scale-125 -translate-x-20 -translate-y-10' : ''
          }`}>
            <div className="w-56 h-56 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl flex flex-col justify-center items-center text-center p-6 border border-white/50">
              <Star className="text-blue-600 mb-3" size={40} />
              <h4 className="font-semibold text-lg text-gray-800">XP & Levels</h4>
              <p className="text-sm text-gray-600 mt-2">Earn experience points and level up through scientific achievements</p>
            </div>
          </div>

          {/* Card 2 - Streaks & Challenges */}
          <div className={`absolute top-[55%] left-[5%] transition-all duration-1000 ease-out ${
            isExploded ? 'transform scale-125 -translate-x-16 translate-y-8' : ''
          }`}>
            <div className="w-56 h-56 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl flex flex-col justify-center items-center text-center p-6 border border-white/50">
              <Trophy className="text-red-600 mb-3" size={40} />
              <h4 className="font-semibold text-lg text-gray-800">Streaks & Challenges</h4>
              <p className="text-sm text-gray-600 mt-2">Maintain learning streaks and complete daily science challenges</p>
            </div>
          </div>

          {/* Card 3 - Badges & Leaderboards */}
          <div className={`absolute top-[70%] left-[60%] transition-all duration-1000 ease-out ${
            isExploded ? 'transform scale-125 translate-x-20 translate-y-12' : ''
          }`}>
            <div className="w-56 h-56 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl flex flex-col justify-center items-center text-center p-6 border border-white/50">
              <Award className="text-green-600 mb-3" size={40} />
              <h4 className="font-semibold text-lg text-gray-800">Badges & Leaderboards</h4>
              <p className="text-sm text-gray-600 mt-2">Unlock achievements and compete with fellow researchers</p>
            </div>
          </div>

          {/* Card 4 - Communities */}
          <div className={`absolute top-[25%] left-[65%] transition-all duration-1000 ease-out ${
            isExploded ? 'transform scale-125 translate-x-16 -translate-y-8' : ''
          }`}>
            <div className="w-56 h-56 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl flex flex-col justify-center items-center text-center p-6 border border-white/50">
              <Users className="text-purple-600 mb-3" size={40} />
              <h4 className="font-semibold text-lg text-gray-800">Communities</h4>
              <p className="text-sm text-gray-600 mt-2">Join vibrant scientific communities and collaborate globally</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/3 w-full text-left">
          <h2 className="text-4xl font-bold mb-4">Unlock Your Potential Through Your Posts</h2>
          <p className="text-gray-600 text-lg">
            Fisiyo combines the thrill of gamification with the depth of scientific exploration. Click the sun to see our features explode into action!
          </p>
        </div>
      </section>

     {/* Explore Vibrant Science Communities */}
<section className="w-full py-16 bg-gray-50 rounded-none">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-center text-4xl font-bold mb-10">
      Explore Vibrant Science Communities
    </h2>
    <p className="text-center text-gray-800 max-w-4xl mx-auto font-semibold mb-12">
      Connect with fellow enthusiastic accelerators fields of science.
    </p>
  </div>

  {/* Full-width scrollable container without side padding */}
  <div className="flex overflow-x-auto space-x-6 pb-4 px-4 sm:px-8 lg:px-16">
    {[
      {
        title: "Quantum Physics",
        subtitle: "Dive into Quantum Realms",
        imageAlt: "Quantum",
      },
      {
        title: "Organic Chemistry",
        subtitle: "The Language of Carbon",
        imageAlt: "Organic",
      },
      {
        title: "Neuroscience Insights",
        subtitle: "The Inner Workings of Thought",
        imageAlt: "Neuro",
      },
      {
        title: "Cosmology & Stars",
        subtitle: "Galaxies in Motion",
        imageAlt: "Cosmos",
      },
      {
        title: "AI & Machine Learning",
        subtitle: "The Mind of the Machine",
        imageAlt: "AI",
            },
      {
    title: "Astronomy",
    subtitle: "Beyond the Sky: Stars & Planets",
    imageAlt: "Astronomy",
  },
  {
    title: "Robotics",
    subtitle: "Engineering the Future of Automation",
    imageAlt: "Robotics",
  },
  {
    title: "Biotechnology",
    subtitle: "Innovation at the Cellular Level",
    imageAlt: "Biotech",
  },
  {
    title: "Mathematical Models",
    subtitle: "Simulating the Logic of the Universe",
    imageAlt: "Math",
  },
  {
    title: "Nanotechnology",
    subtitle: "Manipulating Matter Atom by Atom",
    imageAlt: "Nanotech",
  },
  {
    title: "Astrobiology",
    subtitle: "Life Among the Stars",
    imageAlt: "Astrobiology",
  }
    ].map((item, index) => (
      <div key={index} className="min-w-[250px] bg-white rounded-lg shadow-md p-4 flex-shrink-0">
        <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
        <h4 className="text-purple-700 font-semibold mb-1">{item.title}</h4>
        <p className="font-bold mb-2">{item.subtitle}</p>
        <a href="#" className="text-purple-700 underline font-semibold">Read more</a>
      </div>
    ))}
  </div>

  <div className="text-center mt-8">
    <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition">
      Explore All
    </button>
  </div>
</section>

      
      

      {/* Newsletter Footer Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8">
            <img src="/logo192.png" alt="Fisiyo Logo" className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold">Fisiyo</h3>
          </div>
          <h4 className="text-xl font-medium mb-4">
            Stay tuned for exciting scientific discoveries, community events, and exclusive challenges.
          </h4>
          <div className="flex justify-center items-center gap-4 mb-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 text-gray-500 px-4 md:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">© 2025 Fisiyo.</div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1A4.52 4.52 0 0016.67 0c-2.5 0-4.5 2.29-4.5 5.11 0 .4.05.8.14 1.18A12.94 12.94 0 013 1.64a4.93 4.93 0 00-.61 2.57c0 1.77.8 3.33 2 4.25a4.41 4.41 0 01-2.05-.58v.06c0 2.48 1.8 4.54 4.2 5a4.52 4.52 0 01-2.04.08c.57 1.88 2.22 3.25 4.18 3.29A9.06 9.06 0 012 19.54a12.8 12.8 0 006.92 2.06c8.3 0 12.84-7.1 12.84-13.25 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.08-.74.08-.74a2.5 2.5 0 011.83 1.24 2.54 2.54 0 003.47 1 2.54 2.54 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 011.24-3.22 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.18 4.64 4.64 0 011.24 3.22c0 4.61-2.8 5.62-5.48 5.92a2.85 2.85 0 01.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.5V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 11.01-4.14 2.07 2.07 0 01-.01 4.14zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 3.01a1.5 1.5 0 00-2.11-.54L2.9 10.6a1.5 1.5 0 00.07 2.7l4.9 1.9 1.9 4.9a1.5 1.5 0 002.7.07l7.13-17.45a1.5 1.5 0 00-.14-1.7z"/></svg>
            </a>
            <a href="#" aria-label="Email" className="hover:text-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1A4.52 4.52 0 0016.67 0c-2.5 0-4.5 2.29-4.5 5.11 0 .4.05.8.14 1.18A12.94 12.94 0 013 1.64a4.93 4.93 0 00-.61 2.57c0 1.77.8 3.33 2 4.25a4.41 4.41 0 01-2.05-.58v.06c0 2.48 1.8 4.54 4.2 5a4.52 4.52 0 01-2.04.08c.57 1.88 2.22 3.25 4.18 3.29A9.06 9.06 0 012 19.54a12.8 12.8 0 006.92 2.06c8.3 0 12.84-7.1 12.84-13.25 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;