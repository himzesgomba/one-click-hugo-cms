import React from "react";

export default class AjanlatkeresPreview extends React.Component {
  render() {
    const {entry} = this.props;
    return <section id="ajanlat">
    <div class="ajanlat-header">
        <h3 class="section-title">Árajánlatkérés</h3>
        <p>Egy munkanapon belül választ küldünk!</p>
    </div>
    <div class="contact-container">
        <div class="contactForm">
            <form action="https://formsubmit.co/ajanlat@himzesgomban.hu" method="POST">
                <input type="hidden" name="_next" value="/ajanlatkeres.k" />
                <h4>Ingyenes árajánlatkérés</h4>
                <div class="inputBox">
                    <input type="text" class="kerdo" name="nev" required="required" />
                    <span>Teljes név</span>
                </div>
                <div class="inputBox">
                    <input type="text" class="kerdo" name="email" required="required" />
                    <span>Email-cím</span>
                </div>
                <div class="inputBox">
                    <input type="text" class="kerdo" name="phone" required="required" />
                    <span>Telefonszám</span>
                </div>
                <div class="inputBox">
                    <input type="radio" class="sajat" id="sajat" name="valasztas"/><label for="sajat">Saját mintát szeretnék hímeztetni</label>
                    <input type="radio" class="termek" id="termek" name="valasztas"/><label for="termek">A termékek közül szeretnék választani</label>
                    <input type="radio" class="ovoda" id="ovoda" name="valasztas"/><label for="ovoda">Az óvodai jelek közül szeretnék választani</label>
                </div>
                <div class="inputBox">
                    <select class="option" name="szolgaltatas" style={{display:"block"}} id="egyebselect" multiple>
                        <option disabled="disabled" selected="celected"><span>Válasszon a termékek közül...(Tartsa lenyomva a Ctrl gombot több elem kiválasztásához) </span></option>
                        {(entry.getIn(['data', 'lehetosegek']) || []).map((lehetoseg, i) => 
                            <option key={i}>{lehetoseg.get('opcio') }</option>)}
                    </select>
                </div>
                <div class="inputBox">
                    <select class="opovoda" name="szolgaltatas" style={{display:"block"}} id="ovodaiselect" multiple>
                        <option disabled="disabled" selected="celected"><span>Válasszon az óvodai jelek közül...(Tartsa lenyomva a Ctrl gombot több elem kiválasztásához) </span></option>
                        {(entry.getIn(['data', 'ovodaijelek']) || []).map((lehetoseg, i) => 
                            <option key={i}>{lehetoseg.get('opt') }</option>)}
                    </select>
                </div>
                <div class="inputBox">
                    <input type="text" class="kerdo" name="size"/>
                    <span>Méret</span>
                </div>
                <div class="inputBox">
                    <input type="text" class="kerdo" name="db"/>
                    <span>Darabszám</span>
                </div>
                <div class="inputBox">
                    <label for="myFile">Hímeztetni kívánt saját kép feltöltése... (JPG, JPEG, PNG, SVG, GIF, TIF, BMP)</label>
                    <input type="file" id="myFile" name="myFile" accept=".jpg, .jpeg, .png, .gif, .tif, .bmp, .svg" multiple />
                </div>
                <div class="preview">
                    <h6>Nincs fájl kiválasztva</h6>
                </div>
                <div class="inputBox">
                    <textarea name="ajanlat"></textarea>
                    <span>A munka leírása...</span>
                </div>
                <div class="inputBox">
                    <input type="submit" class="kerdo" name="" value="Árajánlatkérés elküldése" />
                </div>
            </form>
            <div id="status"></div>
        </div>
        <div class="Ajanlatinfo">
            <h1>Rendeléssel, szállítással kapcsolatos tudnivalók:</h1>
            <h2>Ha kitölti a szükséges információkat, készítünk Önnek egy ingyenes árajánlatot, amely tartalmazza a fizetendő programköltséget és a hímzés árát, valamint a várható postaköltséget és szállítási határidőt.</h2>
            <p>Ha a megrendelt hímzés darabszáma meghaladja a 200-at, a programkészítés díjtalan! Saját készítésű termékeink megvásárlása után, amennyiben nincs megelégedve a termékkel, az áru átvételétől számított nyolc munkanapon belül Ön elállhat
                vásárlási szándékától. Ha a terméket sértetlen állapotban, saját költségén visszajuttatja címünkre, a vételárat az Ön által megjelölt módon visszatérítjük.</p>
        </div>
    </div>
</section>;
  }
}
