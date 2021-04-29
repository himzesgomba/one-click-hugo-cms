import React from "react";

const GalleryIconSvg = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 226 226"
style=" fill:#000000;">
<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
    font-family="none" font-weight="none" font-size="none" text-anchor="none"
    style="mix-blend-mode: normal">
    <path d="M0,226v-226h226v226z" fill="none"></path>
    <g fill="#ffffff">
        <path
            d="M56.5,28.25c-3.39599,-0.04803 -6.55477,1.7362 -8.26678,4.66947c-1.71201,2.93327 -1.71201,6.56113 0,9.49439c1.71201,2.93327 4.87079,4.7175 8.26678,4.66947h131.83333v103.58333c-0.04803,3.39599 1.7362,6.55477 4.66947,8.26678c2.93327,1.71201 6.56113,1.71201 9.49439,0c2.93327,-1.71201 4.7175,-4.87079 4.66947,-8.26678v-103.58333c0,-10.29301 -8.54032,-18.83333 -18.83333,-18.83333zM28.25,65.91667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v94.16667c0,10.38658 8.44675,18.83333 18.83333,18.83333h122.41667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-94.16667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333z">
        </path>
    </g>
</g>
</svg>;

export default class ImageGrid extends React.Component {
    render() {
      const {galleries, getAsset} = this.props;

      return <section className="index-gallery">
            {(galleries || []).map((gallery, i) => 
              <div className="gallery-image"
                key={i}
               data-images={ JSON.stringify((gallery.get('images') || []).map(x => {
                return {thumb: x.get('thumb') && getAsset(x.get('thumb')),
                        img: x.get('img') && getAsset(x.get('img')),
                        price: x.get('price'),
                        description: x.get('description')};
               })) } >
             <a style={{"background-image": `url(${getAsset(gallery.get('backgroundimage'))})`}} 
                href="#">
                 <span>{ gallery.get('title') }
                     <br/>
                     <b>{ gallery.get('price') }</b>
                     <br/>
                 </span>
                 { (gallery.get('images') || []).length > 1 && GalleryIconSvg }
             </a>
         </div>
        )}
      </section>;
    }
  }