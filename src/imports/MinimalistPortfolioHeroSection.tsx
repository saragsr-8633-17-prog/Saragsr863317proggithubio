import clsx from "clsx";
import svgPaths from "./svg-02pt8wr74c";
type Icon1Vector2Props = {
  additionalClassNames?: string;
};

function Icon1Vector2({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon1Vector2Props>) {
  return (
    <div className={clsx("absolute bottom-[14.64%] top-1/2", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3137 11.3124">
        {children}
      </svg>
    </div>
  );
}
type Icon1Vector1Props = {
  additionalClassNames?: string;
};

function Icon1Vector1({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon1Vector1Props>) {
  return (
    <div className={clsx("absolute bottom-[40.91%] top-[40.91%]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 5.81755">
        {children}
      </svg>
    </div>
  );
}
type Icon1VectorProps = {
  additionalClassNames?: string;
};

function Icon1Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon1VectorProps>) {
  return (
    <div className={clsx("absolute bottom-1/2 top-[14.64%]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3137 11.3125">
        {children}
      </svg>
    </div>
  );
}
type IconVector2Props = {
  additionalClassNames?: string;
};

function IconVector2({ children, additionalClassNames = "" }: React.PropsWithChildren<IconVector2Props>) {
  return (
    <div className={clsx("absolute bottom-[40.91%] top-[40.91%]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 10.909">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2132 21.2132">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("absolute bottom-1/2 top-[14.64%]", additionalClassNames)}>{children}</Wrapper2>;
}
type IconVector1Props = {
  additionalClassNames?: string;
};

function IconVector1({ children, additionalClassNames = "" }: React.PropsWithChildren<IconVector1Props>) {
  return <Wrapper2 additionalClassNames={clsx("absolute bottom-[14.64%] top-1/2", additionalClassNames)}>{children}</Wrapper2>;
}
type IconVectorProps = {
  additionalClassNames?: string;
};

function IconVector({ children, additionalClassNames = "" }: React.PropsWithChildren<IconVectorProps>) {
  return (
    <div className={clsx("absolute left-[40.91%] right-[40.91%]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.909 30">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkText({ text, additionalClassNames = "" }: LinkTextProps) {
  return (
    <div className={clsx("h-[18.003px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#a3a3a3] text-[14px] top-[0.56px] tracking-[0.7px] uppercase whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function MinimalistPortfolioHeroSection() {
  return (
    <div className="bg-white relative size-full" data-name="Minimalist Portfolio Hero Section">
      <div className="absolute bg-[#1a1a1a] content-stretch flex h-[195.747px] items-center justify-center left-0 top-[620.92px] w-[1260px]" data-name="nl">
        <div className="relative shrink-0 size-[60px]" data-name="Ha">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
            <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <IconVector additionalClassNames="bottom-1/2 top-0">
                <path d={svgPaths.p13286360} fill="var(--fill-0, white)" id="Vector" />
              </IconVector>
              <Wrapper1 additionalClassNames="left-1/2 right-[14.64%]">
                <path d={svgPaths.p34caca00} fill="var(--fill-0, white)" id="Vector" />
              </Wrapper1>
              <IconVector2 additionalClassNames="left-1/2 right-0">
                <path d={svgPaths.p36eb4580} fill="var(--fill-0, white)" id="Vector" />
              </IconVector2>
              <IconVector1 additionalClassNames="left-1/2 right-[14.64%]">
                <path d={svgPaths.p17558900} fill="var(--fill-0, white)" id="Vector" />
              </IconVector1>
              <IconVector additionalClassNames="bottom-0 top-1/2">
                <path d={svgPaths.p1fb4ee40} fill="var(--fill-0, white)" id="Vector" />
              </IconVector>
              <IconVector1 additionalClassNames="left-[14.64%] right-1/2">
                <path d={svgPaths.pd664700} fill="var(--fill-0, white)" id="Vector" />
              </IconVector1>
              <IconVector2 additionalClassNames="left-0 right-1/2">
                <path d={svgPaths.p34ae7900} fill="var(--fill-0, white)" id="Vector" />
              </IconVector2>
              <Wrapper1 additionalClassNames="left-[14.64%] right-1/2">
                <path d={svgPaths.p3553a600} fill="var(--fill-0, white)" id="Vector" />
              </Wrapper1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[404.913px] left-0 top-[216.01px] w-[1260px]" data-name="nl">
        <div className="absolute content-stretch flex h-[467.326px] items-center left-0 pl-[47.995px] top-[-100px] w-[1260px]" data-name="Container">
          <div className="h-[150.217px] relative shrink-0 w-[1164.01px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[160px] items-start relative size-full">
              <Wrapper additionalClassNames="h-[110.399px] w-[502.005px]">
                <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[55.2px] left-0 text-[#111] text-[40px] top-[-0.22px] tracking-[-1.42px] w-[417px]">Web Dev, Design, and Animation</p>
              </Wrapper>
              <div className="h-[150.217px] relative shrink-0 w-[502.005px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                  <div className="flex-[1_0_0] h-[150.217px] min-h-px min-w-px relative" data-name="Paragraph">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[30.051px] left-0 text-[#222] text-[18.9px] top-[-0.67px] tracking-[-0.27px] w-[478px]">{`I believe creativity isn't just a skill, it's a mindset. Born from a passion for bold ideas and beautifully crafted storytelling, I collaborate with visionary clients to shape identities at the intersection of art and innovation.`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex h-[137.587px] items-start justify-center left-0 overflow-clip top-[267.33px] w-[1260px]" data-name="Container">
          <Wrapper additionalClassNames="h-[137.587px] w-[1219.479px]">
            <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[119.952px] left-[610px] text-[#1a1a1a] text-[176.4px] text-center top-[0.22px] tracking-[-8.54px] uppercase whitespace-nowrap">OBAID SALEM</p>
          </Wrapper>
        </div>
      </div>
      <div className="absolute h-[88.012px] left-0 top-0 w-[1260px]" data-name="Container">
        <div className="absolute content-stretch flex flex-col items-start left-[23.99px] size-[32px] top-[17.01px]" data-name="Ha">
          <div className="h-[31.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <div className="absolute bottom-1/2 left-[40.91%] right-[40.91%] top-0" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81755 15.9983">
                <path d={svgPaths.p14d7e800} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
            <Icon1Vector additionalClassNames="left-1/2 right-[14.64%]">
              <path d={svgPaths.p28074400} fill="var(--fill-0, black)" id="Vector" />
            </Icon1Vector>
            <Icon1Vector1 additionalClassNames="left-1/2 right-0">
              <path d={svgPaths.p14f5400} fill="var(--fill-0, black)" id="Vector" />
            </Icon1Vector1>
            <Icon1Vector2 additionalClassNames="left-1/2 right-[14.64%]">
              <path d={svgPaths.p1fba2e00} fill="var(--fill-0, black)" id="Vector" />
            </Icon1Vector2>
            <div className="absolute bottom-0 left-[40.91%] right-[40.91%] top-1/2" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81759 15.9982">
                <path d={svgPaths.p2a5fe840} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
            <Icon1Vector2 additionalClassNames="left-[14.64%] right-1/2">
              <path d={svgPaths.p3dc49100} fill="var(--fill-0, black)" id="Vector" />
            </Icon1Vector2>
            <Icon1Vector1 additionalClassNames="left-0 right-1/2">
              <path d={svgPaths.pf361800} fill="var(--fill-0, black)" id="Vector" />
            </Icon1Vector1>
            <Icon1Vector additionalClassNames="left-[14.64%] right-1/2">
              <path d={svgPaths.p6fdc460} fill="var(--fill-0, black)" id="Vector" />
            </Icon1Vector>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[72.014px] items-end left-[1161.88px] top-[16px] w-[74.132px]" data-name="Navigation">
          <LinkText text="WORK" additionalClassNames="w-[50.738px]" />
          <LinkText text="BLOG" additionalClassNames="w-[44.253px]" />
          <LinkText text="ABOUT" additionalClassNames="w-[55.712px]" />
          <LinkText text="CONTACT" additionalClassNames="w-[74.132px]" />
        </div>
      </div>
    </div>
  );
}