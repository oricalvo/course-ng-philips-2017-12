export function clone<T>(obj: T): T {
  const res = JSON.parse(JSON.stringify(obj));
  return res;
}
