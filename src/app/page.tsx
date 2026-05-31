"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Facebook, Instagram, Sparkles, Star, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Inicio",          id: "#hero"},
        {
          name: "Servicios",          id: "#services"},
        {
          name: "Membresías",          id: "#memberships"},
        {
          name: "Testimonios",          id: "#testimonials"},
        {
          name: "Contacto",          id: "#contact"},
      ]}
      brandName="Premium Laundry Services"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "radial-gradient"}}
      title="Premium Laundry Services"
      description="Tu ropa limpia, fresca y entregada directamente a tu puerta. Calidad y conveniencia garantizadas para tu día a día."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-caucasian-man-holding-shirt-with-sweat-smiling-looking-side-staring-away-thinking_839833-5213.jpg",          imageAlt: "Modern washing machine in action with bubbles"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wardrobe-renovation-winter_23-2149183937.jpg",          imageAlt: "Stack of clean folded clothes in a basket"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up_23-2148306530.jpg",          imageAlt: "Close up of soft, clean fabric detail"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-doing-household-chores-participating-cleaning-home_23-2151468670.jpg",          imageAlt: "Portrait of man doing household chores and participating in the cleaning of the home"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-with-basket-full-clothes_23-2148306602.jpg",          imageAlt: "Smiley man with basket full of clothes"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delivery-man-holding-paper-bags_23-2148767085.jpg",          imageAlt: "Modern delivery van for laundry service"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-looking-shirt-smiles_23-2148316751.jpg",          imageAlt: "Happy customer receiving laundry delivery"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/salesman-hypermarket-wearing-medical-mask-demonstrates-his-clients-new-washing-machine_93675-133542.jpg",          imageAlt: "Hand picking up a laundry bag for service"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-man-riding-bicycle-with-parcel_23-2147862219.jpg",          imageAlt: "Delivery man riding bicycle with parcel"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-two-post-workers-walking-with-thermo-bag-boxes-trolley-professional-couriers-delivering-orders-together_74855-11528.jpg",          imageAlt: "Back view of two post workers walking with thermo bag and boxes on trolley. Professional couriers delivering orders together."},
      ]}
      tagAnimation="none"
      buttons={[
        {
          text: "¡Agenda tu Servicio!",          href: "#contact"},
        {
          text: "Ver Planes de Membresía",          href: "#memberships"},
      ]}
      buttonAnimation="none"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg",          alt: "Attractive blond business woman"},
        {
          src: "http://img.b2bpic.net/free-photo/confident-businesswoman-looking-camera-with-arm-crossed_23-2148187252.jpg",          alt: "Confident businesswoman"},
        {
          src: "http://img.b2bpic.net/free-photo/serious-executive-with-short-hair-crossed-arms_1149-89.jpg",          alt: "Serious executive"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",          alt: "Smiling Beautiful Middle-aged Business Woman"},
        {
          src: "http://img.b2bpic.net/free-photo/retro-looking-non-binary-person-smiling_23-2148757528.jpg",          alt: "Retro looking non binary person smiling"},
      ]}
      avatarText="+10,000 Clientes Satisfechos"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/bulb-rocket-colorful-logo-gradient-vector_677411-814.jpg",          alt: "Bulb rocket logo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/flat-computer-logo-template_23-2149009353.jpg",          alt: "Flat computer logo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/gradient-logo-template-with-abstract-shape_52683-14859.jpg",          alt: "Gradient abstract logo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/cloud-rocket-logo-gradient-design_474888-2737.jpg",          alt: "Cloud and rocket logo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/save-front-side_187299-44781.jpg",          alt: "Save Front Side logo"},
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tagAnimation="none"
      title="Más que una lavandería, una experiencia Premium"
      buttons={[
        {
          text: "Nuestros Servicios",          href: "#services"},
      ]}
      buttonAnimation="none"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Nuestro Proceso Sencillo y Eficiente"
      description="Experimenta la comodidad en cada paso del camino, desde la recolección hasta la entrega impecable de tu ropa, con la calidad que solo Premium Laundry Services puede ofrecer."
      tagAnimation="none"
      buttonAnimation="none"
      accordionItems={[
        {
          id: "1",          title: "Recolección a Domicilio",          content: "Agenda la recolección de tu ropa directamente desde tu casa u oficina en el horario que mejor te convenga. Nuestro equipo pasará por tus prendas con la máxima puntualidad y cuidado."},
        {
          id: "2",          title: "Lavado y Cuidado Experto",          content: "Utilizamos equipos de última generación y productos ecológicos de alta calidad para garantizar una limpieza profunda y el máximo cuidado para cada tipo de tejido. Tu ropa estará en manos expertas."},
        {
          id: "3",          title: "Doblado y Empaquetado Impecable",          content: "Cada prenda es doblada a mano con precisión y empaquetada cuidadosamente, lista para ser guardada o usada. Nos aseguramos de que recibas tu ropa en perfectas condiciones, como nueva."},
        {
          id: "4",          title: "Entrega Rápida y Conveniente",          content: "Disfruta de la comodidad de recibir tu ropa limpia y fresca directamente en tu puerta. Nuestro servicio de entrega está diseñado para ser rápido, eficiente y adaptable a tu estilo de vida."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/person-inside-laundromat-with-washing-machines_23-2151176192.jpg"
      imageAlt="Laundry service process diagram"
      mediaAnimation="opacity"
      mediaPosition="right"
    />
  </div>

  <div id="memberships" data-section="memberships">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          badge: "Básico",          badgeIcon: Sparkles,
          price: "$59/mes",          subtitle: "Ideal para solteros y parejas",          features: [
            "4 cargas de lavandería al mes",            "Recolección y entrega estándar",            "Soporte por email",            "Doblado profesional"],
        },
        {
          id: "familiar",          badge: "Popular",          badgeIcon: Star,
          price: "$99/mes",          subtitle: "Perfecto para familias activas",          features: [
            "8 cargas de lavandería al mes",            "Recolección y entrega prioritaria",            "Soporte telefónico",            "Planchado ligero incluido"],
        },
        {
          id: "ilimitado",          badge: "Lo Máximo",          badgeIcon: Award,
          price: "$179/mes",          subtitle: "Libertad total para tu ropa",          features: [
            "Cargas de lavandería ilimitadas",            "Recolección y entrega express 24/7",            "Soporte VIP 24/7",            "Planchado completo incluido",            "Servicio de tintorería (2 prendas/mes)"],
        },
      ]}
      title="Planes de Membresía Premium"
      description="Simplifica tu vida con nuestras membresías exclusivas. Disfruta de lavandería sin preocupaciones, ahorros significativos y un servicio prioritario diseñado para tu comodidad."
      tagAnimation="none"
      buttons={[
        {
          text: "Suscríbete Ahora",          href: "#contact"
        }
      ]}
      buttonAnimation="none"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sofía G.",          handle: "@sofiag",          testimonial: "¡Increíble servicio! Mi ropa siempre vuelve impecable y a tiempo. Me han ahorrado incontables horas.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-successful-entrepreneur_1098-3855.jpg",          imageAlt: "Sofía G."},
        {
          id: "2",          name: "Marco R.",          handle: "@marcor",          testimonial: "La opción de membresía es fantástica. No tengo que preocuparme por la lavandería nunca más. ¡Totalmente recomendado!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/company-worker-browsing-internet-research-project-using-computer-create-business-report-with-charts-data-analyzing-network-information-web-presentation-handheld-shot_482257-50935.jpg",          imageAlt: "Marco R."},
        {
          id: "3",          name: "Elena P.",          handle: "@elenap",          testimonial: "Siempre profesionales y con un cuidado excepcional. Mis prendas delicadas lucen como nuevas. Gracias Premium Laundry.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15845.jpg",          imageAlt: "Elena P."},
        {
          id: "4",          name: "Carlos M.",          handle: "@carlosm",          testimonial: "La conveniencia de la recolección y entrega es un cambio de juego. Mi agenda apretada ya no es un problema.",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-girl-with-dark-hair-stylish-clothes-sitting-cafe-drinking-coffee-looking-through-photos-from-vacation-her-smartphone_176420-9173.jpg",          imageAlt: "Carlos M."},
        {
          id: "5",          name: "Laura S.",          handle: "@lauras",          testimonial: "Un servicio de primera clase. Desde el doblado perfecto hasta el aroma fresco, cada detalle es cuidado.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-worker-talking-phone_23-2147562047.jpg",          imageAlt: "Laura S."},
        {
          id: "6",          name: "Jorge A.",          handle: "@jorgea",          testimonial: "Al principio dudaba, pero ahora no puedo vivir sin ellos. El plan ilimitado es el mejor valor para mi familia.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-wise-senior-man-posing-studio_23-2149883514.jpg",          alt: "Jorge A."},
      ]}
      showRating={true}
      title="Lo que dicen nuestros clientes"
      description="La satisfacción de nuestros usuarios es nuestra mayor recompensa. Descubre por qué eligen Premium Laundry Services para el cuidado de sus prendas."
      tagAnimation="none"
      buttonAnimation="none"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Atlanta Tech",        "Georgia Logistics",        "Augusta Community",        "EcoClean Solutions",        "Wellness Hub",        "Taste & Co.",        "Home Comforts"]}
      title="Confían en nuestro servicio"
      description="Nos enorgullece servir a la comunidad de Augusta, Georgia, y a una creciente lista de clientes satisfechos que buscan lo mejor en cuidado de ropa."
      tagAnimation="none"
      buttonAnimation="none"
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "¿Cómo funciona el servicio de recolección y entrega?",          content: "Simplemente agenda tu servicio a través de nuestra página web, selecciona la fecha y hora, y nuestro equipo pasará por tu ropa. Una vez limpia, te la entregaremos de vuelta en tu domicilio."},
        {
          id: "2",          title: "¿Qué tipo de prendas puedo enviar?",          content: "Aceptamos la mayoría de las prendas de uso diario. Para artículos especiales o delicados, te recomendamos consultar nuestra guía de cuidados en la sección de servicios o contactarnos directamente."},
        {
          id: "3",          title: "¿Cuáles son los beneficios de las membresías?",          content: "Nuestras membresías ofrecen tarifas preferenciales, recolección y entrega prioritaria, planchado incluido en algunos planes y acceso a soporte exclusivo, todo para tu máxima comodidad y ahorro."},
        {
          id: "4",          title: "¿Cómo puedo agendar una recolección?",          content: "Puedes agendar tu recolección de manera sencilla en la sección 'Agenda tu Servicio' de nuestra web. Solo completa tus datos, elige fecha y hora, y listo."},
        {
          id: "5",          title: "¿Utilizan productos de lavandería ecológicos?",          content: "Sí, en Premium Laundry Services estamos comprometidos con el medio ambiente. Utilizamos productos de limpieza biodegradables y eco-amigables que garantizan un lavado efectivo sin dañar el planeta ni tus prendas."},
        {
          id: "6",          title: "¿Qué sucede si no estoy en casa para la entrega?",          content: "Si no puedes estar presente, podemos coordinar la entrega con un vecino de confianza o dejar tu ropa en un lugar seguro que nos indiques previamente. Siempre buscaremos la mejor solución para ti."},
      ]}
      title="Preguntas Frecuentes"
      description="Encuentra respuestas rápidas a tus dudas sobre nuestros servicios, planes de membresía, proceso de agendamiento y cómo cuidamos tu ropa."
      tagAnimation="none"
      buttonAnimation="none"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      text="Haz tu vida más fácil. Dinos cuándo y dónde, y nosotros nos encargaremos del resto. Llenar nuestro formulario es el primer paso hacia una lavandería sin estrés."
      buttons={[
        {
          text: "Agendar Ahora",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Premium Laundry Services"
      copyrightText="© 2024 Premium Laundry Services. Todos los derechos reservados."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}