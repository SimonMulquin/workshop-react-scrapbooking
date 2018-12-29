import React from 'react';
import { connect } from 'react-redux';

import { Container, Image } from './style';

const Preview = ({items}) => <Container>
    {console.log(items)}
    {Object.keys(items).map(k => {
        const e = items[k];
        return <Image 
            key={e.id} 
            src={e.url} 
            title={e.filename} 
            alt={e.filename} 
            position={e.position}
            width={e.width}
        />
    })}
</Container>

export default connect(({preview: {items}}) => ({
    items,
}))(Preview)