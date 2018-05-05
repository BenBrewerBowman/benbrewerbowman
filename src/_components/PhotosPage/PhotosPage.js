import React from 'react';
import Gallery from 'react-photo-gallery';
import ImageGallery from 'react-image-gallery';
import Lightbox from 'react-images';

import BryceCanyon from './img/bryce-canyon.jpg';
import CapitolReef from './img/capitol-reef.jpg';
import DelicateArch from './img/delicate-arch.jpg';
import MountainBike from './img/mountain-bike.jpg';
import RedCastleUpper from './img/red-castle-upper.jpg';
import RedCastleBen from './img/red-castle-ben.jpg';
import RedCastle from './img/red-castle.jpg';
import RockyMountainLake from './img/rocky-mountain-lake.jpg';
import Squirrel from './img/squirrel.jpg';
import Sunset from './img/sunset.jpg';
import Waterfall from './img/waterfall.jpg';
import YellowMarmot from './img/yellow-marmot.jpg';


const styles = {

    container: {
        padding: '50px 0px',
        backgroundColor: 'whiteSmoke',
    },

    header: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 36,
        // backgroundColor: '#1DE9B6'
    }
}
const photos = [
    { src: RedCastle, width: 4, height: 3 },
    { src: RockyMountainLake, width: 4, height: 3 },
    { src: BryceCanyon, width: 4, height: 3 },
    { src: CapitolReef, width: 4, height: 3 },
    { src: DelicateArch, width: 3, height: 4 },
    { src: MountainBike, width: 4, height: 3 },
    { src: RedCastleBen, width: 3, height: 4 },
    { src: RedCastleUpper, width: 10, height: 3 },
    { src: Squirrel, width: 4, height: 3 },
    { src: YellowMarmot, width: 4, height: 3 },
    { src: Sunset, width: 4, height: 3 },
    { src: Waterfall, width: 4, height: 3 },
];


class PhotosPage extends React.Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
        <div style={styles.container} id={this.props.id}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <h1 style={styles.header}> If you're not living life, you're not living right! </h1>
                <h3 style={{textAlign: 'center', marginBottom: 20, maxWidth: 1000}}>
                These are some photos from some of my greatest experiences in both Colorado and Utah. 
                From the deserts of southern Utah to the rockies of Colorado, I am amazed by the beauty of the Western US.
                </h3>
            </div>
            <Gallery photos={photos} onClick={this.openLightbox} />
            <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            />
        </div>
    )
  }
}

export {PhotosPage};

