import { CanvasTexture, DoubleSide, Group, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import { room } from ".";

let group: Group | null = null;

const noteData = [
  { color: "#ffd866", title: "AUDIT RISK", stat: "SA 320", accent: "#1e9c72", kind: "chart" },
  { color: "#ff9f7f", title: "CONTROLS", stat: "IFC 99%", accent: "#253d80", kind: "bars" },
  { color: "#b8e0ff", title: "IND AS 115", stat: "VERIFIED", accent: "#1e5fa0", kind: "line" },
  { color: "#c9f29b", title: "CA ROADMAP", stat: "AUDIT • TAX", accent: "#156f5a", kind: "ticks" },
];

const makeNote = (data: (typeof noteData)[number]) => {
  const canvas = document.createElement("canvas");
  canvas.width = 520;
  canvas.height = 420;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = data.color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(24, 31, 54, .10)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = data.color;
  ctx.fillRect(14, 14, canvas.width - 28, canvas.height - 28);
  ctx.fillStyle = "rgba(20, 35, 60, .12)";
  ctx.fillRect(0, 0, canvas.width, 26);
  // Push-pin
  ctx.beginPath();
  ctx.fillStyle = "#e2575d";
  ctx.arc(62, 35, 17, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 255, .55)";
  ctx.arc(56, 29, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#17233f";
  ctx.font = "800 35px Urbanist, sans-serif";
  ctx.fillText(data.title, 34, 70);
  ctx.font = "900 52px Urbanist, sans-serif";
  ctx.fillStyle = data.accent;
  ctx.fillText(data.stat, 34, 132);
  ctx.strokeStyle = data.accent;
  ctx.lineWidth = 9;
  if (data.kind === "chart" || data.kind === "line") {
    ctx.strokeStyle = "rgba(23, 35, 63, .16)";
    ctx.lineWidth = 2;
    for (let y = 170; y < 350; y += 42) {
      ctx.beginPath();
      ctx.moveTo(30, y);
      ctx.lineTo(490, y);
      ctx.stroke();
    }
    ctx.strokeStyle = data.accent;
    ctx.lineWidth = 9;
    ctx.beginPath();
    const pts = data.kind === "chart" ? [260, 310, 220, 250, 150, 190, 95, 115] : [260, 225, 245, 195, 205, 170, 140, 120];
    pts.forEach((y, i) => i ? ctx.lineTo(35 + i * 62, y) : ctx.moveTo(35, y));
    ctx.stroke();
    ctx.fillStyle = data.accent;
    for (let i = 0; i < pts.length; i++) ctx.fillRect(31 + i * 62, pts[i]! - 5, 10, 10);
  } else if (data.kind === "bars") {
    [70, 110, 155, 95, 185].forEach((h, i) => ctx.fillRect(40 + i * 78, 340 - h, 42, h));
  } else {
    ctx.font = "900 34px Urbanist, sans-serif";
    ctx.fillText("✓  SA Compliance", 32, 220);
    ctx.fillText("✓  Verification", 32, 280);
    ctx.fillText("✓  Due Diligence", 32, 340);
  }
  const texture = new CanvasTexture(canvas);
  const note = new Mesh(new PlaneGeometry(0.42, 0.34), new MeshBasicMaterial({ map: texture, side: DoubleSide }));
  note.renderOrder = 30;
  return note;
};

const init = () => {
  if (group) return;
  group = new Group();
  const positions: [number, number, number, number][] = [
    [-2.08, 4.82, 1.22, -0.08],
    [-2.07, 4.16, 0.36, 0.06],
    [-2.06, 4.86, -0.08, 0.11],
    [-2.05, 4.18, -0.92, -0.04],
  ];
  noteData.forEach((data, index) => {
    const note = makeNote(data);
    const [x, y, z, rotation] = positions[index]!;
    note.position.set(x, y, z);
    note.rotation.set(0, Math.PI / 2, rotation);
    group!.add(note);
  });
  room.group.add(group);
};

const destroy = () => {
  group?.traverse((object) => {
    if (object instanceof Mesh) {
      object.geometry.dispose();
      const material = object.material as MeshBasicMaterial;
      material.map?.dispose();
      material.dispose();
    }
  });
  group = null;
};

export const tradingNotes = { init, destroy };
