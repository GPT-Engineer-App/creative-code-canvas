import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, MessageSquare, Youtube } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      anime({
        targets: '.blob',
        translateX: function() { return anime.random(-10, 10) + 'rem'; },
        translateY: function() { return anime.random(-10, 10) + 'rem'; },
        scale: function() { return anime.random(0.8, 1.2); },
        easing: 'easeInOutQuad',
        duration: 5000,
        complete: function(anim) {
          anim.restart();
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white overflow-hidden">
      <div className="blob absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      <div className="blob absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      
      <nav className="p-6 flex justify-between items-center relative z-10">
        <img src="/placeholder.svg" alt="Lovable logo" className="h-10 w-auto" />
        <div className="flex space-x-6">
          <a href="#vision" className="hover:text-yellow-300 transition-colors">Vision</a>
          <a href="#news" className="hover:text-yellow-300 transition-colors">News</a>
          <a href="#careers" className="hover:text-yellow-300 transition-colors">Careers</a>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-6">GPT Engineer</h1>
          <p className="text-3xl mb-8">The last piece of software.</p>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            We're building software that builds software. Our vision is to unlock human creativity — by enabling anyone to create software.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors"
          >
            Get Early Access
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">It starts with an AI software engineer.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "For Everyone", description: "Chat with AI to build and deploy web apps, with no technical knowledge needed." },
              { title: "For Developers", description: "Collaborate in chat and code with an AI engineer, to build at lightning speed." },
              { title: "For Agencies", description: "Partner with AI to streamline web app creation, iteration, and support." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <ChevronDown size={48} className="mx-auto animate-bounce" />
        </motion.div>
      </main>

      <footer className="bg-black bg-opacity-30 py-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <img src="/placeholder.svg" alt="GPT Engineer logo" className="h-10 w-auto mx-auto md:mx-0" />
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors"><Github /></a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors"><MessageSquare /></a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors"><Youtube /></a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
