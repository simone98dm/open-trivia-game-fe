import { Player } from "~/models/Player";

export interface Room {
  id: string;
  createTimestamp: string;
  players: Player[];
}
