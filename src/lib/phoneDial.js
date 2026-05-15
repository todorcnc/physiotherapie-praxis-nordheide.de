export function phoneHref(phoneNumber) {
  return `tel:${phoneNumber.replaceAll(" ", "")}`;
}

export function handlePhoneDialClick(event) {
  if (typeof window === "undefined") {
    return;
  }

  const isMobileUserAgent = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const hasCoarsePointer = window.matchMedia?.("(pointer: coarse)").matches;

  if (!isMobileUserAgent && !hasCoarsePointer) {
    event.preventDefault();
  }
}
