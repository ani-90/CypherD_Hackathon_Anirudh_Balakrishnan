export declare class watchlistservice {
    get_tokens(): {
        id: string;
        symbol: string;
        name: string;
    }[];
    addData(symbol: string, name: string): string;
    getByID(tokenID: string): {
        id: string;
        symbol: string;
        name: string;
    } | undefined;
}
