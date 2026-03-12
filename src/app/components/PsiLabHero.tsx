import { DynamicImage } from "./DynamicImage";

const heroImage = "/images/psi-lab-cover.jpeg";

export function PsiLabHero() {
  return (
    <div className="w-[95%] mx-auto max-w-[1400px] aspect-video md:aspect-[21/9] relative overflow-hidden border-2 border-[#D9D9D9]">
      <DynamicImage
        slotId="psi-lab-hero"
        fallbackSrc={heroImage}
        alt="PSI-LAB project hero"
        className="w-full h-full object-contain m-[0px] rounded-[0px]"
      />
    </div>
  );
}
