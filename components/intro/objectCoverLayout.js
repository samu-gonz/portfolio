/** Source dimensions of intro-scene.png */
export const SCENE_SIZE = { width: 1024, height: 575 };

/** Monitor LCD area aligned to intro-scene.png bezel (CodeEditor overlay). */
export const MONITOR_RECT = {
  left: 254 / 1024,
  top: 110 / 575,
  width: 526 / 1024,
  height: 262 / 575,
  rotate: 0.35,
};

/**
 * @param {number} viewportW
 * @param {number} viewportH
 * @param {number} imgW
 * @param {number} imgH
 */
export function computeCoverSize(viewportW, viewportH, imgW, imgH) {
  const scale = Math.max(viewportW / imgW, viewportH / imgH);
  return {
    width: imgW * scale,
    height: imgH * scale,
  };
}

/**
 * @param {{ left: number; top: number; width: number; height: number }} rect
 * @param {number} sceneW
 * @param {number} sceneH
 */
export function monitorRectToPixels(rect, sceneW, sceneH) {
  return {
    left: rect.left * sceneW,
    top: rect.top * sceneH,
    width: rect.width * sceneW,
    height: rect.height * sceneH,
    rotate: rect.rotate ?? 0,
  };
}
