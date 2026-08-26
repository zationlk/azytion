import {
  BookOpen,
  Boxes,
  Calendar,
  Clock,
  Code2,
  DollarSign,
  Globe,
  Heart,
  Layers,
  Monitor,
  Package,
  Palette,
  Shield,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Monitor,
  Palette,
  Video,
  TrendingUp,
  Boxes,
  Layers,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  Package,
  UserCheck,
  Globe,
  Star,
  Zap,
  Shield,
  Clock,
  Heart,
};

export function DynamicIcon({
  name,
  className,
  size = 28,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name] ?? Boxes;
  return <Icon className={className} size={size} />;
}
