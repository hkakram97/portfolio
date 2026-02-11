export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hamza Akram. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
