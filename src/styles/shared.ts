export const styles = {
  container: "min-h-screen p-8 flex flex-col items-center bg-gradient-to-br from-slate-50 via-white to-slate-50",
  glow: "absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-gradient",
  card: "relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
  gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 animate-gradient",
  title: "text-5xl font-bold tracking-tight",
  subtitle: "text-xl text-slate-600",
  text: "text-slate-700",
  smallText: "text-sm text-slate-500",
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  spin: "animate-spin",
} as const;

// Adiciona as animações ao CSS global
const globalStyles = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }

  .animate-slide-up {
    animation: slide-up 0.5s ease-out forwards;
  }

  .animate-spin {
    animation: spin 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

// Adiciona os estilos ao documento
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = globalStyles;
  document.head.appendChild(style);
} 