import { useAuth0 } from "@auth0/auth0-react";
import TopBar from "./TopBar";

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

  const handleGetStarted = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect({
        appState: { returnTo: "/post-login-check" },
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
     
      <div className="absolute top-7 left-7 italic font-semibold text-6xl select-none">
        FISIYO
      </div>

      {/* Hero Section */}
      <section className="text-center px-8 py-24 max-w-6xl mx-auto relative min-h-screen flex flex-col justify-center">
        {/* Floating Icons positioned like in the reference image */}
        <div className="absolute top-28 left-20 floating-icon">
          <svg className="w-24 h-24 opacity-40" style={{ color: 'hsl(var(--charcoal))' }} viewBox="0 0 140 140" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="70" cy="70" rx="60" ry="25" />
            <ellipse cx="70" cy="70" rx="60" ry="25" transform="rotate(60 70 70)" />
            <ellipse cx="70" cy="70" rx="60" ry="25" transform="rotate(120 70 70)" />
            <circle cx="70" cy="70" r="5" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute top-20 right-24 floating-icon">
          <svg className="w-20 h-20 opacity-45" style={{ color: 'hsl(var(--charcoal))' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="50" cy="35" r="10" />
            <circle cx="35" cy="55" r="7" />
            <circle cx="65" cy="55" r="7" />
            <circle cx="40" cy="75" r="5" />
            <circle cx="60" cy="75" r="5" />
            <path d="M42 45 Q50 50 58 45" />
            <path d="M38 65 Q50 70 62 65" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute top-16 right-12 floating-icon">
          <svg className="w-28 h-28 opacity-40" style={{ color: 'hsl(var(--charcoal))' }} viewBox="0 0 140 140" fill="currentColor">
            <path d="M45 45 Q45 25 70 25 Q95 25 95 45 Q95 65 70 65 Q45 65 45 45" />
            <path d="M55 75 Q70 70 85 75" stroke="currentColor" strokeWidth="4" fill="none" />
            <path d="M50 85 Q70 80 90 85" stroke="currentColor" strokeWidth="4" fill="none" />
            <path d="M55 95 Q70 90 85 95" stroke="currentColor" strokeWidth="4" fill="none" />
            <circle cx="70" cy="45" r="15" fill="white" />
            <path d="M62 38 Q70 30 78 38 Q78 48 70 55 Q62 48 62 38" fill="currentColor" />
            <circle cx="70" cy="110" r="5" fill="currentColor" />
            <circle cx="70" cy="120" r="3" fill="currentColor" />
            <circle cx="70" cy="128" r="1.5" fill="currentColor" />
          </svg>
        </div>
    
        <div className="absolute top-12 right-6 floating-icon">
          <div className="w-5 h-5 rounded-sm bg-current opacity-60" style={{ color: 'hsl(var(--charcoal))' }}></div>
        </div>
    
        {/* Main Content */}
        <div className="relative z-10 mt-20">
          {/* Main Heading */}
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-4xl lg:text-5xl xl:text-7xl mb-8 leading-[1.1] italic font-light tracking-wide" style={{ color: 'hsl(var(--charcoal))' }}>
              Where <em className="font-medium">Curious Minds</em><br />
              <em className="font-medium">Meets, Shares & Innovate</em>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light italic tracking-wide" style={{ color: 'hsl(var(--medium-gray))' }}>
                Whether you're testing a theory, starting a project, or just exploring ideas<br />
                this is your space to think, share, and grow with like-minded thinkers
              </p>
            </div>
          </div>
    
          {/* Get Started Button */}
          <div className="mb-20">
            <button 
              onClick={handleGetStarted}
              className="italic font-serif border-2 rounded-2xl px-12 py-5 text-xl bg-transparent hover:bg-gray-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ 
                color: 'hsl(var(--charcoal))',
                borderColor: 'hsl(var(--charcoal))'
              }}
            >
              Get Started
            </button>
          </div>
    
          {/* Down Arrow */}
          <div className="arrow-bounce">
            <svg className="w-14 h-14 opacity-50 mx-auto" style={{ color: 'hsl(var(--charcoal))' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>


    
      {/* Unlock Your Potential Section - redesigned layout */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10">
  {/* Galaxy Background and Cards */}
  <div className="relative md:w-2/3 w-full h-[700px] rounded-xl flex items-center justify-center">
    {/* Small sphere (planet) in the center */}
    <div className="absolute w-20 h-20 bg-blue-500 rounded-full shadow-lg z-10 flex items-center justify-center text-white text-xs font-bold">
      Planet
    </div>

    {/* Spinning Orbits */}
    <div className="absolute w-[550px] h-[400px] rounded-[50%] border border-black-700 animate-spin-slow" />
    <div className="absolute w-[420px] h-[300px] rounded-[50%] border border-black-700 animate-spin-reverse" />
    <div className="absolute w-[290px] h-[200px] rounded-[50%] border border-black-300 animate-spin-slower" />

    {/* Feature Cards */}
    <div className="absolute w-60 h-60 bg-white shadow-xl rounded-lg flex flex-col justify-center items-center text-center p-6 top-[8%] left-[20%]">
      <Star className="text-blue-600 mb-3" size={40} />
      <h4 className="font-semibold text-lg">XP & Levels</h4>
    </div>
    <div className="absolute w-60 h-60 bg-white shadow-xl rounded-lg flex flex-col justify-center items-center text-center p-6 top-[55%] left-[5%]">
      <Trophy className="text-blue-600 mb-3" size={40} />
      <h4 className="font-semibold text-lg">Streaks & Challenges</h4>
    </div>
    <div className="absolute w-60 h-60 bg-white shadow-xl rounded-lg flex flex-col justify-center items-center text-center p-6 top-[70%] left-[60%]">
      <Award className="text-blue-600 mb-3" size={40} />
      <h4 className="font-semibold text-lg">Badges & Leaderboards</h4>
    </div>
    <div className="absolute w-60 h-60 bg-white shadow-xl rounded-lg flex flex-col justify-center items-center text-center p-6 top-[25%] left-[65%]">
      <Users className="text-blue-600 mb-3" size={40} />
      <h4 className="font-semibold text-lg">Communities</h4>
    </div>
  </div>

  {/* Text Content */}
  <div className="md:w-1/3 w-full text-left">
    <h2 className="text-4xl font-bold mb-4">Unlock Your Potential Through Your Posts</h2>
    <p className="text-gray-600 text-lg">
      Fisiyo combines the thrill of gamify with the depth of scientific exploration.
    </p>
  </div>
  
</section>

      {/* Explore Vibrant Science Communities */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg">
        <h2 className="text-center text-4xl font-bold mb-10">
          Explore Vibrant Science Communities
        </h2>
        <p className="text-center text-gray-800 max-w-4xl mx-auto font-semibold mb-12">
          Connect with fellow enthusiastic accelerators fields of science.
        </p>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {[{
            title: "Quantum Physics",
            subtitle: "Dive into Quantum Realms",
            imageAlt: "LKG Class 3",
          }, {
            title: "Organic Chemistry",
            subtitle: "The Language of Carbon",
            imageAlt: "Class 4 - 10",
          }, {
            title: "Neuroscience Insights",
            subtitle: "The Inner Workings of Thought",
            imageAlt: "Class 4 - 10 Live",
          }, {
            title: "Cosmology & Stars",
            subtitle: "Galaxies in Motion",
            imageAlt: "Class 8 - 10",
            },
          {
            title: "AI & Machine Learning",
            subtitle: "The Mind of the Machine",
            imageAlt: "Class 8 - 10",
          }].map((item, index) => (
            <div key={index} className="min-w-[250px] bg-white rounded-lg shadow-md p-4 flex-shrink-0">
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                {/* Empty box for image */}
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
            <img src="/logo192.png" alt="Fisiyo Logo" className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold">Fisiyo</h3>
          </div>
          <h4 className="text-xl font-medium mb-4">Stay Updated with Fisiyo</h4>
          <div className="flex justify-center items-center gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
          
        </div>
        <div className="flex justify-between items-center mt-6 text-gray-500 px-4 md:px-12">
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">© 2025 Fisiyo.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <i className="far fa-envelope"></i>
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
