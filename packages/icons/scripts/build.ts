import { Glob, file, write } from 'bun'
import {
  IconSet,
  SVG,
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

    // create consistent iconify SVGs
    const svg = new SVG(fileContents)
    parseColors(svg, {
      defaultColor: 'currentColor',
    })
    cleanupSVG(svg)
    runSVGO(svg)

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
          body: svg.toMinifiedString(),
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

async function createAndBuildIconSets() {
  const iconSet = await buildIconSet()
  // create icon sets
  await exportToDirectory(iconSet, {
    target: `build/svg`,
    log: true,
  })
}

createAndBuildIconSets()
