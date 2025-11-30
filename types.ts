import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudyItem {
  id: number;
  title: string;
  category: string;
  result: string;
  metric: string;
  growth: number;
  description: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}