export function save(key: string, value: any): boolean {
  if (!window || !window.localStorage) {
    return false;
  }

  const json = JSON.stringify(value);
  window.localStorage.setItem(key, json);

  return true;
}

export function load<T>(key: string, defaultValue: T): T {
  if (!window || !window.localStorage) {
    return defaultValue;
  }

  const item = window.localStorage.getItem(key);
  if (!item) {
    return defaultValue;
  }

  return JSON.parse(item);
}
