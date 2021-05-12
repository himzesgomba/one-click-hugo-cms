import React from "react";
import ImageGrid from "./components/image_grid";

export default class ArakPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div><section id="arak">
    <div class="arak-header">
        <h2>Árak</h2>
        <p>Kiváló minőséget kínálunk igen kedvező áron!</p>
    </div>
    <div class="arak-container">
        <div class="arak-text">
            <h4>Óvodai jelek árai:</h4>
            {(entry.getIn(['data', 'arak_text']) || []).map((arak_text, i) => 
                            <p key={i}>{arak_text.get('arak') }</p>)}
        </div>
        <div class="bemutat-text">
            <p>Óvodai csoportok számára lehetőséget biztosítunk fajtánként 1-2 db jel vásárlására is, ezesetben a jelek ára 120 Ft/db (3x3 cm).</p>

            <p>A postaköltség a rendelt termékek súlyától függően 500-600 Ft.
                Fizetés lehetséges banki átutalással (költsége az adott banktól függ), postai utalvánnyal (költsége min. 540 Ft), vagy készpénzben az áru átvételekor.
                Utánvétes küldemény feladását a Posta drasztikus áremelése (2013.07.01.) miatt nem vállalom!</p>


            <p>Szállítási határidő (a fizetési módtól függően) max. 7-10 nap.</p>

            <p>Kereskedők kérjék egyedi árainkat!</p>
            <a href="/ajanlatkeres" type="button" style="text-decoration: none;">Árajánlatkérés!</a>
        </div>
    </div>
    </section>
    </div>;
  }
}
