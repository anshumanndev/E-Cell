import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { MagneticButton } from '../components/effects/MagneticButton';
import { AtmosphericGlow } from '../components/effects/AtmosphericGlow';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      <AtmosphericGlow variant="center" />

      <div className="max-w-md mx-auto space-y-6 z-10">
        <div className="w-16 h-16 rounded-3xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mx-auto shadow-sm">
          <Compass size={32} />
        </div>

        <span className="text-xs font-mono text-teal-700 font-bold tracking-widest uppercase">
          ERROR 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
          Looks like your idea took a wrong turn.
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Even great founders get lost sometimes. The page you're searching for has either moved or doesn't exist.
        </p>

        <div className="pt-4 flex justify-center">
          <Link to="/">
            <MagneticButton variant="primary" size="md">
              <ArrowLeft size={16} />
              <span>BACK TO HOME</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
