# Full Stack Developer Portfolio - Design Guidelines

## Design Approach

**Selected Approach**: Modern Minimalist Design System inspired by Linear, Vercel, and contemporary developer portfolios. This approach balances professional aesthetics with functional clarity, perfect for showcasing technical expertise.

**Core Principles**:
- Clean, spacious layouts that let content breathe
- Strong typographic hierarchy emphasizing readability
- Purposeful whitespace for visual rhythm
- Minimal but intentional animations
- Mobile-first responsive design

---

## Typography System

**Font Families**:
- Primary (Headings): Inter or Poppins (600, 700 weights)
- Secondary (Body): Inter or Roboto (400, 500 weights)
- Accent (Code/Technical): JetBrains Mono or Fira Code (400 weight)

**Type Scale**:
- Hero Title: text-5xl md:text-6xl lg:text-7xl (font-bold)
- Section Headers: text-3xl md:text-4xl (font-semibold)
- Subsection Headers: text-2xl md:text-3xl (font-semibold)
- Card Titles: text-xl md:text-2xl (font-semibold)
- Body Text: text-base md:text-lg (font-normal)
- Small Text/Labels: text-sm (font-medium)
- Technical Tags: text-xs md:text-sm (font-mono)

---

## Layout & Spacing System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component internal spacing: p-4, p-6, p-8
- Section padding: py-16 md:py-20 lg:py-24
- Container margins: my-8, my-12, my-16
- Grid gaps: gap-6, gap-8, gap-12

**Container Strategy**:
- Max-width container: max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy sections: max-w-4xl mx-auto
- Full-width backgrounds with inner containers

---

## Hero Section

**Layout**: Full-viewport hero (min-h-screen) with split design
- Left side: Professional headshot/portrait image (40% width on desktop)
- Right side: Introduction content (60% width on desktop)
- Stack vertically on mobile

**Content Structure**:
- Name: Large, bold typography
- Title/Role: "Full Stack Engineer (Python | Django | AI Integration)"
- Brief tagline: 1-2 sentence professional summary
- CTA buttons: "View Projects" and "Download Resume" with backdrop-blur backgrounds
- Quick contact icons: LinkedIn, GitHub, Email (with hover states)

**Image Specifications**:
- Professional headshot or workspace/coding setup
- Image should have subtle treatment (slight desaturation or overlay)
- Positioned on left, taking 40% of viewport on desktop
- Full-width background on mobile with content overlay

---

## Section Components

### About Me Section
- Two-column layout on desktop (60/40 split)
- Left: Expanded professional bio, journey, interests
- Right: Quick stats cards (Years Experience, Projects Completed, Technologies Mastered)
- Single column stack on mobile

### Skills Section
**Layout**: Category-based card grid
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each category card contains:
  - Category icon (from Heroicons)
  - Category title
  - Skill tags in flex-wrap layout
  - Tags: rounded-full px-4 py-2 with subtle borders

**Skill Categories** (from resume):
1. Core Competencies
2. Programming Languages & Frameworks
3. AI/ML Tools & Libraries
4. Databases & DevOps Tools

### Projects Section
**Layout**: Masonry-style card grid
- Grid: grid-cols-1 md:grid-cols-2 gap-8
- Feature 1-2 spotlight projects in larger cards (col-span-2) at top
- Remaining projects in two-column grid

**Project Card Structure**:
- Project title (prominent)
- Brief description (2-3 lines)
- Tech stack tags (flex-wrap, technical font)
- Key features as bullet points (2-4 items)
- Optional: GitHub icon link, Demo link

**Featured Projects**:
1. PrajaVote E-Voting System (spotlight)
2. Banjara Language Translator (spotlight)
3. Bharat-AI-OCR-LLM
4. Voice Assistant
5. QR Code Attendance System
6. AI Assistant Chatbot
7. Government Web Portal
8. Terraform-Based Infrastructure

### Internships Section
**Layout**: Timeline design
- Vertical timeline line on left (hidden on mobile)
- Timeline nodes for each internship
- Card layout for each experience

**Experience Card**:
- Company name and logo placeholder
- Role title (bold)
- Duration (lighter weight)
- Key responsibilities (2-3 bullet points)
- Technologies used (tag format)

**Internships** (5 total from resume):
- The Developers Arena
- Swecha (IIIT Hyderabad & Meta)
- AICTE & Edunet Foundation
- Learn Fusion
- DevRhylme Foundation

### Education Section
- Card layout: grid-cols-1 md:grid-cols-3
- Each education card:
  - Institution name
  - Degree/Field
  - GPA/CGPA
  - Duration
  - Location

### Contact Section
**Layout**: Two-column (on desktop)
- Left (60%): Contact form
  - Name input
  - Email input
  - Message textarea
  - Submit button (prominent)
- Right (40%): Contact information
  - Email with icon
  - Phone with icon
  - Location
  - Social links (LinkedIn, GitHub)
  - Availability status indicator

**Form Design**:
- Inputs: border-2, rounded-lg, p-4
- Labels: text-sm, font-medium
- Focus states: Enhanced border treatment
- Submit button: Full-width on mobile, auto on desktop

---

## Navigation

**Header**: Sticky navigation (sticky top-0)
- Logo/Name on left
- Navigation links on right (hidden on mobile, hamburger menu)
- Links: About, Skills, Projects, Experience, Contact
- Smooth scroll behavior
- Backdrop blur effect when scrolling

**Footer**:
- Three-column layout on desktop (stack on mobile)
- Column 1: Brief bio + copyright
- Column 2: Quick links (same as nav)
- Column 3: Contact info + social links
- Bottom bar: Copyright, Privacy Policy, Terms

---

## Component Library

**Buttons**:
- Primary: Large, rounded-lg, px-8 py-4
- Secondary: Outlined variant with same sizing
- Icon buttons: Square, rounded-full, p-3

**Cards**:
- Standard padding: p-6 md:p-8
- Rounded corners: rounded-xl
- Subtle border treatment
- Hover state: Slight elevation effect (no exaggerated shadows)

**Tags/Badges**:
- Technical skills: rounded-full px-4 py-2 text-sm
- Status badges: rounded-md px-3 py-1 text-xs

**Icons**:
- Use Heroicons (outline variant for most, solid for emphasis)
- Icon size: w-5 h-5 for inline, w-8 h-8 for standalone

---

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column layouts)
- Desktop: > 1024px (full multi-column layouts)

**Mobile-Specific**:
- Hamburger menu for navigation
- Full-width cards and sections
- Reduced padding (py-12 instead of py-20)
- Stacked hero layout
- Single-column project grid

---

## Animations & Interactions

**Minimal Animation Strategy**:
- Fade-in on scroll for section headers only
- Smooth scroll behavior for navigation
- Button hover: Subtle scale (1.02) or brightness shift
- Card hover: Subtle lift effect (translate-y-1)
- No scroll-triggered animations for body content
- Focus states: Clear visual indicators

---

## Images & Media

**Required Images**:
1. **Hero Image**: Professional headshot or workspace photo
   - Placement: Left side of hero section (40% width desktop)
   - Treatment: Professional, well-lit, possibly with subtle overlay
   
2. **Project Thumbnails** (Optional but recommended):
   - If adding project images, use screenshots or mockups
   - Maintain consistent aspect ratio (16:9 or 3:2)
   - Place above project title in cards

**Image Guidelines**:
- Use placeholder comments for custom project images
- All images: rounded-lg treatment
- Lazy loading for performance
- Alt text for accessibility

---

## Accessibility Requirements

- Semantic HTML throughout (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Keyboard navigation support
- Form inputs with proper labels and error states
- Color contrast ratios meeting WCAG AA standards
- Focus indicators visible on all interactive elements
- Skip-to-content link for keyboard users