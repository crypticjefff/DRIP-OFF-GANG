export const MOBILE_NAV_DRAWER_ID = "mobile-nav-drawer";

function getDialog(id: string): HTMLDialogElement | null {
  if (typeof document === "undefined" || typeof HTMLDialogElement === "undefined") return null;
  const dialog = document.getElementById(id);
  return dialog instanceof HTMLDialogElement ? dialog : null;
}

function openDialog(id: string): void {
  const dialog = getDialog(id);
  if (!dialog || dialog.open) return;
  dialog.showModal();
}

export function closeMobileNavDrawer(): void {
  getDialog(MOBILE_NAV_DRAWER_ID)?.close();
}

export function openDialogFallback(id: string): void {
  if (typeof HTMLButtonElement !== "undefined" && "command" in HTMLButtonElement.prototype) return;
  openDialog(id);
}
