A button component, which makes it easier to use an icon with it.

Other than the `icon` property, it supports all properties of the
[standard Button](http://react.carbondesignsystem.com/?selectedKind=Buttons&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs).

```js
import { iconAddOutline, iconAdd } from 'carbon-icons';
<>
  <IconButton icon={iconAddOutline}>With icon</IconButton>
  <IconButton icon={iconAdd}>With icon</IconButton>
  <IconButton>Without icon</IconButton>
  <br /><br />
  <IconButton small>Also small</IconButton>
  <IconButton small icon={iconAdd}>Also small</IconButton>
</>
```

Available icons:

```js noeditor  
import { useState } from 'react';
import * as icons from 'carbon-icons';
import { Icon, TextInput, Tile } from 'carbon-components-react';
import { Grid, Row, Column } from '../Grid';

const IconsWithFilter = () => {
  const [ filter, setFilter ] = useState('')
  return (
    <Grid>
      <Row>
        <TextInput type='text' placeholder='Filter by name' value={filter} onChange={e => {
          console.log('e', e)
          setFilter(e.target.value)
        }} />
      </Row>
      <Row>
        { icons.filter(i => i.name.match(filter)).map(icon => (
          <Column key={icon.name} spec='sm-2,md-2'>
            <Tile style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Icon icon={icon} description={icon.name} />
              {icon.name.substr(6)}
            </Tile>
          </Column>
        ))}
      </Row>
    </Grid>
  )
};

<IconsWithFilter />
```
