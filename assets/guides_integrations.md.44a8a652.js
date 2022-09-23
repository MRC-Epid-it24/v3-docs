import{_ as e,c as t,o as s,a as i}from"./app.309a8d3d.js";const y=JSON.parse('{"title":"Integration with 3rd party systems","description":"","frontmatter":{},"headers":[{"level":2,"title":"Redirect out of the intake24","slug":"redirect-out-of-the-intake24","link":"#redirect-out-of-the-intake24","children":[{"level":3,"title":"Survey-specific URL","slug":"survey-specific-url","link":"#survey-specific-url","children":[]},{"level":3,"title":"Respondent-specific URL (respondent account is created beforehand)","slug":"respondent-specific-url-respondent-account-is-created-beforehand","link":"#respondent-specific-url-respondent-account-is-created-beforehand","children":[]},{"level":3,"title":"Respondent-specific URL (respondent account is created on-the-fly)","slug":"respondent-specific-url-respondent-account-is-created-on-the-fly","link":"#respondent-specific-url-respondent-account-is-created-on-the-fly","children":[]}]},{"level":2,"title":"Redirect into the Intake24 system","slug":"redirect-into-the-intake24-system","link":"#redirect-into-the-intake24-system","children":[]},{"level":2,"title":"Notifications","slug":"notifications","link":"#notifications","children":[{"level":3,"title":"Request specifications:","slug":"request-specifications","link":"#request-specifications","children":[]},{"level":3,"title":"JWT specifications:","slug":"jwt-specifications","link":"#jwt-specifications","children":[]}]}],"relativePath":"guides/integrations.md"}'),n={name:"guides/integrations.md"},a=i(`<h1 id="integration-with-3rd-party-systems" tabindex="-1">Integration with 3rd party systems <a class="header-anchor" href="#integration-with-3rd-party-systems" aria-hidden="true">#</a></h1><h2 id="redirect-out-of-the-intake24" tabindex="-1">Redirect out of the intake24 <a class="header-anchor" href="#redirect-out-of-the-intake24" aria-hidden="true">#</a></h2><h3 id="survey-specific-url" tabindex="-1">Survey-specific URL <a class="header-anchor" href="#survey-specific-url" aria-hidden="true">#</a></h3><ul><li>Respondent (user) redirected to static (generic) URL, same for whole study</li><li>The URL can include a special string <code>[intake24_username_value]</code> that will be replaced with the current user ID, e.g.:</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">https://some.url/intake24-complete?user=[intake24_username_value]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>(Note that this is the user ID as specified when creating or uploading user records and not the internal Intake24 ID)</li><li>This is set up in <code>Follow-up survey URL</code> field in survey settings</li></ul><h3 id="respondent-specific-url-respondent-account-is-created-beforehand" tabindex="-1">Respondent-specific URL (respondent account is created beforehand) <a class="header-anchor" href="#respondent-specific-url-respondent-account-is-created-beforehand" aria-hidden="true">#</a></h3><ul><li>Respondent redirected to respondent-specific URL</li><li>Respondent-specific URL uploaded using CSV file upload</li><li>Add new column to your CSV file with <code>redirect url</code> header and fill in the URLs accordingly</li><li>Upload into the Intake24 system via admin site</li></ul><h3 id="respondent-specific-url-respondent-account-is-created-on-the-fly" tabindex="-1">Respondent-specific URL (respondent account is created on-the-fly) <a class="header-anchor" href="#respondent-specific-url-respondent-account-is-created-on-the-fly" aria-hidden="true">#</a></h3><ul><li><p>Respondent redirected to respondent-unique URL</p></li><li><p>Respondent account is created during the system access / redirect from 3rd party system</p></li><li><p>Respondent account can be created using one of the following URL formats:</p><p><strong>a. Frontend URL, which redirects request to API and handles whole sign in process:</strong></p><ul><li>URL: <code>https://example.com/surveys/{survey}?createUser={jwt}</code></li></ul><p><strong>b. Direct API request, which returns respondent data in JSON response and authentication URL must be constructed from provided authentication token:</strong></p><ul><li>URL: <code>https://api.example.org/surveys/{survey}/create-user?params={jwt}</code></li></ul></li></ul><p>Response:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">userId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> -&gt; internal user id</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">redirect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> -&gt; redirect URL</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">authToken</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string -&gt; authentication token (random string)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><p>Auth URL is then: <code>https://example.com/surveys/{survey}?auth={authToken}</code></p><ul><li>Replace {survey} with survey name</li><li>Replace {jwt} with generated JWT</li><li>Replace {authToken} with authentication token returned from API response</li></ul></li><li><p>JWT specifications of supplied token:</p><ul><li>Supported algorithms \u2013 HS256 / HS512</li><li>JWT token must be signed with secret set in <code>JWT secret for user generation</code> field in survey settings (survey admin can set this up, please contact relevant Intake24 team if you don&#39;t have permissions)</li><li>PLEASE NOTE: JWT secret should be stored securely, thus ideally not embedded into 3rd party system frontend code, which gets exposed.</li><li>Expected claims are: <ul><li><code>user</code> \u2013 respondent-unique identifier to be used within the study</li><li><code>redirect</code> - 3rd party system URL where respondent should be redirected to (they need to click on the button once they submitted the recall)</li></ul></li></ul></li></ul><h2 id="redirect-into-the-intake24-system" tabindex="-1">Redirect into the Intake24 system <a class="header-anchor" href="#redirect-into-the-intake24-system" aria-hidden="true">#</a></h2><p>When respondent accounts are created using the system admin tool, authentication URLs can be downloaded back from Intake24 system. These can be then embedded into the 3rd party system for redirection</p><h2 id="notifications" tabindex="-1">Notifications <a class="header-anchor" href="#notifications" aria-hidden="true">#</a></h2><ul><li>Intake24 V3 allows to specify webhook / URL, which gets called upon at successful recall submission</li><li>This is set in <code>Submission notification URL</code> field in survey settings (survey admin can set this up, please contact relevant Intake24 team if you don&#39;t have permissions)</li></ul><h3 id="request-specifications" tabindex="-1">Request specifications: <a class="header-anchor" href="#request-specifications" aria-hidden="true">#</a></h3><ul><li>POST request / JSON content-type</li><li><code>Authorization</code> header with <code>Bearer {jwt}</code></li><li>JWT Token is signed with secret set in <code>JWT secret for user generation</code> field in survey settings (survey admin can set this up, please contact relevant Intake24 team if you don&#39;t have permissions)</li><li>Request body contains whole submission data set</li><li>a request bin or API endpoint must be set up (by external party) to capture this notification event</li></ul><h3 id="jwt-specifications" tabindex="-1">JWT specifications: <a class="header-anchor" href="#jwt-specifications" aria-hidden="true">#</a></h3><ul><li>signing algorithm \u2013 HS256</li><li>issuer \u201Cintake24\u201D</li><li>subject \u2013 alias / survey user identifier</li><li>audience \u2013 notification URL</li><li>expires in 5mins of token issue datetime</li></ul>`,21),o=[a];function r(c,l,d,p,u,h){return s(),t("div",null,o)}const m=e(n,[["render",r]]);export{y as __pageData,m as default};