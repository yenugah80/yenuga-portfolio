'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Zap, TrendingUp } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's Inc.",
    role: 'Lead AI Engineer',
    subtitle: 'Applied ML & GenAI Systems',
    period: 'Mar 2025 - Present',
    location: 'United States',
    impact: 'Leading enterprise AI transformation',
    highlights: [
      { text: 'Architected LLM-powered platforms serving omnichannel operations', metric: 'Enterprise Scale' },
      { text: 'Built RAG pipelines with FAISS & Bedrock Knowledge Bases', metric: 'Production Ready' },
      { text: 'Designed multi-agent workflows using LangChain & LangGraph', metric: 'AI Orchestration' },
      { text: 'Implemented guardrails for safe LLM behavior in production', metric: 'Enterprise Safety' },
    ],
    technologies: ['LangChain', 'LangGraph', 'Amazon Bedrock', 'FAISS', 'Spark', 'Databricks', 'FastAPI'],
    color: 'primary',
    current: true,
    logo: '🏢',
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    subtitle: 'Applied ML & GenAI',
    period: 'Feb 2022 - Jan 2024',
    location: 'United States',
    impact: '2 years driving ML innovation in banking',
    highlights: [
      { text: 'Productionized ML workflows for fraud detection & risk systems', metric: 'Risk Mitigation' },
      { text: 'Built end-to-end LLM pipelines with Azure OpenAI & Bedrock', metric: 'GenAI Pioneer' },
      { text: 'Engineered features across Snowflake, BigQuery, Databricks', metric: 'Data at Scale' },
      { text: 'Led cross-functional initiatives as senior IC and SME', metric: 'Tech Leadership' },
    ],
    technologies: ['Python', 'XGBoost', 'PySpark', 'Azure OpenAI', 'Snowflake', 'BigQuery', 'Docker'],
    color: 'secondary',
    current: false,
    logo: '🏦',
  },
  {
    company: 'Apple Inc.',
    role: 'AI Engineer',
    subtitle: 'Senior Data Specialist via Infosys',
    period: 'Sep 2019 - Feb 2022',
    location: 'United States',
    impact: '2.5 years transforming retail analytics',
    highlights: [
      { text: 'Owned KPI logic & analytics pipelines across business units', metric: 'Data Ownership' },
      { text: 'Transitioned analytics to production ML systems', metric: 'ML Transformation' },
      { text: 'Led & mentored 19-member engineering team as SME', metric: 'Team Leadership' },
      { text: 'Earned 2x Spot Awards for exemplary performance', metric: '🏆 Recognition' },
    ],
    technologies: ['Python', 'SQL', 'Azure ML', 'SageMaker', 'FastAPI', 'Docker', 'Kubernetes'],
    color: 'accent',
    current: false,
    logo: '🍎',
  },
  {
    company: 'RSI Softech',
    role: 'GIS Data Analyst',
    subtitle: 'National Remote Sensing Center',
    period: 'Jun 2017 - Aug 2019',
    location: 'Hyderabad, India',
    impact: 'Foundation in data engineering',
    highlights: [
      { text: 'Built geodatabases for AMRUT Smart Cities project', metric: 'Smart Cities' },
      { text: 'Automated spatial ETL with Python & GIS scripts', metric: 'Automation' },
      { text: 'Improved dataset reliability by 30-40%', metric: '📈 30-40% Better' },
    ],
    technologies: ['ArcGIS', 'QGIS', 'Python', 'MySQL', 'SQL Server'],
    color: 'primary',
    current: false,
    logo: '🗺️',
  },
]

export function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] animate-spin-slow" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <motion.span
              className="badge mb-4 inline-flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={14} className="text-yellow-400" />
              Experience
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text animate-gradient">8+ Years</span> of Building
              <br />
              <span className="text-foreground">Production AI Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From retail giants to banking leaders — transforming data into intelligent systems
            </p>
          </div>
        </RevealOnScroll>

        {/* Experience Cards - Modern Layout */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <motion.div
                className={`relative group ${exp.current ? 'experience-card-current' : ''}`}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Glow effect for current */}
                {exp.current && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-gradient-xy" />
                )}

                <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Company Logo/Emoji */}
                      <motion.div
                        className="text-4xl md:text-5xl"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                      >
                        {exp.logo}
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full animate-pulse flex items-center gap-1">
                              <span className="w-2 h-2 bg-green-400 rounded-full" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-semibold gradient-text">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-secondary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-primary" />
                      <span className="font-medium">{exp.impact}</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group/item"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-primary text-lg group-hover/item:scale-110 transition-transform">→</span>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{highlight.text}</p>
                          <span className="text-xs font-semibold text-primary/80">{highlight.metric}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="badge text-xs hover:scale-105 transition-transform cursor-default"
                        whileHover={{ y: -2 }}
                        style={{
                          background: `hsl(var(--${exp.color}) / 0.15)`,
                          color: `hsl(var(--${exp.color}))`,
                          borderColor: `hsl(var(--${exp.color}) / 0.3)`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Stats Bar */}
        <RevealOnScroll>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '8+', label: 'Years Experience', icon: '⚡' },
              { value: '3', label: 'Industries', icon: '🏢' },
              { value: '50+', label: 'AI Projects', icon: '🤖' },
              { value: '2', label: 'Awards', icon: '🏆' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass rounded-xl p-4 text-center group hover:border-primary/30 transition-colors"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <span className="text-2xl mb-2 block group-hover:animate-bounce">{stat.icon}</span>
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
