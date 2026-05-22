"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import { Instagram, Linkedin, Sparkles, Twitter, Check } from "lucide-react";

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
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Work", id: "products" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Silent Theory"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "gradient-bars" }}
      title="Design That Speaks Volumes"
      description="Silent Theory is a premier web design agency crafting digital experiences that convert, engage, and inspire. Let's redefine your online presence."
      avatars={[
        { src: "https://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg", alt: "Client 1" },
        { src: "https://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg", alt: "Client 2" },
        { src: "https://img.b2bpic.net/free-photo/male-employee-with-coffee-cup-office_482257-119420.jpg", alt: "Client 3" },
        { src: "https://img.b2bpic.net/free-photo/happy-businessman-having-conversation-with-his-partner-workplace_23-2147899787.jpg", alt: "Client 4" },
        { src: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg", alt: "Client 5" },
      ]}
      avatarText="Trusted by 50+ visionary brands"
      buttons={[
        { text: "Get Started", href: "#contact" },
        { text: "View Work", href: "#products" },
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
      imageSrc="https://img.b2bpic.net/free-photo/scissors-brushes-pencils-pen-holder_114579-32530.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Mobile FinTech UI", price: "View Project", imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-nutritional-counter-app-composition_23-2149880606.jpg" },
        { id: "p2", name: "Corporate Identity Site", price: "View Project", imageSrc: "https://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345415.jpg" },
        { id: "p3", name: "E-Commerce Experience", price: "View Project", imageSrc: "https://img.b2bpic.net/free-photo/mobile-shopping-experience_23-2151952959.jpg" },
      ]}
      title="Selected Works"
      description="Explore our portfolio of recent design and development projects."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      title="Flexible Pricing"
      description="Transparent packages designed for growing brands."
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "basic", badge: "Essential", price: "$1,500", subtitle: "For simple brand identity", features: ["Responsive Layout", "Logo Design", "SEO Setup"], buttons: [{ text: "Get Started", href: "#contact" }] },
        { id: "pro", badge: "Pro Growth", badgeIcon: Check, price: "$3,500", subtitle: "For scaling e-commerce", features: ["Everything in Essential", "CMS Integration", "Speed Optimization"], buttons: [{ text: "Get Started", href: "#contact" }] }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Ready to build?"
      title="Let's Collaborate"
      description="Drop us a line to discuss your vision, and we will get back to you within 24 hours."
      onSubmit={(email) => console.log("User email:", email)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Silent Theory"
      copyrightText="© 2025 | Silent Theory Design Agency"
      socialLinks={[
        { icon: Twitter, href: "#", ariaLabel: "Twitter" },
        { icon: Instagram, href: "https://www.instagram.com/silenttheory", ariaLabel: "Instagram" },
        { icon: Linkedin, href: "#", ariaLabel: "Linkedin" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}