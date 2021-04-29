import React from "react";
import ImageGrid from "./components/image_grid";

export default class EgyebTermekekPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div><section id="references">
      <div class="references-header">
        <h2 class="section-title">Egyéb termékek</h2>
        <hr/>
        <p>Hímzett ajándéktárgyak különböző alkalmakra, kiváló minőségben!</p>
        <h5>Árainkat ÁFA nem terheli.</h5>
      </div>
      </section>
      <ImageGrid galleries={entry.getIn(["data", "galleries"])} getAsset={getAsset} />
    </div>;
  }
}
