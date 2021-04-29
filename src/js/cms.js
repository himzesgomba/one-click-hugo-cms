import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import TarisznyaPreview from "./cms-preview-templates/tarisznya";
import EgyebTermekekPreview from "./cms-preview-templates/egyeb_termekek";
import CimerekPreview from "./cms-preview-templates/cimerek";
import MagyarJelkepekPreview from "./cms-preview-templates/magyar_jelkepek";
import ReferenciakPreview from "./cms-preview-templates/referenciak";
import AjanlatkeresPreview from "./cms-preview-templates/ajanlatkeres";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("tarisznya", TarisznyaPreview);
CMS.registerPreviewTemplate("egyeb_termekek", EgyebTermekekPreview);
CMS.registerPreviewTemplate("cimerek", CimerekPreview);
CMS.registerPreviewTemplate("magyar_jelkepek", MagyarJelkepekPreview);
CMS.registerPreviewTemplate("referenciak", ReferenciakPreview);
CMS.registerPreviewTemplate("ajanlatkeres", AjanlatkeresPreview);
CMS.init();
