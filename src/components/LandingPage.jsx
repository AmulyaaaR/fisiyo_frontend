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

  const handleJoinNow = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect({
        appState: { returnTo: "/post-login-check" },
      });
    }
  };

  const handleSignIn = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect({
        appState: { returnTo: "/post-login-check" },
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Removed sticky navbar, added TopBar component that scrolls with page */}
      <TopBar onGetStarted={handleJoinNow} />

      {/* Hero Section */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto relative">
        <div className="relative inline-block mb-6">
          <h1 className="text-[5.5rem] font-extrabold slim-van-font animate-fadeInScale">
            Where Innovation<br />Meets <span className="text-green-600">Expertise</span>
          </h1>
        </div>
        {/* Science related icons popping on the sides */}
        <div className="flex justify-center space-x-8 mb-10 pointer-events-none">
          <Star className="text-blue-600 animate-pulse" size={36} />
          <Beaker className="text-blue-600 animate-pulse delay-100" size={36} />
          <Atom className="text-blue-600 animate-pulse delay-200" size={36} />
          <Cpu className="text-blue-600 animate-pulse delay-300" size={36} />
          <Globe className="text-blue-600 animate-pulse delay-400" size={36} />
          <Trophy className="text-blue-600 animate-pulse delay-500" size={36} />
          <Award className="text-blue-600 animate-pulse delay-600" size={36} />
          <Users className="text-blue-600 animate-pulse delay-700" size={36} />
          <CheckCircle className="text-blue-600 animate-pulse delay-800" size={36} />
        </div>
        <p className="text-2xl text-gray-600 mb-10 max-w-md mx-auto caramel-mochino-font animate-fadeInScale delay-200">
          Collaborate with Nobel laureates, industry leaders, and brilliant minds to accelerate research through our curated scientific network.
        </p>
        <button
          onClick={handleJoinNow}
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition mb-10"
        >
          Get Started
        </button>
      </section>

      {/* Welcome Section */}
      <section className="py-40 flex flex-col justify-center items-center px-6 max-w-6xl mx-auto">
  <h2 className="text-7xl sm:text-8xl font-extrabold text-black-600 mb-6 text-center">
    Welcome to Fisiyo
  </h2>
  <p className="text-gray-600 text-3xl sm:text-4xl mb-10 text-center">
    A Gamified Science Community for the Curious & Brilliant
  </p>
  <button className="bg-blue-600 text-white text-xl sm:text-2xl px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition">
    Join Now
  </button>
</section>

      {/* Unlock Your Potential Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Unlock Your Potential Through Play
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Fisiyo combines the thrill of gamify with the depth of scientific
          exploration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <Star className="mx-auto mb-4 text-blue-600" size={36} />
            <h3 className="font-semibold mb-2">XP & Levels</h3>
            <p className="text-gray-600 text-sm">
              Earn XP and level up by completing science challenges.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <Trophy className="mx-auto mb-4 text-blue-600" size={36} />
            <h3 className="font-semibold mb-2">Streaks & Challenges</h3>
            <p className="text-gray-600 text-sm">
              Keep your streak alive and conquer daily science quests.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <Award className="mx-auto mb-4 text-blue-600" size={36} />
            <h3 className="font-semibold mb-2">Badges & Leaderboards</h3>
            <p className="text-gray-600 text-sm">
              Showcase your achievements and climb the leaderboards.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <Users className="mx-auto mb-4 text-blue-600" size={36} />
            <h3 className="font-semibold mb-2">Communities</h3>
            <p className="text-gray-600 text-sm">
              Join vibrant science communities and collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Vibrant Science Communities */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Explore Vibrant Science Communities
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Connect with fellow enthusiastic accelerators fields of science.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <Beaker className="mx-auto mb-2 text-blue-600" size={28} />
            <h4 className="font-semibold">Quantum Physics</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <Atom className="mx-auto mb-2 text-blue-600" size={28} />
            <h4 className="font-semibold">Organic Chemistry</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <Cpu className="mx-auto mb-2 text-blue-600" size={28} />
            <h4 className="font-semibold">Neuroscience Insights</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <Globe className="mx-auto mb-2 text-blue-600" size={28} />
            <h4 className="font-semibold">Cosmology & Stars</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <Beaker className="mx-auto mb-2 text-blue-600" size={28} />
            <h4 className="font-semibold">AI & Machine Learning</h4>
          </div>
        </div>
      </section>

      
      {/* Join the Science Adventure */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Join the Science Adventure in 3 Simple Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              step: "1",
              title: "Sign Up Free",
              description: "Create your free account to get started.",
            },
            {
              step: "2",
              title: "Choose Interests",
              description: "Select your favorite science fields.",
            },
            {
              step: "3",
              title: "Engage & Learn",
              description: "Participate in challenges and discussions.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle className="text-blue-600" size={36} />
                <span className="ml-2 text-3xl font-bold">{step.step}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
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
