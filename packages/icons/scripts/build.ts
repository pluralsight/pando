import { Glob, file, write } from 'bun'
import {
  IconSet,
  cleanupSVG,
  exportToDirectory,
  parseColors,
  runSVGO,
} from '@iconify/tools'
import { validateIconSet } from '@iconify/utils'
import type { IconifyCategories, IconifyJSON } from '@iconify/types'

const ICONS_FILE_PATH = 'generated/icons.json'

function getIconCategory(
  categories: IconifyCategories,
  iconCategory: string,
  iconName: string,
) {
  if (iconCategory in categories) {
    return [...categories[iconCategory], iconName]
  }

  return []
}

async function createJSONIconSet() {
  let iconsContent = {
    prefix: 'pando',
    icons: {},
    categories: {},
    info: {
      name: 'Pando Icons',
      author: {
        name: 'Pando Design System Team',
      },
      license: {
        title: 'Apache 2.0',
      },
    },
    width: 24,
    height: 24,
  } as IconifyJSON
  const glob = new Glob('**/*.svg')

  // create icons.json
  await write(ICONS_FILE_PATH, JSON.stringify(iconsContent, null, 2))

  // add icons to icons.json
  for await (const filePath of glob.scan('src')) {
    const iconPathContents = filePath.split('/')
    const iconCategory = iconPathContents[0]
    const iconName = iconPathContents
      .pop()
      ?.split('.')[0] as keyof typeof iconsContent.icons
    const rawFile = file(`src/${filePath}`)
    const fileContents = await rawFile.text()

    iconsContent = {
      ...iconsContent,
      categories: {
        ...iconsContent.categories,
        [iconCategory]: getIconCategory(
          iconsContent.categories as IconifyCategories,
          iconCategory,
          iconName as string,
        ),
      },
      icons: {
        ...iconsContent.icons,
        [iconName]: {
          body: fileContents,
        },
      },
    }
  }

  // write icons.json
  await write(ICONS_FILE_PATH, JSON.stringify(iconsContent, null, 2))
}

async function buildIconSet() {
  await createJSONIconSet()

  try {
    const rawFile = file(ICONS_FILE_PATH)
    const fileContents = await rawFile.text()
    const validatedIconSet = validateIconSet(JSON.parse(fileContents))
    return new IconSet(validatedIconSet)
  } catch (error) {
    throw new Error(`Error building icon set: ${error}`)
  }
}

async function validateAndOptimizeIconSet(iconSet: IconSet) {
  await iconSet.forEach((iconName) => {
    const svg = iconSet.toSVG(iconName)
    if (!svg) {
      console.error(`Invalid icon: ${iconName}`)
      iconSet.remove(iconName)
      return
    }

    try {
      // Clean up icon code
      cleanupSVG(svg)
      // Optimize icon
      runSVGO(svg)
      // Parse colors
      parseColors(svg, {
        defaultColor: 'currentColor',
      })
      // update IconSet
      iconSet.fromSVG(iconName, svg)
    } catch (error) {
      // Invalid icon
      console.error(`Error parsing ${iconName}:`, error)
      iconSet.remove(iconName)
    }
  })
}

async function createAndBuildIconSets() {
  const iconSet = await buildIconSet()
  await validateAndOptimizeIconSet(iconSet)
  // create icon sets
  await exportToDirectory(iconSet, {
    target: `build/svg`,
    log: true,
  })
}

createAndBuildIconSets()
