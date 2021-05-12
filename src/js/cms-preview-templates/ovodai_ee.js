import React from "react";
import ImageGrid from "./components/image_grid";

export default class Ovodai_EePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div><section id="references">
      <div class="references-header">
          <h2 class="section-title">Óvodai jelek - E, É</h2>
          <hr/>
          <p>Esztétikus, könnyen kezelhető, jól mosható jelek, fehér selyemre hímezve, 3x3 cm-es, 5x5 cm-es és 10x10 cm-es méretben. Néhány öltéssel felvarrva egyszerűen rögzíthetők bármilyen felsőruházatra, törülközőre, ágyneműre, fésűtartóra, ballagási tarisznyára, stb.</p>
          <h5>Árainkat ÁFA nem terheli.</h5>
      </div>
      </section>
      <ImageGrid galleries={entry.getIn(["data", "galleries"])} getAsset={getAsset} />
    </div>;
  }
}
