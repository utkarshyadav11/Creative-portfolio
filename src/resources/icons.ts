import React from "react";
import type { IconType } from "react-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

// Hugeicons icon imports from free icon pack
import {
  Image02Icon ,
  Home01Icon ,
  UserCircleIcon ,
  WindowsNewIcon ,
  Notebook02Icon ,
  Sun03Icon ,
  Moon02Icon ,
  Github01Icon,
  LinkedinIcon,
  InstagramIcon,
  Mail01Icon,
  Calendar01Icon,
  Link01Icon,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  Globe02Icon,
  EyeIcon,
  ViewOffIcon,
  File01Icon,
  Rocket01Icon,
  CodeIcon,
  WebDesign01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

import {
  HiArrowUpRight,
  HiArrowTopRightOnSquare,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";



import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiGit,
} from "react-icons/si";

import { FaDiscord, FaX, FaThreads } from "react-icons/fa6";

// Helper function to convert Hugeicons to IconType
// This creates a wrapper component that matches react-icons IconType interface
const createHugeIcon = (IconDefinition: IconSvgElement, defaultSize: number = 20, scale: number = 1): IconType => {
  return React.forwardRef<SVGSVGElement, React.ComponentProps<IconType>>((props, ref) => {
    // Map react-icons props to Hugeicons props
    const { size, color, className, style, ...rest } = props as {
      size?: string | number;
      color?: string;
      className?: string;
      style?: React.CSSProperties;
      [key: string]: unknown;
    };
    
    // Convert size if it's a string (like "1em") to number
    let iconSize: number | string = size || defaultSize;
    if (typeof size === "string" && size.includes("em")) {
      // Convert "1em" to 16 (default), "1.5em" to 24, etc.
      const emValue = Number.parseFloat(size);
      iconSize = emValue * 16;
    } else if (typeof size === "string" && size.includes("px")) {
      iconSize = Number.parseFloat(size);
    } else if (typeof size === "string") {
      // Handle size tokens like "s", "m", "l"
      const sizeMap: Record<string, number> = {
        xs: 12,
        s: 16,
        m: 20,
        l: 24,
        xl: 32,
      };
      iconSize = sizeMap[size] || defaultSize;
    }
    
    // Filter out invalid props for HugeiconsIcon
    const { strokeWidth, ...hugeiconsProps } = rest;
    let finalSize = typeof iconSize === "number" ? iconSize : Number.parseFloat(String(iconSize)) || defaultSize;
    
    // Apply scale factor
    finalSize = Math.round(finalSize * scale);

    return React.createElement(
      HugeiconsIcon,
      {
        icon: IconDefinition,
        size: finalSize,
        primaryColor: color || "currentColor",
        className: className,
        style: style,
        ...hugeiconsProps,
        ref: ref,
      } as React.ComponentProps<typeof HugeiconsIcon>
    );
  }) as IconType;
};

export const iconLibrary: Record<string, IconType> = {
  // Hugeicons - Footer and Blog Icons
  github: createHugeIcon(Github01Icon),
  linkedin: createHugeIcon(LinkedinIcon),
  instagram: createHugeIcon(InstagramIcon),
  email: createHugeIcon(Mail01Icon),
  calendar: createHugeIcon(Calendar01Icon),
  openLink: createHugeIcon(Link01Icon),
  twitter: createHugeIcon(TwitterIcon),
  facebook: createHugeIcon(FacebookIcon),
  pinterest: createHugeIcon(PinterestIcon),
  whatsapp: createHugeIcon(WhatsappIcon),
  reddit: createHugeIcon(RedditIcon),
  telegram: createHugeIcon(TelegramIcon),
  chevronRight: createHugeIcon(ArrowRight02Icon), // Using ArrowRight02Icon as chevron alternative
  
  // Hugeicons - Utility Icons
  arrowUpRight: createHugeIcon(ArrowUpRight01Icon),
  arrowRight: createHugeIcon(ArrowRight01Icon),
  arrowRightHuge: createHugeIcon(ArrowRight01Icon), // Alternative Hugeicons version
  globe: createHugeIcon(Globe02Icon),
  eye: createHugeIcon(EyeIcon),
  eyeOff: createHugeIcon(ViewOffIcon),
  arrowUpRightFromSquare: createHugeIcon(ArrowUpRight01Icon),
  document: createHugeIcon(File01Icon),
  rocket: createHugeIcon(Rocket01Icon),
  x: createHugeIcon(Cancel01Icon),
  
  // React Icons (Simple Icons) - Tech Stack Icons
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  react: SiReact,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  git: SiGit,
  
  // React Icons - Navigation (Using HugeIcons now)
  person: createHugeIcon(UserCircleIcon, 20, 0.9),
  grid: createHugeIcon(WindowsNewIcon, 20, 0.9),
  book: createHugeIcon(Notebook02Icon, 20, 0.9),
  home: createHugeIcon(Home01Icon, 20, 0.9),
  gallery: createHugeIcon(Image02Icon, 20, 0.9),
  themeSun: createHugeIcon(Sun03Icon, 20, 0.9),
  themeMoon: createHugeIcon(Moon02Icon, 20, 0.9),
  
  // React Icons - Social Media (keep if Hugeicons not available)
  discord: FaDiscord,
  threads: FaThreads,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
