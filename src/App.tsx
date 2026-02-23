/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Play, 
  Video, 
  Share2, 
  Palette, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useRef } from "react";

const COLORS = {
  yellow: "var(--color-agency-yellow)",
  dark: "var(--color-agency-dark)",
  pink: "var(--color-agency-pink)",
  blue: "var(--color-agency-blue)",
  teal: "var(--color-agency-teal)",
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const services = [
    {
      title: "Motion Graphics",
      description: "Animações dinâmicas que dão vida à sua marca e capturam a atenção instantaneamente.",
      icon: <Play className="w-8 h-8" />,
      color: "bg-agency-pink"
    },
    {
      title: "Edição de Vídeo",
      description: "Narrativas visuais poderosas com cortes precisos e pós-produção de alto nível.",
      icon: <Video className="w-8 h-8" />,
      color: "bg-agency-blue"
    },
    {
      title: "Social Media",
      description: "Conteúdo estratégico e visualmente impactante para suas redes sociais brilharem.",
      icon: <Share2 className="w-8 h-8" />,
      color: "bg-agency-teal"
    },
    {
      title: "Design Gráfico",
      description: "Identidade visual e peças gráficas que comunicam a essência do seu negócio.",
      icon: <Palette className="w-8 h-8" />,
      color: "bg-agency-purple"
    }
  ];

  const projects = [1, 2, 3, 4, 5, 6]; // Placeholders for projects

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-agency-dark selection:text-agency-yellow">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-agency-dark/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-black tracking-tighter flex flex-col leading-none">
              <span className="text-agency-dark">GUITAW</span>
              <span className="text-[10px] tracking-[0.4em] font-medium text-agency-dark/60">MEDIA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Serviços', 'Projetos', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-semibold uppercase tracking-wider hover:text-agency-pink transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-agency-dark text-agency-yellow px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Vamos Conversar
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-agency-yellow pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-6">
            {['Serviços', 'Projetos', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-4xl font-black uppercase tracking-tighter"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-agency-yellow overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter text-agency-dark uppercase">
              Design <br />
              <span className="text-outline text-agency-dark">Multimídia</span> <br />
              de Impacto.
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl font-medium text-agency-dark/80">
              Transformamos ideias em experiências visuais memoráveis através de motion design, 
              edição de vídeo e estratégias criativas.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-agency-dark text-agency-yellow px-8 py-4 rounded-full text-lg font-black uppercase tracking-widest flex items-center group">
                Ver Projetos
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-agency-dark text-agency-dark px-8 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:bg-agency-dark hover:text-agency-yellow transition-all">
                Nossa Agência
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full hidden lg:block"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-10 right-10 w-64 h-64 bg-agency-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-agency-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-agency-pink mb-4">O que fazemos</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Nossas Especialidades</h3>
            </div>
            <p className="max-w-md text-agency-dark/60 font-medium">
              Combinamos técnica e criatividade para entregar resultados que elevam o patamar da sua marca no digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-agency-dark/5 hover:border-agency-yellow hover:shadow-2xl hover:shadow-agency-yellow/20 transition-all group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h4>
                <p className="text-agency-dark/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projetos" className="py-24 bg-agency-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-agency-yellow mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Projetos Selecionados</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video bg-white/5 rounded-3xl overflow-hidden relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-agency-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8">
                  <span className="text-agency-dark text-xs font-black uppercase tracking-widest mb-2">Categoria do Projeto</span>
                  <h4 className="text-agency-dark text-2xl font-black uppercase leading-none">Nome do Projeto {p}</h4>
                  <div className="mt-4 w-10 h-10 bg-agency-dark rounded-full flex items-center justify-center text-agency-yellow">
                    <ChevronRight />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity">
                  <Play className="w-12 h-12" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center text-agency-yellow font-bold uppercase tracking-widest hover:gap-4 transition-all">
              Ver todos os trabalhos <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-agency-yellow rounded-[40px] overflow-hidden relative z-10">
              {/* Placeholder for agency image */}
              <div className="absolute inset-0 bg-grid text-agency-dark/10" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-agency-pink rounded-full -z-0" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-agency-blue rounded-3xl -z-0 rotate-12" />
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-agency-teal mb-4">Sobre Nós</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">Criatividade que <br /> gera movimento.</h3>
            <div className="space-y-6 text-lg text-agency-dark/70 leading-relaxed">
              <p>
                A GUITAW MEDIA nasceu da paixão por contar histórias através do design. Somos uma agência focada em resultados visuais que não apenas parecem bons, mas que comunicam com clareza e propósito.
              </p>
              <p>
                Nossa equipe é composta por especialistas em diversas áreas do design multimídia, prontos para enfrentar desafios e entregar soluções inovadoras para marcas que buscam se destacar.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-agency-dark">+50</div>
                <div className="text-sm font-bold uppercase tracking-wider text-agency-dark/40">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-4xl font-black text-agency-dark">100%</div>
                <div className="text-sm font-bold uppercase tracking-wider text-agency-dark/40">Foco em Qualidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-agency-yellow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-agency-dark mb-4">Contato</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">Vamos criar <br /> algo incrível?</h3>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-agency-dark rounded-full flex items-center justify-center text-agency-yellow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-agency-dark/40">E-mail</div>
                    <div className="text-lg font-bold">contato@guitawmedia.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-agency-dark rounded-full flex items-center justify-center text-agency-yellow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-agency-dark/40">WhatsApp</div>
                    <div className="text-lg font-bold">+55 (00) 00000-0000</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <a href="#" className="w-12 h-12 border-2 border-agency-dark rounded-full flex items-center justify-center hover:bg-agency-dark hover:text-agency-yellow transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 border-2 border-agency-dark rounded-full flex items-center justify-center hover:bg-agency-dark hover:text-agency-yellow transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-agency-dark/10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-agency-dark/40">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full px-6 py-4 bg-agency-dark/5 rounded-2xl border-none focus:ring-2 focus:ring-agency-yellow outline-none font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-agency-dark/40">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full px-6 py-4 bg-agency-dark/5 rounded-2xl border-none focus:ring-2 focus:ring-agency-yellow outline-none font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-agency-dark/40">Assunto</label>
                  <select className="w-full px-6 py-4 bg-agency-dark/5 rounded-2xl border-none focus:ring-2 focus:ring-agency-yellow outline-none font-medium appearance-none">
                    <option>Motion Graphics</option>
                    <option>Edição de Vídeo</option>
                    <option>Social Media</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-agency-dark/40">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full px-6 py-4 bg-agency-dark/5 rounded-2xl border-none focus:ring-2 focus:ring-agency-yellow outline-none font-medium resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-agency-dark text-agency-yellow py-5 rounded-2xl text-lg font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-agency-dark text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-black tracking-tighter flex flex-col leading-none">
              <span className="text-agency-yellow">GUITAW</span>
              <span className="text-[8px] tracking-[0.4em] font-medium text-white/40">MEDIA</span>
            </div>
          </div>
          
          <div className="text-sm font-medium text-white/40">
            © {new Date().getFullYear()} GUITAW MEDIA. Todos os direitos reservados.
          </div>

          <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-agency-yellow transition-colors">Privacidade</a>
            <a href="#" className="hover:text-agency-yellow transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
