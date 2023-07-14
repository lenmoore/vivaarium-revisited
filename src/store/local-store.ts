export class LocalStore {
    private prefix: string;

    constructor(prefix: string) {
        this.prefix = prefix;
    }

    private getKey(key: string): string {
        return `${this.prefix}_${key}`;
    }

    public setItem(key: string, value: any): void {
        const prefixedKey = this.getKey(key);
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(prefixedKey, serializedValue);
    }

    public getItem<T>(key: string): T | null {
        const prefixedKey = this.getKey(key);
        const serializedValue = localStorage.getItem(prefixedKey);
        if (serializedValue) {
            return JSON.parse(serializedValue) as T;
        }
        return null;
    }

    public removeItem(key: string): void {
        const prefixedKey = this.getKey(key);
        localStorage.removeItem(prefixedKey);
    }

    public clear(): void {
        localStorage.clear();
    }
}
