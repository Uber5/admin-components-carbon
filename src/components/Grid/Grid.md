This is the outermost component for the grid system.

See ... (TODO) for more details on the grid system of Carbon.

```js
import Row from './Row';
import Column from './Column';

const SomeContent = () => (
  <div style={{ backgroundColor: 'lightgreen' }}>
    some content...
  </div>
);

<Grid>
  <Row>
    <Column spec='lg-4'>
      <SomeContent/>
    </Column>
    <Column spec='lg-4'>
      <SomeContent/>
    </Column>
    <Column spec='lg-4'>
      <SomeContent/>
    </Column>
    <Column spec='lg-8'>
      <SomeContent/>
    </Column>
  </Row>
  <Row>
    <Column spec='lg-12'>
      <SomeContent/>
    </Column>
  </Row>
</Grid>
```

TODO:
Until we figure out a better way, the following CSS is required to
have columns without padding:

```css
.bx--col-no-padding {
  padding-left: 0;
  padding-right: 0;
}
```