import React from 'react';
import Row from '../../../src/Row';
import RowCode from '!raw-loader!../../../src/Row';
import Col from '../../../src/Col';
import ColCode from '!raw-loader!../../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import grid from '../../../examples/Grid';

class GridPage extends React.Component {
  render () {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            We are using a standard 12 column fluid responsive grid system. The grid helps you layout your page in an ordered, easy fashion.
          </p>
          <h4 className='col s12'>12 Columns</h4>
          <Col s={12}>
            <ReactPlayground code={Samples.grid}>
              {grid}
            </ReactPlayground>
          </Col>
          <Col s={12}>
            <PropTable header='Row' component={RowCode} />
            <PropTable header='Col' component={ColCode} />
          </Col>
        </Col>
      </Row>
    );
  }
}
export default GridPage;
