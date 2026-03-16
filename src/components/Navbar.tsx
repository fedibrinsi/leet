import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div>
              <h1 className="font-orbitron text-lg font-bold text-primary text-glow">
                FST Multiverse
              </h1>
              <p className="text-xs text-muted-foreground">Dimension Portal</p>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                'font-orbitron text-sm uppercase tracking-wider transition-all duration-300',
                isActive('/') 
                  ? 'text-primary text-glow' 
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              Home
            </Link>
            <Link
              to="/portal"
              className={cn(
                'font-orbitron text-sm uppercase tracking-wider transition-all duration-300',
                isActive('/portal') 
                  ? 'text-primary text-glow' 
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
