import { resources } from "../../../utils/resources";
import { Mesh, Vector3, Euler, Group, ShaderMaterial, LinearSRGBColorSpace, CanvasTexture, PlaneGeometry, MeshBasicMaterial, DoubleSide, CylinderGeometry } from "three";
import { scene } from "../../core/scene";
import { animations } from "./animations";
import { sceneWeights, sceneWeightsInOut } from "../../../animations/scenes";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { face } from "./face";
import { leftDesktop as avatarLeftDesktop } from "./left-desktop";
import matcapVertexShader from "../../shaders/avatar-matcap/vertex.glsl";
import matcapFragmentShader from "../../shaders/avatar-matcap/fragment.glsl";
import headVertexShader from "../../shaders/avatar-head/vertex.glsl";
import headFragmentShader from "../../shaders/avatar-head/fragment.glsl";
import gsap from "gsap";
import { aboutProgress } from "../../../animations/transitions/about";
//import { avatarHologram } from "./hologram";

import type { Material, Bone, Texture } from "three";

let mesh: Mesh | null = null;
let rightHandBone: Bone | null = null;
let hoodieLogo: Mesh | null = null;
const hoodieSleeves: Mesh[] = [];

const tIdleIntensity = { value: 0 };

const waypointsPosition = new Vector3();
const waypointsRotation = new Euler();
const transform = new Group();
const uniforms = { uProgress: { value: 0 }, uAmbientStrength: { value: 0 } };
const contactPosition = new Vector3(0, -13, 0);
const contactRotation = new Euler(0, -Math.PI, 0);

const init = () => {
  setupMesh();
  animations.init();
  face.init();
  avatarLeftDesktop.init();
  gsap.ticker.add(tick);
};

const getMaterial = (name: string): Material | null => {
  if (name === "face") return face.getMaterial();
  if (name === "head") {
    const texture = resources.items["head-texture"];
    texture.flipY = false;
    texture.colorSpace = LinearSRGBColorSpace;
    texture.generateMipmaps = false;
    return new ShaderMaterial({
      vertexShader: headVertexShader,
      fragmentShader: headFragmentShader,
      transparent: true,
      uniforms: {
        uHeadTexture: { value: texture },
        ...uniforms,
      },
    });
  }

  // Use a neutral highlight source for clothing; tinting below gives the
  // sweatshirt its soft charcoal color and the trousers their denim blue.
  const tex = resources.items["matcap-gray"];
  tex.colorSpace = LinearSRGBColorSpace;
  tex.generateMipmaps = false;

  const tint = name === "gray" ? new Vector3(0.20, 0.23, 0.29) : name === "black" ? new Vector3(0.07, 0.27, 0.72) : new Vector3(1, 1, 1);
  const tintStrength = name === "gray" ? 0.62 : name === "black" ? 0.72 : 0;

  return new ShaderMaterial({
    vertexShader: matcapVertexShader,
    fragmentShader: matcapFragmentShader,
    transparent: true,
      uniforms: {
        uMatcap: { value: tex },
        uTint: { value: tint },
        uTintStrength: { value: tintStrength },
        ...uniforms,
    },
  });
};

const createHoodieLogo = () => {
  if (!mesh || hoodieLogo) return;

  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 420;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // A stitched/embroidered treatment rather than a flat printed logo.
  ctx.fillStyle = "#f4f7ff";
  ctx.font = "900 112px Urbanist, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(89, 168, 255, .45)";
  ctx.shadowBlur = 5;
  ctx.strokeStyle = "#6eaaf0";
  ctx.lineWidth = 4;
  ctx.setLineDash([8, 6]);
  ctx.strokeText("BEING SUGGI", canvas.width / 2, canvas.height / 2);
  ctx.setLineDash([]);
  ctx.fillText("BEING SUGGI", canvas.width / 2, canvas.height / 2);
  ctx.shadowBlur = 0;
  // Tiny cross-stitches and a sewn border sell the woven hoodie detail.
  ctx.strokeStyle = "rgba(89, 168, 255, .75)";
  ctx.lineWidth = 4;
  for (let x = 54; x < canvas.width - 54; x += 22) {
    ctx.beginPath();
    ctx.moveTo(x, 24);
    ctx.lineTo(x + 8, 38);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, canvas.height - 24);
    ctx.lineTo(x + 8, canvas.height - 38);
    ctx.stroke();
  }
  ctx.strokeStyle = "#59a8ff";
  ctx.lineWidth = 12;
  ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68);

  const texture = new CanvasTexture(canvas);
  const material = new MeshBasicMaterial({ map: texture, transparent: true, side: DoubleSide, depthWrite: false });
  hoodieLogo = new Mesh(new PlaneGeometry(0.72, 0.3), material);
  const torso = mesh.getObjectByName("spine2Bone") as Bone | null;
  if (!torso) return;

  // The avatar's front is local -Z. Attach the badge to the torso so it
  // follows every idle animation instead of floating in world space.
  hoodieLogo.position.set(0, -0.12, -0.36);
  hoodieLogo.rotation.y = Math.PI;
  hoodieLogo.renderOrder = 40;
  torso.add(hoodieLogo);
};

const createFullSleeves = () => {
  if (!mesh || hoodieSleeves.length) return;
  const hoodieMaterial = getMaterial("gray") as ShaderMaterial | null;
  if (!hoodieMaterial) return;

  const segments = [
    { bones: ["leftShoulderBone", "rightShoulder"], length: 0.36, radiusTop: 0.225, radiusBottom: 0.19, y: 0.17 },
    { bones: ["leftArmBone", "rightarmBone"], length: 0.64, radiusTop: 0.19, radiusBottom: 0.165, y: 0.32 },
    { bones: ["leftForeArmBone", "rightForearmBone"], length: 0.11, radiusTop: 0.17, radiusBottom: 0.175, y: 0.45 },
  ];

  segments.forEach(({ bones, length, radiusTop, radiusBottom, y }) => {
    bones.forEach((boneName) => {
      const bone = mesh?.getObjectByName(boneName) as Bone | null;
      if (!bone) return;
      const material = hoodieMaterial.clone();
      const sleeve = new Mesh(new CylinderGeometry(radiusTop, radiusBottom, length, 20), material);
      sleeve.position.y = y;
      sleeve.renderOrder = 23;
      bone.add(sleeve);
      hoodieSleeves.push(sleeve);
    });
  });
};

const assignMatcap = (child: Mesh): boolean => {
  let tex: Texture | null = null;

  if (child.name === "black") {
    // This mesh is the trousers. Keep its sculpted highlights and tint them
    // into blue denim in the shader.
    tex = resources.items["matcap-gray"];
  } else if (child.name === "gray") {
    tex = resources.items["matcap-gray"];
  } else if (child.name === "skin") {
    tex = resources.items["matcap-skin"];
  } else if (child.name === "white") {
    tex = resources.items["matcap-white"];
  }

  if (tex) {
    tex.colorSpace = LinearSRGBColorSpace;
    child.userData.matcap = tex;
    return true;
  }

  return false;
};

const setupMesh = () => {
  if (mesh) return;
  const resource = resources.items["avatar-model"];
  mesh = cloneSkeleton(resource.scene.children[0]) as Mesh;

  mesh.frustumCulled = false;

  mesh.traverse((child) => {
    if (child instanceof Mesh) {
      const mat = getMaterial(child.name);
      if (!mat) return;
      child.material = mat;
      child.frustumCulled = false;
      child.renderOrder = child.name === "face" ? 25 : 24;

      const hasMatcap = assignMatcap(child);
      if (hasMatcap) {
        child.onBeforeRender = () => {
          child.material.uniforms.uMatcap.value = child.userData.matcap;
        };
      }
    }
  });

  const brain = mesh.getObjectByName("brain") as Mesh;
  if (brain) {
    mesh.remove(brain);
  }

  mesh.rotation.z = 0;

  transform.add(mesh);

  rightHandBone = mesh.getObjectByName("bone-right-hand") as Bone;
  createHoodieLogo();
  createFullSleeves();

  scene.instance.add(transform);
};

const tick = () => {
  animations.update();

  const isContact = sceneWeights.contact > 0.001;

  if (isContact) {
    transform.position.copy(contactPosition);
    transform.rotation.copy(contactRotation);
    uniforms.uProgress.value = 0;
    uniforms.uAmbientStrength.value = 0;
    transform.visible = true;
    return;
  }

  transform.position.copy(waypointsPosition);
  transform.rotation.copy(waypointsRotation);

  //uniforms.uProgress.value = sceneWeightsInOut.about.in * 1.1 - 0.1;
  uniforms.uProgress.value = aboutProgress.value * 1.1 - 0.1;
  uniforms.uAmbientStrength.value = sceneWeightsInOut.about.in;

  if (!mesh) return;
  if (uniforms.uProgress.value > 0.999 && sceneWeights.contact > 0.99) {
    mesh.visible = false;
  } else {
    mesh.visible = true;
  }
};

const destroy = () => {
  //mesh = null;
  //transform.clear();
  face.destroy();
  if (hoodieLogo) {
    hoodieLogo.parent?.remove(hoodieLogo);
    (hoodieLogo.material as MeshBasicMaterial).map?.dispose();
    hoodieLogo.geometry.dispose();
    (hoodieLogo.material as MeshBasicMaterial).dispose();
    hoodieLogo = null;
  }
  hoodieSleeves.splice(0).forEach((sleeve) => {
    sleeve.parent?.remove(sleeve);
    sleeve.geometry.dispose();
    (sleeve.material as ShaderMaterial).dispose();
  });
  gsap.ticker.remove(tick);
};

export const avatar = {
  init,
  destroy,
  getMesh: () => mesh,
  getRightHandBone: () => rightHandBone,
  tIdleIntensity,
  waypointsPosition,
  waypointsRotation,
  uniforms,
  transform,
};
