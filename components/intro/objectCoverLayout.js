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

/** Focal point (monitor center) in normalized scene coordinates. */
export const MONITOR_FOCAL = {
  x: MONITOR_RECT.left + MONITOR_RECT.width / 2,
  y: MONITOR_RECT.top + MONITOR_RECT.height / 2,
};

const CONTAIN_ASPECT_RATIO = 0.92;

/** Viewports below this width use the dedicated mobile intro layout. */
export const MOBILE_INTRO_MAX_WIDTH = 768;

/**
 * @param {number} viewportW
 */
export function isMobileIntroViewport(viewportW) {
  return viewportW < MOBILE_INTRO_MAX_WIDTH;
}

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
 * Cover with focal point on wide viewports; contain on narrow/portrait so the
 * monitor stays fully visible on phones and tablets.
 *
 * @param {number} viewportW
 * @param {number} viewportH
 * @param {number} imgW
 * @param {number} imgH
 * @param {{ focal?: { x: number; y: number } }} [options]
 */
export function computeSceneLayout(viewportW, viewportH, imgW, imgH, options = {}) {
  const imageAspect = imgW / imgH;
  const viewportAspect = viewportW / viewportH;
  const useContain = viewportAspect < imageAspect * CONTAIN_ASPECT_RATIO;

  if (useContain) {
    const scale = Math.min(viewportW / imgW, viewportH / imgH);
    const width = imgW * scale;
    const height = imgH * scale;

    return {
      mode: "contain",
      width,
      height,
      offsetX: (viewportW - width) / 2,
      offsetY: (viewportH - height) / 2,
    };
  }

  const scale = Math.max(viewportW / imgW, viewportH / imgH);
  const width = imgW * scale;
  const height = imgH * scale;
  const focal = options.focal ?? MONITOR_FOCAL;

  let offsetX = viewportW / 2 - focal.x * width;
  let offsetY = viewportH / 2 - focal.y * height;
  offsetX = Math.min(0, Math.max(viewportW - width, offsetX));
  offsetY = Math.min(0, Math.max(viewportH - height, offsetY));

  return {
    mode: "cover",
    width,
    height,
    offsetX,
    offsetY,
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
