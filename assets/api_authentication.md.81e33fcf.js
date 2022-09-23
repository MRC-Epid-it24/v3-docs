import{_ as e,c as s,o as n,a}from"./app.309a8d3d.js";const y=JSON.parse('{"title":"Authentication","description":"","frontmatter":{},"headers":[{"level":2,"title":"Signing in using a global account","slug":"signing-in-using-a-global-account","link":"#signing-in-using-a-global-account","children":[{"level":3,"title":"Response","slug":"response","link":"#response","children":[]}]},{"level":2,"title":"Signing in using a survey alias","slug":"signing-in-using-a-survey-alias","link":"#signing-in-using-a-survey-alias","children":[{"level":3,"title":"Response","slug":"response-1","link":"#response-1","children":[]}]},{"level":2,"title":"Signing in using an URL-embedded token","slug":"signing-in-using-an-url-embedded-token","link":"#signing-in-using-an-url-embedded-token","children":[{"level":3,"title":"Response","slug":"response-2","link":"#response-2","children":[]}]},{"level":2,"title":"Refreshing the access token","slug":"refreshing-the-access-token","link":"#refreshing-the-access-token","children":[{"level":3,"title":"Response","slug":"response-3","link":"#response-3","children":[]}]},{"level":2,"title":"Using the access token","slug":"using-the-access-token","link":"#using-the-access-token","children":[]}],"relativePath":"api/authentication.md"}'),o={name:"api/authentication.md"},t=a(`<h1 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h1><p>Intake24 uses a two-stage authentication system that is based on two classes of authentication tokens called refresh and access tokens.</p><p><strong>Refresh tokens</strong> are issued through a credentials (i.e. user name and password) based authentication procedure. Refresh tokens are similar to the traditional API keys in that they are long-lived and must be stored securely by the API client for long-term use once the credentials have been authenticated.</p><p><strong>Access tokens</strong> are required to access the actual API endpoints. Access tokens are obtained by presenting a valid refresh token to the server. They are short-lived; the exact validity period depends on the server configuration but is typically 10 minutes up to 2 hours. They cannot be extended and a new token must be obtained if the previous one has expired.</p><p>See <a href="https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/" target="_blank" rel="noreferrer">https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/</a> for an in-depth explanation of the refresh/access token system.</p><h2 id="signing-in-using-a-global-account" tabindex="-1">Signing in using a global account <a class="header-anchor" href="#signing-in-using-a-global-account" aria-hidden="true">#</a></h2><p>To obtain a <em>refresh</em> token for a global system account (e.g. admin or survey staff), <code>POST</code> a sign in request to</p><p><code>/signin</code></p><p>with the following JSON body:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">john@smith.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password123</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>where</p><ul><li><em>email</em> is the user&#39;s system-wide e-mail address</li><li><em>password</em> is the user&#39;s password</li></ul><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h3><ul><li><p><code>HTTP 200 OK</code>: successful authentication.</p><p>The body is a JSON object containing a single field, <em>refreshToken</em>:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">refreshToken</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(refresh token in JWT format)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>NOTE:</strong> The application must cache the refresh token <strong>securely</strong> for long-term use.</p></li><li><p><code>HTTP 401 Unauthorized</code>: the provided credentials were not recognised.</p></li></ul><h2 id="signing-in-using-a-survey-alias" tabindex="-1">Signing in using a survey alias <a class="header-anchor" href="#signing-in-using-a-survey-alias" aria-hidden="true">#</a></h2><p>To obtain a <em>refresh</em> token for a survey respondent using their internal survey alias, <code>POST</code> a sign in request to</p><p><code>/signin/alias</code></p><p>with the following JSON body:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">surveyId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my_survey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">userName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password123</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>where</p><ul><li><em>survey_id</em> is the survey id for the user that you are signing in as (user names are unique w.r.t individual surveys, but not system-wide).</li><li><em>username</em> is the survey user ID (does not have to be unique system-wide)</li><li><em>password</em> is the user&#39;s password</li></ul><h3 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-hidden="true">#</a></h3><ul><li><p><code>HTTP 200 OK</code>: successful authentication. The body is a JSON object containing a single field, <em>refreshToken</em>:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">refreshToken</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(refresh token in JWT format)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>NOTE:</strong> The application must cache the refresh token <strong>securely</strong> for long-term use.</p></li><li><p><code>HTTP 401 Unauthorized</code>: the provided credentials were not recognised.</p></li></ul><h2 id="signing-in-using-an-url-embedded-token" tabindex="-1">Signing in using an URL-embedded token <a class="header-anchor" href="#signing-in-using-an-url-embedded-token" aria-hidden="true">#</a></h2><p>To obtain a <em>refresh</em> token for a survey respondent using the URL-embedded authentication token, <code>POST</code> a sign in request to</p><p><code>/signin/token/&lt;token&gt;</code></p><p>where</p><ul><li><em>token</em> is the user&#39;s personal authentication token</li></ul><h3 id="response-2" tabindex="-1">Response <a class="header-anchor" href="#response-2" aria-hidden="true">#</a></h3><ul><li><p><code>HTTP 200 OK</code>: successful authentication. The body is a JSON object containing a single field, <em>refreshToken</em>:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">refreshToken</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(refresh token in JWT format)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>NOTE:</strong> The application must cache the refresh token securely for long-term use.</p></li><li><p><code>HTTP 401 Unauthorized</code>: the provided credentials were not recognised.</p></li></ul><h2 id="refreshing-the-access-token" tabindex="-1">Refreshing the access token <a class="header-anchor" href="#refreshing-the-access-token" aria-hidden="true">#</a></h2><p>To obtain a new <em>access</em> token, <code>POST</code> a refresh request to</p><p><code>/refresh</code></p><p>with an empty body and the value of a valid <em>refresh</em> token in the <code>X-Auth-Token</code> header.</p><h3 id="response-3" tabindex="-1">Response <a class="header-anchor" href="#response-3" aria-hidden="true">#</a></h3><ul><li><p><code>HTTP 200 OK</code>: successful access token renewal.</p><p>The body is JSON object containing a single field, <em>accessToken</em>:</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">accessToken</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(access token in JWT format)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>NOTE</strong>: The application <strong>must cache and reuse</strong> the access token until it is rejected with the <code>HTTP 401 Unauthorized</code> code, in which case the application must request a new access token using this end-point and retry the affected request. Existing access tokens are automatically expired and do not need to be de-activated explicitly.</p></li><li><p><code>HTTP 401 Unauthorized</code>: the refresh token is missing or invalid.</p></li></ul><h2 id="using-the-access-token" tabindex="-1">Using the access token <a class="header-anchor" href="#using-the-access-token" aria-hidden="true">#</a></h2><p>Any API request that requires authentication (nearly all of them at the moment) must include the access token exactly as returned by the server.</p><p>The token should be sent in the <code>X-Auth-Token</code> header.</p><p>The <code>HTTP 401 Unauthorized</code> response must be expected for any API request. To correctly handle this response, the application must <a href="#refreshing-the-access-token">request a new access token</a> and retry the request.</p>`,40),l=[t];function r(i,p,c,d,u,h){return n(),s("div",null,l)}const D=e(o,[["render",r]]);export{y as __pageData,D as default};
