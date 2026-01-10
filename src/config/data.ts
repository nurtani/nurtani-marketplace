import {
  AlertTriangle,
  Award,
  Barcode,
  BookOpen,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  Eye,
  FileText,
  Globe,
  HelpCircle,
  LayoutDashboard,
  Lock,
  MapPin,
  Package,
  Phone,
  QrCode,
  Recycle,
  RefreshCw,
  Scale,
  Send,
  Settings,
  Shield,
  ShieldCheck,
  TicketCheck,
  Users,
  Zap,
} from "lucide-react";
import Images from "@/constants/images";
import type {
  IEnsureCreativeData,
  IFaq,
  IHowItWorksData,
  IPrivacyPolicy,
  ITnC,
  IUseCasesData,
} from "@/types";

export const howItWorksData: IHowItWorksData[] = [
  {
    title: "firstTitle",
    description: "firstSubTitle",
    icon: Send,
    iconColor: "text-blue-500",
    color: "bg-gradient-to-br from-blue-200 to-blue-400",
    border: "ring-blue-200",
    bg: Images.step1RegisterNoBg, // Assuming this is the image for the first step
  },
  {
    title: "secondTitle",
    description: "secondSubTitle",
    icon: ShieldCheck,
    iconColor: "text-emerald-500",
    color: "bg-gradient-to-br from-emerald-200 to-emerald-400",
    border: "ring-emerald-200",
    bg: Images.step2PaymentNoBg,
  },
  {
    title: "thirdTitle",
    description: "thirdSubTitle",
    icon: TicketCheck,
    iconColor: "text-pink-500",
    color: "bg-gradient-to-br from-pink-200 to-pink-400",
    border: "ring-pink-200",
    bg: Images.step3ReviewNoBg,
  },
  {
    title: "forthTitle",
    description: "forthSubTitle",
    icon: QrCode,
    iconColor: "text-orange-500",
    color: "bg-gradient-to-br from-orange-200 to-orange-400",
    border: "ring-orange-200",
    bg: Images.step4MintNoBg,
  },
];

// Features for Brand Tag (use translation keys)
export const localBrandTagFeaturesData = [
  {
    icon: QrCode,
    title: "products.lbtFeatures.qr.title",
    description: "products.lbtFeatures.qr.desc",
  },
  {
    icon: Shield,
    title: "products.lbtFeatures.blockchain.title",
    description: "products.lbtFeatures.blockchain.desc",
  },
  {
    icon: Globe,
    title: "products.lbtFeatures.region.title",
    description: "products.lbtFeatures.region.desc",
  },
  {
    icon: Users,
    title: "products.lbtFeatures.community.title",
    description: "products.lbtFeatures.community.desc",
  },
  {
    icon: Award,
    title: "products.lbtFeatures.profileBadge.title",
    description: "products.lbtFeatures.profileBadge.desc",
  },
  {
    icon: Package,
    title: "products.lbtFeatures.nftCertificate.title",
    description: "products.lbtFeatures.nftCertificate.desc",
  },
];

export const ocpFeaturesData = [
  {
    icon: FileText,
    title: "products.ocpFeatures.origin.title",
    description: "products.ocpFeatures.origin.desc",
  },
  {
    icon: Shield,
    title: "products.ocpFeatures.blockchain.title",
    description: "products.ocpFeatures.blockchain.desc",
  },
  {
    icon: Award,
    title: "products.ocpFeatures.quality.title",
    description: "products.ocpFeatures.quality.desc",
  },
  {
    icon: Users,
    title: "products.ocpFeatures.consumer.title",
    description: "products.ocpFeatures.consumer.desc",
  },
];

// Steps for "How to Get Your Brand Tag"
export const localBrandTagStepsData = [
  {
    img: Images.step1RegisterNoBg,
    title: "products.steps.registerTitle",
    desc: "products.steps.registerDesc",
    color: "bg-kraflab-blue",
  },
  {
    img: Images.step3ReviewNoBg,
    title: "products.steps.reviewTitle",
    desc: "products.steps.reviewDesc",
    color: "bg-pink-400",
  },
  {
    img: Images.step2PaymentNoBg,
    title: "products.steps.paymentTitle",
    desc: "products.steps.paymentDesc",
    color: "bg-green-400",
  },
  {
    img: Images.step4MintNoBg,
    title: "products.steps.mintTitle",
    desc: "products.steps.mintDesc",
    color: "bg-orange-700",
  },
];

export const ocpStepsData = [
  {
    img: Images.step1RegisterNoBg,
    title: "products.stepsOCP.registerTitle",
    desc: "products.stepsOCP.registerDesc",
    color: "bg-kraflab-blue",
  },
  {
    img: Images.step3ReviewNoBg,
    title: "products.stepsOCP.reviewTitle",
    desc: "products.stepsOCP.reviewDesc",
    color: "bg-pink-400",
  },
  {
    img: Images.step2PaymentNoBg,
    title: "products.stepsOCP.paymentTitle",
    desc: "products.stepsOCP.paymentDesc",
    color: "bg-green-400",
  },
  {
    img: Images.step4MintNoBg,
    title: "products.stepsOCP.mintTitle",
    desc: "products.stepsOCP.mintDesc",
    color: "bg-orange-700",
  },
];
