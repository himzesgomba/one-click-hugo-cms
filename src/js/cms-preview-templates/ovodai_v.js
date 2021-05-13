import React from "react";
import ImageGrid from "./components/image_grid";

export default class Ovodai_VPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div><section id="references">
      <div class="references-header">
          <h2 class="section-title">Óvodai jelek - V</h2>
          <hr/>
          <p>A jelek 3x3 cm-es, 5x5 cm-es és 10x10 cm-es méretben készülnek. A fehér szatén alapanyag és a hímzőcérna poliészter, ezáltal könnyen tisztítható, színtartóssága garantált: akár 90 fokon is mosható. Vasalás max. közepes hőfokon!</p>
          <h5>Árainkat ÁFA nem terheli.</h5>
      </div>
      </section>
      <ImageGrid galleries={entry.getIn(["data", "galleries"])} getAsset={getAsset} />
    </div>;
  }
}
