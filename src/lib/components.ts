import fs from "node:fs";
import path from "node:path";
import type { ComponentMeta } from "./types";

function readSource(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf-8");
}

export const MagneticGlassButton: ComponentMeta = {
  slug: ["magnetic-glass-button"],
  title: "Magnetic Glass Button",
  category: ["ui"],
  description: "A basic button, used to test the code + css file split.",
  tags: ["ui", "button"],
  difficulty: "beginner",
  badges: [],
  variants: [
    {
      label: "Pure CSS/TSX",
      language: "tsx",
      cssFilename: "MagneticGlassButton.module.css",
      code: readSource(
        "src/components/previews/MagneticGlassButton/MagneticGlassButton.tsx",
      ),
      css: readSource(
        "src/components/previews/MagneticGlassButton/MagneticGlassButton.module.css",
      ),
      source: "ai",
      prompt: "test",
      notes: "Just for testing the css file wiring — nothing fancy.",
    },
  ],
  explanation: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          similique deserunt atque! Maxime placeat architecto harum dolorem nemo
          provident, illum earum quis debitis soluta beatae repudiandae numquam
          aliquam reprehenderit, hic nobis id rem! Quae voluptate minus
          inventore omnis at. Quas ex reprehenderit explicabo blanditiis ipsam
          nisi. Nesciunt quia, soluta aspernatur, nisi incidunt ipsum non
          voluptatum illum facere repudiandae, dicta rem inventore. Quasi sint,
          animi tempore nam suscipit vel similique maxime ipsa, eum maiores
          molestiae amet sequi possimus cupiditate at ratione explicabo
          provident distinctio! Temporibus excepturi porro laborum quam, tempora
          distinctio repellendus dignissimos eligendi nisi repellat quidem
          facilis nobis in velit maiores, cupiditate voluptatum corrupti odio
          culpa reprehenderit ipsum cumque. Libero cupiditate consectetur
          corrupti facilis fuga non voluptatum ab, voluptate quod nemo eveniet
          quasi dolorum maxime autem quaerat dolore aliquam nesciunt excepturi
          velit veritatis nisi dolor ut debitis alias? Officia quos voluptatum
          reiciendis quis repellat ullam in sed numquam saepe aspernatur! Omnis
          laborum hic blanditiis labore.`,
};
