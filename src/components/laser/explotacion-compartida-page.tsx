import { TreatmentDetail } from "@/components/treatments/treatment-detail";

export function ExplotacionCompartidaPage() {
  return (
    <TreatmentDetail
      active="laser"
      parent={{ label: "Depilación láser", href: "/laser" }}
      eyebrow="Depilación láser"
      title="Explotación Compartida"
      intro={[
        "La explotación compartida va dirigida a profesionales del sector. Con esta modalidad, el centro sólo tiene que proporcionarnos una cabina de trabajo y, tras tener las citas previamente cerradas para realizar los distintos tratamientos de estética avanzada a sus clientas, un técnico especializado de Vanitas Vanitatis se desplazaría al mismo para realizarlos, ya que nosotros nos hacemos cargo del profesional que lleva a cabo los tratamientos y de la aparatología estética.",
        "Disponemos de los equipos más modernos, revisados rigurosamente por nuestro equipo especializado, y cada máquina cuenta con su historial de mantenimiento, garantizando sus máximas prestaciones y completa seguridad en el servicio. Nuestros técnicos están formados y cualificados para realizar tratamientos, además de atender, informar y asesorar las demandas de sus clientes de forma profesional.",
      ]}
      image="/laser/explotacioncompartida.jpg"
      imageAlt="Profesional aplicando un tratamiento estético"
      sections={[
        {
          type: "benefits",
          heading: "Beneficios",
          items: [
            "Aumentas la oferta de servicios de tu centro.",
            "No tienes ningún tipo de desembolso económico.",
            "No pagas ningún tipo de cuota mensual.",
            "Sin gasto de mantenimiento de equipos.",
            "Tienes total flexibilidad en los precios de los servicios.",
            "Incrementas el valor añadido de tu centro, contando con nuestro respaldo.",
            "Dispones de información de forma rápida que te hace estar por encima de la competencia.",
            "Aumentas la flexibilidad del centro y disminuyes sus costes fijos.",
          ],
        },
        {
          type: "text",
          heading: "¿Para quién está recomendado?",
          paragraphs: [
            "Para todos aquellos profesionales que quieren disfrutar de los beneficios de un modelo de negocio en el que no tienes que invertir mucho dinero en comprar aparatología médico-estética, en el que no necesitas financiación, no tendrás que preocuparte por el mantenimiento de estos equipos, y en el que saldrás ganando con un porcentaje de comisión con nosotros.",
          ],
        },
      ]}
      ctaText="Quiero más información sobre la Explotación Compartida"
      ctaHref="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20soy%20profesional%20del%20sector%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Explotaci%C3%B3n%20Compartida"
    />
  );
}
