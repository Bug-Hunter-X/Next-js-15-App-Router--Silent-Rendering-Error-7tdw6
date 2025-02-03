```javascript
// pages/index.js
export default function Home() {
  try {
    // Your rendering logic here
    return (
      <div>
        <h1>Welcome to my Next.js app</h1>
        <p>This is a paragraph of text.</p>
      </div>
    );
  } catch (error) {
    console.error('Error during rendering:', error);
    return (
      <div>
        <h1>An error occurred</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}
```