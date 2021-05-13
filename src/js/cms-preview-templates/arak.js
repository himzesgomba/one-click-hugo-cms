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
        <p>A postaköltség 20 db-ig 700 Ft, 20 db fölött 1100 Ft/küldemény (ajánlott elsőbbségi levél).
                Fizetés előre utalással lehetséges, ehhez a pontos számlázási adatokat a megrendelés során kérjük megadni.</p>


            <p>Szállítási határidő max. 7-10 nap.</p>

            <p>Kereskedők kérjék egyedi árainkat!</p>
            <p>Árainkat ÁFA nem terheli!</p>
            <a href="/ajanlatkeres" type="button" style="text-decoration: none;">Árajánlatkérés!</a>
        </div>
    </div>
    </section>
    </div>;
  }
}
