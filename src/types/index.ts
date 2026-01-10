import type { LucideProps } from "lucide-react";

export interface IHowItWorksData {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  iconColor: string;
  color: string;
  border: string;
  bg: string;
}

export interface IUseCasesData {
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  process: string[];
  benefits: string[];
}

export interface INestedChild {
  main: string;
  child?: string[];
}

export interface IAnswer {
  main?: string;
  child?: string[] | INestedChild[];
}

export interface IQuestion {
  id: string;
  question: string;
  answer: IAnswer;
}

export interface IFaq {
  id: string;
  category: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
  questions: IQuestion[];
}

export interface ITnC {
  id: string;
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
  content: IAnswer;
}

export interface IPrivacyPolicy {
  id: string;
  title: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
  content: IAnswer;
}

export interface IEnsureCreativeData {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export interface INavigationData {
  name: string;
  href: string;
  isInLanding: boolean;
}

export type IUseCaseTabs = "brandTag" | "ocp";

export type IUseCaseProcesses = "process1" | "process2" | "process3";

export type IUseCaseBenefits =
  | "benefit1"
  | "benefit2"
  | "benefit3"
  | "benefit4";

export type IEnsureCreativeTitle =
  | "authenticityCertificate"
  | "securedMandala"
  | "localBranding"
  | "multiTierVerification"
  | "physicalQr"
  | "catalogDashboard";
