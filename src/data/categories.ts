export const categories = [
  {
    slug: "procesadores",
    label: "Procesadores",
    summary: "Arquitectura, rendimiento, IA integrada y guías para entender las familias Intel Core, Core Ultra y Xeon."
  },
  {
    slug: "graficos-intel-arc",
    label: "Gráficos Intel Arc",
    summary: "GPU dedicadas, gaming moderno, creación de contenido, trazado de rayos, XeSS y medios."
  },
  {
    slug: "ia-centros-de-datos",
    label: "IA y centros de datos",
    summary: "Aceleradores, servidores, software y herramientas para llevar la inteligencia artificial a escala."
  },
  {
    slug: "ecosistema-pc",
    label: "Ecosistema PC",
    summary: "Placas, conectividad, memoria, plataformas, dispositivos y el conjunto que hace funcionar una computadora."
  },
  {
    slug: "guias",
    label: "Guías",
    summary: "Explicaciones prácticas para elegir, comparar y cuidar componentes con criterio."
  }
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
