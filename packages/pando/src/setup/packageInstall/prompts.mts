export const pandoInstallPrompt = 'Step 2: Install Pando Packages'

export const reqdDependencyPrompt = 'Step 3: Install required dependencies'

export function packageInstallConfirmation(script: string, packages: string[]) {
  return `Installing ${packages.join(', ')} using ${script}...`
}
