import React from 'react';
import { connect } from 'react-redux';

import { Container } from './style';

const Preview = ({maxZ, items}) => <Container>
    {Object.keys(items).map(k => {
        const e = items[k];
        return <img key={e.id} src={e.url} title={e.filename} />
    })}
</Container>

export default connect(({preview: {maxZ, items}}) => ({
    maxZ,
    items,
}))(Preview)