import { useParams, useNavigate } from 'react-router-dom';
import CosmicBackground from '@/components/CosmicBackground';
import Navbar from '@/components/Navbar';
import HolographicCard from '@/components/HolographicCard';
import PortalButton from '@/components/PortalButton';
import { getStudentById } from '@/data/students';

const StudentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // IDOR Vulnerability: No authorization check!
  // Any user can access any profile by changing the ID in the URL
  const student = getStudentById(Number(id));

  if (!student) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <CosmicBackground />
        <Navbar />
        <main className="relative z-10 pt-24 container mx-auto px-6 py-20">
          <HolographicCard className="max-w-md mx-auto p-8 text-center">
            <h1 className="font-orbitron text-2xl font-bold text-destructive mb-4">
              Dimension Not Found
            </h1>
            <p className="text-muted-foreground font-exo mb-6">
              This dimensional ID does not exist in our records.
            </p>
            <PortalButton onClick={() => navigate('/portal')}>
              Return to Portal
            </PortalButton>
          </HolographicCard>
        </main>
      </div>
    );
  }

  const isSecretProfile = student.id === 1337;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CosmicBackground />
      <Navbar />

      <main className="relative z-10 pt-24">
        <section className="container mx-auto px-6 py-12">
          {/* Alert for secret profile */}
          {isSecretProfile && (
            <HolographicCard 
              className="max-w-2xl mx-auto p-4 mb-8 text-center border-destructive/50" 
              glowColor="accent"
            >
              <p className="font-orbitron text-sm text-accent animate-pulse">
                UNAUTHORIZED ACCESS DETECTED
              </p>
            </HolographicCard>
          )}

          {/* Profile Header */}
          <HolographicCard 
            className="max-w-2xl mx-auto p-8 mb-8"
            glowColor={isSecretProfile ? 'accent' : 'primary'}
          >
            <div className="flex items-center gap-6">
              <div className={`text-6xl ${isSecretProfile ? 'animate-pulse-glow' : 'animate-float'}`}>
                {student.avatar}
              </div>
              <div className="flex-1">
                <h1 className={`font-orbitron text-2xl font-bold mb-2 ${
                  isSecretProfile ? 'text-accent text-glow-accent' : 'text-foreground'
                }`}>
                  {student.name}
                </h1>
                <div className="space-y-1">
                  <p className="text-sm text-primary font-mono">
                    Dimensional ID: {student.id}
                  </p>
                  <p className="text-sm text-muted-foreground font-exo">
                    {student.dimension}
                  </p>
                  <p className="text-sm text-secondary font-exo">
                    {student.department}
                  </p>
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    Enrolled: Year {student.enrollmentYear}
                  </p>
                </div>
              </div>
            </div>
          </HolographicCard>

          {/* Grades Section */}
          <HolographicCard 
            className="max-w-2xl mx-auto p-8 mb-8"
            glowColor={isSecretProfile ? 'accent' : 'secondary'}
          >
            <h2 className="font-orbitron text-xl font-bold text-secondary mb-6">
              Academic Records
            </h2>
            <div className="space-y-4">
              {student.grades.map((grade, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-primary/10"
                >
                  <div>
                    <h3 className="font-orbitron text-sm font-semibold text-foreground">
                      {grade.subject}
                    </h3>
                    <p className="text-xs text-muted-foreground font-exo">
                      Professor: {grade.professor}
                    </p>
                  </div>
                  <div className={`font-orbitron text-2xl font-bold ${
                    grade.grade >= 90 ? 'text-primary text-glow' :
                    grade.grade >= 70 ? 'text-cosmic-starlight' :
                    'text-destructive'
                  }`}>
                    {grade.grade}
                  </div>
                </div>
              ))}
            </div>
          </HolographicCard>

          {/* Secret Notes (FLAG) */}
          {student.secretNotes && (
            <HolographicCard 
              className="max-w-2xl mx-auto p-8 border-accent/50"
              glowColor="accent"
              animated
            >
              <h2 className="font-orbitron text-xl font-bold text-accent mb-4 text-center">
                CLASSIFIED INFORMATION
              </h2>
              <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                <p className="font-mono text-lg text-center text-accent break-all">
                  {student.secretNotes}
                </p>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
                Congratulations! You've discovered the forbidden dimension.
              </p>
            </HolographicCard>
          )}

          {/* Back Button */}
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <PortalButton variant="ghost" onClick={() => navigate('/portal')}>
              ← Return to Portal
            </PortalButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentProfile;
