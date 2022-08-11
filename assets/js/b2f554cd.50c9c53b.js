"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/01/31/v0-17-released","metadata":{"permalink":"/blog/2022/01/31/v0-17-released","editUrl":"https://github.com/orbitjs/orbit/edit/main/website/blog/2022-01-31-v0-17-released.md","source":"@site/blog/2022-01-31-v0-17-released.md","title":"v0.17 is finally final!","description":"After two years, 28 beta releases, and over 400 commits, Orbit v0.17 is finally","date":"2022-01-31T00:00:00.000Z","formattedDate":"January 31, 2022","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":5.555,"truncated":false,"authors":[{"name":"Dan Gebhardt","title":"Orbit.js Creator","url":"https://github.com/dgeb","imageURL":"https://avatars.githubusercontent.com/u/29122?v=4"}],"nextItem":{"title":"Welcome to the new Orbitjs.com","permalink":"/blog/2021/07/16/welcome-to-the-new-orbitjs"}},"content":"After two years, 28 beta releases, and over 400 commits, Orbit v0.17 is finally\\nready! \ud83c\udf89\\n\\nOrbit\'s docs have been updated to reflect all the changes. If you are upgrading\\nfrom v0.16, the place to start is the [\\"What\'s new\\"](/docs/whats-new) section.\\n\\nSome highlights of this release include:\\n\\n* **New API reference docs** &mdash; At long last, Orbit v0.17 has [API\\n  docs](/docs/api) for all its packages. These docs are generated by\\n  [TypeDoc](https://typedoc.org/) from Orbit\'s typings and code annotations.\\n  Although a bit sparse for now, this reference should only improve with time\\n  and help from the community.\\n\\n* **Improved, strict typings throughout** &mdash; By improving the quality of\\n  Orbit\'s TypeScript, we have been able to refactor more confidently, provide\\n  better documentation, and make for a better developer experience all around.\\n\\n* **Extraction of `@orbit/records` from `@orbit/data`** &mdash; As part of the\\n  push to improve typings, it became clear that [`@orbit/data`](/docs/api/data)\\n  contains a number of interfaces and classes that could prove useful for _any_\\n  type of data, not just records. Thus, record-specific types and classes\\n  were extracted into a new package: [`@orbit/records`](/docs/api/records).\\n  Apologies for the breaking changes with module imports. We wanted to get this\\n  churn out of the way before the semver constraints that will come with v1.0.\\n\\n* **Multi-expression queries** &mdash; Just as transforms can contain multiple\\n  operations, queries can now contain multiple expressions. This allows sources,\\n  such as `JSONAPISource`, to optionally perform these expressions in parallel.\\n\\n* **Per-expression/operation options** &mdash; Along with the move to\\n  multi-expression queries, we\'ve introduced per-expression options. This can be\\n  useful if, for instance, you want to specify a different target `url` per\\n  expression. Similarly, transform operations can also each have their own\\n  options.\\n\\n* **Full vs. data-only responses** &mdash; All requests (queries and updates)\\n  can now be made with the `{ fullResponse: true }` option to receive responses\\n  in the form `{ data, details, transforms, sources }`. `data` will include the\\n  primary data that would be returned without the `fullResponse` option.\\n  `details` includes response details particular to the source, and `sources`\\n  includes a named map of all the responses from downstream sources that\\n  participated in this request. This allows you to access full response\\n  documents, inverse operations, etc. _from the initial request call point_.\\n\\n* **Deprecation of `Pullable` and `Pushable` interfaces** &mdash; Now that\\n  responses can include full processing details, everything that was unique to\\n  the `push` and `pull` methods on source is redundant. The `Pullable` and\\n  `Pushable` interfaces have been deprecated to focus on the more capable\\n  `Queryable` and `Updatable` interfaces for making requests.\\n\\n* **Transform buffers for faster cache processing** &mdash; Record-cache-based\\n  sources that interact with browser storage have had performance issues when\\n  dealing with large datasets, especially when paired with read/write heavy\\n  processors that ensure relationship tracking and correctness. A new paradigm\\n  has been developed, the `RecordTransformBuffer`, that acts as a memory buffer\\n  for these operations. For now, using this buffer is opt-in, with the `{\\n  useBuffer: true }` option. You\'ll be reminded to explicitly set this option to\\n  either `true` or `false` until you do. Early users are reporting promising\\n  results with IndexedDB, such as [performance boosts of > 20x with large\\n  numbers of\\n  operations](https://github.com/orbitjs/orbit/issues/798#issuecomment-800544909).\\n\\n* **New serializers** &mdash; Concepts of serialization have, up until now, been\\n  very specific to usage by the `JSONAPISource`, and particularly the\\n  `JSONAPISerializer` class. This class has been deprecated and replaced with a\\n  series of composable serializers all built upon a simple and flexible\\n  [`Serializer`](/docs/api/serializers/interfaces/Serializer) interface. This\\n  interface, as well as some serializers for primitives (booleans, dates,\\n  date-times, etc.) have been published in a new package,\\n  [`@orbit/serializers`](/docs/api/serializers). And of course, new serializers\\n  particular to JSON:API have been added to\\n  [`@orbit/jsonapi`](/docs/api/jsonapi).\\n\\n* **New validators** &mdash; A common source of problems for Orbit developers\\n  has been using data that is malformed or doesn\'t align with a schema\'s\\n  expectations. This can cause confusing errors during processing by a cache or\\n  downstream source. To address this problem, we\'re introducing \\"validators\\",\\n  which are shipped in a new package [`@orbit/validators`](/docs/api/validators)\\n  that includes some validators for primitive types. Validators that are\\n  record-specific have also been included in\\n  [`@orbit/records`](/docs/api/records). By default, each source will build its\\n  own set of validators and use them automatically. You can instead share a\\n  common set of validators via the `validatorFor` settings. And you can opt-out\\n  of using validators entirely by configuring your sources with `{ autoValidate:\\n  false }`.\\n\\n* **Record normalizers** &mdash; When building queries and transforms, some\\n  scenarios have been more tedious than necessary: identifying records by a key\\n  instead of `id`, for instance, or using a model class from a lib like\\n  ember-orbit to reference a record instead of its json identity. A new\\n  abstraction has been added to make query and transform builders more flexible:\\n  record normalizers. Record normalizers implement the\\n  [`RecordNormalizer`](/docs/api/records/interfaces/RecordNormalizer) interface\\n  and convert record identities and/or data into a normalized form. The new base\\n  normalizer now allows `{ type, key, value }` to be used anywhere that `{ type,\\n  id }` identities can be used, which significantly reduces the annoyance of\\n  working with remote keys. Other normalizers,\\n\\n* **Synchronous change tracking in memory forks** &mdash; Previously, memory\\n  source forks behaved precisely like other memory sources: every trackable\\n  update applied at the source level (and thus async). Now, the default (but\\n  overrideable) behavior is to track changes at the cache level in forks. Thus\\n  synchronous changes can be made to a forked cache and then merged back into\\n  the base source. This better accomodates the most common use case for forks:\\n  editing form data in isolation before merging coalesced changes back to the\\n  base.\\n\\n* **Debug mode** &mdash; A new `debug` setting has been added to the `Orbit`\\n  global, that toggles between using a more verbose, developer-friendly \\"debug\\"\\n  mode of Orbit vs. a leaner, more performant production mode. Since debug mode\\n  is enabled by default, you\'ll need to set `Orbit.debug = false` in order to\\n  eliminate deprecation warnings and other debug-friendly messaging.\\n\\n* **Increased reliance on The Platform\u2122** &mdash; Orbit\'s codebase continues to\\n  evolve with the web, adopting new ES language and web platform features as\\n  they are released. Custom utilities have been gradually deprecated and phased\\n  out of the codebase (e.g. `isArray` -> `Array.isArray`), new language features\\n  such as nullish coalescing and optional chaining have been adopted, and\\n  platform features such as\\n  [`crypto.randomUUID`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)\\n  have been adopted (with a fallback implementation if unavailable).\\n\\nThese highlights are covered in more depth, including code samples, in the\\n[\\"What\'s new\\"](/docs/whats-new) section of the main guides.\\n\\nThanks for your patience with this release. We expect that v0.18 will not take\\nnearly as long as v0.17 did. In fact, we plan to use this next release primarily\\nto remove deprecated interfaces in preparation for a lean and focused v1.0\\nrelease."},{"id":"/2021/07/16/welcome-to-the-new-orbitjs","metadata":{"permalink":"/blog/2021/07/16/welcome-to-the-new-orbitjs","editUrl":"https://github.com/orbitjs/orbit/edit/main/website/blog/2021-07-16-welcome-to-the-new-orbitjs.md","source":"@site/blog/2021-07-16-welcome-to-the-new-orbitjs.md","title":"Welcome to the new Orbitjs.com","description":"I\'m excited to announce a complete refresh of Orbitjs.com! \ud83c\udf89","date":"2021-07-16T00:00:00.000Z","formattedDate":"July 16, 2021","tags":[{"label":"documentation","permalink":"/blog/tags/documentation"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.71,"truncated":false,"authors":[{"name":"Dan Gebhardt","title":"Orbit.js Creator","url":"https://github.com/dgeb","imageURL":"https://avatars.githubusercontent.com/u/29122?v=4"}],"prevItem":{"title":"v0.17 is finally final!","permalink":"/blog/2022/01/31/v0-17-released"}},"content":"I\'m excited to announce a complete refresh of Orbitjs.com! \ud83c\udf89\\n\\nOur site has been rebuilt using [Docusaurus](https://docusaurus.io/). The\\nsource for this site now lives in [Orbit\'s\\nmonorepo](https://github.com/orbitjs/orbit/tree/main/website) right alongside\\nthe packages that it describes. This will make it easier to update docs along\\nwith code, preferably even in the same PRs.\\n\\nI\'m especially excited to announce that we are finally publishing API reference\\ndocs, generated with [TypeDoc](https://typedoc.org/), alongside the Orbit\\nguides. The first API docs available are for the upcoming v0.17, which can be\\naccessed directly [here](/docs/api/) or by choosing from the documentation\\nversion selector in the upper right.\\n\\nWhile the current API docs are much better than nothing, the prose and examples\\nare pretty thin for most packages. Please be patient as we work to fill out\\nthese docs through improved code annotations. Community contributions are\\nencouraged and most welcome! \u2764\ufe0f"}]}')}}]);