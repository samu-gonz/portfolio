import TerminalIcon from "../portfolio/TerminalIcon";
import { MOUSE_BRAND_RECT, monitorRectToPixels } from "./objectCoverLayout";

/**
 * @param {{ sceneWidth: number; sceneHeight: number }} props
 */
export default function SceneMouseBrand({ sceneWidth, sceneHeight }) {
  const badge = monitorRectToPixels(MOUSE_BRAND_RECT, sceneWidth, sceneHeight);

  return (
    <div
      className="pointer-events-none absolute z-[3] flex items-center justify-center rounded-full bg-[#5a4638]/55 shadow-[0_1px_2px_rgba(0,0,0,0.35)] backdrop-blur-[0.5px]"
      style={{
        left: badge.left,
        top: badge.top,
        width: badge.width,
        height: badge.height,
      }}
      aria-hidden
    >
      <TerminalIcon className="h-[72%] w-[72%] text-white/95" />
    </div>
  );
}
