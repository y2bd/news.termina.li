export default function objectType<T extends object>(): () => T {
  return Object as () => T;
}
