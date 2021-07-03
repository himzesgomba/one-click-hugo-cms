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
                    <span class="szoveg">Teljes név</span>
                    <input type="text" class="kerdo" name="nev" required="required" />
                </div>
                <div class="inputBox">
                <span class="szoveg">Email-cím</span>
                    <input type="text" class="kerdo" name="email" required="required" />
                    
                </div>
                <div class="inputBox">
                <span class="szoveg">Telefonszám</span>
                    <input type="text" class="kerdo" name="phone" required="required" />
                    
                </div>
                <div class="inputBox">
                    <span class="szoveg">Számlázási/postázási cím</span>
                    <input type="text" class="kerdo" name="nev" required="required"/>
                </div>
                <div class="inputBox">
                    <input type="radio" class="sajat" id="sajat" name="valasztas"/><label for="sajat" class="radszoveg">Saját mintát szeretnék hímeztetni</label>
                    <input type="radio" class="termek" id="termek" name="valasztas"/><label for="termek" class="radszoveg">A termékek közül szeretnék választani</label>
                    <input type="radio" class="ovoda" id="ovoda" name="valasztas"/><label for="ovoda" class="radszoveg">Az óvodai jelek közül szeretnék választani</label>
                </div>
                <div class="inputBox">
                <label for="ovodaiselect" class="szoveg">Óvodai jel kiválasztása...</label>
                    <select class="opovoda" name="szolgaltatas" id="ovodaiselect" style={{display: "block"}} multiple>
                        
                        {(entry.getIn(['data', 'ovodaijelek']) || []).map((lehetoseg, i) => 
                            <option key={i}>{lehetoseg.get('opt') }</option>)}
                    </select>
                </div>
                <div class="inputBox">
                <span class="szoveg">Méret</span>
                    <input type="text" class="kerdo" name="size"/>
                    
                </div>
                <div class="inputBox">
                <span class="szoveg">Darabszám</span>
                    <input type="text" class="kerdo" name="db"/>
                    
                </div>
                <div class="inputBox">
                    <label for="myFile" class="textszov">Hímeztetni kívánt saját kép feltöltése... (JPG, JPEG, PNG, SVG, GIF, TIF, BMP - Több kép feltöltéséhez egyszerre jelölje ki a feltölteni kívánt fájlokat)</label>
                    <input type="file" id="myFile" name="myFile" accept=".jpg, .jpeg, .png, .gif, .tif, .bmp, .svg" multiple />
                </div>
                <div class="inputBox">
                <span class="szoveg">A munka leírása...</span>
                    <textarea name="ajanlat" class="munka"></textarea>
                </div>
                <div class="inputBox">
                    <input type="submit" class="kerdo" name="" value="Árajánlatkérés elküldése" />
                </div>
            </form>
            <div id="status"></div>
        </div>
        <div class="Ajanlatinfo">
            <h1>Rendeléssel, szállítással kapcsolatos tudnivalók:</h1>
            <h2>Ha kitölti a szükséges információkat, készítünk Önnek egy ingyenes árajánlatot, amely tartalmazza az összes fizetendő költséget és a szállítási határidőt.</h2>
            <p>Amennyiben a kínálatunkból választott jelek kézhezvételét követően nincs megelégedve a vásárolt termékkel, az áru átvételétől számított nyolc munkanapon belül Ön elállhat vásárlási szándékától. Ha a terméket sértetlen állapotban, saját költségén visszajuttatja címünkre, a vételárat az Ön által megjelölt módon visszatérítjük. Az elállás joga nem vonatkozik az egyedi igények (saját minta) alapján megrendelt hímzésre.</p>
        </div>
    </div>
</section>;
  }
}
