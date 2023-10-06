import NavBar from "@/components/NavBar";
import GenerateSoundView from "./views/GenerateSoundView";

/**
 * The main entry point component for the application.
 * It renders the GenerateSoundView component.
 */
export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <NavBar />
      {/* Render the GenerateSoundView component */}
      <GenerateSoundView />
    </main>
  );
}
