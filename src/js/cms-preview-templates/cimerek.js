import React from "react";
import ImageGrid from "./components/image_grid";

export default class CimerekPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div>
      <section id="references">
        <div class="references-header">
        <h2 class="section-title">Címerek</h2>
        <hr/>
        <p>Felvarrható hímzett címereinket műszálas alapanyagra, poliészter cérnával készítjük, színtartósságuk garantált.</p>
        <h5>Árainkat ÁFA nem terheli.</h5>
        </div>
      </section>
      <ImageGrid galleries={entry.getIn(["data", "galleries"])} getAsset={getAsset} />
    </div>;
  }
}
