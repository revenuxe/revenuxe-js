export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <p className="text-sm text-muted-foreground mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>
    </div>
  );
}

