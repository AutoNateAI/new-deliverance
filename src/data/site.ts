export const siteConfig = {
  name: "New Deliverance Praise & Worship Center",
  shortName: "NDPWC",
  title: "New Deliverance Praise & Worship Center | Everybody Is Somebody",
  description:
    "New Deliverance Praise & Worship Center in Sikeston, Missouri. Join us for worship, watch services, learn about our ministries, and stay connected with the church community.",
  url: "https://autonateai.github.io/new-deliverance/",
  ogImage: "/media/og-homepage.png",
  heroImage: "/media/uncle-trevor-preaching.jpg",
  leaderImage: "/media/uncle-trevor-illustrated.jpg",
  tagline: "The Church Where Everybody Is Somebody.",
  addressLine1: "817 West Malone Ave",
  cityStateZip: "Sikeston, MO 63801",
  email: "hello@newdeliverance.com",
  phone: "(573) 000-0000",
  watchHref: "#",
  donateHref: "#",
  nonprofitHref: "#",
  socialLinks: [
    { label: "Facebook", href: "#", note: "Primary community updates and clips" },
    { label: "TikTok", href: "#", note: "Short-form moments and ministry highlights" },
    { label: "YouTube", href: "#", note: "Full services and archived messages" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Ministries", href: "/ministries/" },
    { label: "Watch", href: "/watch/" },
    { label: "Give", href: "/give/" },
    { label: "Contact", href: "/contact/" },
  ],
  serviceTimes: [
    { label: "Sunday Worship", time: "10:30 AM", detail: "Main sanctuary service" },
    { label: "Midweek Manna", time: "7:00 PM", detail: "Midweek word and fellowship" },
  ],
  heroStats: [
    { value: "Sikeston", label: "Rooted in local community" },
    { value: "Live", label: "Ready for worship clips and streams" },
    { value: "Built", label: "Structured for growth and outreach" },
  ],
  pillars: [
    {
      title: "Spirit-led worship",
      description:
        "Create space for people to encounter God through praise, teaching, prayer, and a church family that actually welcomes them in.",
    },
    {
      title: "Visible ministry life",
      description:
        "Show what is happening inside the church, not just what the church says it believes, so visitors can feel the energy before they ever arrive.",
    },
    {
      title: "Community connection",
      description:
        "Make it easy for people to find the church, watch online, give, ask for prayer, and step into active fellowship.",
    },
  ],
  welcome: {
    title: "A church presence that feels warm, alive, and rooted in purpose.",
    body:
      "This site is being shaped around the ministry’s real needs: a strong first impression, clear service information, worship media, leadership visibility, and simple paths for people to connect with the church community.",
    quote:
      "Whether you are searching for answers, a new church home, or simply a place to belong, know that here, everybody is somebody.",
    leader: "Apostle T.D. Robinson",
    role: "Senior Pastor & Founder",
  },
  mission: {
    title: "Our Mission",
    body:
      "To empower the believer, impact the community, and inspire the world through life-changing preaching, praise, and practical ministry.",
  },
  vision: {
    title: "Our Vision",
    body:
      "To cultivate a sanctuary where spiritual gifts are nurtured, people are restored, and every individual is reminded of their God-given value and purpose.",
  },
  storyPoints: [
    "A visible digital home for the ministry and its message.",
    "A place to introduce visitors to the church, the leader, and the ministries.",
    "A platform for worship clips, live viewing links, giving, and future nonprofit outreach.",
  ],
  ministries: [
    {
      title: "Worship & Praise",
      description:
        "Supporting the sound, flow, and spiritual atmosphere of service through music, praise, and live worship leadership.",
    },
    {
      title: "Youth & Family",
      description:
        "Creating room for young people and families to grow in faith together and stay connected across generations.",
    },
    {
      title: "Community Outreach",
      description:
        "Serving people beyond the sanctuary through practical care, local support, and ministry that moves into the community.",
    },
    {
      title: "Prayer & Care",
      description:
        "Making sure people can reach out for prayer, encouragement, and spiritual covering when life gets heavy.",
    },
    {
      title: "Media Ministry",
      description:
        "Capturing services, clips, and digital content so the church’s message can travel farther than the room.",
    },
    {
      title: "Leadership Development",
      description:
        "Helping people grow in responsibility, service, and spiritual maturity as they step deeper into ministry.",
    },
  ],
  watchCards: [
    {
      title: "Watch services live",
      description:
        "Use this section for the livestream destination once the active streaming platform is confirmed.",
      cta: "Connect live stream",
      href: "#",
    },
    {
      title: "Share worship clips",
      description:
        "Feature short clips from Facebook, TikTok, or YouTube Shorts to help visitors feel the energy of the room.",
      cta: "Add worship media",
      href: "#",
    },
    {
      title: "Archive messages",
      description:
        "Create an ongoing home for sermons, replay links, and standout moments from recent services.",
      cta: "Build message archive",
      href: "#",
    },
  ],
  givingReasons: [
    "Support ministry work inside and outside the sanctuary.",
    "Help the church invest in outreach, care, and future programs.",
    "Create a clear path for online generosity once the giving platform is connected.",
  ],
  contactCards: [
    {
      title: "Visit in person",
      body: "Join us in Sikeston for worship, fellowship, and a church environment centered on presence and purpose.",
    },
    {
      title: "Ask for prayer",
      body: "Use this page as the future home for prayer requests, ministry follow-up, and pastoral contact.",
    },
    {
      title: "Stay updated",
      body: "Direct people to social channels and livestream destinations until fuller communication tools are added.",
    },
  ],
  faqs: [
    {
      question: "Where is New Deliverance located?",
      answer: "New Deliverance Praise & Worship Center is located at 817 West Malone Ave, Sikeston, Missouri 63801.",
    },
    {
      question: "What should a first-time visitor expect?",
      answer:
        "A worship-centered service, a welcoming environment, and a church culture built around the belief that everybody is somebody.",
    },
    {
      question: "Can I watch online before visiting in person?",
      answer:
        "Yes. This site is structured to feature live viewing and worship clips as those media links are finalized.",
    },
  ],
} as const;

export const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  slogan: siteConfig.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine1,
    addressLocality: "Sikeston",
    addressRegion: "MO",
    postalCode: "63801",
    addressCountry: "US",
  },
};
