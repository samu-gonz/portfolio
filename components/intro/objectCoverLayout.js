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

/** Mouse branding patch over the stock Gemini sparkle on intro-scene.png. */
export const MOUSE_BRAND_RECT = {
  left: 884 / 1024,
  top: 428 / 575,
  width: 34 / 1024,
  height: 34 / 575,
};

/** Focal point (monitor center) in normalized scene coordinates. */
export const MONITOR_FOCAL = {
  x: MONITOR_RECT.left + MONITOR_RECT.width / 2,
  y: MONITOR_RECT.top + MONITOR_RECT.height / 2,
};

const CONTAIN_ASPECT_RATIO = 0.92;

/** Minimum width for the desk photo intro (wide desktop screens only). */
export const DESKTOP_INTRO_MIN_WIDTH = 1024;

/**
 * Desk scene only on wide viewports where cover layout works. Tablets (iPad) and
 * portrait layouts use the compact intro instead.
 *
 * @param {number} viewportW
 * @param {number} viewportH
 * @param {number} [imgW]
 * @param {number} [imgH]
 */
export function shouldUseDesktopScene(
  viewportW,
  viewportH,
  imgW = SCENE_SIZE.width,
  imgH = SCENE_SIZE.height,
) {
  if (viewportW < DESKTOP_INTRO_MIN_WIDTH) return false;

  const viewportAspect = viewportW / viewportH;
  const imageAspect = imgW / imgH;

  return viewportAspect >= imageAspect * CONTAIN_ASPECT_RATIO;
}

/**
 * @param {number} viewportW
 * @param {number} viewportH
 */
export function isMobileIntroViewport(viewportW, viewportH) {
  return !shouldUseDesktopScene(viewportW, viewportH);
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
