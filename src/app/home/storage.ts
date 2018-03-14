export interface DefaultFormat {
    bpms: Array<BPM>;
    multipliers: Array<Multiplier>;
    notes: Array<Note>;
    metadata: Metadata;
}

interface BPM {
    millisecond: number;
    value: number;
}

interface Metadata {
    title: string;
    unicodeTitle: string;
    artist: string;
    unicodeArtist: string;
    creator: string;
    source: string;
}

export interface Note {
    millisecond: number;
    duration: number;
    lane: number;
}

interface Multiplier {
    millisecond: number;
    multiplier: number;
}
