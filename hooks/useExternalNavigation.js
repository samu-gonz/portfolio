"use client";

import { useCallback } from "react";

/**
 * Opens an external URL in a new tab. Must run synchronously inside a click
 * handler so popup blockers treat it as user-initiated.
 * @param {string} url
 * @returns {boolean} whether a new tab was opened
 */
export function openExternalUrl(url) {
  if (!url) return false;

  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) {
    window.location.assign(url);
    return false;
  }

  return true;
}

export function resolveAbsoluteUrl(href) {
  if (!href) return "";
  return href.startsWith("http") ? href : `${window.location.origin}${href}`;
}

export function useExternalNavigation() {
  const navigateExternal = useCallback((url) => {
    openExternalUrl(url);
  }, []);

  const navigateWithFallback = useCallback((url, fallbackHref) => {
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(fallbackHref || url);
    }
  }, []);

  return { navigateExternal, navigateWithFallback, resolveAbsoluteUrl };
}
