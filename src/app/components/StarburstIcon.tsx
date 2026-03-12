import svgPaths from "../../imports/svg-4n9ifotttv";

export function StarburstIcon({
  color = "black",
  size = 52,
  rotate = false,
}: {
  color?: string;
  size?: number;
  rotate?: boolean;
}) {
  const isBlack = color === "black";
  const paths = isBlack
    ? [
        svgPaths.p14b7fc00,
        svgPaths.p1eeb280,
        svgPaths.p11a41f70,
        svgPaths.p2d887800,
        svgPaths.p32958a80,
        svgPaths.p115a3700,
        svgPaths.pef38100,
        svgPaths.p14fe2700,
      ]
    : [
        svgPaths.p21cebc40,
        svgPaths.p348b1f80,
        svgPaths.pd1ae400,
        svgPaths.p328d3d00,
        svgPaths.p36ce4900,
        svgPaths.p9709480,
        svgPaths.p35db100,
        svgPaths.p34011800,
      ];

  const viewBox = isBlack ? "0 0 52.1227 52.1227" : "0 0 70.4 70.4";

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        style={{
          transition: "transform 0.6s ease",
          transform: rotate ? "rotate(180deg)" : "rotate(0deg)",
        }}
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {paths.map((d, i) => (
          <path key={i} d={d} fill={color} />
        ))}
      </svg>
    </div>
  );
}