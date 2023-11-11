/* @typedef {{ id: number, url: string }} Card */

/* @typedef {{ id: number, name: string, score: number }} Player */

/* @typedef {{ id: number, match: boolean, player: Player, openedCards: Card[] }} Step */

/* @typedef {{ id: number, steps: Step[] }} History */

/* @typedef {{ id: number, difficulty: "easy" | "medium" | "hard", history: History, players: Player[] }} Game */

export interface Card {
    id: number;
    url: string;
}
export interface Player {
    id: number;
    name: string;
    score: number;
}
export interface Step {
    match: boolean;
    player: Player;
    openedCards: Card[];
}
export interface History {
    steps: Step[];
}
export interface Game {
    difficulty: 'easy' | 'medium' | 'hard';
    history: History;
    players: Player[];
}
