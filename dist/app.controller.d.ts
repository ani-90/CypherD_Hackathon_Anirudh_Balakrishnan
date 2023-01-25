import { watchlistservice } from './app.service';
export declare class WatchlistController {
    private readonly wls;
    constructor(wls: watchlistservice);
    getData(): {
        id: string;
        symbol: string;
        name: string;
    }[];
    addtoken(symbol: string, name: string): {
        message: string;
    };
    getProduct(prodId: string): {
        id: string;
        symbol: string;
        name: string;
    } | undefined;
}
