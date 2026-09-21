Use Next.js (App Router) as the default framework.

Always prioritize SEO-friendly rendering using Server Side Rendering (SSR) or Static Site Generation (SSG). Avoid client-side rendering unless strictly necessary.

Every page must include:
- a unique title
- a unique meta description


Use proper heading hierarchy:
- only one H1 per page
- H2 and H3 structured correctly

Optimize all content for SEO and ensure it is indexable.

Follow clean code principles:
- Apply KISS (Keep It Simple, Stupid)
- Avoid overengineering
- Use clear and descriptive naming
- Keep components small and focused (single responsibility)

Use React functional components only.
Use Server Components by default.
Avoid components longer than 150 lines.

Ensure security best practices:
- Never expose API keys
- Use environment variables
- Validate and sanitize user inputs
- Avoid dangerouslySetInnerHTML

Structure the project as:

/src
  /components
  /app
  /layouts
  /hooks
  /services
  /utils
  /styles

Optimize performance:
- Use optimized images
- Implement lazy loading
- Avoid unnecessary JavaScript

Prepare the project for future scalability:
- booking system
- e-commerce
- authentication

Separate business logic from UI.

Always prioritize:
1. SEO
2. Simplicity
3. Scalability

Before generating any code:
- Think about SEO impact
- Avoid unnecessary complexity
- Ensure maintainability