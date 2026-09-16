"use client";
import { OptimizedImage } from "@/components";
import Link from "next/link";
import { FC } from "react";

interface Footer1Props {
  addclass: string;
  footerlogo: string;
}

const Footer1: FC<Footer1Props> = ({ addclass, footerlogo }) => {
  return (
    <div
      className={addclass}
      style={{
        backgroundColor: "#f5f5f5",
        position: "relative",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="heading1">
              <a href="index.html" className="logo">
                <OptimizedImage
                  src={footerlogo}
                  alt="img"
                  width={160}
                  height={56}
                />
              </a>
              <p>
                En Iorana SEO, estamos comprometidos a ayudar a tu negocio a
                alcanzar sus objetivos en línea a través de marketing digital
                SEO experto.
              </p>
            </div>
          </div>
          <div className="col-lg col-6">
            <div className="menu-list">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li>
                  <Link href="/about">Sobre Nosotros</Link>
                </li>
                <li>
                  <Link href="/contacto">Contáctanos</Link>
                </li>
                <li>
                  <Link href="/planes">Plan de Precios</Link>
                </li>
                <li>
                  <a href="#">Nuestros Artículos</a>
                </li>
                <li>
                  <a href="#">Casos de Estudio</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-6">
            <div className="menu-list">
              <h3>Servicios</h3>
              <ul>
                <li>
                  <a href="#">SEO & Visibilidad</a>
                </li>
                <li>
                  <a href="#">Visibilidad Web</a>
                </li>
                <li>
                  <a href="#">Campañas Publicitarias</a>
                </li>
                <li>
                  <a href="#">Marca y Contenidos</a>
                </li>
                <li>
                  <a href="#">Automatizaciones</a>
                </li>
                <li>
                  <a href="#">Soluciones Inteligentes</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-6">
            <div className="menu-list">
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link href="/legal/aviso-legal">Términos y Condiciones</Link>
                </li>
                <li>
                  <Link href="/legal/privacidad">Política de Privacidad</Link>
                </li>
                <li>
                  <Link href="/legal/cookies">Política de Cookies</Link>
                </li>
                <li>
                  <Link href="/legal/aviso-legal">Aviso Legal</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto Legal</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space40"></div>
        <div className="footer-border"></div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="coppyright">
              <p>Copyright 2026 Iorana SEO | Todos los Derechos Reservados</p>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="footer-social">
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space20"></div>
    </div>
  );
};

export default Footer1;
