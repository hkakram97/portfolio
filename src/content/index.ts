import en from "./en";
import ar from "./ar";
import type { Content, Lang } from "./types";

export const content: Record<Lang, Content> = { en, ar };
export { links } from "./links";
export type { Content, Lang, CaseStudy, ArchiveItem, ProjectTag } from "./types";
export { projectTags } from "./types";
