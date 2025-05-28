import { useAuth0 } from "@auth0/auth0-react";

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

const LandingPageEnhanced = () => {
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

  // Colors
  const primaryColor = "#50C878"; // Emerald Green
  const accentColor = "#F7E7CE"; // Champagne Beige

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: primaryColor, color: accentColor }}>
      {/* Navigation */}
      <nav
        className="flex justify-between items-center px-8 py-4 border-b border-green-700 sticky top-0 z-50"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="flex items-center space-x-2">
          {/* Logo Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-diamond"
          >
            <path d="M12 2 L22 12 L12 22 L2 12 Z" />
          </svg>
          <span className="text-2xl font-bold" style={{ color: accentColor }}>
            Fisiyo
          </span>
        </div>
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="space-x-6 hidden md:flex">
            <a
              href="#"
              className="font-semibold hover:underline"
              style={{ color: accentColor }}
            >
              Home
            </a>
            <a href="#" className="hover:text-green-300" style={{ color: "#d9cbbf" }}>
              About
            </a>
            <a href="#" className="hover:text-green-300" style={{ color: "#d9cbbf" }}>
              Communities
            </a>
          </div>
          {/* Right Side Buttons and Icons */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={handleSignIn}
                  className="font-medium"
                  style={{ color: accentColor }}
                >
                  Sign In
                </button>
                <button
                  onClick={handleJoinNow}
                  className="px-4 py-2 rounded-md font-semibold transition"
                  style={{ backgroundColor: accentColor, color: primaryColor }}
                >
                  Join Now
                </button>
              </>
            ) : (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="font-medium"
                style={{ color: accentColor }}
              >
                Sign Out
              </button>
            )}
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke={accentColor}
              strokeWidth={2}
              style={{ transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0e6d2")}
              onMouseLeave={e => (e.currentTarget.style.color = accentColor)}
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {/* Notification Bell Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke={accentColor}
              strokeWidth={2}
              style={{ transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0e6d2")}
              onMouseLeave={e => (e.currentTarget.style.color = accentColor)}
            >
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a2 2 0 10-4 0v.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Welcome Section */}
      <section className="text-center px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Fisiyo</h2>
        <p className="text-gray-600 text-lg mb-6">A Gamified Science Community for the Curious & Brilliant</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
          Join Now
        </button>
      </section>

      {/* Unlock Your Potential Section */}
      <section className="max-w-6xl mx-auto px-6 py-16" style={{ backgroundColor: primaryColor, borderRadius: "12px" }}>
        <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: accentColor }}>
          Unlock Your Potential Through Play
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12" style={{ color: "#d9cbbf" }}>
          Fisiyo combines the thrill of gamify with the depth of scientific exploration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Star className="mx-auto mb-4" size={36} stroke={accentColor} />
            <h3 className="font-semibold mb-2" style={{ color: accentColor }}>XP & Levels</h3>
            <p className="text-sm" style={{ color: "#d9cbbf" }}>
              Earn XP and level up by completing science challenges.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Trophy className="mx-auto mb-4" size={36} stroke={accentColor} />
            <h3 className="font-semibold mb-2" style={{ color: accentColor }}>Streaks & Challenges</h3>
            <p className="text-sm" style={{ color: "#d9cbbf" }}>
              Keep your streak alive and conquer daily science quests.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Award className="mx-auto mb-4" size={36} stroke={accentColor} />
            <h3 className="font-semibold mb-2" style={{ color: accentColor }}>Badges & Leaderboards</h3>
            <p className="text-sm" style={{ color: "#d9cbbf" }}>
              Showcase your achievements and climb the leaderboards.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Users className="mx-auto mb-4" size={36} stroke={accentColor} />
            <h3 className="font-semibold mb-2" style={{ color: accentColor }}>Communities</h3>
            <p className="text-sm" style={{ color: "#d9cbbf" }}>
              Join vibrant science communities and collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Vibrant Science Communities */}
      <section className="max-w-6xl mx-auto px-6 py-16 rounded-lg mt-12" style={{ backgroundColor: "#3a7a4a" }}>
        <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: accentColor }}>
          Explore Vibrant Science Communities
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12" style={{ color: "#d9cbbf" }}>
          Connect with fellow enthusiastic accelerators fields of science.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Beaker className="mx-auto mb-2" size={28} stroke={accentColor} />
            <h4 className="font-semibold" style={{ color: accentColor }}>Quantum Physics</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Atom className="mx-auto mb-2" size={28} stroke={accentColor} />
            <h4 className="font-semibold" style={{ color: accentColor }}>Organic Chemistry</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Cpu className="mx-auto mb-2" size={28} stroke={accentColor} />
            <h4 className="font-semibold" style={{ color: accentColor }}>Neuroscience Insights</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Globe className="mx-auto mb-2" size={28} stroke={accentColor} />
            <h4 className="font-semibold" style={{ color: accentColor }}>Cosmology & Stars</h4>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition" style={{ borderColor: accentColor }}>
            <Beaker className="mx-auto mb-2" size={28} stroke={accentColor} />
            <h4 className="font-semibold" style={{ color: accentColor }}>AI & Machine Learning</h4>
          </div>
        </div>
      </section>

      {/* What Our Community Says */}
      <section className="max-w-6xl mx-auto px-6 py-16 mt-12" style={{ backgroundColor: primaryColor, borderRadius: "12px" }}>
        <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: accentColor }}>
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Fisiyo has helped me find a vibrant space to be curious and engage with my potential approach. This community is important!",
              name: "Dr. Sara Vance",
              role: "Researcher",
            },
            {
              quote:
                "I enjoy badges and competitions on Fisiyo platform, which has made science more fun through its leaderboard. It's a great motivator!",
              name: "Kaitlin Devine",
              role: "Science Educator",
            },
            {
              quote:
                "The clinical challenges are addictive! Fisiyo is the perfect place to keep my knowledge sharp and connect with fellow scientists.",
              name: "Amy Sherman",
              role: "Medical Scientist",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-sm hover:shadow-md transition"
              style={{ borderColor: accentColor }}
            >
              <p className="italic mb-4" style={{ color: "#d9cbbf" }}>
                "{testimonial.quote}"
              </p>
              <p className="font-semibold" style={{ color: accentColor }}>
                {testimonial.name}
              </p>
              <p className="text-sm" style={{ color: "#d9cbbf" }}>
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Science Adventure */}
      <section className="max-w-6xl mx-auto px-6 py-16 rounded-lg mt-12" style={{ backgroundColor: accentColor }}>
        <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: primaryColor }}>
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
              style={{ borderColor: primaryColor }}
            >
              <div className="flex justify-center mb-4">
                <CheckCircle className="text-green-600" size={36} />
                <span className="ml-2 text-3xl font-bold" style={{ color: primaryColor }}>
                  {step.step}
                </span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm" style={{ color: "#d9cbbf" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Esteemed Partners */}
      <section className="max-w-6xl mx-auto px-6 py-16 mt-12" style={{ backgroundColor: primaryColor, borderRadius: "12px" }}>
        <h2 className="text-center text-2xl font-semibold mb-10" style={{ color: accentColor }}>
          Our Esteemed Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Placeholder partner logos */}
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Logo 1</span>
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Logo 2</span>
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Logo 3</span>
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Logo 4</span>
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Logo 5</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageEnhanced;
