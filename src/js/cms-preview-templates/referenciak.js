import React from "react";

import ImageGrid from "./components/image_grid";

export default class ReferenciakPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    return <div><section id="references">
    <div class="references-header">
        <h2 class="section-title">Referenciák</h2>
        <hr/>
        <p>Eddigi munkáink közül néhány:</p>
       </div>
    </section>
    <ImageGrid galleries={entry.getIn(["data", "galleries"])} getAsset={getAsset} />
    </div>;
  }
}
