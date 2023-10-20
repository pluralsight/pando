export const step2Msg = 'Step 2: Install Pando Packages'

export const step3Msg = 'Step 3: Install required dependencies'

export function packageList(pkgs: string[]) {
  return `We will need to install these packages: ${pkgs.join(', ')}`
}
