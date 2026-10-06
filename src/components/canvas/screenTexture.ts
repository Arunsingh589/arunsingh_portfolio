import { CanvasTexture, SRGBColorSpace } from "three";

// Code shown on the 3D monitor in the hero. Each line is a list of [text, colour] tokens.
type Token = [string, string];

const C = {
  keyword: "#c792ea",
  name: "#82aaff",
  prop: "#f07178",
  string: "#c3e88d",
  bool: "#f78c6c",
  punct: "#89ddff",
  plain: "#e4e4f0",
  comment: "#676e95",
};

const LINES: Token[][] = [
  [["const ", C.keyword], ["arun", C.name], [" = {", C.punct]],
  [["  role", C.prop], [": ", C.punct], ["'Full Stack & AI Engineer'", C.string], [",", C.punct]],
  [["  company", C.prop], [": ", C.punct], ["'Oodles Technologies'", C.string], [",", C.punct]],
  [["  frontend", C.prop], [": [", C.punct], ["'React'", C.string], [", ", C.punct], ["'Next.js'", C.string], [", ", C.punct], ["'React Native'", C.string], ["],", C.punct]],
  [["  backend", C.prop], [": [", C.punct], ["'Django'", C.string], [", ", C.punct], ["'FastAPI'", C.string], [", ", C.punct], ["'PostgreSQL'", C.string], ["],", C.punct]],
  [["  ai", C.prop], [": [", C.punct], ["'LangChain'", C.string], [", ", C.punct], ["'LangGraph'", C.string], [", ", C.punct], ["'RAG'", C.string], ["],", C.punct]],
  [["  building", C.prop], [": ", C.punct], ["'Orqeva, an AI agent platform'", C.string], [",", C.punct]],
  [["  openToWork", C.prop], [": ", C.punct], ["true", C.bool], [",", C.punct]],
  [["};", C.punct]],
  [],
  [["arun", C.name], [".", C.punct], ["ship", C.name], ["();", C.punct], ["  // let's build something great", C.comment]],
];

export const TOTAL_CHARS = LINES.reduce(
  (sum, line) => sum + line.reduce((s, [text]) => s + text.length, 0) + 1,
  0
);

const W = 1280;
const H = 720;
const FONT = '32px "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace';

export const createScreen = () => {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;

  const draw = (visibleChars: number, cursorOn: boolean) => {
    // Window chrome
    ctx.fillStyle = "#0f0c29";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#1a1640";
    ctx.fillRect(0, 0, W, 56);
    ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => {
      ctx.fillStyle = c;
      ctx.beginPath();
      ctx.arc(32 + i * 30, 28, 9, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = "#0f0c29";
    ctx.fillRect(140, 10, 190, 46);
    ctx.fillStyle = "#915eff";
    ctx.fillRect(140, 10, 190, 3);
    ctx.font = '22px "Poppins", sans-serif';
    ctx.fillStyle = "#e4e4f0";
    ctx.fillText("arun.ts", 196, 40);
    ctx.fillStyle = "#3178c6";
    ctx.fillText("TS", 154, 40);

    // Status bar
    ctx.fillStyle = "#915eff";
    ctx.fillRect(0, H - 44, W, 44);
    ctx.fillStyle = "#ffffff";
    ctx.font = '20px "Poppins", sans-serif';
    ctx.fillText("●  Open to work", 24, H - 15);
    ctx.textAlign = "right";
    ctx.fillText("TypeScript   UTF-8   Ln 11, Col 1", W - 24, H - 15);
    ctx.textAlign = "left";

    // Code
    ctx.font = FONT;
    const top = 104;
    const lineH = 50;
    let remaining = visibleChars;
    let cursor: [number, number] | null = null;

    LINES.forEach((line, i) => {
      const y = top + i * lineH;
      ctx.fillStyle = "#4b4870";
      ctx.textAlign = "right";
      ctx.fillText(String(i + 1), 70, y);
      ctx.textAlign = "left";

      let x = 100;
      for (const [text, colour] of line) {
        if (remaining <= 0) break;
        const shown = text.slice(0, remaining);
        ctx.fillStyle = colour;
        ctx.fillText(shown, x, y);
        x += ctx.measureText(shown).width;
        remaining -= shown.length;
      }
      if (remaining > 0) remaining -= 1; // newline
      else if (!cursor) cursor = [x, y];
    });

    if (cursorOn) {
      const [cx, cy] = cursor ?? [100, top + LINES.length * lineH];
      ctx.fillStyle = "#915eff";
      ctx.fillRect(cx + 2, cy - 28, 16, 36);
    }

    texture.needsUpdate = true;
  };

  return { texture, draw };
};
