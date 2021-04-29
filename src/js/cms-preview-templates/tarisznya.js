import React from "react";
import format from "date-fns/format";

import ImageGrid from "./components/image_grid";

export default class TarisznyaPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div>
      <section id="references">
       <div className="references-header">
        <h2 className="section-title">Tarisznyák</h2>
        <hr/>
        <p>Ha gyermeke már búcsúzik az óvodától, iskolától, ajánljuk hímzett ballagási tarisznyáinkat. A tarisznyák mérete 16 x 12 cm, a zsinór hossza óvodások számára 80 cm, felnőtteknek 125-130 cm. A tarisznyák szállítási határideje kb. 3 hét. Megrendeléskor
            20% előleget kérünk átutalni!</p>
        <h5>Árainkat ÁFA nem terheli.</h5>
       </div>
      </section>
      <ImageGrid galleries={entry.getIn(["data", "galleries"])} getAsset={getAsset} />
    </div>;
  }
}