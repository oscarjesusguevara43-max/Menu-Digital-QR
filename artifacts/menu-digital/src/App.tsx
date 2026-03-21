import { useState } from "react";

const menuData = {
  entradas: [
    { id: 1, nombre: "Bruschetta", desc: "Pan gratinado con Salsa Napoli + Pesto + Queso Mozzarella", precio: 3 },
    { id: 2, nombre: "Caldo de Res con Pasta", desc: "Pasta en Beodo", precio: 3 },
    { id: 3, nombre: "Carpaccio de res", desc: "Finas Lonjas de Carne + Aderezo + Aceite de Oliva + Queso", precio: 8 },
    { id: 4, nombre: "Crema de Auyama", desc: "Con extra de queso +5", precio: 4, nota: "extra queso +5" },
    { id: 5, nombre: "Ensalada Capresssa", desc: "Tomates + Mozzarella + Pesto de Albahaca", precio: 7 },
    { id: 6, nombre: "Ensalada César Clásica", desc: "Lechuga + Aderezo + Croutons + Tocineta Crocante", precio: 8 },
    { id: 7, nombre: "Focaccia", desc: "Masa de Pizza + Aceite de Oliva + Queso Parmesano / Pecorino", precio: 4 },
    { id: 8, nombre: "Minestrone Grande", desc: "Frijol Bayo + Tocineta + Chorizo Español + Vegetales", precio: 11 },
    { id: 9, nombre: "Minestrone Regular", desc: "Frijol Bayo + Tocineta + Chorizo Español + Vegetales", precio: 6 },
    { id: 10, nombre: "Pan con Ajo", desc: "", precio: 2 },
  ],
  proteinas: [
    { id: 11, nombre: "Asado Negro", desc: "Nuestro Tradicional y Delicioso Asado Negro", precio: 8 },
    { id: 12, nombre: "Camarones", desc: "Preparados con ajo + mantequilla + un toque de celery", precio: 10 },
    { id: 13, nombre: "Lomito", desc: "Tiras de Lomito sazonadas con ajo + sal + pimienta", precio: 5 },
    { id: 14, nombre: "Pollo", desc: "Pechuga de pollo fileteada sazonada con ajo + sal + pimienta", precio: 4 },
    { id: 15, nombre: "Albóndigas de carne", desc: "Sazonadas con ajo + perejil + sal + pimienta", precio: 5 },
    { id: 16, nombre: "Salchicha italiana", desc: "Carne de cerdo y res + semillas de hinojo + ajo y perejil", precio: 6 },
  ],
  pastasSalsasRojas: [
    { id: 17, nombre: "Amatriciana", desc: "Ajo + Tocineta + Cebolla + Tomates + Albahaca", precio: 12 },
    { id: 18, nombre: "Bolona", desc: "Ajo + Tocineta + Cebolla + Carne + Tomates + Albahaca", precio: 10 },
    { id: 19, nombre: "Filetto", desc: "Aceite de Oliva + Ajo + Albahaca + Tomate al Fuetto", precio: 9 },
    { id: 20, nombre: "Putanesca", desc: "Ajo + Cebolla + Tomates + Albahacas + Aceitunas negras", precio: 11 },
    { id: 21, nombre: "Dúo de Salsas", desc: "Amatriciana + Putanesca", precio: 12 },
  ],
  pastasSalsasBlancas: [
    { id: 22, nombre: "Alfredo", desc: "Crema de leche + jamón en cubos", precio: 11 },
    { id: 23, nombre: "Carbonara", desc: "Mantequilla + Queso Pecorino + Crema de leche + Ajo + Tocineta", precio: 12 },
    { id: 24, nombre: "Primavera", desc: "Crema de leche + Celery + Maíz + Guisantes + Jamón", precio: 11 },
    { id: 25, nombre: "Pasta al Pesto de Albahaca", desc: "Preguntar Disponibilidad", precio: 13, disponibilidad: true },
  ],
  otras: [
    { id: 26, nombre: "Pasta con Asado Negro Tradicional", desc: "", precio: null },
    { id: 27, nombre: "Pasta con Camarones al Ajillo", desc: "Camarones + Mantequilla + Ajo + Perejil", precio: 18 },
  ],
  pastas: [
    { id: 28, nombre: "Fetuccini (Larga)", desc: "Costo incluido en la salsa de tu preferencia.", precio: 0 },
    { id: 29, nombre: "Rigatoni (Corta)", desc: "Costo incluido en la salsa de tu preferencia.", precio: 0 },
  ],
  pastasRellenas: [
    { id: 30, nombre: "Cappelletti", desc: "Ricotta + Prosciutto — Costo adicional por plato", precio: 2, costoAdicional: true },
    { id: 31, nombre: "Fagottini", desc: "Ricotta + Prosciutto + Nuez Moscada — Costo adicional por plato", precio: 3, costoAdicional: true },
    { id: 32, nombre: "Ravioli (Carne)", desc: "Costo adicional por plato", precio: 2, costoAdicional: true },
  ],
  arrozTipo: [
    { id: 33, nombre: "Risotto Base", desc: "Ajo + Cebolla + Mantequilla + Crema de leche + Queso + Vino", precio: 8 },
    { id: 34, nombre: "Risotto Champiñones", desc: "Risotto Base + Champiñones", precio: 13 },
  ],
  pasticho: [
    { id: 35, nombre: "Pasticho", desc: "Cerca de 600 gramos de delicados sabores. Pasta fresca al huevo rellena con nuestra exclusiva salsa bolognesa, suave salsa bechamel, jamón y queso. Finalmente gratinado con una capa de queso pecorino", precio: 12 },
  ],
  menuEjecutivo: [
    { id: 36, nombre: "Menú Ejecutivo 1", desc: "Caldo o crema del día + Panillo Tamaño Regular + Refresco y pan de la casa", precio: 9 },
    { id: 37, nombre: "Menú Ejecutivo 2", desc: "Caldo o crema del día + Pasta larga tipo Fetuccini + Salsa Bolonesa: Tamaño Regular + Refresco y pan de la casa", precio: 9 },
    { id: 38, nombre: "Menú Ejecutivo 3", desc: "Caldo o crema del día + Pasta larga tipo Fetuccini + Salsa Carbonara: Tamaño Regular + Refresco y pan de la casa", precio: 11 },
  ],
  platosRegulares: [
    { id: 39, nombre: "Pasta larga tipo Fetuccini + Salsa Bolonesa", desc: "", precio: 6 },
    { id: 40, nombre: "Pasta larga tipo Fetuccini + Salsa Carbonara", desc: "", precio: 8 },
    { id: 41, nombre: "Pasta larga tipo Fetuccini + Salsa Carbonara (Regular)", desc: "", precio: 3 },
    { id: 42, nombre: "Arroz con Asado Negro", desc: "", precio: null },
  ],
  bebidas: [
    { id: 43, nombre: "Agua Mineral 600 Ml", precio: 2 },
    { id: 44, nombre: "Agua Gasificada", precio: 2 },
    { id: 45, nombre: "Refresco retornable", precio: 1 },
    { id: 46, nombre: "Refresco de Lata y Soda", precio: 2 },
    { id: 47, nombre: "Refresco de 2 Litros", precio: 3 },
    { id: 48, nombre: "Refresco de 1.5 Litros", precio: 4 },
    { id: 49, nombre: "Refresco de 2 Litros", precio: 4 },
    { id: 50, nombre: "Jugo Yukery / Lipton / Gatorade 500 Ml", precio: 3 },
    { id: 51, nombre: "Lipton de 1.5 litros", precio: 7 },
    { id: 52, nombre: "Jugos Naturales (Presa / Piña / Parchita / Lechoza)", precio: 3 },
    { id: 53, nombre: "Café pequeño", precio: 1 },
    { id: 54, nombre: "Café grande", precio: 2 },
  ],
  cafe: [
    { id: 55, nombre: "Capuccino", desc: "Café con leche o marrón - grande", precio: 4 },
    { id: 56, nombre: "Moccacino", desc: "Café + leche + Cacao - grande", precio: 4 },
    { id: 57, nombre: "Latte Vanilla", desc: "Café + leche + Esencia de Vainilla - grande", precio: 4 },
    { id: 58, nombre: "Café de la casa", desc: "Café + leche + Amaretto o Ron de Naranja - grande", precio: 4 },
    { id: 59, nombre: "Mousse de Chocolate", precio: 5 },
  ],
  postres: [
    { id: 60, nombre: "Torta Corta", precio: 4 },
    { id: 61, nombre: "Tiramisú", precio: 4 },
  ],
  pizzas: [
    { id: 62, nombre: "Margarita", desc: "Tomate + Queso", precio: 6 },
    { id: 63, nombre: "Española", desc: "Margarita + chorizo español + aceitunas negras + pimentón", precio: 12 },
    { id: 64, nombre: "Italianísima", desc: "Margarita + Pepperoni + Salchicha Italiana", precio: 11 },
    { id: 65, nombre: "Jamón", desc: "Margarita + Jamón", precio: 7 },
    { id: 66, nombre: "Milenium", desc: "Margarita + Ruedas de Tomates Frescos + Albahaca + A. de Oliva", precio: 10 },
    { id: 67, nombre: "Napolitana", desc: "Margarita + Anchoa", precio: 9 },
    { id: 68, nombre: "Pepperoni", desc: "Margarita + Pepperoni", precio: 9 },
    { id: 69, nombre: "Prosciutto", desc: "Margarita + prosciutto + champiñones", precio: 14 },
    { id: 70, nombre: "Salchichón", desc: "Margarita + salchichón + aceitunas negras + pimentón", precio: 12 },
    { id: 71, nombre: "Stefanelli", desc: "Margarita + pepperoni + aceitunas negras + maíz + anchoas + jamón", precio: 15 },
    { id: 72, nombre: "Vegetales", desc: "Margarita + cebolla + pimentón + champiñones", precio: 8 },
  ],
  extras: [
    { id: 73, nombre: "Extra de Aceite de Oliva", precio: 1 },
    { id: 74, nombre: "Extra de Aceitunas Negras", precio: 2 },
    { id: 75, nombre: "Extra de Anchoas", precio: 4 },
    { id: 76, nombre: "Extra de Cebolla", precio: 1 },
    { id: 77, nombre: "Extra de Champiñones", precio: 2 },
    { id: 78, nombre: "Extra de Chorizo español", precio: 5 },
    { id: 79, nombre: "Extra de Jamón", precio: 2 },
    { id: 80, nombre: "Extra de Maíz", precio: 2 },
    { id: 81, nombre: "Extra de Mantequilla", precio: 1 },
    { id: 82, nombre: "Extra de Pepperoni", precio: 3 },
    { id: 83, nombre: "Extra de Pimentón", precio: 1 },
    { id: 84, nombre: "Extra de Prosciutto", precio: 5 },
    { id: 85, nombre: "Extra de Queso Mozzarella", precio: 3 },
    { id: 86, nombre: "Extra de Queso Pecorino", precio: 2 },
    { id: 87, nombre: "Extra de Salchichón", precio: 5 },
    { id: 88, nombre: "Extra de Tocineta", precio: 3 },
    { id: 89, nombre: "Extra de Tocineta Crocante", precio: 4 },
    { id: 90, nombre: "Extra de Tomate Natural", precio: 1 },
  ],
};

type CategoryKey = keyof typeof menuData;

const categories: { key: CategoryKey; label: string; icon: string }[] = [
  { key: "entradas", label: "Entradas", icon: "🥗" },
  { key: "proteinas", label: "Proteínas", icon: "🥩" },
  { key: "menuEjecutivo", label: "Menú Ejecutivo", icon: "🍽️" },
  { key: "platosRegulares", label: "Platos Regulares", icon: "🍝" },
  { key: "pastasSalsasRojas", label: "Pastas Salsas Rojas", icon: "🍅" },
  { key: "pastasSalsasBlancas", label: "Pastas Salsas Blancas", icon: "🧀" },
  { key: "otras", label: "Otras Pastas", icon: "🍜" },
  { key: "pastas", label: "Tipos de Pasta", icon: "🍝" },
  { key: "pastasRellenas", label: "Pastas Rellenas", icon: "🥟" },
  { key: "arrozTipo", label: "Arroz / Risotto", icon: "🌾" },
  { key: "pasticho", label: "Pasticho", icon: "🫕" },
  { key: "pizzas", label: "Pizzas", icon: "🍕" },
  { key: "extras", label: "Extras", icon: "➕" },
  { key: "bebidas", label: "Bebidas", icon: "🥤" },
  { key: "cafe", label: "Café & Postres", icon: "☕" },
  { key: "postres", label: "Postres", icon: "🍰" },
];

type MenuItem = {
  id: number;
  nombre: string;
  desc?: string;
  precio: number | null;
  nota?: string;
  disponibilidad?: boolean;
  costoAdicional?: boolean;
};

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="menu-item">
      <div className="item-info">
        <div className="item-nombre">{item.nombre}</div>
        {item.desc && <div className="item-desc">{item.desc}</div>}
        {item.nota && <span className="item-badge">{item.nota}</span>}
        {item.disponibilidad && <span className="item-disponibilidad">⚠ Consultar disponibilidad</span>}
        {item.costoAdicional && <span className="item-adicional">+ Costo adicional</span>}
      </div>
      <div className="item-precio">
        {item.precio === null
          ? "—"
          : item.precio === 0
          ? "Incluido"
          : item.precio}
      </div>
    </div>
  );
}

function Section({ catKey, label, icon }: { catKey: CategoryKey; label: string; icon: string }) {
  const items = menuData[catKey] as MenuItem[];
  if (!items || items.length === 0) return null;
  return (
    <div className="section" id={catKey}>
      <div className="section-header">
        <span className="section-icon">{icon}</span>
        <h2 className="section-title">{label}</h2>
      </div>
      <div className="section-items">
        {items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<CategoryKey | "all">("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const displayedCategories =
    activeTab === "all"
      ? categories
      : categories.filter((c) => c.key === activeTab);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
          background: #111;
          color: #f0f0f0;
          min-height: 100vh;
        }

        /* ---- HEADER ---- */
        .site-header {
          background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
          border-bottom: 2px solid #c5a059;
          padding: 0 1rem;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 20px rgba(0,0,0,0.6);
        }

        .header-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0;
        }

        .logo-area {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .logo-badges {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 0.2rem;
        }

        .badge-prosciutto {
          font-size: 0.65rem;
          font-weight: 800;
          color: #c5a059;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .badge-stefanelli {
          background: #cc2b2b;
          color: white;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 0.15rem 0.6rem;
          border-radius: 3px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .logo-trattoria {
          font-size: 0.55rem;
          color: #aaa;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .header-notice {
          text-align: right;
          font-size: 0.62rem;
          color: #bbb;
          line-height: 1.5;
        }

        .header-notice strong {
          color: #c5a059;
        }

        /* ---- ITALIAN FLAG STRIP ---- */
        .flag-strip {
          display: flex;
          height: 4px;
          width: 100%;
        }
        .flag-green { background: #009246; flex: 1; }
        .flag-white { background: #fff; flex: 1; }
        .flag-red { background: #ce2b37; flex: 1; }

        /* ---- NAV TABS ---- */
        .nav-container {
          background: #1a1a1a;
          border-bottom: 1px solid #333;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .nav-container::-webkit-scrollbar { display: none; }

        .nav-inner {
          display: flex;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 0.5rem;
        }

        .nav-btn {
          background: none;
          border: none;
          color: #999;
          padding: 0.65rem 0.85rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
          text-transform: uppercase;
        }

        .nav-btn:hover {
          color: #c5a059;
          background: rgba(197,160,89,0.05);
        }

        .nav-btn.active {
          color: #c5a059;
          border-bottom-color: #c5a059;
        }

        /* ---- MAIN CONTENT ---- */
        .main {
          max-width: 900px;
          margin: 0 auto;
          padding: 1.5rem 1rem 3rem;
        }

        /* ---- SECTION ---- */
        .section {
          margin-bottom: 2rem;
          background: #1a1a1a;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #2a2a2a;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.2rem;
          background: linear-gradient(90deg, #1f1a10, #1a1a1a);
          border-bottom: 1px solid #c5a059;
        }

        .section-icon { font-size: 1.1rem; }

        .section-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #c5a059;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .section-items {
          padding: 0.3rem 0;
        }

        /* ---- MENU ITEM ---- */
        .menu-item {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 0.75rem 1.2rem;
          border-bottom: 1px solid #222;
          gap: 1rem;
          transition: background 0.15s;
        }

        .menu-item:last-child { border-bottom: none; }

        .menu-item:hover {
          background: rgba(197,160,89,0.05);
        }

        .item-info { flex: 1; }

        .item-nombre {
          font-size: 0.9rem;
          font-weight: 600;
          color: #f0f0f0;
          margin-bottom: 0.2rem;
        }

        .item-desc {
          font-size: 0.78rem;
          color: #888;
          line-height: 1.4;
          font-weight: 300;
        }

        .item-badge {
          display: inline-block;
          margin-top: 0.25rem;
          font-size: 0.65rem;
          font-weight: 700;
          color: #1a1a1a;
          background: #c5a059;
          padding: 0.1rem 0.5rem;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .item-disponibilidad {
          display: inline-block;
          margin-top: 0.25rem;
          font-size: 0.7rem;
          color: #e8a000;
          font-style: italic;
        }

        .item-adicional {
          display: inline-block;
          margin-top: 0.25rem;
          font-size: 0.7rem;
          color: #888;
          font-style: italic;
        }

        .item-precio {
          font-size: 1rem;
          font-weight: 700;
          color: #c5a059;
          white-space: nowrap;
          min-width: 3.5rem;
          text-align: right;
          flex-shrink: 0;
        }

        /* ---- FOOTER ---- */
        .site-footer {
          text-align: center;
          padding: 2rem 1rem;
          color: #555;
          font-size: 0.75rem;
          border-top: 1px solid #222;
          margin-top: 1rem;
        }

        .site-footer strong { color: #c5a059; }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 480px) {
          .header-notice { display: none; }
          .main { padding: 1rem 0.75rem 3rem; }
          .section-header { padding: 0.7rem 0.9rem; }
          .menu-item { padding: 0.65rem 0.9rem; }
          .item-nombre { font-size: 0.85rem; }
          .item-desc { font-size: 0.74rem; }
        }
      `}</style>

      <header className="site-header">
        <div className="header-inner">
          <div className="logo-area">
            <div className="logo-badges">
              <span className="badge-prosciutto">PROSCIUTTO</span>
              <span className="badge-stefanelli">STEFANELLI</span>
            </div>
            <span className="logo-trattoria">Restaurant &amp; Charcutería · Trattoria</span>
          </div>
          <div className="header-notice">
            <strong>Nuestros Precios Incluyen el IVA</strong><br />
            No Cobramos 10% de Servicio.
          </div>
        </div>
        <div className="flag-strip">
          <div className="flag-green" />
          <div className="flag-white" />
          <div className="flag-red" />
        </div>
      </header>

      <nav className="nav-container">
        <div className="nav-inner">
          <button
            className={`nav-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            Todo el Menú
          </button>
          {categories.map((c) => (
            <button
              key={c.key}
              className={`nav-btn ${activeTab === c.key ? "active" : ""}`}
              onClick={() => setActiveTab(c.key)}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="main">
        {displayedCategories.map((c) => (
          <Section key={c.key} catKey={c.key} label={c.label} icon={c.icon} />
        ))}
      </main>

      <footer className="site-footer">
        <p>
          <strong>Stefanelli Trattoria · El Recreo</strong><br />
          Nuestros precios incluyen el IVA · No cobramos 10% de servicio
        </p>
      </footer>
    </>
  );
}
