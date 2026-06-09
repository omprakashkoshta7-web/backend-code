import React from 'react';

interface ResumeData {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  website?: string;
  summary?: string;
  experience?: Array<{
    position: string;
    company: string;
    location: string;
    period: string;
    highlights?: string[];
  }>;
  education?: Array<{
    degree: string;
    school: string;
    year: string;
  }>;
  skills?: string[];
  certifications?: Array<{
    name: string;
    issuer: string;
  }>;
}

interface PrecisionLineResumeProps {
  data?: ResumeData;
  preview?: boolean;
}

export default function PrecisionLineResume({ 
  data = {
    name: 'Olivia Bennett',
    title: 'Head of Customer Service',
    email: 'olivia.bennett@email.com',
    phone: '+61 432 345 567',
    location: 'Sydney, Australia',
    linkedin: 'linkedin.com/in/olivia-bennett',
    website: 'www.olivia.bennett',
    summary: 'Accomplished customer service professional with 8+ years of strategic leadership experience driving operational excellence, strong process improvement expertise in service operations, team leadership, customer journey improvement, and quality assurance. Proven track record of designing and implementing innovative solutions that exceed expectations and drive sustainable growth.',
    experience: [
      {
        position: 'Head of Customer Service',
        company: 'Premium Solutions Inc.',
        location: 'Sydney, Australia',
        period: '2021 - Current',
        highlights: [
          'Led and organized a team of 45+ customer service professionals, improving CSAT from 82% to 94% in first year',
          'Designed and executed comprehensive service training programs, reducing average handle time by 18% while maintaining quality metrics',
          'Developed and implemented customer feedback mechanisms and proactive outreach programs',
        ]
      },
      {
        position: 'Southern Cross Retail Group, Customer Service Director',
        company: 'Melbourne, Australia',
        location: '2018 - 2021',
        period: '2018 - 2021',
        highlights: [
          'Oversaw operations for 12 retail locations across Australia, managing 200+ team members',
          'Implemented new service protocols and dashboards that analyzed real-time data on service quality, saving 25% on staffing',
          'Managed frontline and back-office customer service teams, handling billing, account inquiries, and complex customer issues for customers',
          'Conducted training and development initiatives to upskill front-line staff on latest customer service techniques and technologies',
        ]
      },
      {
        position: 'Customer Service Supervisor, Customer Service Supervisor',
        company: 'Brisbane, Australia',
        location: '2016 - 2018',
        period: '2016 - 2018',
        highlights: [
          'Trained and coached support staff on enhancing customer retention procedures',
          'Designed and tested new support platforms and coaching staff on customer communication',
          'Resolved complex customer requests and escalations',
        ]
      },
    ],
    education: [
      {
        degree: 'Master of Business Administration',
        school: 'University of Sydney',
        year: '2014 - 2016 | Sydney, Australia'
      },
      {
        degree: 'Advanced Diploma of Customer Engagement',
        school: 'NSW TAFE',
        year: '2009 - 2012 | Sydney, Australia'
      },
    ],
    skills: [
      'Customer Service Operations',
      'Contact Centre Leadership',
      'Monitoring Planning',
      'Customer Journey Mapping',
      'Process Optimization',
      'Stakeholder Management',
      'Change Management',
      'Service Analytics',
      'Team Development',
    ],
    certifications: [
      {
        name: 'Certified Customer Service Manager',
        issuer: 'ICMA'
      },
      {
        name: 'Advanced Certificate in Service Operations',
        issuer: 'AIM (Australian Institute of Management)'
      },
      {
        name: '6 Sigma Green Belt',
        issuer: 'IASSC'
      },
      {
        name: 'Certified Contact Centre Manager',
        issuer: 'Certification Center'
      },
    ]
  },
  preview = false,
}: PrecisionLineResumeProps) {
  return (
    <div className={`${preview ? 'p-8 bg-white text-black' : 'p-12 bg-white'} max-w-4xl mx-auto`} style={{ fontFamily: 'Georgia, serif' }}>
      {/* Header */}
      <div className="mb-6 pb-6 border-b-2 border-gray-900">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">{data.name}</h1>
        <p className="text-lg text-gray-600 font-semibold">{data.title}</p>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>|</span>} 
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>|</span>}
          {data.location && <span>{data.location}</span>}
          {data.linkedin && <span>|</span>}
          {data.linkedin && <span>{data.linkedin}</span>}
          {data.website && <span>|</span>}
          {data.website && <span>{data.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2 pb-1 border-b-2 border-gray-400">Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </div>
      )}

      {/* Professional Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-400">Professional Experience</h2>
          <div className="space-y-4">
            {data.experience.map((job, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-semibold text-gray-900">{job.position}</p>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>{job.period}</p>
                    {job.location && <p>{job.location}</p>}
                  </div>
                </div>
                {job.highlights && (
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="line-clamp-2">{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-400">Education</h2>
          <div className="space-y-2">
            {data.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                </div>
                <p className="text-sm text-gray-600">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-400">Skills</h2>
          <div className="grid grid-cols-2 gap-2">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-gray-900 font-semibold mr-2">•</span>
                <span className="text-sm text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-400">Certifications</h2>
          <div className="grid grid-cols-2 gap-3">
            {data.certifications.map((cert, idx) => (
              <div key={idx}>
                <p className="text-sm font-semibold text-gray-900">{cert.name}</p>
                <p className="text-xs text-gray-600">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-4 border-t-2 border-gray-400 text-center">
        <p className="text-xs tracking-widest uppercase text-gray-900 font-semibold">Precision Line</p>
      </div>
    </div>
  );
}
