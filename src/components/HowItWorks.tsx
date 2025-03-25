import React from 'react';
import { UserPlus, Building, MessageSquare, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="text-blue-600" size={32} />,
      title: 'Create Profile',
      description: 'Build your profile highlighting your unique skills and talents.'
    },
    {
      icon: <Building className="text-blue-600" size={32} />,
      title: 'Match with Employers',
      description: 'Get matched with inclusive employers seeking your specific skills.'
    },
    {
      icon: <MessageSquare className="text-blue-600" size={32} />,
      title: 'Interview Process',
      description: 'Participate in neurodiversity-friendly interview processes.'
    },
    {
      icon: <CheckCircle className="text-blue-600" size={32} />,
      title: 'Start Your Journey',
      description: 'Begin your new role in an inclusive and supportive environment.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg">
                {step.icon}
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;