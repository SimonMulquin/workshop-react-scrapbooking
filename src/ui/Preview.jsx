import React from 'react';
import { connect } from 'react-redux';

import Image from 'ui/Image';
import { Container } from './style';

const Preview = ({items}) => <Container>
    {Object.keys(items).map(k => <Image {...items[k]}/>)}
</Container>

export default connect(({preview: {items}}) => ({
    items,
}))(Preview)