import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CosmicBackground from '@/components/CosmicBackground';
import Navbar from '@/components/Navbar';
import HolographicCard from '@/components/HolographicCard';
import PortalButton from '@/components/PortalButton';
import { getAllPublicStudents } from '@/data/students';
import { Input } from '@/components/ui/input';

const Portal = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const publicStudents = getAllPublicStudents();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Number(studentId);
    // "Validation" - but only on the form, not on direct URL access!
    if (id >= 1 && id <= 4) {
      navigate(`/student/${studentId}`);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CosmicBackground />
      <Navbar />

      <main className="relative z-10 pt-24">
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h1 className="font-orbitron text-4xl font-bold text-foreground mb-4">
              Student <span className="text-primary text-glow">Portal</span>
            </h1>
            <p className="text-muted-foreground font-exo">
              Access your interdimensional academic records
            </p>
          </div>

          {/* Login Form */}
          <HolographicCard className="max-w-md mx-auto p-8 mb-16">
            <h2 className="font-orbitron text-xl font-bold text-primary mb-6 text-center">
              Dimensional Access
            </h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-orbitron text-muted-foreground mb-2">
                  Student ID
                </label>
                <Input
                  type="number"
                  min="1"
                  max="4"
                  placeholder="Enter your Student ID (1-4)"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="bg-input/50 border-primary/30 text-foreground font-mono placeholder:text-muted-foreground/50 focus:border-primary focus:ring-primary"
                />
                <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
                  Valid IDs: 1-4 only. System secured.
                </p>
              </div>
              <PortalButton type="submit" className="w-full" disabled={!studentId}>
                Access Profile
              </PortalButton>
            </form>
          </HolographicCard>

          {/* Student Directory */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-orbitron text-2xl font-bold text-center mb-8">
              <span className="text-foreground">Known</span>{' '}
              <span className="text-secondary">Dimensional Travelers</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {publicStudents.map((student) => (
                <HolographicCard
                  key={student.id}
                  className="p-6 cursor-pointer hover:scale-[1.02] transition-transform"
                  glowColor="secondary"
                  onClick={() => navigate(`/student/${student.id}`)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{student.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-orbitron font-bold text-foreground mb-1">
                        {student.name}
                      </h3>
                      <p className="text-sm text-primary font-mono mb-2">
                        ID: {student.id}
                      </p>
                      <p className="text-xs text-muted-foreground font-exo">
                        {student.dimension}
                      </p>
                      <p className="text-xs text-secondary font-exo">
                        {student.department}
                      </p>
                    </div>
                  </div>
                </HolographicCard>
              ))}
            </div>
          </div>

          {/* Hint Box */}
          <div className="max-w-2xl mx-auto mt-16">
            <HolographicCard className="p-6 text-center" animated>
              <p className="text-sm text-muted-foreground font-mono">
                "The elite don't follow the same rules as everyone else..."
                <br />
                <span className="text-primary/60">- Ancient Terminal Log</span>
              </p>
            </HolographicCard>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portal;
