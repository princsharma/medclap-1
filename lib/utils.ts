import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely, resolving conflicts.
 * Example: cn("p-2 p-4", isActive && "bg-navy") => "p-4 bg-navy"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
