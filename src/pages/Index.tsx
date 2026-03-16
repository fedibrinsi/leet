import { useNavigate } from 'react-router-dom';
import CosmicBackground from '@/components/CosmicBackground';
import Navbar from '@/components/Navbar';
import HolographicCard from '@/components/HolographicCard';
import PortalButton from '@/components/PortalButton';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CosmicBackground />
      <Navbar />

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Welcome to the</span>
              <br />
              <span className="text-primary text-glow">Multiverse</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto font-exo">
              Faculty of Sciences of Tunis — but not as you know it.
              <br />
              In this dimension, knowledge transcends space and time.
            </p>

            <p className="text-sm text-secondary mb-12 font-mono">
              [ DIMENSION: ALPHA-PRIME | COORDINATES: 36.8065° N, 10.1815° E | TIMELINE: ACTIVE ]
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PortalButton
                size="lg"
                onClick={() => navigate('/portal')}
              >
                Enter Student Portal
              </PortalButton>
              <PortalButton
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </PortalButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <HolographicCard className="p-8" glowColor="primary">
              <h3 className="font-orbitron text-xl font-bold text-primary mb-3">
                Quantum Learning
              </h3>
              <p className="text-muted-foreground font-exo">
                Access knowledge from infinite parallel dimensions. Your consciousness 
                expands across the multiverse.
              </p>
            </HolographicCard>

            <HolographicCard className="p-8" glowColor="secondary">
              <h3 className="font-orbitron text-xl font-bold text-secondary mb-3">
                Dimensional Grades
              </h3>
              <p className="text-muted-foreground font-exo">
                Your academic performance resonates through all timelines. 
                Check your interdimensional transcript.
              </p>
            </HolographicCard>

            <HolographicCard className="p-8" glowColor="accent">
              <h3 className="font-orbitron text-xl font-bold text-accent mb-3">
                Secure Access
              </h3>
              <p className="text-muted-foreground font-exo">
                Our portal is protected by advanced quantum encryption... 
                or is it? Only authorized students may proceed.
              </p>
            </HolographicCard>
          </div>
        </section>

        {/* Warning Section */}
        <section className="container mx-auto px-6 py-12">
          <HolographicCard className="p-8 max-w-2xl mx-auto text-center" animated>
            <h3 className="font-orbitron text-lg font-bold text-cosmic-starlight mb-2">
              Dimensional Security Notice
            </h3>
            <p className="text-sm text-muted-foreground font-mono">
              Unauthorized access to restricted dimensions is strictly prohibited.
              <br />
              Each student has a unique dimensional ID. Do not attempt to access 
              <br />
              profiles that do not belong to you.
            </p>
          </HolographicCard>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 text-center border-t border-primary/10">
          <p className="text-sm text-muted-foreground font-exo">
            © 2026 FST Multiverse | Dimension Alpha-Prime
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2 font-mono">
            CTF Challenge • Difficulty: Easy
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
