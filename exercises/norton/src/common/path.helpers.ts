export function getDirectoryName(path: string): string {
  const index = path.lastIndexOf("/");
  if(index == -1) {
    return path;
  }

  return path.substring(0, index);
}
