
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio con una web lista y soporte 24/7. Sin complicaciones, solo resultados." cta1="Digitaliza Ahora" />
<How step1Title="Solicita Tu Web" step1Desc="Contáctanos para iniciar tu digitalización." step2Title="Creamos Tu Sitio" step2Desc="Diseño y desarrollo en menos de 24 horas." step3Title="Soporte Continuo" step3Desc="Asistencia 24/7 para incrementar tus ventas online." />
<Aboutus headline="WebGo: Digitaliza y Crece" subheadline="Transformamos ventas tradicionales en online fácil y sin complicaciones." beneficiotitulo1="Gestión Completa" beneficio1="Nosotros manejamos tu sitio web." beneficiotitulo2="Incrementa Ventas" beneficio2="Aumenta clientes sin esfuerzo adicional." />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="Te entregamos una web de ventas lista y te apoyamos 24/7." services={[{"name":"Diseño Express","icon":"rocket","description":"Web en menos de 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Atrae más clientes con SEO efectivo."},{"name":"Gestión de Contenidos","icon":"pencil","description":"Publicamos contenido que convierte."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Entiende y mejora tus ventas online."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia constante para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita el pago de tus clientes."}]} />
<BeforeAndAfter subheadline="Transformamos tu visión digital en realidades impactantes y efectivas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ayuda a crear una tienda online fácil de gestionar, para que puedas vender más allá de las recomendaciones. Nos encargamos de todo el proceso digital, desde diseño hasta mantenimiento, para que te enfoques en lo que haces mejor: tu negocio."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, obtienes un sitio web optimizado para ventas y visibilidad online, sin complicaciones. Nos aseguramos de que tu negocio destaque en internet, aumentando tu alcance y potencial de ganancias."},{"pregunta":"No tengo experiencia en ventas online, ¿cómo WebGo puede simplificar esto para mí?","respuesta":"WebGo se encarga de todo, desde la creación de tu tienda online hasta su optimización para motores de búsqueda. No necesitas experiencia previa; nosotros te damos las herramientas y soporte necesario para que tu negocio crezca en el mundo digital."},{"pregunta":"¿Qué sucede si no tengo tiempo para gestionar un sitio web?","respuesta":"No te preocupes, en WebGo hacemos todo el trabajo pesado por ti. Mantenemos y actualizamos tu sitio web regularmente para que puedas concentrarte en lo que realmente importa: atender a tus clientes."},{"pregunta":"¿Cómo mejora mi visibilidad online con WebGo?","respuesta":"WebGo optimiza tu sitio para SEO, lo que significa que serás más visible en Google y otros motores de búsqueda. Esto atrae más visitantes a tu tienda online, aumentando las posibilidades de ventas y recomendación digital."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio Hoy" 
                      description="Digitaliza tus ventas con WebGo y deja que nos encarguemos de tu presencia online. No más ventas limitadas por recomendación; lleva tu negocio a internet y multiplica tus clientes."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
