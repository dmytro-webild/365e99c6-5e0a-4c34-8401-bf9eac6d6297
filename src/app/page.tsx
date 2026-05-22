"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import { Instagram, Sparkles, Check, Phone } from "lucide-react";

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
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Silent Theory"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "gradient-bars" }}
      title="Design That Drives Profits"
      description="My websites are crafted to be the absolute best in the industry. I build high-performance digital experiences designed specifically to help your business stand out, reach more customers, and maximize your revenue."
      avatars={[
        { src: "https://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg", alt: "Client 1" },
        { src: "https://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg", alt: "Client 2" },
        { src: "https://img.b2bpic.net/male-employee-with-coffee-cup-office_482257-119420.jpg", alt: "Client 3" },
        { src: "https://img.b2bpic.net/happy-businessman-having-conversation-with-his-partner-workplace_23-2147899787.jpg", alt: "Client 4" },
        { src: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg", alt: "Client 5" },
      ]}
      avatarText="Trusted by 50+ visionary brands"
      buttons={[
        { text: "Get Started", onClick: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) },
        { text: "View Pricing", onClick: () => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }) },
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DnmBc0Mbgq3TXqKNqZJFeJxViU/uploaded-1779464484053-84o71b61.png"
      imageAlt="Silent Theory Logo"
      mediaAnimation="slide-up"
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
        { id: "basic", badge: "Essential", price: "$800", subtitle: "For simple brand identity", features: ["Responsive Layout", "Logo Design", "SEO Setup"], buttons: [{ text: "Get Started", onClick: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }] },
        { id: "pro", badge: "Pro Growth", badgeIcon: Check, price: "$1,000", subtitle: "For scaling e-commerce", features: ["Everything in Essential", "CMS Integration", "Speed Optimization"], buttons: [{ text: "Get Started", onClick: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }] }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
    <ContactSplitForm
        title="Let's Collaborate"
        description="Drop us a line to discuss your vision. We will get back to you within 24 hours."
        inputs={[
          { name: "name", type: "text", placeholder: "Full Name", required: true },
          { name: "email", type: "email", placeholder: "Your Email Address", required: true }
        ]}
        textarea={{ name: "message", placeholder: "Your project details and note...", required: true, rows: 4 }}
        useInvertedBackground={false}
        onSubmit={(data) => { 
            window.location.href = `mailto:hello@silenttheory.com?subject=Contact Request from ${data.name}&body=From: ${data.email}%0A%0A${data.message}`;
        }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Silent Theory"
      copyrightText="© 2025 | Silent Theory Design Agency"
      socialLinks={[
        { icon: Instagram, href: "https://www.instagram.com/silenttheory303", ariaLabel: "Instagram" },
        { icon: Phone, href: "tel:7205913412", ariaLabel: "Call us" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}