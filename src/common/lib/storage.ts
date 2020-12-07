export interface IStorage {
  set(key: string, value: string);
  get(key: string): any;
}

export class Storage implements IStorage {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string): any {
    const stringified = localStorage.getItem(key);
    if (!stringified) {
      return null;
    }

    return JSON.parse(stringified);
  }
}

export const storage = new Storage();
