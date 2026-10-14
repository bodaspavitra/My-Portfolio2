export const navLinks = [
  {
    name: "About Me",
    link: "#aboutme"
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

export const techStackIcons = [
  {
    number: "01",
    name: "UI/UX & Design Systems",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    shortName: "Figma · FigJam · Wireframing · Prototyping",
    description:
      "Creating user flows, high-fidelity interfaces, design systems, and intuitive product experiences.",
  },
  {
    number: "02",
    name: "Design & Graphic Tools",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    shortName: "Adobe Photoshop · Illustrator · Canva",
    description:
      "Crafting visual assets, component libraries, typography, auto layouts, and promotional graphics.",
  },
  {
    number: "03",
    name: "Web Foundations",
    icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    shortName: "HTML5 · CSS3 · Bootstrap",
    description:
      "Translating design concepts into responsive, developer-friendly web structures.",
  },
];

export const logoIconsList = [
  {
    imgPath: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    name: 'Figma'
  },
  {
    imgPath: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    name: 'Photoshop'
  },
  {
    imgPath: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png",
    name: 'Illustrator'
  },
  {
    imgPath: "/images/code.svg",
    name: 'HTML & CSS'
  },
];

export const projects = [
  {
    slug: "upgrow",
    title: "Upgrow | Financial Services Platform",
    category: "MOBILE APP · FINTECH",
    tagline: "Mobile-first fintech experience for discovering, comparing, and selling financial products on the go.",
    description: "Designed a mobile fintech platform for discovering, comparing, and selling financial products, including product listings, comparison flows, sales dashboards, earnings, and service discovery.",
    tech: ["Figma", "Mobile UI/UX", "Fintech", "Design Systems", "Auto Layout"],
    image: "/images/projects/upgrow/upgrow-hero.png",
    link: "#/project/upgrow",
    role: "Mobile UI/UX Designer",
    client: "Moonbyte",
    duration: "3 Months",
    platform: "iOS & Android Mobile App",
    tools: ["Figma", "FigJam", "Design Systems", "Auto Layout", "Interactive Prototyping"],
    overview: "Upgrow is a mobile-first financial distribution platform designed for retail sales partners and financial agents. It empowers agents across tier-2 and tier-3 cities to sell credit cards, personal loans, home loans, and business loans, track active pipeline leads with real-time status updates, and monitor transparent monthly earnings with seamless bank payouts.",
    problem: "Financial sales agents historically struggled with disjointed lead tracking across phone calls and WhatsApp, unclear commission structures with hidden deductions, and complicated banking criteria that led to high customer rejection rates and lost revenue.",
    solution: "Designed an intuitive, high-converting mobile experience with five dedicated core flows: a gamified Home dashboard with daily top-sellers and goal tracking, a pincode-filtered Product catalogue with instant approval ratings, an interactive 5-stage Lead progression funnel with one-tap WhatsApp customer nudges, comprehensive Visual Earnings analytics with donut/trend charts, and digital branding tools (Digital Visiting Card & Agent Website).",
    designProcess: [
      {
        phase: "01. Research & Agent Shadowing",
        detail: "Observed retail financial agents in their daily workflow to uncover key pain points around status tracking, commission disputes, and customer communication."
      },
      {
        phase: "02. Mobile Information Architecture",
        detail: "Restructured the app into 4 thumb-friendly bottom navigation destinations: Home, Leads, Earnings, and Team/Profile."
      },
      {
        phase: "03. Wireframing & Auto Layout",
        detail: "Created modular component variants in Figma with Auto Layout, supporting varied screen sizes and dynamic multi-state card variants."
      },
      {
        phase: "04. Visual Design & Micro-Interactions",
        detail: "Designed high-contrast financial green visual themes, interactive donut & bar charts, milestone timeline bars, and WhatsApp quick-action buttons."
      }
    ],
    features: [
      {
        title: "Gamified Agent Dashboard",
        description: "Features 'Product of the Day' promotions, a dynamic 6-category loan/card grid, live top-seller leaderboard, and a motivational monthly sales goal tracker with progress rings."
      },
      {
        title: "Pincode-Filtered Product Catalogue",
        description: "Contextual service availability filtered by customer pincode, clear joining/annual fee callouts, expected payout per conversion, and instant 'Sell Now' action buttons."
      },
      {
        title: "5-Stage Lead Lifecycle Tracker",
        description: "Visual pipeline tracker (Created → In Progress → Status → Earned → Credited) with instant WhatsApp and SMS nudge shortcuts to keep applicants engaged."
      },
      {
        title: "Visual Earnings & Analytics Hub",
        description: "Data-rich financial breakdown with paid vs pending split, category donut distribution, monthly trend bar charts, and an upcoming payout calendar."
      }
    ],
    palette: [
      { name: "Forest Green", hex: "#006747" },
      { name: "Emerald Mint", hex: "#00A86B" },
      { name: "Commission Amber", hex: "#F59E0B" },
      { name: "Clean Surface", hex: "#F8FAFC" }
    ],
    gallery: [
      {
        title: "Home & Sales Goal Tracker",
        caption: "Goal progress tracker, daily featured card, loan category grid, and sales opportunity recommendations.",
        image: "/images/projects/upgrow/upgrow-home.png"
      },
      {
        title: "Product Catalogue & Card Comparison",
        caption: "Pincode-based availability, transparent fee cards, approval rating stars, and one-tap 'Sell Now' buttons.",
        image: "/images/projects/upgrow/upgrow-products.png"
      },
      {
        title: "Lead Pipeline & WhatsApp Reminders",
        caption: "5-stage milestone tracker (Created to Credited) with direct WhatsApp and message shortcuts to re-engage applicants.",
        image: "/images/projects/upgrow/upgrow-leads.png"
      },
      {
        title: "Earnings & Monthly Trend Analytics",
        caption: "Category-wise donut chart breakdown, monthly performance bars, and upcoming scheduled bank payout dates.",
        image: "/images/projects/upgrow/upgrow-earnings.png"
      },
      {
        title: "Profile & Digital Business Tools",
        caption: "Digital visiting card sharing, personal agent website link, referral rewards, and bank payout verification setup.",
        image: "/images/projects/upgrow/upgrow-profile.png"
      }
    ],
    screensDetail: [
      {
        tab: "Home & Goals",
        icon: "🏠",
        title: "Gamified Agent Dashboard & Sales Goals",
        category: "01 • AGENT DISCOVERY & GOALS",
        image: "/images/projects/upgrow/upgrow-home.png",
        goal: "Drive high daily engagement by gamifying monthly sales targets and placing top-converting financial products within one thumb reach.",
        keyDecisions: [
          {
            title: "Interactive Monthly Sales Goal Tracker",
            desc: "Visual circular progress indicator (63% Completed) keeps agents accountable to their monthly target and remaining timeline."
          },
          {
            title: "Product of the Day Hero Banner",
            desc: "High-contrast hero card with transparent 'Earn up to ₹2,000 per successful sale' callout to promote top banking partner campaigns."
          },
          {
            title: "6-Category Rapid Access Grid",
            desc: "Cards for Credit Cards, Home Loans, Vehicle Loans, Property, Personal & Business Loans showing upfront payout rates."
          },
          {
            title: "Location-Based Opportunity Engine",
            desc: "'Best Opportunity For You' leverages local demographic data to recommend cards with proven 2X conversion in the agent's area."
          }
        ]
      },
      {
        tab: "Product Catalogue",
        icon: "💳",
        title: "Pincode-Filtered Product Catalogue",
        category: "02 • SERVICE DISCOVERY & PRICING",
        image: "/images/projects/upgrow/upgrow-products.png",
        goal: "Remove banking confusion with hyper-local service availability, zero-hidden-fee clarity, and immediate 'Sell Now' action.",
        keyDecisions: [
          {
            title: "Pincode Eligibility Verification",
            desc: "Dynamic pincode bar (e.g. 360025) ensures agents only pitch financial products actively serviceable in the applicant's area."
          },
          {
            title: "Zero-Hidden-Fee Transparency",
            desc: "Prominent badge cards for 'Joining Fee: Free' and 'Annual Fee: Nil' empower agents to overcome common customer hesitations."
          },
          {
            title: "Guaranteed Payout Per Card Banner",
            desc: "Bold green ribbon displaying exact agent commission (e.g. 'Earn Upto ₹1,440') prevents ambiguity and motivates conversion."
          },
          {
            title: "Star Approval Rating Indicator",
            desc: "5-star rating system provides at-a-glance guidance on which cards offer fastest bank underwriting."
          }
        ]
      },
      {
        tab: "Leads Funnel",
        icon: "👥",
        title: "5-Stage Pipeline & WhatsApp Customer Nudges",
        category: "03 • CONVERSION & RETENTION",
        image: "/images/projects/upgrow/upgrow-leads.png",
        goal: "Transform chaotic lead tracking into a transparent 5-stage milestone funnel with instant WhatsApp follow-up actions to prevent drop-offs.",
        keyDecisions: [
          {
            title: "5-Stage Visual Progress Funnel",
            desc: "Clear progress steps (Created → In Progress → Status → Earned → Credited) show applicant status at any second."
          },
          {
            title: "1-Tap WhatsApp & SMS Reminders",
            desc: "Direct communication shortcuts allow agents to ping stalled customers instantly without saving contacts manually."
          },
          {
            title: "Color-Coded Status Tags",
            desc: "Instant cognitive clarity with amber 'Processing', blue 'Assigning Commission', and red 'Rejected' states."
          },
          {
            title: "Active vs Closed Segmented Control",
            desc: "Keeps ongoing customer applications distinct from completed or closed deals, minimizing dashboard clutter."
          }
        ]
      },
      {
        tab: "Earnings Analytics",
        icon: "📊",
        title: "Financial Analytics & Commission Breakdown",
        category: "04 • TRANSPARENCY & DATA VIZ",
        image: "/images/projects/upgrow/upgrow-earnings.png",
        goal: "Build total financial trust with retail agents through comprehensive donut charts, monthly trend bars, and scheduled bank deposit dates.",
        keyDecisions: [
          {
            title: "Paid vs Pending Metric Cards",
            desc: "Displays total earnings (₹1,37,400) divided into settled funds (81.5%) and pending bank clearance (18.5%)."
          },
          {
            title: "Category Donut Chart Visualization",
            desc: "Clean data breakdown highlighting top earning channels across Credit Cards, Personal Loans, and Mortgages."
          },
          {
            title: "Month-Over-Month Performance Bars",
            desc: "Visual trend bars from January to June visualizing consistent income growth to boost agent retention."
          },
          {
            title: "Upcoming Payout Calendar Card",
            desc: "Countdown schedule showing exact deposit date (e.g. 18 Jul 2026) and expected payout amount."
          }
        ]
      },
      {
        tab: "Profile & Tools",
        icon: "👤",
        title: "Digital Business Enablement & Verification",
        category: "05 • BRANDING & AGENT EMPOWERMENT",
        image: "/images/projects/upgrow/upgrow-profile.png",
        goal: "Turn every agent into an independent digital entrepreneur with personal branding tools, digital visiting cards, and direct payout setup.",
        keyDecisions: [
          {
            title: "Shareable Digital Visiting Card",
            desc: "Allows agents to share a polished, branded digital business card directly with prospective customers via messaging apps."
          },
          {
            title: "Personal Agent Website Link",
            desc: "'My Website' feature provisions a customized storefront where customers can explore services tied to the agent's ID."
          },
          {
            title: "Referral ID & Team Network",
            desc: "Quick one-click copy Referral ID incentivizes agents to onboard colleagues and earn passive override commissions."
          },
          {
            title: "Actionable Bank Verification Alert",
            desc: "High-priority contextual banner prompting agents to complete bank details before payout cut-offs."
          }
        ]
      }
    ],
    impact: [
      { metric: "5 Core", label: "Mobile Flows Designed" },
      { metric: "1-Tap", label: "WhatsApp Lead Reminders" },
      { metric: "100%", label: "Commission Transparency" }
    ],
    figmaLink: "https://www.figma.com/"
  },
  {
    slug: "aarambh-design",
    title: "Aarambh Furniture Studio | E-Commerce & Brand Identity",
    category: "D2C E-COMMERCE · BRANDING",
    tagline: "Curated artisanal furniture e-commerce experience blending Devanagari typography, luxury architectural photography, and frictionless shopping journeys.",
    description: "Designed end-to-end brand identity and D2C e-commerce experience for Aarambh Furniture Studio, featuring bilingual Devanagari logotype design, high-converting product discovery, multi-attribute collection filters, and luxury architectural art direction.",
    tech: ["Figma", "Brand Identity", "Shopify E-Commerce", "Design Systems", "Art Direction", "Responsive UI"],
    image: "/images/projects/aarambh-design/aarambh-hero.png",
    link: "#/project/aarambh-design",
    websiteUrl: "https://aarambhfurniturestudio.com/",
    role: "Lead UI/UX & Brand Identity Designer",
    client: "Aarambh Furniture Studio",
    duration: "2 Months (2026)",
    platform: "Responsive Web Store (Desktop & Mobile)",
    tools: ["Figma", "Typography & Logotype", "Shopify Liquid", "Design Systems", "Component Variants"],
    overview: "Aarambh Furniture Studio is a contemporary bespoke furniture atelier based in India, crafting handcrafted living room, bedroom, and signature statement pieces. The project encompassed a complete creative journey: conceptualizing the culturally rooted Devanagari/Latin fusion logotype, establishing an earth-toned luxury design system, and architecting an intuitive, high-converting D2C Shopify storefront across desktop and mobile devices.",
    problem: "Bespoke furniture in India historically relied on offline physical showrooms with fragmented printed catalogues, opaque pricing, and limited reach. Online shoppers struggled with visualizing scale, material textures, dual-tone fabrics, and technical room dimensions, leading to hesitation and high cart abandonment on high-ticket furniture purchases.",
    solution: "Designed an editorial luxury e-commerce experience centered on high-fidelity architectural photography, transparent upfront pricing, multi-angle thumbnail inspections with inventory scarcity cues ('Low stock: 5 left'), and an accessible faceted sidebar filter (Availability, Price Slider, Color Swatches, and Category).",
    designProcess: [
      {
        phase: "01. Cultural Brand Discovery & Naming",
        detail: "Explored 'Aarambh' (The Beginning) as a metaphor for new homes, fusing traditional Devanagari shirorekha anatomy with contemporary Latin typography."
      },
      {
        phase: "02. Visual Art Direction & Staging",
        detail: "Established warm architectural staging guidelines with organic curved sofas, stone textures, and statement art pieces to evoke modern luxury."
      },
      {
        phase: "03. High-Ticket E-Commerce Architecture",
        detail: "Designed low-friction purchase journeys: glanceable collection discovery, multi-angle inspection carousels, and explicit specification tabs."
      },
      {
        phase: "04. Multi-Screen Responsive System",
        detail: "Engineered scalable Figma components and breakpoints ensuring flawless touch navigation and quick-action purchase flows on mobile screens."
      }
    ],
    features: [
      {
        title: "Devanagari Fusion Brand Identity",
        description: "Distinctive bespoke logotype connecting letterforms via a traditional shirorekha bar with vibrant teardrop counter-fill accents."
      },
      {
        title: "Signature Series Curated Showcase",
        description: "Editorial collection carousels highlighting luxury curved sofas (Lunara Flow, Veloura Arc) with clear discount badges and pricing."
      },
      {
        title: "Faceted E-Commerce Collection Filtering",
        description: "Interactive sidebar enabling shoppers to filter by live stock availability, dynamic price sliders, color swatches, and room categories."
      },
      {
        title: "High-Confidence Product Detail Page (PDP)",
        description: "Multi-angle photo gallery, real-time scarcity indicators ('Low stock: 5 left'), direct 'Buy Now' checkouts, and dimensional tabs."
      }
    ],
    palette: [
      { name: "Terracotta Cognac", hex: "#C86D44" },
      { name: "Artisanal Teal", hex: "#1F9988" },
      { name: "Warm Cream", hex: "#F5F0EA" },
      { name: "Espresso Charcoal", hex: "#1C1815" }
    ],
    screensDetail: [
      {
        title: "Editorial Storefront & Signature Showcase",
        category: "01 · HOMEPAGE & HERO EXPERIENCE",
        icon: "🏠",
        tab: "🏠 Storefront & Hero",
        device: "desktop",
        url: "https://aarambhfurniturestudio.com/",
        image: "/images/projects/aarambh-design/aarambh-home.png",
        goal: "Establish Luxury Craftsmanship and Guide Shoppers into Signature Collections",
        keyDecisions: [
          {
            num: "01",
            title: "Bold Value Proposition & Art Direction",
            desc: "Headline 'BIG ON COMFORT. Built to Last.' paired with playful rhino sculpture art breaks away from generic furniture catalogues."
          },
          {
            num: "02",
            title: "Durability & Trust Badges",
            desc: "Three upfront trust pills (Modern Design, Premium Comfort, Built to Last) immediately answer durability concerns for online buyers."
          },
          {
            num: "03",
            title: "High-Contrast Discovery Trigger",
            desc: "Warm terracotta 'SHOP NOW →' button provides an unambiguous primary entry point into curated product categories."
          },
          {
            num: "04",
            title: "Curated Signature Series Grid",
            desc: "Product cards (Lunara Flow, Chromatique Epoque, Veloura Arc) feature percentage-off badges and transparent strike-through pricing."
          }
        ]
      },
      {
        title: "Room-by-Room Category Navigation",
        category: "02 · INFORMATION ARCHITECTURE",
        icon: "🗂️",
        tab: "🗂️ Category Navigation",
        device: "desktop",
        url: "https://aarambhfurniturestudio.com/collections",
        image: "/images/projects/aarambh-design/aarambh-catalog.png",
        goal: "Enable Intuitive Room-by-Room Discovery for Home Furnishing Shoppers",
        keyDecisions: [
          {
            num: "01",
            title: "Workshop Heritage 'Shop All' Hero",
            desc: "Atmospheric craftsmanship imagery celebrates artisan woodcraft and authentic workshop manufacturing processes."
          },
          {
            num: "02",
            title: "Visual Category Portal Cards",
            desc: "Four prominent photographic gateways (Beds, Sofas, Bedroom, Living Room) with directional arrow cues guide user intent."
          },
          {
            num: "03",
            title: "Minimalist Grid Spacing",
            desc: "Generous whitespace and clean layout gutters keep buyer focus on furniture proportions and room styling possibilities."
          },
          {
            num: "04",
            title: "Utility Navigation Header",
            desc: "Top announcement bar features quick customer utility access: About Us, Buy in Bulk, Track Order, and FAQs."
          }
        ]
      },
      {
        title: "Faceted Living Room Collection & Filtering",
        category: "03 · CATALOGUE & FILTERING UX",
        icon: "🛋️",
        tab: "🛋️ Living Room Catalogue",
        device: "desktop",
        url: "https://aarambhfurniturestudio.com/collections/living-room",
        image: "/images/projects/aarambh-design/aarambh-sofas.png",
        goal: "Empower Shoppers to Filter by Room Constraints, Budget, and Color Aesthetics",
        keyDecisions: [
          {
            num: "01",
            title: "Multi-Attribute Filter Sidebar",
            desc: "Faceted controls for In-Stock availability, price ranges, color swatches, and subcategories prevent dead-end searches."
          },
          {
            num: "02",
            title: "Sorting & Active Counter",
            desc: "Live '10 products' counter and 'Best Selling' sorting dropdown streamline browsing without screen clutter."
          },
          {
            num: "03",
            title: "One-Tap Floating Wishlist Heart",
            desc: "Subtle heart toggle on each product card allows shoppers to curate favorites across multi-day buying decisions."
          },
          {
            num: "04",
            title: "Contextual Room Staging Photography",
            desc: "In-situ lifestyle shots of the Dual Curve Sofa and Amber Halo Swivel Chair help buyers gauge spatial fit."
          }
        ]
      },
      {
        title: "High-Confidence Product Detail Experience",
        category: "04 · CONVERSION & PRODUCT DETAIL",
        icon: "✨",
        tab: "✨ Product Detail Page",
        device: "desktop",
        url: "https://aarambhfurniturestudio.com/products/dual-curve-contemporary-designer-sofa",
        image: "/images/projects/aarambh-design/aarambh-product.png",
        goal: "Overcome Tactile Buying Hesitation and Drive Confident High-Ticket Checkouts",
        keyDecisions: [
          {
            num: "01",
            title: "Multi-Angle Inspection Carousel",
            desc: "Four vertical thumbnails (front view, 45-degree angle, side profile, and dimension schematic) provide complete visual clarity."
          },
          {
            num: "02",
            title: "Scarcity & Inventory Urgency",
            desc: "Contextual badge ('🟠 Low stock: 5 left') introduces honest psychological urgency for limited-run artisan pieces."
          },
          {
            num: "03",
            title: "Dual Conversion Actions",
            desc: "Clear distinction between 'Add to cart' and high-contrast 'Buy it now' for customers ready to checkout immediately."
          },
          {
            num: "04",
            title: "Tabbed Technical Specifications",
            desc: "Organized tabs for 'Description', 'Weight And Dimensions', and 'Shipping And Warranty' eliminate post-purchase surprises."
          }
        ]
      },
      {
        title: "Mobile Responsive D2C Storefront",
        category: "05 · MOBILE RESPONSIVENESS & TOUCH UX",
        icon: "📱",
        tab: "📱 Mobile Storefront",
        device: "mobile",
        url: "https://aarambhfurniturestudio.com/",
        image: "/images/projects/aarambh-design/aarambh-mobile.png",
        goal: "Deliver Seamless Touch-Optimized Browsing on Smartphones and Tablets",
        keyDecisions: [
          {
            num: "01",
            title: "Sticky Mobile Navigation Header",
            desc: "Compact header with drawer menu, centered logo, search, and persistent cart/wishlist icons for quick access."
          },
          {
            num: "02",
            title: "Thumb-Friendly Touch Targets",
            desc: "All CTA buttons, collection cards, and filter options are designed with minimum 48px hit areas for easy one-handed browsing."
          },
          {
            num: "03",
            title: "Swipeable Product Cards",
            desc: "Horizontal carousel behavior enables smooth thumb-swiping through signature collections without infinite vertical scroll."
          },
          {
            num: "04",
            title: "Lightweight High-Speed Assets",
            desc: "Optimized modern WebP/PNG image delivery ensures lightning-fast loading across 4G/5G mobile networks."
          }
        ]
      },
      {
        title: "Bilingual Devanagari Brand Identity & Logo",
        category: "06 · BRAND IDENTITY & LOGOTYPE",
        icon: "🎨",
        tab: "🎨 Brand Identity & Logo",
        device: "branding",
        url: "https://aarambhfurniturestudio.com/",
        image: "/images/projects/aarambh-design/aarambh-og.png",
        goal: "Create a Memorable, Culturally Rooted Modern Indian Design Language",
        keyDecisions: [
          {
            num: "01",
            title: "Devanagari Shirorekha Fusion",
            desc: "A bold horizontal header bar connects the Latin letters, paying homage to traditional Devanagari script structure."
          },
          {
            num: "02",
            title: "Vibrant Teardrop Counter Accents",
            desc: "Playful organic fills (coral red, warm saffron yellow, soft rose, and artisan teal) evoke handcrafted Indian textile dyes."
          },
          {
            num: "03",
            title: "Geometric Letter Balance",
            desc: "Harmonious balance of sharp terminals and soft curved bowls gives the brand a distinctive, memorable silhouette."
          },
          {
            num: "04",
            title: "Rhythmic Sub-Branding Typography",
            desc: "Spaced 'Furniture Studio' secondary typography with colorful dotted vowels creates a sophisticated, cohesive brand mark."
          }
        ]
      }
    ],
    gallery: [
      {
        title: "Aarambh Storefront & Signature Series",
        caption: "Luxury e-commerce homepage featuring organic curved furniture and signature collections.",
        image: "/images/projects/aarambh-design/aarambh-home.png"
      },
      {
        title: "Category Navigation & Room Portals",
        caption: "Architectural portal cards directing shoppers to Beds, Sofas, Bedroom, and Living Room.",
        image: "/images/projects/aarambh-design/aarambh-catalog.png"
      },
      {
        title: "Living Room Catalogue & Faceted Filtering",
        caption: "E-commerce collection with in-stock filters, price sliders, color swatches, and sale badges.",
        image: "/images/projects/aarambh-design/aarambh-sofas.png"
      },
      {
        title: "Product Detail Experience (Dual Curve Sofa)",
        caption: "High-ticket PDP with 4-angle gallery, low stock urgency badge, and specification tabs.",
        image: "/images/projects/aarambh-design/aarambh-product.png"
      },
      {
        title: "Mobile Responsive Shopping Experience",
        caption: "Touch-optimized smartphone UI with drawer navigation and swipeable product cards.",
        image: "/images/projects/aarambh-design/aarambh-mobile.png"
      },
      {
        title: "Bilingual Devanagari Brand Identity",
        caption: "Custom shirorekha logotype with colorful teardrop counter fills and crafted typography.",
        image: "/images/projects/aarambh-design/aarambh-og.png"
      }
    ],
    impact: [
      { metric: "100%", label: "Custom Brand Identity" },
      { metric: "D2C", label: "Shopify Store Launch" },
      { metric: "Mobile", label: "First Responsive UX" },
      { metric: "6 Flow", label: "Full-Funnel Case Study" }
    ],
    figmaLink: "https://www.figma.com/"
  },
  {
    slug: "graphic-design-branding",
    title: "Brand Identity, Packaging & Graphic Design | Visual Communication Archive",
    category: "GRAPHIC DESIGN · BRANDING",
    tagline: "Commercial graphic design archive spanning vector brand identity, retail FMCG packaging, industrial process safety infographics, and festive marketing campaigns.",
    description: "A comprehensive commercial portfolio of 21 design deliverables across four disciplines: Brand Identity (AuthentiIndia, Fowlix), Packaging & FSSAI Production (Sri Priya Masala), Corporate Infographics (Coenz Group), and Multi-Brand Cultural Marketing (Moonbyte, AuthentiIndia, Coenz Group).",
    tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Packaging Die-Lines", "Print Production", "Visual Metaphors"],
    image: "/images/projects/graphic-design/graphics-hero.png",
    link: "#/project/graphic-design-branding",
    role: "Lead Visual & Graphic Designer",
    client: "Coenz Group · AuthentiIndia · Moonbyte · Sri Priya Masala",
    duration: "Multi-Client Creative Archive",
    platform: "Commercial Print Production & High-Impact Digital Media",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Die-Cut Templates", "CMYK Separation", "Devanagari Calligraphy"],
    overview: "A comprehensive showcase of commercial graphic design, branding, and visual storytelling across corporate, FMCG, industrial, and technology sectors. Spans precision vector logo design, print-ready food packaging engineering with statutory FSSAI compliance, technical industrial safety infographics communicating high-risk engineering standards, and high-engagement festive brand campaigns for enterprise social channels.",
    problem: "Different visual communication mediums demand vastly different technical rigor: FMCG packaging requires strict statutory compliance, barcode readability, and nutritional layout hierarchy; industrial engineering infographics must distill life-critical technical standards (HAZOP, IEC 60079) into intuitive visual metaphors without oversimplification; and brand campaigns must honor cultural traditions while reinforcing corporate authority.",
    solution: "Developed disciplined visual communication systems tailored to each medium: engineered print-ready packaging die-cuts for Sri Priya Masala adhering to Indian packaging regulations; authored impactful visual metaphors (The Safety Iceberg, The Chemical Flask, The Split Fire Reflection) for Coenz Group; crafted memorable vector identities with negative space for AuthentiIndia and Fowlix; and created culturally resonant social campaigns.",
    designProcess: [
      {
        phase: "01. Visual Conceptualization & Metaphor",
        detail: "Synthesized technical engineering data and cultural stories into memorable visual hooks like the Process Safety Iceberg and sacred Indian festival iconography."
      },
      {
        phase: "02. Vector Geometry & Typographic Anatomy",
        detail: "Engineered scalable vector logos in Illustrator, precision die-cuts, and custom Devanagari/Latin bilingual typographic compositions."
      },
      {
        phase: "03. Commercial Print & Packaging Production",
        detail: "Built press-ready CMYK layouts adhering to FSSAI packaging norms, nutritional facts grids, batch coding zones, and offset print tolerances."
      },
      {
        phase: "04. Cross-Channel Campaign Rollout",
        detail: "Adapted core master artworks into multi-format digital assets optimized for LinkedIn, Instagram, website banners, and corporate presentation decks."
      }
    ],
    features: [
      {
        title: "Commercial Packaging & FSSAI Production",
        description: "Full-bleed die-cut label engineering for Sri Priya Masala Udyog featuring regulatory FSSAI licensing, nutritional facts grid, and batch coding box."
      },
      {
        title: "Industrial Safety Infographics (Coenz Group)",
        description: "Technical visual communication simplifying life-critical process safety standards (PHA, MOC, SIS, Hazardous Area Ex) into high-impact diagrams."
      },
      {
        title: "Vector Logo & Brand Identity Systems",
        description: "Negative-space brand marks for AuthentiIndia (Black Cat silhouette integration) and Fowlix (owl iconography lettermark)."
      },
      {
        title: "Multi-Brand Festive & Cultural Campaigns",
        description: "Sophisticated corporate marketing creatives celebrating Navratri, Ganesh Chaturthi, Buddha Purnima, Ram Navami, and Raksha Bandhan across diverse visual styles."
      }
    ],
    palette: [
      { name: "Safety Neon Blue", hex: "#00D2FF" },
      { name: "Turmeric Gold", hex: "#F59E0B" },
      { name: "Industrial Steel", hex: "#1E293B" },
      { name: "Vermilion Shakti", hex: "#E11D48" }
    ],
    screensDetail: [
      {
        title: "The Iceberg of Process Safety",
        category: "01 · CORPORATE INFOGRAPHICS",
        icon: "🧊",
        tab: "🧊 Safety Iceberg",
        device: "branding",
        url: "Coenz Group · Process Safety Architecture",
        image: "/images/projects/graphic-design/coenz-iceberg-operations.jpg",
        goal: "Distill invisible high-risk process engineering fundamentals into an unforgettable visual metaphor.",
        keyDecisions: [
          {
            num: "01",
            title: "Submerged Iceberg Visual Metaphor",
            desc: "Operations sit above the waterline, while the life-saving foundation (PHA, MOC, Mechanical Integrity, Operating Procedures) is revealed beneath the surface."
          },
          {
            num: "02",
            title: "Iconic Standard Symbolism",
            desc: "Custom vector glyphs represent hazard inspection, engineering change workflows, wrench integrity, and procedural documentation."
          },
          {
            num: "03",
            title: "Atmospheric Dual Lighting",
            desc: "Warm sunset lighting on the operational refinery contrasts with deep translucent aqua lighting beneath the water for strong visual depth."
          },
          {
            num: "04",
            title: "HIERO Corporate Anchor",
            desc: "Subtle multi-tone bottom bar reinforces the industrial group's proprietary methodology and corporate branding."
          }
        ]
      },
      {
        title: "Sri Priya Strong Hing Retail Packaging",
        category: "02 · PACKAGING DESIGN & PRODUCTION",
        icon: "📦",
        tab: "📦 Hing Packaging",
        device: "desktop",
        url: "Sri Priya Masala Udyog · 50g Commercial Die-Line",
        image: "/images/projects/graphic-design/packaging-sri-priya-hing.png",
        goal: "Design a retail packaging label balancing consumer appetite appeal with strict Indian FSSAI statutory compliance.",
        keyDecisions: [
          {
            num: "01",
            title: "Primary Display Panel & Oval Brand Insignia",
            desc: "Central dark oval cartouche showcases 'SRI PRIYA' and bold 'STRONG HING' lettering to command immediate supermarket shelf attention."
          },
          {
            num: "02",
            title: "Statutory FSSAI & Origin Compliance",
            desc: "Dual FSSAI licensing credentials prominently integrated alongside manufacturer details, customer care contacts, and green vegetarian dot."
          },
          {
            num: "03",
            title: "Mandatory Nutritional Facts Hierarchy",
            desc: "Standardized table displaying serving size (100g), calorie energy count (372.8 kcal), and full macronutrient breakdown per Indian food labeling laws."
          },
          {
            num: "04",
            title: "Die-Cut Batch & Origin Grid",
            desc: "Dedicated high-contrast box for Batch No., Packaging Date, Use By, MRP, and USP, alongside 'Made in India' and recycling cleanliness badges."
          }
        ]
      },
      {
        title: "AuthentiIndia Corporate Identity & Mascot",
        category: "03 · LOGO & BRAND IDENTITY",
        icon: "🛡️",
        tab: "🛡️ AuthentiIndia Logo",
        device: "branding",
        url: "AuthentiIndia · Brand Identity Guidelines",
        image: "/images/projects/graphic-design/logo-authenti-india.png",
        goal: "Create a memorable sovereign trust mark unifying high-tech API verification with a friendly guardian mascot.",
        keyDecisions: [
          {
            num: "01",
            title: "Negative Space Mascot Integration",
            desc: "The vigilant Black Cat mascot silhouette is elegantly nestled into the curvature of the letter 'i', symbolizing an alert guardian."
          },
          {
            num: "02",
            title: "National Saffron Accent Dot",
            desc: "A warm saffron orange dot atop the 'i' bridges sovereign Indian authority with contemporary technology aesthetics."
          },
          {
            num: "03",
            title: "Clean Modern Sans Geometry",
            desc: "Balanced rounded letterforms inspired by human-centered fintech inspire confidence across web, mobile, and API documentation."
          },
          {
            num: "04",
            title: "The Trust Layer of India Tagline",
            desc: "Supporting secondary lockup reinforces national compliance authority and B2B corporate verification standing."
          }
        ]
      },
      {
        title: "These Five Never Take A Day Off",
        category: "04 · INDUSTRIAL VISUAL COMMUNICATION",
        icon: "⚡",
        tab: "⚡ Industrial Guardians",
        device: "branding",
        url: "Coenz Group · Industrial Standards Campaign",
        image: "/images/projects/graphic-design/coenz-five-protectors.jpg",
        goal: "Celebrate the unseen engineering systems protecting industrial plants 24/7 through cinematic hero art direction.",
        keyDecisions: [
          {
            num: "01",
            title: "Neon-Illuminated Engineer Silhouettes",
            desc: "Five industrial operators rendered in electric neon outlines embody the relentless 24/7 protection of core engineering protocols."
          },
          {
            num: "02",
            title: "International Safety Standards Crests",
            desc: "Luminous chest badges feature IEC 60079 Hazardous Area classification, Static Electricity control, SIS, Arc Flash, and Mechanical Reliability."
          },
          {
            num: "03",
            title: "Nocturnal Industrial Facility Backdrop",
            desc: "Detailed illuminated refinery skyline creates high-contrast visual drama and reinforces heavy industrial context."
          },
          {
            num: "04",
            title: "Empowering Copywriting Architecture",
            desc: "Tagline 'UNSEEN. UNNOTICED. ALWAYS PROTECTING' resonates with engineering leaders and operations directors."
          }
        ]
      },
      {
        title: "Fowlix Brand Identity & Owl Iconography",
        category: "05 · LOGO & BRAND IDENTITY",
        icon: "🦉",
        tab: "🦉 Fowlix Wordmark",
        device: "branding",
        url: "Fowlix · Brand Identity System",
        image: "/images/projects/graphic-design/logo-fowlix.jpg",
        goal: "Design a playful, intelligent consumer brand identity blending animal iconography with organic typography.",
        keyDecisions: [
          {
            num: "01",
            title: "Owl Silhouette Negative Space 'O'",
            desc: "The central letter 'o' transforms into an owl face with inquisitive round eyes and a warm golden beak, evoking wisdom and insight."
          },
          {
            num: "02",
            title: "Botanical Leaf Accents",
            desc: "A stylized golden leaf forms the descender of the letter 'f', anchoring the brand in natural vitality."
          },
          {
            num: "03",
            title: "Dynamic Cross-Petal 'X'",
            desc: "The terminal letter 'x' is crafted from four symmetrical golden seed petals, creating visual rhythm and brand balance."
          },
          {
            num: "04",
            title: "Soft Curved Sans Anatomy",
            desc: "Chunky, friendly letterforms with rounded terminals provide approachable charm for digital apps and physical merchandise."
          }
        ]
      },
      {
        title: "AuthentiIndia Ganesh Chaturthi Mascot Blessing",
        category: "06 · BRAND CAMPAIGNS",
        icon: "🕉️",
        tab: "🕉️ Ganesh Chaturthi",
        device: "branding",
        url: "AuthentiIndia · Cultural Brand Campaign",
        image: "/images/projects/graphic-design/auth-ganesh-chaturthi.jpg",
        goal: "Humanize enterprise identity verification with sacred cultural celebration and the branded 3D Black Cat mascot.",
        keyDecisions: [
          {
            num: "01",
            title: "Storytelling Mascot Interaction",
            desc: "The signature 3D Black Cat mascot wearing a saffron scarf looks up reverently at Lord Ganesha, reinforcing brand personality."
          },
          {
            num: "02",
            title: "Architectural Marble Temple Staging",
            desc: "Sunlit classical Indian mandir courtyard with marigold garlands and brass hanging bell creates sacred serenity."
          },
          {
            num: "03",
            title: "Thematic Alignment with Brand Mission",
            desc: "Headline 'May every new beginning be guided by wisdom and trust' ties the remover of obstacles to AuthentiIndia's verification mission."
          },
          {
            num: "04",
            title: "Harmonious Saffron Brand Palette",
            desc: "Tonal continuity between marigold flowers, Lord Ganesha's angavastram, and AuthentiIndia's saffron brand identity."
          }
        ]
      }
    ],
    gallery: [
      {
        title: "The Iceberg of Process Safety",
        client: "Coenz Group",
        category: "Corporate Infographics",
        caption: "Iconic visual metaphor contrasting surface operations against the 4 critical submerged foundations: PHA, MOC, Mechanical Integrity, and Operating Procedures.",
        image: "/images/projects/graphic-design/coenz-iceberg-operations.jpg"
      },
      {
        title: "Sri Priya Strong Hing 50g Packaging",
        client: "Sri Priya Masala Udyog",
        category: "Packaging Design",
        caption: "Press-ready commercial FMCG die-cut label featuring primary branding, FSSAI compliance, nutritional facts grid, and batch coding box.",
        image: "/images/projects/graphic-design/packaging-sri-priya-hing.png"
      },
      {
        title: "AuthentiIndia Corporate Identity & Mascot",
        client: "AuthentiIndia",
        category: "Logos & Branding",
        caption: "Negative-space brand mark incorporating the vigilant Black Cat silhouette inside the letter 'i' with national saffron accent.",
        image: "/images/projects/graphic-design/logo-authenti-india.png"
      },
      {
        title: "These Five Never Take A Day Off",
        client: "Coenz Group",
        category: "Corporate Infographics",
        caption: "Cinematic neon-illuminated engineering poster celebrating 24/7 protection across Ex classification, static control, SIS, and arc flash safety.",
        image: "/images/projects/graphic-design/coenz-five-protectors.jpg"
      },
      {
        title: "Fowlix Brand Identity & Iconography",
        client: "Fowlix",
        category: "Logos & Branding",
        caption: "Bespoke wordmark featuring an owl icon integrated into letter 'o' with golden botanical leaf accents.",
        image: "/images/projects/graphic-design/logo-fowlix.jpg"
      },
      {
        title: "What You See Isn't The Whole Story",
        client: "Coenz Group",
        category: "Corporate Infographics",
        caption: "Torn-paper split-screen visual warning: daylight chemical plant reflected in explosive fire: 'Process safety fails quietly. Consequences don't.'",
        image: "/images/projects/graphic-design/coenz-hidden-story.jpg"
      },
      {
        title: "What Is Chemical Process Safety?",
        client: "Coenz Group",
        category: "Corporate Infographics",
        caption: "Educational flask diagram illustrating 5 root causes of industrial failure and 3 asset protection tiers.",
        image: "/images/projects/graphic-design/coenz-chemical-process.jpg"
      },
      {
        title: "Key Sectors for Process Safety",
        client: "Coenz Group",
        category: "Corporate Infographics",
        caption: "Structured 6-sector implementation guide spanning Chemical, Oil & Gas, Pharma, Manufacturing, Energy, and Agriculture.",
        image: "/images/projects/graphic-design/coenz-key-sectors.jpg"
      },
      {
        title: "Empowering Safety: Every Heartbeat Matters",
        client: "Coenz Group",
        category: "Corporate Infographics",
        caption: "Workplace medical preparedness diagram focused on rapid AED defibrillator deployment and cardiac survival culture.",
        image: "/images/projects/graphic-design/coenz-aed-safety.jpg"
      },
      {
        title: "AuthentiIndia: Ganesh Chaturthi Mascot Blessing",
        client: "AuthentiIndia",
        category: "Brand Campaigns",
        caption: "Corporate festival campaign showing the 3D Black Cat mascot seeking blessings from Lord Ganesha in a marble mandir courtyard.",
        image: "/images/projects/graphic-design/auth-ganesh-chaturthi.jpg"
      },
      {
        title: "Moonbyte: Navratri Day 1 (Maa Shailputri)",
        client: "Moonbyte",
        category: "Brand Campaigns",
        caption: "Sunrise mountain art direction with golden trishul celebrating Maa Shailputri: 'Rooted in faith. Rising with strength.'",
        image: "/images/projects/graphic-design/moonbyte-navratri-shailputri.jpg"
      },
      {
        title: "Ganesh Chaturthi: Lokmanya Tilak 1893 Story",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Historical narrative art piece commemorating Lokmanya Tilak uniting public communities in 1893 through Ganesh Utsav.",
        image: "/images/projects/graphic-design/coenz-ganesh-chaturthi-tilak.jpg"
      },
      {
        title: "Navratri: Divine Shakti & Goddess Amba",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "High-detail royal portrait of Goddess Amba celebrating the victory over Mahishasura and nine nights of divine energy.",
        image: "/images/projects/graphic-design/coenz-navratri-shakti.jpg"
      },
      {
        title: "Shubh Navratri: Minimalist Kumkum Art",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Minimalist red kumkum watercolor wash with clean white line-art of Maa Durga: 'Strength, courage, and endless positivity.'",
        image: "/images/projects/graphic-design/coenz-shubh-navratri.jpg"
      },
      {
        title: "Buddha Purnima: Pen-and-Ink Lotus Stippling",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Hand-drawn stippled Buddha illustration sitting on a lotus with mandala halo: 'May your heart bloom with peace.'",
        image: "/images/projects/graphic-design/coenz-buddha-purnima.jpg"
      },
      {
        title: "Ram Navami: Sacred Bow & Sunburst Line Art",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Ornate gold-and-brown vector bow and arrow with sunburst rays and Devanagari 'जय श्री राम' calligraphy.",
        image: "/images/projects/graphic-design/coenz-ram-navami-bow.jpg"
      },
      {
        title: "Ram Navami: Baby Ram in Ornate Golden Jhula",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Traditional line art depiction of baby Lord Ram in an ornate carved swing with sacred floral mandala backdrop.",
        image: "/images/projects/graphic-design/coenz-ram-navami-baby.jpg"
      },
      {
        title: "Raksha Bandhan: Sibling Protection Narrative",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Warm sibling rakhi ceremony photography with torn paper aesthetic and narrative celebrating lifelong protection.",
        image: "/images/projects/graphic-design/coenz-rakshabandhan-ceremony.jpg"
      },
      {
        title: "Raksha Bandhan: Brass Pooja Thali & Diya",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Traditional brass pooja thali composition with lit diya, sweets, and handcrafted rakhi on a subtle mandala backdrop.",
        image: "/images/projects/graphic-design/coenz-rakshabandhan-thali.jpg"
      },
      {
        title: "Raksha Bandhan: Geometric Circular Mandala",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Geometric multi-layered circular rakhi mandala illustration celebrating sacred bonds of care and trust.",
        image: "/images/projects/graphic-design/coenz-rakshabandhan-mandala.jpg"
      },
      {
        title: "Ganesh Chaturthi: Devanagari Calligraphy & Lanterns",
        client: "Coenz Group",
        category: "Brand Campaigns",
        caption: "Devanagari calligraphy with watercolor splash and hanging brass lanterns: 'Devotion, love, and prosperity.'",
        image: "/images/projects/graphic-design/coenz-ganesh-chaturthi-minimal.jpg"
      }
    ],
    impact: [
      { metric: "21", label: "Commercial Deliverables" },
      { metric: "4", label: "Design Disciplines" },
      { metric: "FSSAI", label: "Regulatory Packaging" },
      { metric: "100%", label: "Vector & Print Production" }
    ],
    figmaLink: "https://www.figma.com/"
  },
  {
    slug: "authenticate-india",
    title: "Authenticate India | Business Verification & Identity Platform",
    category: "WEB & MOBILE · B2B SAAS",
    tagline: "The Trust Layer of India — Enterprise identity & business compliance infrastructure across Web Dashboard & Mobile Scanner.",
    description: "Designed multi-platform identity and business verification ecosystems covering Aadhaar, PAN, Passport, Ration Card, APAAR, and MCA company filings with enterprise web consoles, developer API sandboxes, and agent mobile apps.",
    tech: ["Figma", "Web & Mobile UX", "B2B SaaS", "Govt API Workflows", "Design Systems"],
    image: "/images/projects/authenticate-india/auth-hero.png",
    link: "#/project/authenticate-india",
    websiteUrl: "https://authenticateindia.com/",
    role: "Lead UI/UX Product Designer (Web & Mobile)",
    client: "Authenticate India · Moonbyte",
    duration: "3 Months (2026)",
    platform: "Web Portal & Android/iOS Mobile App",
    tools: ["Figma", "Component Variants", "Design Systems", "Govt API Workflows", "Micro-interactions"],
    overview: "Authenticate India is a high-security B2B verification portal and field agent platform allowing corporations, banks, and authorized agents to execute real-time compliance checks across Aadhaar, Passport, Ration Card, APAAR Card, PAN, and GSTIN via API and mobile apps. The ecosystem bridges high-volume corporate web automation with on-field mobile agent verification.",
    problem: "Corporate compliance officers and regional verification agents face disjointed state databases, unclear error codes, cumbersome payment reconciliation, and confusing agent commission structures. Verification agents in regional hubs struggled with slow manual onboarding and unclear daily payout math.",
    solution: "Crafted a cohesive dual-platform design system: a dense, powerful enterprise web console with live API sandbox documentation, paired with a friendly, high-speed mobile application featuring 1-tap PIN verifications, a 3D mascot-assisted payment workflow, and a transparent 7% commission tier tracker.",
    designProcess: [
      {
        phase: "01. Dual-Persona Journey Mapping",
        detail: "Distinguished workflows between enterprise desk officers (bulk batch uploads, API logs) and on-field agents (instant mobile scans, customer payment requests)."
      },
      {
        phase: "02. Verification Information Architecture",
        detail: "Standardized 10+ government document models (Aadhaar, Passport, Ration, APAAR) into consistent cards with explicit credit costs and status tags."
      },
      {
        phase: "03. Mascot & Micro-Interactions",
        detail: "Integrated the branded 3D Black Cat mascot to reduce user anxiety in regulatory consent collection, invoice generation, and viral referral loops."
      },
      {
        phase: "04. Cross-Platform Design System",
        detail: "Built modular Figma token libraries ensuring visual cohesion between dark enterprise web tables and high-contrast mobile field interfaces."
      }
    ],
    features: [
      {
        title: "Multi-Modal Verification Catalogue",
        description: "Instant access to Aadhaar, Passport, Ration, and APAAR verification with real-time credit deduction, pin-to-top shortcuts, and voice query."
      },
      {
        title: "Transparent 7% Commission Slabs",
        description: "Real-time earnings dashboard with donut breakdown, fixed benefits calculator, and slab progress indicators motivating field agents."
      },
      {
        title: "Mascot-Guided Payment & Consent",
        description: "Frictionless 4-step payment request flow featuring the 3D Black Cat mascot, one-click GST invoice downloads, and QR sharing."
      },
      {
        title: "Enterprise Web Console & API Sandbox",
        description: "Full-width desktop developer interface with live API documentation, syntax highlighting, and batch CSV processing."
      }
    ],
    palette: [
      { name: "Saffron Trust", hex: "#FF6B00" },
      { name: "Deep Navy", hex: "#0B132B" },
      { name: "Verified Green", hex: "#16A34A" },
      { name: "Enterprise Cyan", hex: "#38BDF8" }
    ],
    screensDetail: [
      {
        title: "Brand Splash & National Trust Layer",
        category: "01 · BRAND IDENTITY & LAUNCH",
        icon: "🏛️",
        tab: "🏛️ Brand & Trust",
        image: "/images/projects/authenticate-india/auth-splash.png",
        goal: "Ground the product in national authority and sovereign digital trust from the very first impression.",
        keyDecisions: [
          {
            num: "01",
            title: "Architectural Red Fort Illustration",
            desc: "Custom architectural line art of Delhi's Red Fort anchors the brand as an essential pillar of Indian digital infrastructure."
          },
          {
            num: "02",
            title: "National Flag Compliance Anchor",
            desc: "The waving Indian Tricolor signals uncompromised adherence to sovereign data regulations and government compliance standards."
          },
          {
            num: "03",
            title: "'The Trust Layer of India' Positioning",
            desc: "Bold corporate tagline establishes unequivocal authority for enterprise banks, fintechs, and government-grade verification."
          },
          {
            num: "04",
            title: "Calming Sky Atmosphere Gradient",
            desc: "Soft daylight gradient with birds in flight evokes openness, reliability, and security rather than intimidating security locks."
          }
        ]
      },
      {
        title: "Digital Verification Services Catalogue",
        category: "02 · CORE VERIFICATION SUITE",
        icon: "🔍",
        tab: "🔍 Services Catalogue",
        image: "/images/projects/authenticate-india/auth-services.png",
        goal: "Deliver instant, frictionless access to 10+ government verification APIs with transparent credit pricing.",
        keyDecisions: [
          {
            num: "01",
            title: "Explicit Credit Price Badges",
            desc: "Every service clearly highlights 'Credits: 7.00' upfront, completely eliminating billing ambiguity and unexpected charges."
          },
          {
            num: "02",
            title: "Dual Action Quick Triggers",
            desc: "Each card features a Pin icon (📌) to prioritize frequent checks and a 1-tap Add button (➕) for instant batch queueing."
          },
          {
            num: "03",
            title: "Contextual Fraud Prevention Banner",
            desc: "Headline carousel featuring real news ('Women held for hotel stay on forged documents') emphasizes real-world compliance necessity."
          },
          {
            num: "04",
            title: "Multi-Modal Voice & Text Search",
            desc: "Prominent search bar with integrated microphone allows field agents to speak document names without manual typing."
          }
        ]
      },
      {
        title: "Agent Earnings & Commission Slabs",
        category: "03 · FINANCIAL ANALYTICS & SLABS",
        icon: "📊",
        tab: "📊 Earnings & Slabs",
        image: "/images/projects/authenticate-india/auth-overview.png",
        goal: "Demystify complex multi-tiered payout structures and motivate field agents with transparent progression.",
        keyDecisions: [
          {
            num: "01",
            title: "Wallet Header with Payout Breakdown",
            desc: "Prominently displays ₹12,540 Total Earnings with instant visibility into This Month (₹8,240) and Settled funds (₹1,200)."
          },
          {
            num: "02",
            title: "Multi-Stream Donut Analytics",
            desc: "Visual donut chart clearly segments Credit Recharge (₹4,200), Usage (₹5,600), and Additional Rewards (₹3,200)."
          },
          {
            num: "03",
            title: "Mathematical Commission Formula",
            desc: "Visual equation card ('7% Fixed Benefits + 0% Additional Rewards = 7%') removes calculation ambiguity for agents."
          },
          {
            num: "04",
            title: "Gamified Slab Progress Bar",
            desc: "Micro-incentive notification ('₹70K more to reach next slab ₹3.1L-₹5L') motivates agents to onboard more customers."
          }
        ]
      },
      {
        title: "Payment Request & Mascot Consent Flow",
        category: "04 · CONVERSION & ACTIVATION",
        icon: "💳",
        tab: "💳 Payment & Consent",
        image: "/images/projects/authenticate-india/auth-payment.png",
        goal: "Transform transactional payment requests into a reassuring, transparent 4-step guided journey.",
        keyDecisions: [
          {
            num: "01",
            title: "Friendly 3D Mascot Illustration",
            desc: "Winking 3D Black Cat with spectacles holding a verified clipboard replaces sterile checkout forms with approachable personality."
          },
          {
            num: "02",
            title: "Instant GST Activation Invoice",
            desc: "Downloadable invoice card provides immediate official documentation for corporate clients and commercial tax auditing."
          },
          {
            num: "03",
            title: "4-Step Progressive Timeline",
            desc: "Step-by-step roadmap (Cart → Consent → Request Payment → Verify Document) manages client expectations seamlessly."
          },
          {
            num: "04",
            title: "High-Contrast Sticky CTA",
            desc: "Fixed bottom 'Explore Services' action provides quick return to verification flows without navigation friction."
          }
        ]
      },
      {
        title: "Refer & Earn Viral Growth Engine",
        category: "05 · NETWORK EXPANSION & VIRALITY",
        icon: "🚀",
        tab: "🚀 Refer & Earn",
        image: "/images/projects/authenticate-india/auth-referral.png",
        goal: "Drive exponential organic agent acquisition through transparent two-sided credit rewards.",
        keyDecisions: [
          {
            num: "01",
            title: "Two-Sided Incentive Hero Banner",
            desc: "Clear reciprocal reward cards (You Earn 50 Credits, They Earn 20 Credits) visually anchored by megaphone mascot art."
          },
          {
            num: "02",
            title: "1-Tap Referral Link Sharing",
            desc: "Custom URL input with instant Share and Copy buttons plus a direct '+ Add Customer' shortcut for immediate on-spot invites."
          },
          {
            num: "03",
            title: "Live Referral Pipeline Audit",
            desc: "Granular status badges ('Pending', '+50 Credits', 'Video KYC pending') keep agents fully informed of referral progress."
          },
          {
            num: "04",
            title: "3-Card 'How It Works' Visual Guide",
            desc: "Simplified 3-stage visual cards (Refer a customer → Onboard → Reward) lower mental barrier for new participants."
          }
        ]
      }
    ],
    webDeliverables: [
      {
        title: "Enterprise Web Console & API Sandbox",
        subtitle: "High-Density Desktop Dashboard & Interactive Developer Hub",
        desc: "Designed for corporate compliance officers and enterprise engineers to test API endpoints, manage security credentials, and monitor bulk throughput in real time.",
        image: "/images/projects/authenticate-india/WebApp-APIDoc-Preview-ImageRight.png",
        docsImage: "/images/projects/authenticate-india/WebApp-APIDoc-Preview-Image.png",
        link: "https://authenticateindia.com/"
      }
    ],
    gallery: [
      {
        title: "Enterprise Web Console & Live API Logs",
        caption: "Corporate desktop dashboard for bulk GST, PAN, and Aadhaar verification.",
        image: "/images/projects/authenticate-india/WebApp-APIDoc-Preview-ImageRight.png"
      },
      {
        title: "Interactive Developer API Documentation",
        caption: "Live endpoint sandbox with syntax highlighting, encryption guidelines, and test keys.",
        image: "/images/projects/authenticate-india/WebApp-APIDoc-Preview-Image.png"
      },
      {
        title: "National Trust Launch & Sovereign Compliance",
        caption: "Red Fort architectural line art establishing sovereign verification authority.",
        image: "/images/projects/authenticate-india/auth-splash.png"
      },
      {
        title: "Identity Verification Services Catalogue",
        caption: "Aadhaar, Passport, Ration, and APAAR cards with 1-tap PIN & add actions.",
        image: "/images/projects/authenticate-india/auth-services.png"
      },
      {
        title: "Agent Earnings & Commission Slabs",
        caption: "₹12,540 Earnings wallet, donut analytics, and 7% commission progress bar.",
        image: "/images/projects/authenticate-india/auth-overview.png"
      }
    ],
    impact: [
      { metric: "10+", label: "Govt APIs Integrated" },
      { metric: "< 500ms", label: "Average API Response" },
      { metric: "7%", label: "Direct Agent Benefit" },
      { metric: "100%", label: "Regulatory Compliance" }
    ],
    figmaLink: "https://www.figma.com/"
  },
];

export const experiences = [
  {
    role: "Junior UI/UX Designer",
    company: "Moonbyte",
    location: "Vadodara, Gujarat",
    duration: "Feb 2026 – Present",
    type: "Full-Time",
    description:
      "Design end-to-end mobile and web experiences from user flows and wireframes to high-fidelity prototypes. Build reusable components, variants, and design systems in Figma to maintain consistency across fintech, verification, and service-based products.",
    colors: "from-pink-500 via-purple-500 to-blue-500"
  },
  {
    role: "UI/UX Design Intern",
    company: "Moonbyte",
    location: "Vadodara, Gujarat",
    duration: "Dec 2025 – Feb 2026",
    type: "Internship",
    description:
      "Designed mobile screens, user flows, reusable components, and interactive prototypes in Figma. Applied Auto Layout, responsive layouts, typography, spacing, components, and visual hierarchy to real-world projects.",
    colors: "from-green-400 via-teal-400 to-indigo-500"
  }
];

const words = [
  { text: 'User Flows', imgPath: '/images/ideas.svg' },
  { text: 'Wireframes', imgPath: '/images/concepts.svg' },
  { text: 'Prototypes', imgPath: '/images/designs.svg' },
  { text: 'Design Systems', imgPath: '/images/code.svg' },
  { text: 'User Flows', imgPath: '/images/ideas.svg' },
  { text: 'Wireframes', imgPath: '/images/concepts.svg' },
  { text: 'Prototypes', imgPath: '/images/designs.svg' },
  { text: 'Design Systems', imgPath: '/images/code.svg' },
];

export {
  words,
};