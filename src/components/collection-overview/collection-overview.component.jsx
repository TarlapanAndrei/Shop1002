import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionOverview = ({collections}) =>(
    <div className='collection-overview'>
      {
        collections.map(({id, ...otherProps}) =>
        <CollectionPreview key={id} {...otherProps}/>)}
    </div>
  )
const mapStateToProps = createStructuredSelector({
 collections: selectCollectionsPreview
})
export default connect(mapStateToProps)(CollectionOverview);