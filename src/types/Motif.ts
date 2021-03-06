import { MOTIFS } from "../data/motifs";

export type Motif = {
  id: MOTIFS;
  summary?: string;
  /**
   * RELATIONS
   */
  closeTo?: MOTIFS[];
  /** Parents/context */
  parents?: MOTIFS[];
  children?: MOTIFS[];
  included?: MOTIFS[];
  includes?: MOTIFS[];
  implementations?: string[];
};
