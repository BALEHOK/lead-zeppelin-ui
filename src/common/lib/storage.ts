export class Storage {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string): any {
    const stringified = localStorage.getItem(key);
    if (stringified === null) {
      return null;
    }

    return JSON.parse(stringified);
  }
}

export const storage = new Storage();
