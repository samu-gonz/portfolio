/** Source dimensions of intro-scene.png */
export const SCENE_SIZE = { width: 1024, height: 575 };

/**
 * Monitor LCD (full-width rows y=82→390, x=225→802) with 18px inset
 * so the terminal respects a visible bezel inside the screen.
 */
export const MONITOR_RECT = {
  left: 243 / 1024,
  top: 100 / 575,
  width: 542 / 1024,
  height: 273 / 575,
};

/**
 * @param {number} viewportW
 * @param {number} viewportH
 * @param {number} imgW
 * @param {number} imgH
 */
export function computeCoverSize(viewportW, viewportH, imgW, imgH) {
  const imageAspect = imgW / imgH;
  const viewportAspect = viewportW / viewportH;

  if (viewportAspect > imageAspect) {
    return { width: viewportW, height: viewportW / imageAspect };
  }

  return { width: viewportH * imageAspect, height: viewportH };
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
  };
}
