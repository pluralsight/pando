export const step2Msg = 'Step 2: Install Pando Packages'

export const step3Msg = 'Step 3: Install required dependencies'

export function pkgInstallMsg(script: string, packages: string[]) {
  return `Installing ${packages.join(', ')} using ${script}...`
}
