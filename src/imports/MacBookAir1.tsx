import svgPaths from "./svg-4n9ifotttv";

function Group() {
  return (
    <div className="h-[52.123px] relative shrink-0 w-[52.122px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1227 52.1227">
        <g id="Group">
          <path d={svgPaths.p14b7fc00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1eeb280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p11a41f70} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p2d887800} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p32958a80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p115a3700} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.pef38100} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p14fe2700} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[84px] items-end leading-[20.054px] not-italic relative shrink-0 text-[#a3a3a3] text-[16.043px] text-right tracking-[2.3125px] uppercase w-[108px]">
      <p className="relative shrink-0 w-full">Work</p>
      <p className="relative shrink-0 w-full">Blog</p>
      <p className="relative shrink-0 w-full">about</p>
      <p className="relative shrink-0 w-full">contact</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex inset-[2.88%_1.81%_87.02%_1.81%] items-start justify-between">
      <Group />
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="flex-[1_0_0] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative w-full">
      <p className="col-1 font-['Montserrat:Medium',sans-serif] font-medium h-[0.966px] leading-[69.27px] ml-0 mt-[0.03px] relative row-1 text-[#111] text-[50px] tracking-[-1.4238px] w-[620.686px] whitespace-pre-wrap">{`Web Dev, Design, and  Animation`}</p>
      <p className="col-1 font-['Montserrat:SemiBold',sans-serif] font-semibold h-px leading-[31.749px] ml-[657.31px] mt-0 relative row-1 text-[#222] text-[20px] tracking-[-0.2658px] w-[620.686px]">{`I believe creativity isn't just a skill, it's a mindset. Born from a passion for bold ideas and beautifully crafted storytelling, I collaborate with visionary clients to shape identities at the intersection of art and innovation.`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[156.5px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Montserrat:Bold',sans-serif] font-bold h-full leading-[148.581px] relative shrink-0 text-[#1a1a1a] text-[220px] text-center tracking-[-8.5363px] uppercase w-[1634px]">OBAID SALEM</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[295px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[153px] items-center justify-center px-[24px] relative size-full">
          <Group1 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[6%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.4 70.4">
        <g id="Group">
          <path d={svgPaths.p21cebc40} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p348b1f80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pd1ae400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p328d3d00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p36ce4900} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p9709480} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p35db100} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p34011800} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="svg">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#161616] content-stretch flex h-[276px] items-center justify-center relative shrink-0 w-full" data-name="footer">
      <Svg />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] inset-[28.97%_0_0_0] items-center justify-end">
      <Frame2 />
      <Footer />
    </div>
  );
}

export default function MacBookAir() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Air - 1">
      <Frame4 />
      <Frame3 />
    </div>
  );
}