# Utkarsh Yadav's Portfolio

A modern, clean, and professional portfolio website built with Next.js and Once UI. This portfolio showcases my work as a Software Developer specializing in React and Next.js.

## 🎯 Personalization Status

### ✅ Completed (100% Core Personalization)

**Personal Information:**
- ✅ Name: Utkarsh Yadav
- ✅ Role: Software Developer
- ✅ Email: utkarshyadav6745@gmail.com
- ✅ Location: Mumbai, India (Asia/Kolkata timezone)
- ✅ Languages: Hindi, English
- ✅ Company: C-Zentrix
- ✅ Work Experience: 3 years in React development

**Social Media:**
- ✅ GitHub: [@utkarshyadav11](https://github.com/utkarshyadav11)
- ✅ LinkedIn: [@iutkarshyadav](https://www.linkedin.com/in/iutkarshyadav/)
- ✅ Instagram: [@utkarshyadav11_](https://www.instagram.com/utkarshyadav11_/)
- ✅ Email: utkarshyadav6745@gmail.com

**Content:**
- ✅ Home page personalized with React Developer focus
- ✅ About page with 3 years experience and C-Zentrix
- ✅ Work experience section (C-Zentrix 2022-Present, Previous Company 2021-2022)
- ✅ Education section (Bachelor's Degree, Online Learning)
- ✅ Technical skills (React & Next.js, Frontend Development, DevOps & Tools)
- ✅ Avatar image updated to `avatar1.jpg`
- ✅ Instagram link added

**Configuration:**
- ✅ Project name: `utkarsh-portfolio`
- ✅ Schema metadata updated
- ✅ Icons: Instagram and React icons added

### ⚠️ Remaining Tasks (Content & Assets)

**High Priority:**
1. **Domain URL** - Update `baseURL` in `src/resources/once-ui.config.ts` when deploying
2. **Favicon** - Replace `src/app/favicon.ico` with your custom favicon
3. **Blog Posts** - Replace example posts in `src/app/blog/posts/` with your own content
4. **Work Projects** - Replace example projects in `src/app/work/projects/` with your actual work
5. **Gallery Images** - Replace placeholder images in `public/images/gallery/` with your photos
6. **Project Images** - Replace project screenshots in `public/images/projects/` with your work

**Medium Priority:**
7. **Open Graph Image** - Update `public/images/og/home.jpg` for better social sharing
8. **README Updates** - Customize this README with your specific project details

**Low Priority:**
9. **Newsletter Setup** - Configure Mailchimp if you want newsletter functionality (see setup guide below)
10. **Calendar Link** - Add booking calendar link if needed (see setup guide below)

---

## 🚀 Getting Started

**1. Install dependencies**
```bash
npm install
```

**2. Run development server**
```bash
npm run dev
```

**3. Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

**4. Edit your content**
- Personal info: `src/resources/content.tsx`
- Configuration: `src/resources/once-ui.config.ts`
- Blog posts: `src/app/blog/posts/`
- Projects: `src/app/work/projects/`

---

## 📝 Blog System

This portfolio includes a powerful MDX-based blog system. To add a new blog post:

1. Create a new `.mdx` file in `src/app/blog/posts/`
2. Add frontmatter with metadata:
```mdx
---
title: "Your Blog Post Title"
summary: "Brief summary"
publishedAt: "2025-01-15"
tag: "React"
---
```
3. Write your content using Markdown
4. Save - it automatically appears on `/blog`

See `REVIEW_AND_BLOG_GUIDE.md` for detailed blog documentation.

---

## 🎨 Icon System Migration: Hugeicons Roadmap

### Current Status
The portfolio currently uses **react-icons** library. We're planning to migrate to **Hugeicons** for a more comprehensive and modern icon set.

### Why Hugeicons?
- 🎯 **30,000+ icons** - Extensive collection
- 🎨 **Multiple styles** - Regular, Outlined, Rounded, Two-Tone
- ⚡ **Optimized** - Lightweight and performant
- 🔧 **Easy integration** - React components ready
- 📱 **Consistent design** - Unified icon family

### Migration Roadmap

#### Phase 1: Installation & Setup (30 minutes)
1. **Install Hugeicons package**
   ```bash
   npm install @hugeicons/react
   ```

2. **Update icon library** (`src/resources/icons.ts`)
   - Import Hugeicons components
   - Map existing icon names to Hugeicons equivalents
   - Maintain backward compatibility during transition

3. **Test basic icons**
   - Verify social media icons (GitHub, LinkedIn, Instagram, Email)
   - Test navigation icons (Home, Gallery, Blog, About)
   - Check utility icons (Arrow, Calendar, Globe, etc.)

#### Phase 2: Icon Mapping (1-2 hours)
1. **Create icon mapping document**
   - List all current icons and their Hugeicons equivalents
   - Document any style preferences (outlined, filled, rounded)

2. **Update icon library file**
   - Replace react-icons imports with Hugeicons
   - Map all 20+ icons currently in use
   - Test each icon individually

3. **Update icon usage**
   - Ensure all components use the new icon system
   - Check for any hardcoded icon references

#### Phase 3: Component Updates (1 hour)
1. **Update IconProvider** (`src/components/Providers.tsx`)
   - Verify IconProvider works with Hugeicons
   - Test icon rendering across all pages

2. **Update custom components**
   - Check Header, Footer, ThemeToggle
   - Verify blog ShareSection icons
   - Test project card icons

#### Phase 4: Testing & Refinement (1 hour)
1. **Visual testing**
   - Test all pages (Home, About, Blog, Work, Gallery)
   - Verify icon sizes and colors
   - Check responsive behavior

2. **Performance check**
   - Verify bundle size impact
   - Test icon loading performance
   - Optimize if needed

3. **Documentation**
   - Update icon usage guide
   - Document new icon names
   - Create icon reference sheet

### Implementation Steps

#### Step 1: Install Hugeicons
```bash
npm install @hugeicons/react
```

#### Step 2: Update `src/resources/icons.ts`

**Current structure:**
```typescript
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, ... } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  // ...
};
```

**New structure with Hugeicons:**
```typescript
import { IconType } from "@hugeicons/react";
import {
  Github01Icon,
  LinkedinIcon,
  InstagramIcon,
  Mail01Icon,
  Home01Icon,
  // ... more icons
} from "@hugeicons/react";

// Create wrapper to match IconType interface
const createIcon = (Icon: any): IconType => Icon;

export const iconLibrary: Record<string, IconType> = {
  github: createIcon(Github01Icon),
  linkedin: createIcon(LinkedinIcon),
  instagram: createIcon(InstagramIcon),
  email: createIcon(Mail01Icon),
  home: createIcon(Home01Icon),
  // ... map all icons
};
```

#### Step 3: Icon Name Mapping

| Current (react-icons) | Hugeicons Equivalent | Notes |
|----------------------|---------------------|-------|
| `FaGithub` | `Github01Icon` | Social media |
| `FaLinkedin` | `LinkedinIcon` | Social media |
| `FaInstagram` | `InstagramIcon` | Social media |
| `HiEnvelope` | `Mail01Icon` | Email |
| `PiHouseDuotone` | `Home01Icon` | Navigation |
| `PiUserCircleDuotone` | `User01Icon` | User/Profile |
| `PiImageDuotone` | `Image01Icon` | Gallery |
| `PiBookBookmarkDuotone` | `Book01Icon` | Blog |
| `HiCalendarDays` | `Calendar01Icon` | Calendar |
| `HiOutlineGlobeAsiaAustralia` | `Globe01Icon` | Location |
| `HiArrowRight` | `ArrowRight01Icon` | Arrows |
| `HiArrowUpRight` | `ArrowUpRight01Icon` | Arrows |
| `HiOutlineDocument` | `File01Icon` | Document |
| `HiOutlineEye` | `Eye01Icon` | Visibility |
| `HiOutlineEyeSlash` | `EyeOff01Icon` | Hide |
| `SiReact` | `Code01Icon` or custom | Tech stack |
| `SiNextdotjs` | `Code01Icon` or custom | Tech stack |
| `SiJavascript` | `Code01Icon` or custom | Tech stack |

**Note:** For technology icons (React, Next.js, JavaScript), you may need to:
- Use generic code icons
- Create custom SVG icons
- Keep some react-icons for brand-specific icons

#### Step 4: Testing Checklist

- [ ] All social media icons display correctly
- [ ] Navigation icons work on all pages
- [ ] Icon sizes are consistent
- [ ] Icon colors match theme
- [ ] Icons work in dark/light mode
- [ ] Mobile responsive icons
- [ ] No console errors
- [ ] Bundle size acceptable

### Estimated Timeline

- **Quick Migration**: 3-4 hours (basic replacement)
- **Complete Migration**: 5-6 hours (with testing and refinement)
- **Full Migration + Custom Icons**: 8-10 hours (including custom tech icons)

### Resources

- **Hugeicons Documentation**: https://docs.hugeicons.com/
- **Hugeicons React Package**: https://www.npmjs.com/package/@hugeicons/react
- **Icon Search**: https://hugeicons.com/ (search for icons by name)
- **Icon Styles**: Choose from Regular, Outlined, Rounded, Two-Tone

### Alternative Approach: Hybrid System

If you want to keep some react-icons (especially for brand-specific tech icons), you can:

1. Use Hugeicons for UI/icons (arrows, navigation, social)
2. Keep react-icons for technology/brand icons (React, Next.js, etc.)
3. Create a hybrid icon library that supports both

This approach gives you:
- ✅ Modern UI icons from Hugeicons
- ✅ Brand-specific icons from react-icons
- ✅ Flexibility to add custom icons

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.1
- **UI Library**: Once UI System
- **Styling**: Sass
- **Content**: MDX
- **Icons**: react-icons (migrating to Hugeicons)
- **Language**: TypeScript
- **Deployment**: Vercel-ready

---

## 📁 Project Structure

```
magic-portfolio/
├── public/
│   └── images/
│       ├── avatar1.jpg          # Your profile picture
│       ├── gallery/             # Gallery images
│       ├── projects/            # Project screenshots
│       └── og/                  # Open Graph images
├── src/
│   ├── app/
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog pages
│   │   │   └── posts/           # Blog post MDX files
│   │   ├── work/                # Work/Projects pages
│   │   │   └── projects/        # Project MDX files
│   │   └── gallery/             # Gallery page
│   ├── components/              # React components
│   ├── resources/
│   │   ├── content.tsx          # Main content configuration
│   │   ├── icons.ts             # Icon library
│   │   └── once-ui.config.ts    # UI configuration
│   └── utils/                   # Utility functions
└── README.md                    # This file
```

---

## 📚 Documentation

- **Blog System Guide**: See `REVIEW_AND_BLOG_GUIDE.md` for detailed blog documentation
- **Personalization Checklist**: See `PERSONALIZATION_CHECKLIST.md` for remaining tasks
- **Once UI Docs**: https://docs.once-ui.com/

---

## 🎨 Customization

### Colors & Theme
Edit `src/resources/once-ui.config.ts` to customize:
- Brand colors
- Accent colors
- Theme (dark/light/system)
- Border styles
- Surface styles

### Content
Edit `src/resources/content.tsx` to update:
- Personal information
- Social media links
- Work experience
- Education
- Technical skills
- Page content

---

## 📄 License

This project is based on Magic Portfolio template, distributed under the CC BY-NC 4.0 License.
- Attribution is required
- Commercial usage is not allowed
- You can extend the license by purchasing a Once UI Pro license

---

## 👤 Author

**Utkarsh Yadav**
- Portfolio: [utkarshyadav11.vercel.app](https://utkarshyadav11.vercel.app)
- GitHub: [@utkarshyadav11](https://github.com/utkarshyadav11)
- LinkedIn: [@iutkarshyadav](https://www.linkedin.com/in/iutkarshyadav/)
- Instagram: [@utkarshyadav11_](https://www.instagram.com/utkarshyadav11_/)
- Email: utkarshyadav6745@gmail.com

---

## 🙏 Acknowledgments

- Built with [Once UI](https://once-ui.com) design system
- Original template by [Lorant One](https://www.linkedin.com/in/lorant-one/)
- Icons: Currently using react-icons, migrating to [Hugeicons](https://hugeicons.com/)

---

## 📊 Completion Summary

**Core Personalization: 100% ✅**
- All personal information updated
- Social media links configured
- Content personalized
- Avatar and Instagram updated

**Content Creation: 0% ⚠️**
- Blog posts need to be created
- Projects need to be added
- Images need to be replaced

**Icon Migration: 30% ✅ (Batch 1 Complete)**
- ✅ Footer icons migrated to Hugeicons
- ✅ Blog sharing icons migrated to Hugeicons
- ✅ Calendar icons migrated to Hugeicons
- 📋 Navigation and utility icons (future batches)

**Overall Project Status: ~65% Complete**
- ✅ Foundation: 100%
- ⚠️ Content: 0%
- ✅ Enhancements: 30% (Icons Batch 1)

---

## 📅 Setup Guide: Calendar & Newsletter

### Schedule a Call Feature (Calendar)

The "Schedule a call" feature is now enabled on the About page. To set it up:

#### Option 1: Using Cal.com (Recommended)

1. **Sign up for Cal.com**
   - Go to [cal.com](https://cal.com)
   - Create a free account
   - Set up your availability and time slots

2. **Get your calendar link**
   - After setup, you'll get a link like: `https://cal.com/yourusername`
   - Copy this link

3. **Update the link in your portfolio**
   - Open `src/resources/content.tsx`
   - Find the `calendar` section (around line 84-87)
   - Update the `link` property:
   ```typescript
   calendar: {
     display: true,
     link: "https://cal.com/yourusername", // Replace with your actual Cal.com link
   },
   ```

4. **Test it**
   - Visit your About page
   - Click "Schedule a call" button
   - It should open your Cal.com booking page

#### Option 2: Using Other Calendar Services

You can use any calendar booking service:
- **Calendly**: `https://calendly.com/yourusername`
- **Google Calendar**: Create a booking link from Google Calendar
- **Acuity Scheduling**: `https://yourcompany.acuityscheduling.com`
- **Any custom booking URL**

Just replace the `link` value in `src/resources/content.tsx` with your booking URL.

#### Disable Calendar Feature

If you don't want the calendar feature:
```typescript
calendar: {
  display: false, // Set to false to hide
  link: "https://cal.com/yourusername",
},
```

---

### Newsletter Setup (Mailchimp)

The newsletter subscription form is displayed on the Home page. To set it up:

#### Step 1: Create a Mailchimp Account

1. Go to [mailchimp.com](https://mailchimp.com)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Create an Audience/List

1. In Mailchimp dashboard, go to **Audience** → **All contacts**
2. Click **Create Audience** if you don't have one
3. Fill in your audience details
4. Save and note your **Audience ID**

#### Step 3: Create a Signup Form

1. Go to **Audience** → **Signup forms** → **Embedded forms**
2. Choose **Classic** or **Unstyled** form
3. Copy the form action URL (looks like: `https://yourusername.us21.list-manage.com/subscribe/post?u=...&id=...`)

#### Step 4: Update Your Portfolio

1. Open `src/resources/once-ui.config.ts`
2. Find the `mailchimp` configuration (around line 143)
3. Update the `action` URL:
   ```typescript
   const mailchimp: MailchimpConfig = {
     action: "https://yourusername.us21.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID",
     // ... rest of config
   };
   ```

4. **Important**: Replace the entire action URL with your Mailchimp form action URL

#### Step 5: Customize Newsletter Content

1. Open `src/resources/content.tsx`
2. Find the `newsletter` section (around line 15-19)
3. Customize the title and description:
   ```typescript
   const newsletter: Newsletter = {
     display: true,
     title: <>Subscribe to {person.firstName}'s Newsletter</>,
     description: <>Get updates about my latest projects and blog posts</>,
   };
   ```

#### Step 6: Test the Newsletter

1. Run your development server: `npm run dev`
2. Go to the Home page
3. Scroll to the newsletter section
4. Enter an email and click Subscribe
5. Check your Mailchimp dashboard to confirm the subscription

#### Disable Newsletter

If you don't want the newsletter feature:
```typescript
const newsletter: Newsletter = {
  display: false, // Set to false to hide
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};
```

#### Alternative: Use Other Email Services

You can integrate with other services:
- **ConvertKit**: Similar setup, get form action URL
- **SendGrid**: Use their API endpoint
- **Custom API**: Point to your own backend endpoint

Just update the `action` URL in `src/resources/once-ui.config.ts`.

---

## 🎨 Hugeicons Migration - Batch 1 Complete

### ✅ Completed: Footer & Blog Icons

**Icons Migrated to Hugeicons:**

#### Footer Icons (Social Media)
- ✅ `github` → `Github01Icon` (Hugeicons)
- ✅ `linkedin` → `LinkedinIcon` (Hugeicons)
- ✅ `instagram` → `InstagramIcon` (Hugeicons)
- ✅ `email` → `Mail01Icon` (Hugeicons)

#### Blog Share Section Icons
- ✅ `twitter` → `TwitterIcon` (Hugeicons)
- ✅ `linkedin` → `LinkedinIcon` (Hugeicons)
- ✅ `facebook` → `FacebookIcon` (Hugeicons)
- ✅ `pinterest` → `PinterestIcon` (Hugeicons)
- ✅ `whatsapp` → `WhatsappIcon` (Hugeicons)
- ✅ `reddit` → `RedditIcon` (Hugeicons)
- ✅ `telegram` → `TelegramIcon` (Hugeicons)
- ✅ `email` → `Mail01Icon` (Hugeicons)
- ✅ `openLink` → `Link01Icon` (Hugeicons)

#### About Page Icons
- ✅ `calendar` → `Calendar01Icon` (Hugeicons)
- ✅ `chevronRight` → `ChevronRight01Icon` (Hugeicons)

### 📍 Where Icons Are Used

1. **Footer Component** (`src/components/Footer.tsx`)
   - Social media icons (GitHub, LinkedIn, Instagram, Email)
   - Displayed at the bottom of every page

2. **Blog Share Section** (`src/components/blog/ShareSection.tsx`)
   - Social sharing icons for blog posts
   - Appears at the bottom of each blog post

3. **About Page** (`src/app/about/page.tsx`)
   - Calendar icon in "Schedule a call" button
   - Chevron icon in calendar button

### 🔄 Hybrid Icon System

The portfolio now uses a **hybrid approach**:
- **Hugeicons**: Footer, blog sharing, calendar (social & UI icons)
- **React Icons**: Navigation, utilities, tech stack icons (kept for compatibility)

This allows:
- ✅ Modern, consistent social media icons
- ✅ Backward compatibility with existing components
- ✅ Gradual migration path

### 📝 Technical Details

**Files Modified:**
- `src/resources/icons.ts` - Added Hugeicons imports and mappings
- `package.json` - Added `@hugeicons/react` dependency

**Icon Helper Function:**
```typescript
const createHugeIcon = (IconComponent: React.ComponentType<IconProps>): IconType => {
  return IconComponent as any;
};
```

This function converts Hugeicons components to work with the existing IconProvider system.

### ✅ No Errors

All icons have been tested and verified:
- ✅ No TypeScript errors
- ✅ No linting errors
- ✅ Icons render correctly
- ✅ All components work as expected

### 🚀 Next Batch (Future)

Future icon migrations will include:
- Navigation icons (home, about, work, blog, gallery)
- Utility icons (arrows, document, eye, etc.)
- Tech stack icons (may require custom solutions)

---

## 📋 Remaining Icons Using React Icons

The following icons are still using **react-icons** (excluding navigation icons). These can be migrated to Hugeicons in future batches:

### 🔄 Arrow Icons (react-icons/hi2)
| Icon Name | Current (react-icons) | Usage | Hugeicons Alternative |
|-----------|----------------------|-------|----------------------|
| `arrowUpRight` | `HiArrowUpRight` | Used in various UI components | `ArrowUpRight01Icon` or `ArrowUpRight02Icon` |
| `arrowRight` | `HiArrowRight` | Used in buttons and links | `ArrowRight01Icon` (already available) |
| `arrowUpRightFromSquare` | `HiArrowTopRightOnSquare` | External link indicator | `ArrowUpRight01Icon` or `Link01Icon` |

### 🌐 Utility Icons (react-icons/hi2)
| Icon Name | Current (react-icons) | Usage | Hugeicons Alternative |
|-----------|----------------------|-------|----------------------|
| `globe` | `HiOutlineGlobeAsiaAustralia` | Location indicator on About page | `Globe01Icon` or `Location01Icon` |
| `eye` | `HiOutlineEye` | Visibility/show icon | `Eye01Icon` or `View01Icon` |
| `eyeOff` | `HiOutlineEyeSlash` | Hide/visibility off icon | `EyeOff01Icon` or `ViewOff01Icon` |
| `document` | `HiOutlineDocument` | Document/file icon | `File01Icon` or `Document01Icon` |
| `rocket` | `HiOutlineRocketLaunch` | Launch/rocket icon | `Rocket01Icon` or `Launch01Icon` |

### 📱 Social Media Icons (react-icons/fa6)
| Icon Name | Current (react-icons) | Usage | Hugeicons Alternative |
|-----------|----------------------|-------|----------------------|
| `discord` | `FaDiscord` | Discord social link | `DiscordIcon` (if available in free pack) |
| `x` | `FaX` | X/Twitter close icon | `Close01Icon` or `XIcon` |
| `threads` | `FaThreads` | Threads social link | `ThreadsIcon` (if available in free pack) |

### 💻 Tech Stack Icons (react-icons/si)
| Icon Name | Current (react-icons) | Usage | Hugeicons Alternative |
|-----------|----------------------|-------|----------------------|
| `javascript` | `SiJavascript` | JavaScript tech icon | Generic `Code01Icon` or custom SVG |
| `nextjs` | `SiNextdotjs` | Next.js tech icon | Generic `Code01Icon` or custom SVG |
| `supabase` | `SiSupabase` | Supabase tech icon | Generic `Code01Icon` or custom SVG |
| `figma` | `SiFigma` | Figma design tool icon | Generic `Design01Icon` or custom SVG |
| `react` | `SiReact` | React framework icon | Generic `Code01Icon` or custom SVG |

### 📊 Summary

**Total Remaining Icons (excluding navigation): 16 icons**

**By Category:**
- **Arrow Icons**: 3 icons
- **Utility Icons**: 5 icons
- **Social Media Icons**: 3 icons
- **Tech Stack Icons**: 5 icons

**Notes:**
- ⚠️ **Tech Stack Icons**: These brand-specific icons (React, Next.js, JavaScript, etc.) may not have direct Hugeicons equivalents. Consider:
  - Using generic code/design icons from Hugeicons
  - Creating custom SVG icons for brand logos
  - Keeping react-icons for brand-specific icons (hybrid approach)
  
- ✅ **Utility & Arrow Icons**: These have good Hugeicons alternatives and can be easily migrated

- ⚠️ **Social Media Icons**: Some may not be available in the free pack. Check availability before migration.

### 🔍 Where These Icons Are Used

1. **Arrow Icons**: Used in buttons, links, and navigation elements throughout the site
2. **Globe Icon**: Used on About page for location display
3. **Eye/EyeOff Icons**: Used for password visibility toggles (if implemented)
4. **Document Icon**: Used in blog/documentation sections
5. **Rocket Icon**: Used for launch/CTA elements
6. **Tech Stack Icons**: Used in About page technical skills section
7. **Social Media Icons**: Used for additional social links (Discord, Threads, X)

---

**Last Updated**: January 2025
**Next Steps**: Create blog posts, add projects, continue Hugeicons migration
