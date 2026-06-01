'use client';
import { Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { ExperienceEducation } from '@/components/ExperienceEducation';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

// Loading fallback component
function SectionLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary">
      <div className="spinner"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      {/* Tech Stack Section */}
      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      {/* Experience & Education */}
      <Suspense fallback={<SectionLoader />}>
        <ExperienceEducation />
      </Suspense>

      {/* Resume Section */}
      <Suspense fallback={<SectionLoader />}>
        <Resume />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      {/* Footer */}
      <Footer />
    </main>
  );
}
