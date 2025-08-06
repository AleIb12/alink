"use client"

import Image from "next/image";
import { Instagram, Palette, User, Sparkles, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import ShimmerButton from "@/components/ui/shimmer-button";
import Particles from "@/components/ui/particles";
import ClientOnly from "@/components/client-only";

export default function Home() {
  const links = [
    {
      title: "Instagram",
      description: "Sígueme para ver mi trabajo creativo",
      href: "https://www.instagram.com/ali.ibarrabello/",
      icon: Instagram,
      color: "from-elegant-cream/20 to-elegant-cream/40",
    },
    {
      title: "Pinterest",
      description: "Inspiración y diseños creativos",
      href: "https://es.pinterest.com/jardin_de_alisha/",
      icon: Palette,
      color: "from-elegant-cream/30 to-elegant-cream/50",
    },
    {
      title: "Portafolio Personal",
      description: "Conoce mis proyectos y experiencia",
      href: "https://alishas-atelier.vercel.app",
      icon: User,
      color: "from-elegant-cream/25 to-elegant-cream/45",
    },
    {
      title: "Buy Me a Coffee",
      description: "Apoya mi trabajo con un cafecito ☕",
      href: "https://buymeacoffee.com/ali.ibarra",
      icon: Coffee,
      color: "from-elegant-cream/35 to-elegant-cream/55",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-elegant-dark relative overflow-hidden">
      {/* Patrón de fondo elegante */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-elegant-cream/10 via-transparent to-elegant-cream/5"></div>
      </div>
      
      {/* Partículas de fondo */}
      <ClientOnly>
        <Particles
          className="absolute inset-0"
          quantity={50}
          color="#F0EDCC"
          size={0.3}
        />
      </ClientOnly>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <ClientOnly fallback={
          <div className="w-full max-w-md mx-auto">
            {/* Fallback estático sin animaciones */}
            <div className="text-center mb-8">
              <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-elegant-cream/30 via-elegant-cream/20 to-elegant-cream/10 p-1 mb-6 shadow-2xl animate-float">
                <div className="w-full h-full rounded-full bg-elegant-dark border-2 border-elegant-cream/20 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/tind.png" 
                    alt="Alisha Ibarra" 
                    width={130} 
                    height={130} 
                    className="rounded-full object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-elegant-cream mb-3 font-playfair">Alisha Ibarra</h1>
              <div className="inline-block bg-elegant-cream/10 border border-elegant-cream/20 px-6 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium text-elegant-cream font-inter">Desarrolladora & Diseñadora</span>
              </div>
              <p className="text-elegant-cream/80 mt-6 text-base leading-relaxed max-w-sm mx-auto font-inter">
                ¡Hola! Soy Alisha, desarrolladora y diseñadora. Aquí encontrarás mis redes sociales y portafolio. 
                ¡Conectemos y creemos algo increíble juntos!
              </p>
            </div>
            <div className="space-y-4">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.title} href={link.href} className="block">
                    <div className="flex items-center justify-between w-full p-5 bg-elegant-cream/5 border border-elegant-cream/10 rounded-2xl hover:bg-elegant-cream/10 hover:border-elegant-cream/20 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} border border-elegant-cream/30 flex items-center justify-center min-w-[48px] min-h-[48px]`}>
                          <Icon className="w-5 h-5 text-elegant-cream flex-shrink-0" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-elegant-cream font-inter text-base">{link.title}</div>
                          <div className="text-elegant-cream/70 text-sm font-inter">{link.description}</div>
                        </div>
                      </div>
                      <div className="text-elegant-cream/60 text-lg">→</div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <p className="text-elegant-cream/60 text-sm font-inter">
                © 2025 Alisha Ibarra. Hecho con ❤️ y Next.js
              </p>
            </div>
          </div>
        }>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-md mx-auto"
          >
            {/* Header con foto de perfil */}
            <motion.div variants={itemVariants} className="text-center mb-10">
              <div className="relative mb-8">
                <motion.div 
                  className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-elegant-cream/30 via-elegant-cream/20 to-elegant-cream/10 p-1 shadow-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-elegant-dark border-2 border-elegant-cream/20 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/tind.png" 
                      alt="Alisha Ibarra" 
                      width={130} 
                      height={130} 
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl font-bold text-elegant-cream mb-3 font-playfair"
              >
                Alisha Ibarra
              </motion.h1>
              
              <motion.div variants={itemVariants}>
                <AnimatedGradientText>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Desarrolladora & Diseñadora
                </AnimatedGradientText>
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="text-elegant-cream/80 mt-6 text-base leading-relaxed max-w-sm mx-auto font-inter"
              >
                ¡Hola! Soy Alisha, desarrolladora y diseñadora. Aquí encontrarás mis redes sociales y portafolio. 
                ¡Conectemos y creemos algo increíble juntos!
              </motion.p>
            </motion.div>

            {/* Links principales */}
            <motion.div variants={itemVariants} className="space-y-5">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShimmerButton
                      href={link.href}
                      className="w-full"
                      background="rgba(240, 237, 204, 0.05)"
                    >
                      <div className="flex items-center justify-between w-full p-2">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} border border-elegant-cream/30 flex items-center justify-center min-w-[48px] min-h-[48px]`}>
                            <Icon className="w-5 h-5 text-elegant-cream flex-shrink-0" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-elegant-cream font-inter text-base">{link.title}</div>
                            <div className="text-elegant-cream/70 text-sm font-inter">{link.description}</div>
                          </div>
                        </div>
                        <div className="text-elegant-cream/60 text-lg">→</div>
                      </div>
                    </ShimmerButton>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Footer */}
            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <p className="text-elegant-cream/60 text-sm font-inter">
                © 2025 Alisha Ibarra. Hecho con ❤️ y Next.js
              </p>
            </motion.div>
          </motion.div>
        </ClientOnly>
      </div>
    </div>
  );
}
