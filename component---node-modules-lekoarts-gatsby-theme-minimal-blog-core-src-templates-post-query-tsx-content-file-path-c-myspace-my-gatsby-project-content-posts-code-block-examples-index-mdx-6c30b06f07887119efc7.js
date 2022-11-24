"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[131],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(3250),o=n(6799),c=n(8871);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(s,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:s=""}=e;const m=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:h,siteImage:d,author:E}=m,b={title:t?t+" | "+u:p,description:n||h,url:""+g+(i||""),image:""+g+(o||d)};return r.createElement(r.Fragment,null,r.createElement("title",null,b.title),r.createElement("meta",{name:"description",content:b.description}),r.createElement("meta",{name:"image",content:b.image}),r.createElement("meta",{property:"og:title",content:b.title}),r.createElement("meta",{property:"og:url",content:b.url}),r.createElement("meta",{property:"og:description",content:b.description}),r.createElement("meta",{property:"og:image",content:b.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:b.title}),r.createElement("meta",{name:"twitter:url",content:b.url}),r.createElement("meta",{name:"twitter:description",content:b.description}),r.createElement("meta",{name:"twitter:image",content:b.image}),r.createElement("meta",{name:"twitter:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:creator",content:E}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),s?r.createElement("link",{rel:"canonical",href:s}):null,c)}},6744:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.F},default:function(){return m}});var r=n(7294),a=n(1151);const l={large:{width:300,height:380},compact:{width:300,height:80}};var i=function(e){let{uri:t,view:n,theme:a,size:i}=e;return r.createElement("iframe",{title:"Spotify",className:"SpotifyPlayer",src:"https://embed.spotify.com/?uri="+t+"&view="+n+"&theme="+a,width:l[i].width,height:l[i].height,frameBorder:"0",allowtransparency:"true"})};function o(e){const t=Object.assign({p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Here will a React component go:"),"\n",r.createElement(i,{uri:"spotify:user:bbcamerica:playlist:3w18u69NplCpXVG4fQG726",size:"large",theme:"black",view:"list"}),"\n",r.createElement(t.p,null,"Here will a normal code block go:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"(function() {\r\n\r\nvar cache = {};\r\nvar form = $('form');\r\nvar minified = true;\r\n\r\nvar dependencies = {};\r\n\r\nvar treeURL = 'https://api.github.com/repos/PrismJS/prism/git/trees/gh-pages?recursive=1';\r\nvar treePromise = new Promise(function(resolve) {\r\n  $u.xhr({\r\n    url: treeURL,\r\n    callback: function(xhr) {\r\n      if (xhr.status < 400) {\r\n        resolve(JSON.parse(xhr.responseText).tree);\r\n      }\r\n    }\r\n  });\r\n});\n")),"\n",r.createElement(t.p,null,"A code block with a JSDoc comment, short, and long comment:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"/**\r\n * Get value out of string (e.g. rem => px)\r\n * If value is px strip the px part\r\n * If the input is already a number only return that value\r\n * @param {string | number} input\r\n * @param {number} [rootFontSize]\r\n * @return {number} Number without last three characters\r\n * @example removeLastThree('6rem') => 6\r\n */\r\nconst getValue = (input, rootFontSize = 16) => {\r\n  if (typeof input === `number`) {\r\n    return input / rootFontSize;\r\n  }\r\n\r\n  const isPxValue = input.slice(-2) === `px`;\r\n\r\n  if (isPxValue) {\r\n    return parseFloat(input.slice(0, -2));\r\n  }\r\n\r\n  return parseFloat(input.slice(0, -3));\r\n};\r\n\r\n// This is a little helper function\r\nconst helper = (a, b) => a + b;\r\n\r\n// This is also a little helper function but this time with a really long one-line comment that should show some more details\r\nconst morehelper = (a, b) => a * b;\r\n\r\nexport { getValue, helper, morehelper };\n")),"\n",r.createElement(t.p,null,"Normal block without language:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'import Test from "../components/test"\r\n\r\nconst Layout = ({ children }) => (\r\n  <Test>\r\n    {children}\r\n  </Test>\r\n)\r\n\r\nexport default Layout\n')),"\n",r.createElement(t.p,null,"Code block with code highlighting:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx",title:"src/components/post.jsx",highlight:"5-7,10"},'import * as React from "react";\r\n\r\nconst Post = ({ data: { post } }) => (\r\n  <Layout>\r\n    <Heading variant="h2" as="h2">\r\n      {post.title}\r\n    </Heading>\r\n    <p\r\n      sx={{\r\n        color: `secondary`,\r\n        mt: 3,\r\n        a: { color: `secondary` },\r\n        fontSize: [1, 1, 2],\r\n      }}\r\n    >\r\n      <span>{post.date}</span>\r\n      {post.tags && (\r\n        <React.Fragment>\r\n          {` — `}\r\n          <ItemTags tags={post.tags} />\r\n        </React.Fragment>\r\n      )}\r\n    </p>\r\n    <section\r\n      sx={{\r\n        ...CodeStyles,\r\n        my: 5,\r\n        ".gatsby-resp-image-wrapper": { my: 5, boxShadow: `lg` },\r\n      }}\r\n    >\r\n      <MDXRenderer>{post.body}</MDXRenderer>\r\n    </section>\r\n  </Layout>\r\n);\r\n\r\nexport default Post;\n')),"\n",r.createElement(t.p,null,"Code block without title:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"Harry Potter and the Philosopher's Stone\n")),"\n",r.createElement(t.p,null,"Code block with lineNumbers (and lang):"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-text",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",r.createElement(t.p,null,"Code block with lineNumbers (and without lang):"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-none",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",r.createElement(t.p,null,"Code block with only the title:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-none",title:"src/utils/scream.js"},"const scream = (input) => window.alert(input)\n")),"\n",r.createElement(t.p,null,"Code block with only the title and with lineNumbers:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-none",title:"src/utils/scream.js",withLineNumbers:!0},"const scream = (input) => window.alert(input)\n")),"\n",r.createElement(t.p,null,"Line highlighting without code title:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js",highlight:"2,4-5"},'const test = 3;\r\nconst foo = "bar";\r\nconst harry = "potter";\r\nconst hermione = "granger";\r\nconst ron = "weasley";\n')),"\n",r.createElement(t.p,null,"Here will ",r.createElement(t.code,null,"inline code")," go, just inside the text. Wow!"),"\n",r.createElement(t.p,null,"Code block with line numbers, highlighting, language, and title:"),"\n",r.createElement("div",{"data-testid":"code-block"},r.createElement(t.pre,null,r.createElement(t.code,{className:"language-tsx",title:"src/components/blog.tsx",highlight:"7-9,16",withLineNumbers:!0},'import * as React from "react";\r\n\r\nconst Blog = ({ posts }: PostsProps) => {\r\n  const { tagsPath, basePath } = useSiteMetadata();\r\n\r\n  return (\r\n    <Layout>\r\n      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>\r\n        <Heading variant="h2" as="h2">\r\n          Blog\r\n        </Heading>\r\n        <Styled.a\r\n          as={Link}\r\n          sx={{ variant: `links.secondary` }}\r\n          to={`/${basePath}/${tagsPath}`.replace(/\\/\\/+/g, `/`)}\r\n        >\r\n          View all tags\r\n        </Styled.a>\r\n      </Flex>\r\n      <Listing posts={posts} sx={{ mt: [4, 5] }} />\r\n    </Layout>\r\n  );\r\n};\r\n\r\nexport default Blog;\n'))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},s=n(4765);function m(e){return r.createElement(s.Z,e,r.createElement(c,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-myspace-my-gatsby-project-content-posts-code-block-examples-index-mdx-6c30b06f07887119efc7.js.map