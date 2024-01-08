export interface Game {
    history: History;
    players: Player[];
    difficulty: Difficulty;
    field: Card[];
}

export interface History {
    steps: Step[];
}

export interface Step {
    isMatch: boolean;
    player: Player;
    selectedCardsPerTurn: Card[];
}

export interface Player {
    id: number;
    name: string;
    score: number;
}

export interface Card {
    id: number;
    // TODO: change case
    background_color: string;
    url: string;
    // TODO: remove property
    cardId: number;
}

export type Quantity = 16 | 24 | 40;

export type Difficulty = 'easy' | 'medium' | 'hard';
