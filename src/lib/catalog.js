import potashFeldspar from "@/assets/minerals/potash-feldspar.jpg";
import potashFeldsparPowder from "@/assets/minerals/potash-feldspar-powder.jpg";
import sodaFeldspar from "@/assets/minerals/soda-feldspar.jpg";
import quartzLump from "@/assets/minerals/quartz-lump.jpg";
import quartzMineral from "@/assets/minerals/quartz-mineral.jpg";
import quartzPowder from "@/assets/minerals/quartz-powder.jpg";
import soapstone from "@/assets/minerals/soapstone.jpg";

export const categories = [
  { name: "Potash Feldspar", description: "Lump potash feldspar in grey, white, and pink grades for glass and ceramics.", count: 3 },
  { name: "Potash Feldspar Powder", description: "Milled potash feldspar powder for paints, ceramics, and glass fillers.", count: 3 },
  { name: "Soda Feldspar", description: "Soda feldspar and feldspar mineral for the ceramics and glass industry.", count: 2 },
  { name: "Quartz Lump", description: "Glassy and granular quartz lump for glass, foundry, and ceramic use.", count: 2 },
  { name: "Quartz Mineral", description: "Semi-glassy and granular quartz mineral in natural lump form.", count: 2 },
  { name: "Quartz Powder", description: "Finely milled quartz powder for industrial and ceramic applications.", count: 1 },
  { name: "Soapstone", description: "Soap stone and soapstone lumps for talc, cosmetics, and refractory use.", count: 2 },
];

export const products = [
  { id: "pf-lg", name: "Light Grey Potash Feldspar", category: "Potash Feldspar", model: "PF-LG", description: "Light grey potash feldspar lump used as a flux in ceramics and glass manufacturing.", specs: ["Lump form", "K2O rich", "Low iron content"], price: null, stock: 500, image: potashFeldspar, featured: true },
  { id: "pf-wh", name: "White Potash Feldspar", category: "Potash Feldspar", model: "PF-WH", description: "High-brightness white potash feldspar lump suited for premium ceramic bodies and glazes.", specs: ["Lump form", "High brightness", "Low iron content"], price: null, stock: 480, image: potashFeldspar },
  { id: "pf-pk", name: "Pink Potash Feldspar", category: "Potash Feldspar", model: "PF-PK", description: "Pink-hued potash feldspar lump widely used as a filler and flux in paints and ceramics.", specs: ["Lump form", "Natural pink shade", "Consistent grading"], price: null, stock: 420, image: potashFeldspar },
  { id: "pfp-soda", name: "Soda Feldspar Powder", category: "Potash Feldspar Powder", model: "PFP-SD", description: "Finely ground soda feldspar powder for glass, ceramics, and tile manufacturing.", specs: ["Milled powder", "Low iron", "Custom mesh sizes"], price: null, stock: 600, image: potashFeldsparPowder, featured: true },
  { id: "pfp-lg", name: "Light Grey Potash Feldspar Powder", category: "Potash Feldspar Powder", model: "PFP-LG", description: "Milled light grey potash feldspar powder for paint fillers and ceramic bodies.", specs: ["Milled powder", "K2O rich", "Custom mesh sizes"], price: null, stock: 560, image: potashFeldsparPowder },
  { id: "pfp-pf", name: "Potash Feldspar Powder", category: "Potash Feldspar Powder", model: "PFP-STD", description: "Standard-grade potash feldspar powder available at reasonable prices for bulk supply.", specs: ["Milled powder", "Bulk supply", "Custom mesh sizes"], price: null, stock: 700, image: potashFeldsparPowder },
  { id: "sf-std", name: "Soda Feldspar", category: "Soda Feldspar", model: "SF-STD", description: "Prominent-grade soda feldspar used across ceramic, glass, and tile applications.", specs: ["Lump form", "Na2O rich", "Low iron content"], price: null, stock: 450, image: sodaFeldspar, featured: true },
  { id: "sf-mn", name: "Feldspar Mineral", category: "Soda Feldspar", model: "FM-STD", description: "Natural feldspar mineral supplied for industrial and ceramic manufacturing needs.", specs: ["Natural mineral", "Bulk supply", "Export quality"], price: null, stock: 380, image: sodaFeldspar },
  { id: "ql-gl", name: "Glassy Quartz Lump", category: "Quartz Lump", model: "QL-GL", description: "High-clarity glassy quartz lump for glass manufacturing and foundry applications.", specs: ["Lump form", "High SiO2", "Low iron content"], price: null, stock: 520, image: quartzLump, featured: true },
  { id: "ql-gr", name: "Granular Quartz Lump", category: "Quartz Lump", model: "QL-GR", description: "Granular quartz lump suited for glass, ceramics, and construction applications.", specs: ["Lump form", "High SiO2", "Consistent grading"], price: null, stock: 480, image: quartzLump },
  { id: "qm-sg", name: "Semi-Glassy Quartz", category: "Quartz Mineral", model: "QM-SG", description: "Semi-glassy quartz mineral offered in natural lump form for varied industrial uses.", specs: ["Natural lump", "High purity", "Export quality"], price: null, stock: 410, image: quartzMineral },
  { id: "qm-gr", name: "Granular Quartz", category: "Quartz Mineral", model: "QM-GR", description: "Granular quartz mineral supplied for foundry, glass, and ceramic manufacturing.", specs: ["Natural lump", "High SiO2", "Bulk supply"], price: null, stock: 390, image: quartzMineral },
  { id: "qp-sg", name: "Semi-Glassy Quartz Powder", category: "Quartz Powder", model: "QP-SG", description: "Finely milled semi-glassy quartz powder for ceramics, paints, and industrial fillers.", specs: ["Milled powder", "High purity", "Custom mesh sizes"], price: null, stock: 640, image: quartzPowder, featured: true },
  { id: "ss-lump", name: "Soap Stone Lumps", category: "Soapstone", model: "SS-LP", description: "Natural soap stone lumps supplied for talc, cosmetics, and refractory applications.", specs: ["Lump form", "High talc content", "Export quality"], price: null, stock: 300, image: soapstone },
  { id: "ss-stone", name: "Soapstone Lumps", category: "Soapstone", model: "SS-ST", description: "Quality soapstone lumps for the ceramics, paint, and refractory industries.", specs: ["Lump form", "High talc content", "Bulk supply"], price: null, stock: 280, image: soapstone },
];

export const industries = ["Glass Industry", "Ceramics & Potteries", "Electronics Industry", "Petroleum Industry", "Ferro Silicon Industry"];
