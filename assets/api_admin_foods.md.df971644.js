import{_ as a,c as e,o,a as l}from"./app.309a8d3d.js";const f=JSON.parse('{"title":"Food lists","description":"","frontmatter":{},"headers":[{"level":2,"title":"List root categories","slug":"list-root-categories","link":"#list-root-categories","children":[]},{"level":2,"title":"List uncategorised foods","slug":"list-uncategorised-foods","link":"#list-uncategorised-foods","children":[]},{"level":2,"title":"List category contents","slug":"list-category-contents","link":"#list-category-contents","children":[]},{"level":2,"title":"Get food parent categories","slug":"get-food-parent-categories","link":"#get-food-parent-categories","children":[]},{"level":2,"title":"Get all categories that contain a food (transitive)","slug":"get-all-categories-that-contain-a-food-transitive","link":"#get-all-categories-that-contain-a-food-transitive","children":[]},{"level":2,"title":"Get subcategory parent categories","slug":"get-subcategory-parent-categories","link":"#get-subcategory-parent-categories","children":[]},{"level":2,"title":"Get all categories that contain a subcategory (transitive)","slug":"get-all-categories-that-contain-a-subcategory-transitive","link":"#get-all-categories-that-contain-a-subcategory-transitive","children":[]},{"level":2,"title":"Check if a food code is available","slug":"check-if-a-food-code-is-available","link":"#check-if-a-food-code-is-available","children":[]},{"level":2,"title":"Get a food record (global + local)","slug":"get-a-food-record-global-local","link":"#get-a-food-record-global-local","children":[]},{"level":2,"title":"Create a new food record (global)","slug":"create-a-new-food-record-global","link":"#create-a-new-food-record-global","children":[]},{"level":2,"title":"Add food to local list","slug":"add-food-to-local-list","link":"#add-food-to-local-list","children":[]},{"level":2,"title":"Create a new food record (local)","slug":"create-a-new-food-record-local","link":"#create-a-new-food-record-local","children":[]},{"level":2,"title":"Create a new food record with automatically generated code (global)","slug":"create-a-new-food-record-with-automatically-generated-code-global","link":"#create-a-new-food-record-with-automatically-generated-code-global","children":[]},{"level":2,"title":"Clone a food record","slug":"clone-a-food-record","link":"#clone-a-food-record","children":[]},{"level":2,"title":"Clone food as local","slug":"clone-food-as-local","link":"#clone-food-as-local","children":[]},{"level":2,"title":"Update main food record","slug":"update-main-food-record","link":"#update-main-food-record","children":[{"level":3,"title":"Update local food record","slug":"update-local-food-record","link":"#update-local-food-record","children":[]}]},{"level":2,"title":"Delete food record","slug":"delete-food-record","link":"#delete-food-record","children":[]},{"level":2,"title":"Check if a category code is available","slug":"check-if-a-category-code-is-available","link":"#check-if-a-category-code-is-available","children":[]},{"level":2,"title":"Get a category record (global + local)","slug":"get-a-category-record-global-local","link":"#get-a-category-record-global-local","children":[]},{"level":2,"title":"Create a new category (global)","slug":"create-a-new-category-global","link":"#create-a-new-category-global","children":[]},{"level":2,"title":"Update a category record (global)","slug":"update-a-category-record-global","link":"#update-a-category-record-global","children":[]},{"level":2,"title":"Update a category record (local)","slug":"update-a-category-record-local","link":"#update-a-category-record-local","children":[]},{"level":2,"title":"Delete a category record","slug":"delete-a-category-record","link":"#delete-a-category-record","children":[]}],"relativePath":"api/admin/foods.md"}'),s={name:"api/admin/foods.md"},n=l(`<h1 id="food-lists" tabindex="-1">Food lists <a class="header-anchor" href="#food-lists" aria-hidden="true">#</a></h1><h2 id="list-root-categories" tabindex="-1">List root categories <a class="header-anchor" href="#list-root-categories" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/browse/:locale/root-categories</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="list-uncategorised-foods" tabindex="-1">List uncategorised foods <a class="header-anchor" href="#list-uncategorised-foods" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/browse/:locale/uncategorised-foods</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="list-category-contents" tabindex="-1">List category contents <a class="header-anchor" href="#list-category-contents" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/browse/:locale/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-food-parent-categories" tabindex="-1">Get food parent categories <a class="header-anchor" href="#get-food-parent-categories" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/browse/:locale/food-parent-categories/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-all-categories-that-contain-a-food-transitive" tabindex="-1">Get all categories that contain a food (transitive) <a class="header-anchor" href="#get-all-categories-that-contain-a-food-transitive" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/browse/:locale/food-all-categories/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-subcategory-parent-categories" tabindex="-1">Get subcategory parent categories <a class="header-anchor" href="#get-subcategory-parent-categories" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/browse/:locale/category-parent-categories/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-all-categories-that-contain-a-subcategory-transitive" tabindex="-1">Get all categories that contain a subcategory (transitive) <a class="header-anchor" href="#get-all-categories-that-contain-a-subcategory-transitive" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/browse/:locale/category-all-categories/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="check-if-a-food-code-is-available" tabindex="-1">Check if a food code is available <a class="header-anchor" href="#check-if-a-food-code-is-available" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/foods/code-available/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-a-food-record-global-local" tabindex="-1">Get a food record (global + local) <a class="header-anchor" href="#get-a-food-record-global-local" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/foods/:locale/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-a-new-food-record-global" tabindex="-1">Create a new food record (global) <a class="header-anchor" href="#create-a-new-food-record-global" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/new</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="add-food-to-local-list" tabindex="-1">Add food to local list <a class="header-anchor" href="#add-food-to-local-list" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/add-to-locale</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-a-new-food-record-local" tabindex="-1">Create a new food record (local) <a class="header-anchor" href="#create-a-new-food-record-local" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/new/:locale</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-a-new-food-record-with-automatically-generated-code-global" tabindex="-1">Create a new food record with automatically generated code (global) <a class="header-anchor" href="#create-a-new-food-record-with-automatically-generated-code-global" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/new-with-temp-code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="clone-a-food-record" tabindex="-1">Clone a food record <a class="header-anchor" href="#clone-a-food-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/:locale/:code/clone</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="clone-food-as-local" tabindex="-1">Clone food as local <a class="header-anchor" href="#clone-food-as-local" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/:locale/:code/clone-as-local</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="update-main-food-record" tabindex="-1">Update main food record <a class="header-anchor" href="#update-main-food-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="update-local-food-record" tabindex="-1">Update local food record <a class="header-anchor" href="#update-local-food-record" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/foods/:locale/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="delete-food-record" tabindex="-1">Delete food record <a class="header-anchor" href="#delete-food-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">DELETE /admin/foods/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="check-if-a-category-code-is-available" tabindex="-1">Check if a category code is available <a class="header-anchor" href="#check-if-a-category-code-is-available" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/categories/code-available/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="get-a-category-record-global-local" tabindex="-1">Get a category record (global + local) <a class="header-anchor" href="#get-a-category-record-global-local" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GET /admin/categories/:locale/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="create-a-new-category-global" tabindex="-1">Create a new category (global) <a class="header-anchor" href="#create-a-new-category-global" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/categories/new</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="update-a-category-record-global" tabindex="-1">Update a category record (global) <a class="header-anchor" href="#update-a-category-record-global" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/categories/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="update-a-category-record-local" tabindex="-1">Update a category record (local) <a class="header-anchor" href="#update-a-category-record-local" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">POST /admin/categories/:locale/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="delete-a-category-record" tabindex="-1">Delete a category record <a class="header-anchor" href="#delete-a-category-record" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">DELETE /admin/categories/:code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,49),c=[n];function t(r,d,i,p,g,h){return o(),e("div",null,c)}const b=a(s,[["render",t]]);export{f as __pageData,b as default};
