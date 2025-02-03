```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph of text.</p>
    </div>
  );
}
```
This simple Next.js app might not render correctly if there's an unexpected error during the rendering process.  Next.js 15, with its App Router, introduces some nuances that can cause subtle errors.