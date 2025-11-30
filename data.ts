import { 
  BarChart3, 
  Target, 
  Megaphone, 
  Search, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Award, 
  Briefcase 
} from 'lucide-react';
import { ServiceItem, CaseStudyItem, PricingPlan, TestimonialItem } from './types';

export const services: ServiceItem[] = [
  {
    id: 1,
    title: 'إدارة الحملات الإعلانية',
    description: 'تخطيط وإدارة حملات احترافية على فيسبوك، إنستجرام، تيك توك، وجوجل لتحقيق أعلى عائد.',
    icon: Megaphone,
  },
  {
    id: 2,
    title: 'جروث ماركيتنج',
    description: 'تحسين مسارات التحويل (Funnels) واستخدام تقنيات النمو السريع لمضاعفة قاعدة العملاء.',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'استراتيجيات تسويقية',
    description: 'بناء خطط تسويق ومبيعات شاملة تناسب أهداف شركتك وتضمن التوسع المستدام.',
    icon: Target,
  },
  {
    id: 4,
    title: 'تحليل الأداء',
    description: 'فحص دقيق للحسابات الإعلانية وتحديد المشاكل التقنية واستنزاف الميزانية.',
    icon: Search,
  },
  {
    id: 5,
    title: 'إدارة السوشيال ميديا',
    description: 'صناعة محتوى إبداعي وإدارة حسابات التواصل لزيادة التفاعل وبناء العلامة التجارية.',
    icon: Users,
  },
  {
    id: 6,
    title: 'تحسين المتاجر (CRO)',
    description: 'تحليل سلوك المستخدم ورفع معدلات التحويل (Conversion Rate) للمتاجر الإلكترونية.',
    icon: ShoppingCart,
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    id: 1,
    title: 'متجر أزياء في السعودية',
    category: 'E-commerce',
    result: '٣٠٠٪ زيادة',
    metric: 'في المبيعات الشهرية',
    growth: 300,
    description: 'تم إعادة هيكلة الحملات الإعلانية وتحسين صفحة الهبوط مما أدى لخفض تكلفة الاستحواذ بنسبة ٤٠٪.',
  },
  {
    id: 2,
    title: 'تطبيق خدمات توصيل',
    category: 'Mobile App',
    result: '٥٠ ألف',
    metric: 'تحميل جديد',
    growth: 150,
    description: 'استراتيجية جروث ماركتنج ركزت على UAC campaigns وتيك توك، مما ضاعف عدد المستخدمين النشطين.',
  },
  {
    id: 3,
    title: 'شركة عقارية بمصر',
    category: 'Lead Generation',
    result: '٨X عائد',
    metric: 'على الإنفاق الإعلاني (ROAS)',
    growth: 800,
    description: 'تحسين جودة الـ Leads من خلال نماذج متقدمة وتوجيه دقيق للجمهور المستهدف.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'باقة البداية',
    price: 'تبدأ من $500',
    features: [
      'إدارة منصة إعلانية واحدة',
      'خطة محتوى شهرية (١٢ منشور)',
      'تقرير أداء شهري',
      'دعم عبر البريد الإلكتروني'
    ],
    recommended: false,
  },
  {
    id: 2,
    name: 'باقة النمو',
    price: 'تبدأ من $1200',
    features: [
      'إدارة ٣ منصات إعلانية',
      'تحسين معدل التحويل (CRO)',
      'خطة استراتيجية ربع سنوية',
      'تقارير أسبوعية مفصلة',
      'اجتماع متابعة نصف شهري'
    ],
    recommended: true,
  },
  {
    id: 3,
    name: 'باقة البريميوم',
    price: 'مخصصة',
    features: [
      'إدارة شاملة لجميع القنوات',
      'فريق عمل مخصص',
      'استشارات جروث ماركتنج غير محدودة',
      'بناء Funnels متقدمة',
      'دعم فني وتواجد يومي'
    ],
    recommended: false,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'أحمد الغامدي',
    role: 'CEO',
    company: 'متجر الرياض',
    content: 'العمل مع آية كان نقطة تحول لمشروعنا. فهمت السوق السعودي بدقة وحققت لنا نتائج فاقت التوقعات.',
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 2,
    name: 'سارة الكندري',
    role: 'Marketing Manager',
    company: 'بيوتي الكويت',
    content: 'احترافية عالية في إدارة الميزانية وتقليل الهدر. تقاريرها واضحة وساعدتنا في اتخاذ قرارات صحيحة.',
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 3,
    name: 'كريم محسن',
    role: 'Founder',
    company: 'تطبيق وصلني',
    content: 'خبرتها في الجروث هاكينج ممتازة. ساعدتنا في النمو السريع بأقل التكاليف الممكنة.',
    image: 'https://picsum.photos/100/100?random=3',
  },
];