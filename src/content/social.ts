export const social = [
  { url: "mailto:suryansh.suman@example.com", name: "mail" },
  { url: "https://www.linkedin.com/in/suryansh-suman", name: "linkedin" },
  { url: "https://github.com/suryansh-suman", name: "github" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
