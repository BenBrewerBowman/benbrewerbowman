import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import BryceCanyon from '../_img/bryce-canyon.jpg';
import CapitolReef from '../_img/capitol-reef.jpg';
import DelicateArch from '../_img/delicate-arch.jpg';
import MountainBike from '../_img/mountain-bike.jpg';
import RedCastleUpper from '../_img/red-castle-upper.jpg';
import RedCastleBen from '../_img/red-castle-ben.jpg';
import RedCastle from '../_img/red-castle.jpg';
import RockyMountainLake from '../_img/rocky-mountain-lake.jpg';
import Squirrel from '../_img/squirrel.jpg';
import Sunset from '../_img/sunset.jpg';
import Waterfall from '../_img/waterfall.jpg';
import YellowMarmot from '../_img/yellow-marmot.jpg';


const styles = {
    container: {
        padding: '50px 0px',
        backgroundColor: 'whiteSmoke',
    },
    flexColumn: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    header: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 36,
    },
    paragraph: {
        textAlign: 'center', 
        marginBottom: 30, 
        maxWidth: 1000
    }
}


const photos = [
    { src: RedCastle, width: 4, height: 3 },
    { src: RockyMountainLake, width: 4, height: 3 },
    { src: BryceCanyon, width: 4, height: 3 },
    { src: DelicateArch, width: 3, height: 4 },
    { src: CapitolReef, width: 4, height: 3 },
    { src: MountainBike, width: 4, height: 3 },
    { src: RedCastleBen, width: 3, height: 4 },
    { src: RedCastleUpper, width: 10, height: 3 },
    { src: Squirrel, width: 4, height: 3 },
    { src: YellowMarmot, width: 4, height: 3 },
    { src: Sunset, width: 4, height: 3 },
    { src: Waterfall, width: 4, height: 3 },
];


class PhotosPage extends React.Component {

    state = { 
        currentImage: 0,
        lightboxIsOpen: false,
        numColumns: 3
    };

    openLightbox = (event, obj) => {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true
        });
    }

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize',  this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        if(window.innerWidth < 750) 
            this.setState({ numColumns: 2 });
        else
            this.setState({ numColumns: 3 });
    }

    render() {
        const { numColumns } = this.state;

        return (
            <div style={styles.container} id={this.props.id}>
                <div style={styles.flexColumn} >
                    <h1 style={styles.header}> If you're not living life, you're not living right! </h1>
                    <h3 style={styles.paragraph}>
                        One of my favorite things to do in my free time is visit national parks, forests, and monuments.
                        These are some photos from some of my greatest experiences in both Colorado and Utah.
                        From the deserts of southern Utah to the rockies of Colorado, I am amazed by the beauty of the Western US.
                    </h3>
                </div>
                <Gallery photos={photos} onClick={this.openLightbox} columns={numColumns}/>
                <Lightbox 
                    images={photos}
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

export { PhotosPage };