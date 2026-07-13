export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function openAmazon(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
