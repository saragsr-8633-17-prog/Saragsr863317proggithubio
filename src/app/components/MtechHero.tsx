import { DynamicImage } from "./DynamicImage";

const heroImage = "https://images.unsplash.com/photo-1740645580343-efafff76d4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3ZWJzaXRlJTIwZGFyayUyMG1vY2t1cHxlbnwxfHx8fDE3NzMyNTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function MtechHero() {
  return (
    <div className="w-[95%] mx-auto max-w-[1400px] aspect-video md:aspect-[21/9] relative overflow-hidden border-2 border-[#D9D9D9]">
      {/* Hero Image */}
      <DynamicImage
        slotId="mtech-hero"
        fallbackSrc={heroImage}
        alt="Selam Tesfaye portfolio hero"
        className="w-full h-full object-contain m-[0px] rounded-[0px]"
      />
    </div>
  );
}
