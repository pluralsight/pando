import { Grid, GridItem } from '@pluralsight/react'

export default function GridPage() {
  return (
    <div>
      <h3>Grid</h3>
      <div>
        <Grid
          areas={['header header', 'nav main', 'nav footer']}
          cols="150px 1fr"
          gap="6"
          rows="2rem 10rem 5rem"
        >
          <GridItem
            area="header"
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
