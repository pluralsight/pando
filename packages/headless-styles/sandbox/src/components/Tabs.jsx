import { useEffect } from 'react'
import { unstable_getJSTabProps, unstable_getTabProps } from '../../../src'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet turpis gravida, gravida erat in, dapibus ex. Donec ac purus eget augue pellentesque pharetra. Nam placerat vestibulum ultricies. Vestibulum nisl magna, sodales in erat ut, lacinia accumsan est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin facilisis fermentum fermentum. Integer faucibus turpis nec nunc ultrices laoreet a vel ex. Quisque ornare turpis leo, eget bibendum odio vestibulum consequat. Aliquam hendrerit interdum odio sit amet laoreet. Curabitur aliquam pharetra tristique. Nunc a libero sapien. Aliquam cursus aliquet felis, nec tincidunt dolor fermentum aliquet. Vestibulum nisl felis, consectetur vel fringilla id, faucibus vel nibh. `
const tabProps = unstable_getTabProps()

function TabList(props) {
  return (
    <div {...tabProps.tabList} {...props}>
      {props.children}
    </div>
  )
}

function Tab(props) {
  return (
    <button {...tabProps.tab} {...props}>
      {props.children}
    </button>
  )
}

function SmallTab(props) {
  const smallTabProps = unstable_getTabProps({
    size: 's',
  })

  return (
    <button {...smallTabProps.tab} {...props}>
      {props.children}
    </button>
  )
}

function TabPanel(props) {
  return (
    <div {...tabProps.tabPanel} {...props}>
      {props.children}
    </div>
  )
}

function useTabs() {
  return {
    panelList: [
      'panel1',
      'panel2',
      'panel3',
      'panel4',
      'panel5',
      'panel6',
      'panel7',
      'panel8',
      'panel9',
      'panel10',
    ],
    panels: {
      panel1: {
        id: `panel1`,
        'aria-hidden': false,
        'aria-expanded': true,
      },
      panel2: {
        id: `panel2`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel3: {
        id: `panel3`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel4: {
        id: `panel4`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel5: {
        id: `panel5`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel6: {
        id: `panel6`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel7: {
        id: `panel7`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel8: {
        id: `panel8`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel9: {
        id: `panel9`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
      panel10: {
        id: `panel10`,
        'aria-hidden': true,
        'aria-expanded': false,
      },
    },
    tabList: [
      'tab1',
      'tab2',
      'tab3',
      'tab4',
      'tab5',
      'tab6',
      'tab7',
      'tab8',
      'tab9',
      'tab10',
    ],
    tabs: {
      tab1: {
        id: `tab1`,
        'aria-controls': 'panel1',
        'aria-selected': true,
        tabIndex: 0,
      },
      tab2: {
        id: `tab2`,
        'aria-controls': 'panel2',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab3: {
        id: `tab3`,
        'aria-controls': 'panel3',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab4: {
        id: `tab4`,
        'aria-controls': 'panel4',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab5: {
        id: `tab5`,
        'aria-controls': 'panel5',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab6: {
        id: `tab6`,
        'aria-controls': 'panel6',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab7: {
        id: `tab7`,
        'aria-controls': 'panel7',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab8: {
        id: `tab8`,
        'aria-controls': 'panel8',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab9: {
        id: `tab9`,
        'aria-controls': 'panel9',
        'aria-selected': false,
        tabIndex: -1,
      },
      tab10: {
        id: `tab10`,
        'aria-controls': 'panel10',
        'aria-selected': false,
        tabIndex: -1,
      },
    },
  }
}

export default function Tabs({ logJS }) {
  const { tabs, panels } = useTabs()

  useEffect(() => {
    if (logJS) {
      console.log(unstable_getJSTabProps())
    }
  }, [logJS])

  return (
    <div id="tabs">
      <h3>Tabs</h3>
      <div
        className="App-container"
        style={{ flexDirection: 'column', textAlign: 'start' }}
      >
        <TabList>
          {Object.values(tabs).map((props, index) => (
            <SmallTab key={props.id} {...props}>
              Tab {index + 1}
            </SmallTab>
          ))}
        </TabList>
        <TabList>
          {Object.values(tabs).map((props, index) => (
            <Tab key={props.id} {...props}>
              Tab {index + 1}
            </Tab>
          ))}
        </TabList>
        {Object.values(panels).map((props, index) => (
          <TabPanel key={props.id} {...props}>
            <h4>Panel {index + 1}</h4>
            {lorem}
          </TabPanel>
        ))}
      </div>
    </div>
  )
}
