# Portfolio Review & Blog System Guide

## ✅ Completed Changes

### Personal Information
- ✅ Name: Utkarsh Yadav (updated everywhere)
- ✅ Email: utkarshyadav6745@gmail.com
- ✅ Role: Software Developer
- ✅ Location: Asia/Kolkata (India timezone)
- ✅ Languages: Hindi, English
- ✅ Company: C-Zentrix
- ✅ Work Experience: 3 years in React

### Social Media Links
- ✅ GitHub: https://github.com/utkarshyadav11
- ✅ LinkedIn: https://www.linkedin.com/in/iutkarshyadav/
- ✅ Instagram: Added (placeholder link - needs your actual link)
- ✅ Email: utkarshyadav6745@gmail.com

### Content Updates
- ✅ Home page headline: "A passionate React Developer from India"
- ✅ Home page subline: Updated with React/Next.js focus and Docker/Kubernetes learning
- ✅ About page introduction: Updated with 3 years experience and C-Zentrix
- ✅ Work experience: Added C-Zentrix (2022-Present) and Previous Company (2021-2022)
- ✅ Education: Added Bachelor's Degree and Online Learning sections
- ✅ Technical skills: Added React & Next.js, Frontend Development, DevOps & Tools
- ✅ Calendar: Disabled (set to display: false)

### Configuration
- ✅ Project name: Changed to "utkarsh-portfolio"
- ✅ Schema name: "Utkarsh Yadav"
- ✅ Schema email: utkarshyadav6745@gmail.com
- ✅ Schema type: Changed to "Person"
- ✅ LinkedIn in sameAs: Updated

### Icons
- ✅ Added Instagram icon support
- ✅ Added React icon support

---

## 🔴 Remaining Changes Needed

### 1. **Domain URL** (`src/resources/once-ui.config.ts`)
- **Line 17:** Currently `"https://yourdomain.com"`
- **Action:** Update with your actual domain when you deploy

### 2. **Instagram Link** (`src/resources/content.tsx`)
- **Line 37:** Currently `link: "#"`
- **Action:** Replace with your actual Instagram profile URL

### 3. **Blog Posts** (`src/app/blog/posts/`)
These are example/template blog posts. You should:
- Replace or delete the example posts
- Create your own blog posts

**Files to update:**
- `blog.mdx`
- `components.mdx`
- `content.mdx` (contains "Selene" example - line 50, 102, 107)
- `localization.mdx`
- `mailchimp.mdx`
- `pages.mdx`
- `password.mdx`
- `quick-start.mdx`
- `seo.mdx`
- `styling.mdx`
- `work.mdx`

### 4. **Work Projects** (`src/app/work/projects/`)
These are example projects. You should:
- Replace with your actual projects
- Update project metadata

**Files to update:**
- `automate-design-handovers-with-a-figma-to-code-pipeline.mdx`
- `building-once-ui-a-customizable-design-system.mdx` (contains "Selene Yu" - line 11)
- `simple-portfolio-builder.mdx`

### 5. **Images to Replace**
- `public/images/avatar.jpg` - Your profile picture
- `public/images/gallery/*` - Your gallery photos
- `public/images/projects/project-01/*` - Your project screenshots
- `public/images/og/home.jpg` - Your Open Graph image
- `src/app/favicon.ico` - Your favicon

### 6. **README.md**
- Update project description
- Update demo links
- Update creator information

---

## 📝 How the Blog System Works

### Overview
The blog system uses **MDX** (Markdown + JSX) files stored in `src/app/blog/posts/`. Each blog post is a `.mdx` file that gets automatically discovered and rendered.

### Blog Post Structure

#### 1. **Frontmatter (Metadata)**
Each blog post starts with YAML frontmatter between `---` markers:

```mdx
---
title: "Your Blog Post Title"
summary: "A brief summary of your post"
publishedAt: "2025-01-15"
tag: "React"  # Optional category/tag
image: "/images/blog/my-post.jpg"  # Optional featured image
images:  # Optional array of images
  - "/images/blog/image1.jpg"
  - "/images/blog/image2.jpg"
team:  # Optional team members
  - name: "Utkarsh Yadav"
    role: "Software Developer"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://www.linkedin.com/in/iutkarshyadav/"
link: "https://external-link.com"  # Optional external link
---
```

#### 2. **Content**
After the frontmatter, write your content using Markdown:

```mdx
## Introduction

This is a regular markdown paragraph.

### Code Blocks

You can use code blocks:

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Lists

- Item 1
- Item 2
- Item 3

### Links and Images

[Link text](https://example.com)

![Alt text](/images/my-image.jpg)
```

#### 3. **MDX Components**
You can use React components in your MDX files. The project includes custom components from `@once-ui-system/core`:

```mdx
import { Button, Card, CodeBlock } from "@once-ui-system/core";

<Button href="/about" variant="primary">
  Learn More
</Button>

<CodeBlock
  language="javascript"
  code={`
    const example = "code here";
  `}
/>
```

### How to Add a New Blog Post

1. **Create a new `.mdx` file** in `src/app/blog/posts/`
   - Example: `my-first-blog-post.mdx`
   - The filename (without `.mdx`) becomes the URL slug
   - URL will be: `/blog/my-first-blog-post`

2. **Add frontmatter** at the top:
```mdx
---
title: "My First Blog Post"
summary: "This is what my post is about"
publishedAt: "2025-01-15"
tag: "React"
---
```

3. **Write your content** using Markdown below the frontmatter

4. **Save the file** - it will automatically appear on the blog page!

### Blog Post Features

#### Automatic Features:
- ✅ **Auto-discovery**: All `.mdx` files in `src/app/blog/posts/` are automatically found
- ✅ **Sorting**: Posts are sorted by `publishedAt` date (newest first)
- ✅ **SEO**: Automatic meta tags and Open Graph images
- ✅ **Schema.org**: Automatic structured data for search engines
- ✅ **Social Sharing**: Built-in share buttons (Twitter, LinkedIn, Email, etc.)
- ✅ **Table of Contents**: Automatic heading navigation
- ✅ **Related Posts**: Shows recent posts at the bottom

#### Blog Listing Page (`/blog`)
- Shows all blog posts
- Displays featured post at top
- Shows 2-3 posts in grid below
- Newsletter signup section
- "Earlier posts" section

#### Individual Blog Post Page (`/blog/[slug]`)
- Full post content
- Author information
- Publication date
- Social sharing buttons
- Table of contents (on desktop)
- Related/recent posts at bottom

### Available MDX Components

The project uses Once UI components. Check `src/components/mdx.tsx` for available components. Common ones include:

- `CodeBlock` - Syntax highlighted code blocks
- `InlineCode` - Inline code snippets
- `Button` - Buttons with various styles
- `Card` - Card containers
- `Heading` - Styled headings
- `Text` - Styled text
- `Media` - Images and videos
- `Grid` - Layout grids
- And many more from `@once-ui-system/core`

### Example Blog Post

Create `src/app/blog/posts/getting-started-with-react.mdx`:

```mdx
---
title: "Getting Started with React"
summary: "Learn the basics of React development"
publishedAt: "2025-01-15"
tag: "React"
image: "/images/blog/react-intro.jpg"
---

## Introduction

React is a powerful JavaScript library for building user interfaces.

## Why React?

React makes it easy to create interactive UIs with components.

### Key Features

- Component-based architecture
- Virtual DOM for performance
- Large ecosystem

## Getting Started

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Conclusion

React is a great choice for modern web development!
```

### Blog Post Best Practices

1. **Use descriptive titles** - Make them clear and SEO-friendly
2. **Write good summaries** - Used in previews and meta descriptions
3. **Use proper dates** - Format: `YYYY-MM-DD`
4. **Add tags** - Helps categorize your posts
5. **Include images** - Makes posts more engaging
6. **Use headings** - Creates automatic table of contents
7. **Write quality content** - Focus on value for readers

### How Posts Are Loaded

The system uses `src/utils/utils.ts`:
- `getPosts()` function scans `src/app/blog/posts/` directory
- Reads all `.mdx` files
- Parses frontmatter using `gray-matter`
- Extracts metadata and content
- Returns array of posts sorted by date

### Work/Projects System

The projects system works the same way as blogs:
- Projects are in `src/app/work/projects/`
- Use same MDX format with frontmatter
- Displayed on `/work` page
- Individual project pages at `/work/[slug]`

---

## 🔍 Files Checked

### ✅ Updated Files
- `src/resources/content.tsx` - All personal info updated
- `src/resources/once-ui.config.ts` - Config updated
- `src/resources/icons.ts` - Instagram and React icons added
- `package.json` - Project name updated

### ⚠️ Files with Example Content (Need Updates)
- `src/app/blog/posts/*.mdx` - All blog posts are examples
- `src/app/work/projects/*.mdx` - All projects are examples
- `README.md` - Still has original project info

### 📁 Image Files (Need Replacement)
- `public/images/avatar.jpg`
- `public/images/gallery/*`
- `public/images/projects/*`
- `public/images/og/home.jpg`
- `src/app/favicon.ico`

### ✅ No Changes Needed
- `src/app/blog/[slug]/page.tsx` - Blog rendering logic (works automatically)
- `src/app/blog/page.tsx` - Blog listing page (works automatically)
- `src/app/work/[slug]/page.tsx` - Project rendering logic
- `src/app/work/page.tsx` - Work listing page
- `src/utils/utils.ts` - MDX file reading logic
- All component files - Working correctly

---

## 🚀 Next Steps

1. **Add your Instagram link** in `src/resources/content.tsx`
2. **Update domain URL** when you deploy
3. **Replace avatar image** at `public/images/avatar.jpg`
4. **Create your first blog post** following the guide above
5. **Replace example projects** with your actual work
6. **Replace gallery images** with your photos
7. **Update README.md** with your project info

---

## 📚 Additional Resources

- **MDX Documentation**: https://mdxjs.com/
- **Markdown Guide**: https://www.markdownguide.org/
- **Once UI Components**: Check `src/components/mdx.tsx` for available components
- **Next.js MDX**: The project uses `@next/mdx` for MDX support

---

## 💡 Tips

1. **Start Simple**: Create a simple blog post first to test the system
2. **Use Images**: Add images to make posts more engaging
3. **Test Locally**: Run `npm run dev` to see your posts immediately
4. **SEO**: Use descriptive titles and summaries for better SEO
5. **Dates**: Use consistent date format (YYYY-MM-DD)
6. **Tags**: Use tags to categorize your content

---

**Last Updated**: 2025-01-15
**Status**: Core personalization complete, content creation needed

