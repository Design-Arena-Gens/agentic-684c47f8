'use client'

import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Intelliwave
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition">Services</a>
              <a href="#expertise" className="text-gray-300 hover:text-blue-400 transition">Expertise</a>
              <a href="#solutions" className="text-gray-300 hover:text-blue-400 transition">Solutions</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition">Services</a>
              <a href="#expertise" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition">Expertise</a>
              <a href="#solutions" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition">Solutions</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Intelliwave
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Agence d'Automatisation AI & n8n
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Spécialiste en création de chatbots intelligents sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition transform hover:scale-105"
              >
                Démarrer un Projet
              </a>
              <a
                href="#services"
                className="px-8 py-3 bg-slate-800/50 text-white rounded-lg font-semibold border border-blue-500/30 hover:bg-slate-700/50 transition"
              >
                Découvrir nos Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Chatbots IA</h3>
              <p className="text-gray-400">
                Création de chatbots intelligents personnalisés pour automatiser vos conversations et améliorer l'expérience client.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Automatisation n8n</h3>
              <p className="text-gray-400">
                Mise en place de workflows automatisés sur mesure avec n8n pour optimiser vos processus métier.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-white mb-4">Intégrations API</h3>
              <p className="text-gray-400">
                Connexion et synchronisation de vos outils existants pour une automatisation complète de votre écosystème.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Notre Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Spécialistes n8n & IA
              </h3>
              <p className="text-gray-400 mb-6">
                Nous maîtrisons les dernières technologies d'intelligence artificielle et d'automatisation pour créer des solutions innovantes adaptées à vos besoins.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span className="text-gray-300">Développement de chatbots conversationnels avancés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span className="text-gray-300">Automatisation de processus métier avec n8n</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span className="text-gray-300">Intégration d'API et systèmes tiers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span className="text-gray-300">Formation et support continu</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">GPT-4 & Claude</h4>
                  <p className="text-gray-400">Intégration des meilleurs modèles d'IA</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">n8n Workflows</h4>
                  <p className="text-gray-400">Automatisation visuelle puissante</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2">Solutions Sur Mesure</h4>
                  <p className="text-gray-400">Développement personnalisé à 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Cas d'Usage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="text-lg font-bold text-white mb-2">Service Client</h4>
              <p className="text-gray-400 text-sm">Support automatisé 24/7</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="text-lg font-bold text-white mb-2">Email Marketing</h4>
              <p className="text-gray-400 text-sm">Campagnes automatisées</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">Reporting</h4>
              <p className="text-gray-400 text-sm">Tableaux de bord automatiques</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Lead Generation</h4>
              <p className="text-gray-400 text-sm">Qualification intelligente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Démarrez Votre Projet
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Contactez-nous pour discuter de votre projet d'automatisation et de chatbot IA
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-blue-500/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Entreprise</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition transform hover:scale-105"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Intelliwave
          </div>
          <p className="text-gray-400 mb-6">
            Agence d'Automatisation AI & Chatbots sur Mesure
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">GitHub</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Intelliwave. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
