export function packageList(pkgs: string[]) {
  return `We will need to install these packages: ${pkgs.join(', ')}`
}
