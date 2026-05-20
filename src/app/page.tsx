"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Work",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Silent Theory"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Design That Speaks Volumes"
      description="Silent Theory is a premier web design agency crafting digital experiences that convert, engage, and inspire. Let's redefine your online presence."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-employee-with-coffee-cup-office_482257-119420.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-businessman-having-conversation-with-his-partner-workplace_23-2147899787.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Trusted by 50+ visionary brands"
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
        {
          text: "View Work",
          href: "#products",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Responsive Web Design",
        },
        {
          type: "text",
          text: "Brand Strategy",
        },
        {
          type: "text",
          text: "UI/UX Architecture",
        },
        {
          type: "text",
          text: "E-Commerce Solutions",
        },
        {
          type: "text",
          text: "Performance Engineering",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Philosophy"
      title="Bridging Art and Technology"
      description="Silent Theory was founded on the belief that great design doesn't just look good—it performs. We specialize in bespoke digital architecture that balances aesthetic beauty with functional excellence."
      subdescription="We don't just build sites; we build legacies. Every pixel is calculated, every interaction intentional."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/scissors-brushes-pencils-pen-holder_114579-32530.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Strategy",
          subtitle: "Deep analysis to define your unique brand narrative.",
          category: "Consulting",
          value: "Essential",
        },
        {
          id: "f2",
          title: "Creative Design",
          subtitle: "Stunning visuals that command attention and drive action.",
          category: "UI/UX",
          value: "Premium",
        },
        {
          id: "f3",
          title: "Tech Engineering",
          subtitle: "High-performance code that ensures speed and security.",
          category: "Development",
          value: "Robust",
        },
      ]}
      title="What We Deliver"
      description="Comprehensive design solutions tailored to your business goals."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "InnovateTech",
        "GrowthCo",
        "DigitalLab",
        "VisionBrand",
        "StartupHub",
        "CreativePoint",
        "FutureInc",
      ]}
      title="Partnering With Leaders"
      description="We are proud to work with companies defining their respective industries."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Mobile FinTech UI",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-nutritional-counter-app-composition_23-2149880606.jpg",
        },
        {
          id: "p2",
          name: "Corporate Identity Site",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345415.jpg",
        },
        {
          id: "p3",
          name: "E-Commerce Experience",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/mobile-shopping-experience_23-2151952959.jpg",
        },
        {
          id: "p4",
          name: "Analytics Dashboard",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150165975.jpg",
        },
        {
          id: "p5",
          name: "Brand Identity Design",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-vector/tennis-player-tennis-cup-logo-business-branding-template-designs-inspiration-isolated-white-background_384344-1312.jpg",
        },
        {
          id: "p6",
          name: "User Research Portal",
          price: "View Project",
          imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-with-papers-notes-office_23-2149749880.jpg",
        },
      ]}
      title="Selected Works"
      description="Explore our portfolio of recent design and development projects."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "120%",
          description: "Avg Conversion Increase",
        },
        {
          id: "m2",
          value: "50+",
          description: "Projects Delivered",
        },
        {
          id: "m3",
          value: "99%",
          description: "Client Satisfaction",
        },
      ]}
      title="Proven Impact"
      description="Our work drives tangible growth and performance results."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Silent Theory transformed our brand identity completely. Their attention to detail is truly unmatched."
      rating={5}
      author="Sarah Chen, CEO of InnovateTech"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Ready to build?"
      title="Let's Collaborate"
      description="Drop us a line to discuss your vision, and we will get back to you within 24 hours."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Silent Theory"
      copyrightText="© 2025 | Silent Theory Design Agency"
      socialLinks={[
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Linkedin,
          href: "#",
          ariaLabel: "Linkedin",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
