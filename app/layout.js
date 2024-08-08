import "./ui/fonts";
import "./ui/global.css";
import "./ui/home.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        
      </body>
    </html>
  );
}
