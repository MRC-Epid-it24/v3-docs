import{_ as e,c as a,o as s,a as n}from"./app.309a8d3d.js";const h=JSON.parse('{"title":"Portion size methods","description":"","frontmatter":{},"headers":[{"level":2,"title":"List as served image sets","slug":"list-as-served-image-sets","link":"#list-as-served-image-sets","children":[]},{"level":2,"title":"Get as served set record","slug":"get-as-served-set-record","link":"#get-as-served-set-record","children":[]},{"level":2,"title":"Export as served set record in a portable format","slug":"export-as-served-set-record-in-a-portable-format","link":"#export-as-served-set-record-in-a-portable-format","children":[]},{"level":2,"title":"Import as served set record from a portable format","slug":"import-as-served-set-record-from-a-portable-format","link":"#import-as-served-set-record-from-a-portable-format","children":[]},{"level":2,"title":"Create new as served set","slug":"create-new-as-served-set","link":"#create-new-as-served-set","children":[]},{"level":2,"title":"Create new as served set from existing source images","slug":"create-new-as-served-set-from-existing-source-images","link":"#create-new-as-served-set-from-existing-source-images","children":[]},{"level":2,"title":"Update as served set","slug":"update-as-served-set","link":"#update-as-served-set","children":[]},{"level":2,"title":"Delete as served set","slug":"delete-as-served-set","link":"#delete-as-served-set","children":[]},{"level":2,"title":"List image maps","slug":"list-image-maps","link":"#list-image-maps","children":[]},{"level":2,"title":"Get image map record","slug":"get-image-map-record","link":"#get-image-map-record","children":[]},{"level":2,"title":"Get source base image for image map","slug":"get-source-base-image-for-image-map","link":"#get-source-base-image-for-image-map","children":[]},{"level":2,"title":"Create an image map from SVG","slug":"create-an-image-map-from-svg","link":"#create-an-image-map-from-svg","children":[]},{"level":2,"title":"Upload image map (?)","slug":"upload-image-map","link":"#upload-image-map","children":[]},{"level":2,"title":"List guide images","slug":"list-guide-images","link":"#list-guide-images","children":[]},{"level":2,"title":"Get guide image record","slug":"get-guide-image-record","link":"#get-guide-image-record","children":[]},{"level":2,"title":"Delete guide image","slug":"delete-guide-image","link":"#delete-guide-image","children":[]},{"level":2,"title":"Update guide image metadata","slug":"update-guide-image-metadata","link":"#update-guide-image-metadata","children":[]},{"level":2,"title":"Update guide image objects","slug":"update-guide-image-objects","link":"#update-guide-image-objects","children":[]},{"level":2,"title":"Create a guide image","slug":"create-a-guide-image","link":"#create-a-guide-image","children":[]},{"level":2,"title":"Update portion size method selection screen image for a guide image","slug":"update-portion-size-method-selection-screen-image-for-a-guide-image","link":"#update-portion-size-method-selection-screen-image-for-a-guide-image","children":[]},{"level":2,"title":"List drinkware sets","slug":"list-drinkware-sets","link":"#list-drinkware-sets","children":[]},{"level":2,"title":"Get drinkware set record","slug":"get-drinkware-set-record","link":"#get-drinkware-set-record","children":[]}],"relativePath":"api/admin/portions-size.md"}'),i={name:"api/admin/portions-size.md"},r=n(`<h1 id="portion-size-methods" tabindex="-1">Portion size methods <a class="header-anchor" href="#portion-size-methods" aria-hidden="true">#</a></h1><h2 id="list-as-served-image-sets" tabindex="-1">List as served image sets <a class="header-anchor" href="#list-as-served-image-sets" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/as-served</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-as-served-set-record" tabindex="-1">Get as served set record <a class="header-anchor" href="#get-as-served-set-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/as-served/:id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="export-as-served-set-record-in-a-portable-format" tabindex="-1">Export as served set record in a portable format <a class="header-anchor" href="#export-as-served-set-record-in-a-portable-format" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/as-served/:id/export</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="import-as-served-set-record-from-a-portable-format" tabindex="-1">Import as served set record from a portable format <a class="header-anchor" href="#import-as-served-set-record-from-a-portable-format" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/portion-size/as-served/import</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-new-as-served-set" tabindex="-1">Create new as served set <a class="header-anchor" href="#create-new-as-served-set" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/portion-size/as-served/new</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-new-as-served-set-from-existing-source-images" tabindex="-1">Create new as served set from existing source images <a class="header-anchor" href="#create-new-as-served-set-from-existing-source-images" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/portion-size/as-served/new-from-source</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="update-as-served-set" tabindex="-1">Update as served set <a class="header-anchor" href="#update-as-served-set" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PUT /admin/portion-size/as-served/:id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="delete-as-served-set" tabindex="-1">Delete as served set <a class="header-anchor" href="#delete-as-served-set" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">DELETE /admin/portion-size/as-served/:id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="list-image-maps" tabindex="-1">List image maps <a class="header-anchor" href="#list-image-maps" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/image-map</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-image-map-record" tabindex="-1">Get image map record <a class="header-anchor" href="#get-image-map-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/image-map/:id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-source-base-image-for-image-map" tabindex="-1">Get source base image for image map <a class="header-anchor" href="#get-source-base-image-for-image-map" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/image-map/:id/base-image-source-id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-an-image-map-from-svg" tabindex="-1">Create an image map from SVG <a class="header-anchor" href="#create-an-image-map-from-svg" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/portion-size/image-map/new-from-svg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="upload-image-map" tabindex="-1">Upload image map (?) <a class="header-anchor" href="#upload-image-map" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/portion-size/image-map</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="list-guide-images" tabindex="-1">List guide images <a class="header-anchor" href="#list-guide-images" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/guide-image</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-guide-image-record" tabindex="-1">Get guide image record <a class="header-anchor" href="#get-guide-image-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET/admin/portion-size/guide-image/:id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="delete-guide-image" tabindex="-1">Delete guide image <a class="header-anchor" href="#delete-guide-image" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">DELETE /admin/portion-size/guide-image/:id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="update-guide-image-metadata" tabindex="-1">Update guide image metadata <a class="header-anchor" href="#update-guide-image-metadata" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PATCH /admin/portion-size/guide-image/:id/meta</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="update-guide-image-objects" tabindex="-1">Update guide image objects <a class="header-anchor" href="#update-guide-image-objects" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PATCH /admin/portion-size/guide-image/:id/objects</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-a-guide-image" tabindex="-1">Create a guide image <a class="header-anchor" href="#create-a-guide-image" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/portion-size/guide-image/new</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="update-portion-size-method-selection-screen-image-for-a-guide-image" tabindex="-1">Update portion size method selection screen image for a guide image <a class="header-anchor" href="#update-portion-size-method-selection-screen-image-for-a-guide-image" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/portion-size/guide-image/selection-screen-image</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="list-drinkware-sets" tabindex="-1">List drinkware sets <a class="header-anchor" href="#list-drinkware-sets" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/drinkware</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-drinkware-set-record" tabindex="-1">Get drinkware set record <a class="header-anchor" href="#get-drinkware-set-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/portion-size/drinkware/:id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,45),t=[r];function l(d,o,p,c,g,m){return s(),a("div",null,t)}const v=e(i,[["render",l]]);export{h as __pageData,v as default};