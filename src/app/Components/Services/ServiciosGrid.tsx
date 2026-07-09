"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";
import {
  Search,
  MapPin,
  Globe,
  ShoppingCart,
  Target,
  ThumbsUp,
  PenTool,
  Palette,
  Bot,
  Receipt,
  Users,
  FolderOpen,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

interface ServiceCategory {
  category: string;
  color: string;
  bgTint: string;
  items: ServiceItem[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    category: "SEO & Visibilidad",
    color: "#4D32A5",
    bgTint: "#F5F3FC",
    items: [
      {
        title: "Presencia Digital en Google",
        description:
          "Posiciona tu negocio en Google y atrae clientes que te están buscando. Estrategias SEO probadas que generan resultados reales.",
        href: "/servicios/posicionamiento-google",
        icon: <Search size={32} />,
      },
      {
        title: "SEO Local",
        description:
          "Domina las búsquedas locales en tu área geográfica. Atrae clientes cercanos que buscan exactamente lo que ofreces.",
        href: "/servicios/seo-local",
        icon: <MapPin size={32} />,
      },
    ],
  },
  {
    category: "Visibilidad Web",
    color: "#2563EB",
    bgTint: "#EFF5FF",
    items: [
      {
        title: "Páginas Web",
        description:
          "Páginas web modernas, rápidas y optimizadas que convierten visitantes en clientes. Diseño responsivo y SEO friendly.",
        href: "/servicios/pagina-web",
        icon: <Globe size={32} />,
      },
      {
        title: "Tienda Online",
        description:
          "Plataformas de e-commerce seguras y escalables. Vende productos online y multiplica tus ingresos con nuestra solución integral.",
        href: "/servicios/tienda-online",
        icon: <ShoppingCart size={32} />,
      },
    ],
  },
  {
    category: "Campañas Publicitarias",
    color: "#EA6A00",
    bgTint: "#FFF6EC",
    items: [
      {
        title: "Campañas de Google Ads",
        description:
          "Campañas publicitarias optimizadas que generan leads y ventas. ROI garantizado con gestión experta de presupuesto.",
        href: "/servicios/google-ads",
        icon: <Target size={32} />,
      },
      {
        title: "Campañas de Facebook Ads",
        description:
          "Segmenta tu audiencia perfecta en Facebook e Instagram. Campañas efectivas que aumentan tu reach y conversiones.",
        href: "/servicios/facebook-ads",
        icon: <ThumbsUp size={32} />,
      },
    ],
  },
  {
    category: "Marca y Contenidos",
    color: "#D6336C",
    bgTint: "#FDF2F6",
    items: [
      {
        title: "Contenidos",
        description:
          "Contenido de calidad que posiciona en Google y atrae a tu audiencia. Blogs, artículos y landing pages optimizados.",
        href: "/servicios/contenidos",
        icon: <PenTool size={32} />,
      },
      {
        title: "Imagen de Marca",
        description:
          "Crea una identidad visual única y memorable. Diseño de logo, paleta de colores y guía de marca coherente.",
        href: "/servicios/imagen-marca",
        icon: <Palette size={32} />,
      },
    ],
  },
  {
    category: "Automatizaciones",
    color: "#16A34A",
    bgTint: "#F1FBF4",
    items: [
      {
        title: "IA y Automatizaciones",
        description:
          "Automatiza tus procesos con inteligencia artificial. Reduce tiempos, aumenta eficiencia y ahorra costos operacionales.",
        href: "/servicios/ia-automatizaciones",
        icon: <Bot size={32} />,
      },
      {
        title: "Facturación Electrónica",
        description:
          "Sistema de facturación digital seguro y cumplidor. Genera, envía y archiva facturas electrónicas de forma automática.",
        href: "/servicios/facturacion-electronica",
        icon: <Receipt size={32} />,
      },
      {
        title: "CRM",
        description:
          "Gestión integral de relaciones con clientes. Organiza, automatiza y mejora tus procesos de ventas y servicio.",
        href: "/servicios/crm",
        icon: <Users size={32} />,
      },
    ],
  },
  {
    category: "Soluciones Inteligentes",
    color: "#0891B2",
    bgTint: "#EDFAFC",
    items: [
      {
        title: "Gestión Documental",
        description:
          "Gestión eficiente de documentación. Sistema de control de versiones y acceso seguro para tu equipo.",
        href: "/servicios/gestion-documental",
        icon: <FolderOpen size={32} />,
      },
      {
        title: "Notificaciones WhatsApp",
        description:
          "Comunica con tus clientes directamente por WhatsApp. Automatiza mensajes y aumenta la interacción con tu audiencia.",
        href: "/servicios/notificaciones-whatsapp",
        icon: <MessageCircle size={32} />,
      },
      {
        title: "Reservas Online",
        description:
          "Sistema de reservas y citas online para tu negocio. Facilita que tus clientes reserven sin necesidad de llamadas.",
        href: "/servicios/sistema-reservas-online",
        icon: <CalendarCheck size={32} />,
      },
    ],
  },
];

const ServiciosGrid: FC = () => {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {SERVICE_CATEGORIES.map((group, groupIndex) => (
          <div key={groupIndex} style={{ marginBottom: "56px" }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "20px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "24px",
                paddingBottom: "12px",
                borderBottom: `2px solid ${group.color}22`,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: group.color,
                  flexShrink: 0,
                }}
              ></span>
              {group.category}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {group.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    backgroundColor: group.bgTint,
                    border: `1px solid ${group.color}2A`,
                    borderTop: `3px solid ${group.color}`,
                    borderRadius: "16px",
                    padding: "28px 24px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 12px 30px ${group.color}26`;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0, 0, 0, 0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: "20px",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        color: group.color,
                        display: "flex",
                        alignItems: "flex-start",
                        paddingTop: "4px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color: "#1a1a1a",
                          margin: "0 0 8px 0",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#555",
                          lineHeight: "1.6",
                          margin: "0",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#ffffff",
                        backgroundColor: group.color,
                        padding: "10px 18px",
                        borderRadius: "20px",
                      }}
                    >
                      Ver servicio <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosGrid;
