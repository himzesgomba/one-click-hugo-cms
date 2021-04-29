import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import TarisznyaPreview from "./cms-preview-templates/tarisznya";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("tarisznya", TarisznyaPreview);
CMS.registerPreviewTemplate("egyeb_termekek", PostPreview);
CMS.registerPreviewTemplate("cimerek", ProductsPreview);
CMS.registerPreviewTemplate("magyar_jelkepek", ValuesPreview);
CMS.registerPreviewTemplate("referenciak", ContactPreview);
CMS.registerPreviewTemplate("ajanlatkeres", ContactPreview);
CMS.init();
