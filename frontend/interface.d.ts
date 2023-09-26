export interface HomePage {
  id: number;
  hero: HeroHome;
  about: AboutHome;
  service: ServiceHome;
  portfolio: PortfolioHome;
  product: ProductHome;
  partner: PartnerHome;
  article: ArticleHome;
  license: LicenseHome;
  program: ProgramHome;
  testimonials: TestimonialHome[];
}

export interface HeroHome {
  hero_title1: string;
  hero_title2: string;
  hero_title3: string;
  hero_title_lists: HeroTitleList[];
  hero_desc: string;
}

export interface HeroTitleList {
  id: number;
  title: string;
}

export interface AboutHome {
  about_project: string;
  about_experience: string;
  about_desc: string;
  about_title: string;
  about_ilustration: string;
}

export interface ServiceHome {
  title_service: string;
}

export interface PortfolioHome {
  title_portfolio: string;
}

export interface ProductHome {
  title_product: string;
}

export interface PartnerHome {
  title_partner: string;
  partners: Partners[];
}

export interface Partners {
  id: number;
  image: string;
}

export interface ArticleHome {
  title_articles: string;
}

export interface LicenseHome {
  title_certificate: string;
  certificates: Certificate[];
}

export interface Certificate {
  id: number;
  image: string;
}

export interface ProgramHome {
  id: number;
  title: string;
  desc: string;
  ytEmbed: string;
}

export interface TestimonialHome {
  id: number;
  desc: string;
  name: string;
  star: string;
  job: string;
  image: string;
}

export interface ProductsHome {
  id: number;
  name: string;
  desc: string;
  link: string;
  created_at: string;
  updated_at: string;
  subtitle: string;
}

export interface SuccessPortfolio {
  id: number;
  name: string;
  desc: string;
  image: string;
  technologies: [] | Technology[];
  deliverables: [] | string[];
}

export interface Technology {
  id?: number;
  name?: string;
  icon?: string;
}

export interface CTAContact {
  id?: number;
  title: string;
  desc: string;
}

export interface ServicePage {
  id: number;
  hero: HeroService;
  service: Service;
  technology: TechnologyService;
  methodology: MethodologyService;
}

export interface HeroService {
  hero_title: string;
  hero_desc: string;
}

export interface ServiceService {
  service_title: string;
  service_subtitle: string;
}

export interface TechnologyService {
  technology_title: string;
  technology_desc: string;
}

export interface MethodologyService {
  methodology_title: string;
  methodology_subtitle: string;
}

export interface Services extends TopServices {
  created_at: string;
  updated_at: string;
  technologies: Technology[];
  serviceKeys: string[];
}

export interface TopServices {
  id: number;
  name: string;
  desc: string;
  image: string;
}

export interface Portfolio extends SuccessPortfolio {
  id: number;
  category: string;
  customer_name: string;
  link: any;
  our_solution: string;
  details: string;
  created_at: string;
  updated_at: string;
  handles: string[] | [];
}

export interface About {
  data: {
    hero_title: string;
    hero_desc: string;
    hero_image: string;
    activity_image: string;
    vision_title: string;
    vision_subtitle: string;
    vision_desc: string;
    vision_image: string;
    mission_image: string;
    mission_title: string;
    mission_subtitle: string;
    mission_desc: string;
    mission_lists: [string];
    value_title: string;
    value_subtitle: string;
    value_lists: Array<{ id: number; title: string; desc: string }>;
    director_title: string;
    director_subtitle: string;
    director_lists: Array<{
      id: number;
      image: string;
      name: string;
      position: string;
      link: string;
    }>;
    strategic_title: string;
    strategic_subtitle: string;
    management_strategies: Array<{
      id: number;
      title: string;
      management_strategy_lists: Array<{
        id: number;
        title: string;
        desc: string;
      }>;
    }>;
  };
}

export interface Technologies {
  category: string;
  technologies: Technology[];
}

export interface Methodology {
  id: number;
  category_title: string;
  category_name: string;
  flow_image: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: number;
  title: string;
  image: string;
  description: string;
  author: string;
  articles_categories: string;
  created_at: string;
  updated_at: string;
}
