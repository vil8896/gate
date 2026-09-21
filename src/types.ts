export type ServiceCategory = 'business' | 'tech' | 'integrated';

export interface ConsultingService {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
  metrics: string;
}

export interface CaseStudy {
  id: string;
  clientType: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  servicesProvided: string[];
}

export interface DiagnosticOption {
  id: string;
  label: string;
  description: string;
}

export interface DiagnosticResult {
  recommendedTrack: string;
  duration: string;
  estimatedEffort: string;
  keyDeliverables: string[];
  strategicFocus: string;
  architectureFocus: string;
  priorityScore: number;
}

export interface ConsultationInquiry {
  fullName: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  serviceCategory: ServiceCategory;
  companyStage: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
