import React from "react";

import ImageGrid from "./components/image_grid";

export default class MagyarJelkepekPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    return <div><section id="references">
        <div class="references-header">
            <h2 class="section-title">Magyar jelképek</h2>
            <hr/>
            <p>Felvarróinkat műszálas alapanyagra, poliészter cérnával készítjük, színtartósságuk garantált.</p>
            <h5>Árainkat ÁFA nem terheli.</h5>
        </div>
        </section>
        <ImageGrid galleries={entry.getIn(["data", "galleries"])} />
    </div>;
  }
}
