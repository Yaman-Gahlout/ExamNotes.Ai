import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark", // or "default"
});

export default function MermaidDiagram({ chart }) {
  chart = chart.replace(/\(/g, " - ").replace(/\)/g, "").replace(/"/g, "'");
  const ref = useRef(null);

  useEffect(() => {
    const renderChart = async () => {
      if (!chart || !ref.current) return;

      try {
        const id = "mermaid-" + Date.now();

        const { svg } = await mermaid.render(id, chart);

        ref.current.innerHTML = svg;
      } catch (error) {
        console.error("Mermaid render error:", error);
        ref.current.innerHTML =
          "<p style='color:red'>Failed to render diagram</p>";
      }
    };

    renderChart();
  }, [chart]);

  return <div className="overflow-x-auto rounded-xl bg-white p-4" ref={ref} />;
}
