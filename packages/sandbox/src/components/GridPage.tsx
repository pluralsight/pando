import { Grid, GridItem } from '@pluralsight/react/dev'

export default function GridPage() {
  return (
    <div>
      <h3>Grid</h3>
      <div className="App-container">
        <Grid
          areas={['header header', 'nav main', 'nav footer']}
          cols="12"
          gap="6"
          rows="5rem 15rem 5rem"
        >
          <GridItem
            area="header"
            col="1 / span 12"
            style={{
              backgroundColor: 'yellow',
            }}
          >
            Header
          </GridItem>
          <GridItem
            area="nav"
            style={{
              backgroundColor: 'black',
            }}
          >
            Nav
          </GridItem>
          <GridItem
            area="main"
            style={{
              backgroundColor: 'white',
            }}
          >
            Main
          </GridItem>
          <GridItem
            area="footer"
            style={{
              backgroundColor: 'var(--ps-surface-medium)',
            }}
          >
            Footer
          </GridItem>
        </Grid>
      </div>
    </div>
  )
}
